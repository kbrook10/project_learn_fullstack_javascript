import React, { Component, PropTypes } from 'react';

class Contest extends Component {
  render() {
    return(
        <div className="Content">
          {this.props.description}
        </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired
};

export default Contest;
