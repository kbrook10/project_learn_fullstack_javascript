//<------- Importing libraries and modules ------------------->
//<----------------------------------------------------------->
//Import config module for the port...
import config from './config';
//Import the express library to create a server...
import express from 'express';
//Import the API router
import apiRouter from './api';
//Import sass module
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
//Invoke express variable as a function to use...
const server = express();

//<------- Define tool to render JS Components --------------->
//<----------------------------------------------------------->
server.set('view engine', 'ejs');


//<-------------- Importing ????? ---------------------------->
//<----------------------------------------------------------->
import serverRender from  './serverRender';


//<-------------- Creating Routes ---------------------------->
//<----------------------------------------------------------->

//Express handles server side routing as well...It exposes an API to listen to certain routes...
//Creating Routes
server.get('/', (req, res) => {
  serverRender()
    .then(({initialMarkup, initialData}) => {
      res.render('index', {
        initialMarkup,
        initialData
      });
    })
    .catch(console.error);
});

//<------------------ Middle Ware ---------------------------->
//<----------------------------------------------------------->
//Use apiRouter like middle ware
server.use('/api', apiRouter);
//This allows use to not worry about the about.html url here or using the fs module...Just move about.html to public...
server.use(express.static('public'));
server.use(express.static('sass'));
//Use the sass library to have Node convert scss to css, placing the final css file into the public folder
server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

//<---- Defines port and host for server to listen to--------->
//<----------------------------------------------------------->

server.listen(config.port, config.host, () => {
  console.info('Express listening on port', config.port);
});
