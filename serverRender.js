import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';

//Fetches the data from the API...
import config from './config';
import axios from 'axios';

//This reads the React code and renders everything to a string...

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(<App initialContests={resp.data.contests} />),
        initialData: resp.data
      };
    });

export default serverRender;
