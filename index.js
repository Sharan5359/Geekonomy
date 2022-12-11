const express = require('express')
const app = express();
const mongoose = require('mongoose')
const dbConfig = require('./configs/db.config')
const serverConfig = require('./configs/server.config')
const bodyParser =require('body-parser')
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});

app.use("/login", express.static(path.join(__dirname, 'frontEnd')));
 app.get('/login*', (req, res) => {
	res.sendFile(`${__dirname}/frontEnd/index.html`);
 })

mongoose.connect(dbConfig.DATABASE);
const db = mongoose.connection;

db.on('error', ()=>{
    console.log('Error while connecting to MongoDB');
});
db.once("open", ()=>{
    console.log('Connected to MongoDB')
    
})


require('./route/login.route')(app);
app.listen(serverConfig.PORT, ()=> {
    console.log("Server is running on the Port number :", serverConfig.PORT)
});