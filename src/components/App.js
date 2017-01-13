import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


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
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
