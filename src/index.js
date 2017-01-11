import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

//This renders the App Component to a location with ID of root in our view file.
ReactDom.render(
    <App  />,
    document.getElementById('root')
);
