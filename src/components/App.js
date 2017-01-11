import React from 'react';
import Header from './Header';

//This Creates the App Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
    };
  }
  //This suggests the component Mounted to the DOM
  componentDidMount(){
  }
  //This suggests the component is about to be unmounted from the DOM
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        <div>
          { this.state.test }
        </div>
      </div>
    );
  }
}

export default App;
