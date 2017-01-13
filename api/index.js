import express from 'express';
import data from '../src/testData';
//Create the Route object...
const router = express.Router();

//Create variable to convert array to object...This allows us to reuse...
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
},{});

//This is an API that requests the contests URL and response with the testData.json file...
router.get('/contests', (req, res) => {
  res.send({contests: contests});
});

//Create route to handle the individual contest URL paths
router.get('/contests/:contestId', (req, res) => {
  //req.params.contestId
  let contest = contests[req.params.contestId];
  contest.description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  res.send(contest);
});

//To use this route, we must export it...Or use module.exports = router;
export default router;
