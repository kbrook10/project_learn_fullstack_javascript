import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

//Fetches the data from the API...
import axios from 'axios';
import config from './config';

//This reads the React code and renders everything to a string...

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />);
    });

export default serverRender;
