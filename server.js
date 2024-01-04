import pg from 'pg';
import express from 'express';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();
const app = express();
const expressport = process.env.PORT || 8000;
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString,
});

app.use(express.static("public"));
app.use(express.json());

app.delete('/delete', async (req, res) => {
    console.log('Received DELETE /delete');
    try {
        let chef = req.body.chef
        await pool.query('DELETE FROM chefs WHERE username = $1', [chef])
        let chefsQuery = await pool.query('SELECT username FROM chefs')
        let chefsList = chefsQuery.rows
        res.status(200).json({User: chef, Deleted: true, listofchefs: chefsList})
    } catch (error) {
        console.error('Error executing database query: ', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
})

app.get('/read', async (req, res) => {
    console.log('Received GET /read');
    try {
        let foodsTable = await pool.query('SELECT * FROM foods');
        let data = foodsTable.rows;
        res.status(200).json({ data });
    } catch (error) {
        console.error('Error executing database query: ', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.post('/createUser', async (req, res) => {
    console.log('Received POST /create');
    let { name } = req.body;
    try {
        await pool.query('INSERT INTO chefs (username) VALUES ($1)', [name])
        let chefsQuery = await pool.query('SELECT username FROM chefs')
        let chefsList = chefsQuery.rows
        res.status(200).json({ success: true, chef: name, listofchefs: chefsList});
    } catch (error) {
        console.error('Error executing database query: ', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.put('/updateChefName', async (req, res) => {
    try {
        let { oldName, newName } = req.body;
        let chefsQuery = await pool.query('SELECT username FROM chefs');
        let chefsList = chefsQuery.rows;
        await pool.query('UPDATE chefs SET username = $1 WHERE username = $2', [newName, oldName])
        res.status(200).json({ success: true, chef: newName, listofchefs: chefsList});
        //await pool.query('UPDATE chefs SET username = $1 WHERE username = $2', [])
    } catch (error) {
        console.error('Error executing database query: ', error);
        res.status(500).json({ success: false, error: 'Internal server error'})
    }
});

app.listen(expressport, () =>
    console.log(`Listening on port ${expressport}....`),
);
