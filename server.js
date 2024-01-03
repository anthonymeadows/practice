import { Pool } from 'pg';
import express from 'express';
import dotenv from 'dotenv';

const { Pool } = pg;
dotenv.config();
const app = express();
const expressport = process.env.PORT || 8000;
const connectionString = process.env.DATABASE_URL;


const pool = new Pool ({

})

app.listen(3000, () =>
  console.log('Listening on port 3000...'),
);