import React from 'react';
import ReactDom from 'react-dom';

//This Creates the App Component
const App = (props) => {
  return (
        <h2 className="text-center">
            { props.headerMessage }
        </h2>
  );
};

//This is the Props validation
App.propTypes = {
  headerMessage: React.PropTypes.string
};

//This allows us to implement default values
App.defaultProps = {
  headerMessage: 'Hello!'
};


//This renders the App Component to a location with ID of root in our view file.
ReactDom.render(
    <App  />,
    document.getElementById('root')
);
