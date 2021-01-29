let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
var cors = require('cors')
let app = express();

// Import routes
let apiRoutesSend = require('./Routes/send');
let apiRoutes = require("./Routes/dossier");
let apiRoutesFiche= require("./Routes/api-routes");
let apiRoutesQuestion= require("./Routes/question");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://salima:VotkPfAr9dHTj4E7@cluster0.clweo.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")



// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Use Api routes in the App
app.use('/api', apiRoutes);
app.use('/api2', apiRoutesFiche);
app.use('/add', apiRoutesQuestion);
app.use('/send',apiRoutesSend);
app.use(cors());


// Launch app to listen to specified port
app.listen(5000, function () {
    console.log("Running RestHub on port ");
});