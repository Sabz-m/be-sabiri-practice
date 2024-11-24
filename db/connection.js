const { pool } = require("pg");

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

console.log(pool);
