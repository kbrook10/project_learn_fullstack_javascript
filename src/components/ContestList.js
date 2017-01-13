import React from 'react';
import ContestPreview from './ContestPreview';


const ContestList = ({ contests }) => (
  <div className="contestList">
      {contests.map(contest =>
        <ContestPreview key={contest.id} {...contest} />
      )}
  </div>
);

//Define property types
ContestList.propTypes = {
  contests: React.PropTypes.array
};

export default ContestList;
