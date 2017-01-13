//<----------Need to figure out why this does not work--------->
// import fetch from 'node-fetch';
//
// export const fetchContest = contestId => {
//   return fetch(`/api/contests/${contestId}`)
//     .then(resp => resp.json())
//     .then(resp => console.log(resp));
// };


import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
    .then(resp => resp.data);
};
