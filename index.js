let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

// Import routes
let apiRoutes = require("./Routes/dossier");
let apiRoutesfiche = require("./Routes/fichePatient");

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true});
var db = mongoose.connection;
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
// var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World'));

// Use Api routes in the App
app.use('/api', apiRoutes);
app.use('/api2', apiRoutesfiche);


// Launch app to listen to specified port
app.listen(8080, function () {
    console.log("Running on port");
});
