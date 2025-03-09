import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

export const poolDB = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
});

poolDB.on('error', (err) => {
    console.error('Unexpected error on client database connection: ', err);
    process.exit(-1);
});

export default (text, params) => poolDB.query(text, params);