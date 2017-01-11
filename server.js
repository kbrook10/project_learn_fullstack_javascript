//<------- Importing libraries and modules ------------------->
//<----------------------------------------------------------->
//Import config module for the port...
import config from './config';
//Import the express library to create a server...
import express from 'express';
//Import the API router
import apiRouter from './api';
//Invoke express variable as a function to use...
const server = express();

//<------- Define tool to render JS Components --------------->
//<----------------------------------------------------------->
server.set('view engine', 'ejs');

//<-------------- Creating Routes ---------------------------->
//<----------------------------------------------------------->

//Express handles server side routing as well...It exposes an API to listen to certain routes...
//Creating Routes
server.get('/', (req, res) => {
  res.render('index', {
    content: 'Hello Express and <em>EJS</em>!'
  });
});

//<------------------ Middle Ware ---------------------------->
//<----------------------------------------------------------->
//Use apiRouter like middle ware
server.use('/api', apiRouter);
//This allows use to not worry about the about.html url here or using the fs module...Just move about.html to public...
server.use(express.static('public'));


//<-------- Defines port server to listen to------------------>
//<----------------------------------------------------------->

server.listen(config.port, () => {
  console.info('Express listening on port', config.port);
});
