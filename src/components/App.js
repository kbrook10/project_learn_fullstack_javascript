import React from 'react';
import Header from './Header';
import ContestList from './ContestList';


//This Creates the App Component
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  };
  //This suggests the component Mounted to the DOM
  componentDidMount(){

  }
  //This suggests the component is about to be unmounted from the DOM
  componentWillUnmount() {
    //clean out times and listeners here...
  }

  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        <ContestList contests={ this.state.contests } />
      </div>
    );
  }
}

//Define property types
App.propTypes = {
  initialContests: React.PropTypes.array
};

export default App;
