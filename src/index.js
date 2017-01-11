import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

//This renders the App Component to a location with ID of root in our view file.
ReactDom.render(
    <App  />,
    document.getElementById('root')
);

//Removing component from the DOM and rendering new element
// setTimeout(() => {
//   ReactDom.render(
//     <h2>........</h2>,
//     document.getElementById('root')
//   );
//
// }, 4000);
