let axios = require('axios')
let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

mongoose.connect("mongodb+srv://MinhTrinh:Minhkien@cluster0-zwleo.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true
}).then(() => console.log("Atlas Database Connected Successfully"))
  .catch(err => console.log(err));

let accountSchema = require('./models/Account');

const app = express();
app.use(express.json()); // Make sure it comes back as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
const path = require('path');

app.post('/create-account', async (req, res, next) => {
  // Adds to Atlas
  // const account = new account(req.body);
  const account = new accountSchema({
    Email: "tminh.us@gmail.com",
    Password: "New!"
  });

  try {
    await account.save();
    res.send(account);
    console.log('Successfully created new account:')
    console.log(account)
  } catch (err) {
    console.log('Error when creating new account')
    console.log(err)
    res.status(500).send(err);
  }
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})
