import React from 'react';
import ReactDom from 'react-dom';


const Header = ({ message }) => {
  return (
    <h2 className="Header text-center">
      { message }
    </h2>
  );
};

//This Creates the App Component
const App = () => {
  return (
    <div className="App">
      <Header message="Naming Contests!" />
      <div>
        ...
      </div>
    </div>
  );
};

//This is the Props validation
Header.propTypes = {
  message: React.PropTypes.string
};

//This allows us to implement default values
Header.defaultProps = {
  message: 'Hello!'
};

//This renders the App Component to a location with ID of root in our view file.
ReactDom.render(
    <App  />,
    document.getElementById('root')
);
