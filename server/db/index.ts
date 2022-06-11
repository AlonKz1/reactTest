const mysql2 = require("mysql2/promise");
import dotenv from "dotenv"

dotenv.config({ path: "../.env" })

const {
  MYSQL_DB_HOST: host,
  MYSQL_DB_PORT: port,
  MYSQL_DB_USER: user,
  MYSQL_DB_PASS: password,
  MYSQL_DB_SCHEMA: database,
} = process.env;

let connection: any = null;

async function initDB() {
  console.log("Database initilization Start");
  try {
    connection = await mysql2.createConnection({
      host,
      port,
      user,
      password,
      database,
    });
  } catch (error) {
    console.log(error);
    console.log("Application shut down due to MySQL connection error");
    process.exit(1);
  }
}

function getConnection() {
    console.log(connection)
  return connection;
}

export { initDB, getConnection };