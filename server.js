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
})

app.use(express.static("public"));
app.use(express.json());

app.listen(expressport, () =>
  console.log(`Listening on port ${expressport}....`),
);