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
    console.log(req.body);
    try {
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error executing database query: ', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
});

app.listen(expressport, () =>
    console.log(`Listening on port ${expressport}....`),
);
