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
  res.send({contests: contests,
  });
});

//To use this route, we must export it...Or use module.exports = router;
export default router;
