const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

mongoose

  // .connect('mongodb://localhost:27017/herald', {
  .connect(
    'mongodb+srv://Amrit:awymNmlRx19VrXEJ@cluster0.xlzqn.mongodb.net/test?authSource=admin&replicaSet=atlas-7sc1fb-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('DB connection successful!'))
  .catch((err) => {
    console.log('failed to connect with database');
  });
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  // app.listen(4000, () => {
  console.log('server is up and running \n Port: ' + PORT);
});
