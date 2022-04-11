const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://simaarijit:k9YowvNSZm3CfpFV@cluster0.u6fy9.mongodb.net/simaarijit484", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log("mongo DB is connected"))
    .catch(err => console.log(err))






app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});