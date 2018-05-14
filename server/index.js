require('dotenv').config();
const   express = require('express'),
        bodyParser = require('body-parser'),
        massive = require('massive'),
        ctrl = require('./ctrl')
        

//.env file 
const {
        CONNECTION_STRING,
        SERVER_PORT,
        HOST_NAME,
        DATABASE,
        USER,
        DB_PORT,
        PASSWORD
} = process.env

//activated express
const app = express();

massive(CONNECTION_STRING).then (instance => {
        app.set('db', instance)
        console.log('massive running')
})

app.use(bodyParser.json());

// gets all products
app.get('/api/getshelves/:shelfnum', ctrl.getItems)

app.get('/api/products/:shelf/:bin', ctrl.getBin)

app.put('/api/products/:shelf/:bin', ctrl.addItem)

app.put('/api/products/:id', ctrl.delItem)

// app.put('/api/products/:shelfnum/:id', ctrl.editItem)


// app.get('/api/bincheck', ctrl.getBins)




app.listen(SERVER_PORT, ()=> console.log(`High Hats on ${SERVER_PORT}'s`))

