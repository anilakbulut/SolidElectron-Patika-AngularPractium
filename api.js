const client = require('./connection.js')
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());


app.listen(3300, () => {
    console.log("Server is now listening at port 3000");
})

client.connect();


app.get('/product', (req, res) => {
    client.query(`Select * from products`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users', (req, res) => {
    client.query(`Select * from users`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/login', (req, res) => {
    const user = req.body;
    client.query(`Select * from users where users.user_email = '${user.user_email}'`, (err, result) => {
        if (!err) { 
            res.send(result.rows);
        }

    });
    client.end;
})

app.get('/users/:id', (req, res) => {

    client.query(`Select * from users where user_id=${req.params.id}`, (err, result) => {
        if (!err) {
           
            res.send(result.rows);
        }
        else {
            res.status(400).json({
                message: 'asdads',
                error: err
            });
        }
    });
    client.end;
})

app.post('/users', (req, res) => {
    const user = req.body;
    console.log(user)
    if (user.user_name == "" || user.user_surname == "" || user.user_email == "" || user.user_password == "" ||
        user.user_address == "") {
        res.status(500).json({
            message: 'asdads',
            error: err
        });
    }
    else {
        let insertQuery = `insert into users(user_name, user_surname, user_email,user_password,user_address) 
        values('${user.user_name}', '${user.user_surname}', 
        '${user.user_email}','${user.user_password}','${user.user_address}')`

        client.query(insertQuery, (err, result) => {
            if (!err) {
                res.send('Insertion was successful')
            }
            else {
                res.status(400).json({
                    message: 'asdads',
                    error: err
                });
            }
        })
    }

    client.end;
})

app.put('/users/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    let user = req.body;
    let updateQuery = `update users
                       set user_name = '${user.user_name}',
                       user_surname = '${user.user_surname}',
                       user_email = '${user.user_email}',
                       user_password = '${user.user_password}',
                       user_address = '${user.user_address}'
                       where user_id = ${user.user_id}`

    client.query(updateQuery, (err, result) => {
        if (!err) {
            res.send('Update was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})

app.delete('/users/:id', (req, res) => {
    let insertQuery = `delete from users where user_id=${req.params.id}`

    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('Deletion was successful')
        }
        else { console.log(err.message) }
    })
    client.end;
})