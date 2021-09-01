const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "cab_booking"
});

app.post('/create', (req, resp) => {
    const Fname = req.body.Fname
    const Lname =req.body.Lname
    const mail = req.body.mail
    const number = req.body.number
    const address = req.body.address

    db.query('INSERT INTO passenger (Fname,Lname,mail,number,address) VALUES (?,?,?,?,?)', [Fname,Lname, mail, number, address], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            resp.send(result);
        }
    });
});
app.get("/cab_booking", (req, res) => {
    db.query('SELECT * FROM passenger WHERE passengerId=(SELECT MAX(passengerId) FROM passenger)', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post('/rideDetails', (req, resp) => {
    const pick = req.body.pick
    const dropOff = req.body.dropOff
    const createdAt = req.body.createdAt
    const time = req.body.time

    db.query('INSERT INTO ridedetails (pick,dropOff,createdAt,time) VALUES (?,?,?,?)', [pick, dropOff, createdAt, time], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            resp.send(result);
        }
    });
});
app.get("/ride", (req, res) => {
    db.query('SELECT * FROM ridedetails WHERE rideId=(SELECT MAX(rideId) FROM ridedetails)', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
});

app.get("/hyundai", (req, res) => {
    db.query(' SELECT * FROM `cablist`,`cabdetails` WHERE cabdetails.selectedCab=cablist.selectedcab AND cablist.cabID=245', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
});

app.get("/baleno", (req, res) => {
    db.query('SELECT * FROM `cablist`,`cabdetails` WHERE cabdetails.selectedCab=cablist.selectedcab AND cablist.cabID=125', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
});

app.get("/thar", (req, res) => {
    db.query('SELECT * FROM `cablist`,`cabdetails` WHERE cabdetails.selectedCab=cablist.selectedcab AND cablist.cabID=21', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
});

app.get("/hector", (req, res) => {
    db.query('SELECT * FROM `cablist`,`cabdetails` WHERE cabdetails.selectedCab=cablist.selectedcab AND cablist.cabID=40', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
            console.log(result);
        }
    })
});

app.post('/paymentDetails', (req, resp) => {
    const cardNo = req.body.cardNo
    const Name = req.body.Name
    const validityDate = req.body.validityDate
    const cvv=req.body.cvv
    db.query('INSERT INTO paymentdetails (Name,validityDate,cardNo,cvv) VALUES (?,?,?,?)', [Name , validityDate, cardNo,cvv], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            resp.send(result);
        }
    });
});
app.get("/payment", (req, res) => {
    db.query('SELECT * FROM paymentdetails WHERE paymentId=(SELECT MAX(paymentId) FROM paymentdetails)', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.post('/cabDetails', (req, resp) => {
    const selectedCab = req.body.selectedCab
    db.query('INSERT INTO cabdetails (selectedCab) VALUES (?)', [selectedCab], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            resp.send(result);
        }
    });
});
app.get("/cab", (req, res) => {
    db.query('SELECT * FROM cabdetails WHERE cabId=(SELECT MAX(cabCount) FROM cabdetails) ', (err, result, fields) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})