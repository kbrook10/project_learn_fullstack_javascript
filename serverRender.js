import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

//Fetches the data from the API...
import config from './config';
import fetch from 'node-fetch';
// import axios from 'axios';

//This reads the React code and renders everything to a string...

// const serverRender = () =>
//   axios.get(`${config.serverUrl}/api/contests`)
//     .then(resp => {
//       return {
//         initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />),
//         initialData: resp.data
//       };
//     });

const serverRender = ()=>
    fetch(`${config.serverUrl}/api/contests`)
      .then(resp => resp.json())
      .then(resp => {
        return {
          initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.contests} />),
          initialData: resp
        };
      });

export default serverRender;
