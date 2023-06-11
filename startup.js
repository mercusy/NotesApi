const sqlite3  = require('sqlite3') 

const sql = sqlite3

const db = new sql.Database('./database.db')

db.run(`CREATE TABLE IF NOT EXISTS notes (
    id        INTEGER PRIMARY KEY AUTOINCREMENT,
    title     TEXT,
    content   TEXT,
    cardcolor INTEGER DEFAULT (2131034112) 
);
`)
