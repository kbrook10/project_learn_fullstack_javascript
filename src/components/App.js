import React from 'react';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

//Create method to handle the backward navigation...
const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

//This Creates the App Component
class App extends React.Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests,
  };
  //This suggests the component Mounted to the DOM
  componentDidMount() {

  }
  //This suggests the component is about to be unmounted from the DOM
  componentWillUnmount() {
    //clean out times and listeners here...
  }
  //Function to fetch the contests...
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId},
      `/contest/${contestId}`
    );
    //Look up the contests here once provide url...
    //Location is this.state.contests[contestId]
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return <ContestList
      onContestClick={this.fetchContest}
      contests={ this.state.contests } />;
  }
  render() {
    return (
      <div className="App">
        <Header message={ this.state.pageHeader } />
        {this.currentContent()}
      </div>
    );
  }
}

//Define property types
App.propTypes = {
  initialContests: React.PropTypes.object,
};

export default App;
