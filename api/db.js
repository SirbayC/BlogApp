import mysql from "mysql"

export const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'123456789Minu',
    database:'blog'
})

db.connect(err => {
    if(err) console.log(err)
    else console.log("Connected to database")
})
