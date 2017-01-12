import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
import data from '../testData.json';

//This Creates the App Component
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contests',
      contests: [],
    };
  }
  //This suggests the component Mounted to the DOM
  componentDidMount(){
    this.setState({
      contests: data.contests,
    });
  }
  //This suggests the component is about to be unmounted from the DOM
  componentWillUnmount() {
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
