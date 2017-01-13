import express from 'express';
import data from '../src/testData';
//Create the Route object...
const router = express.Router();

//This is an API that requests the contests URL and response with the testData.json file...
router.get('/contests', (req, res) => {
  res.send( {contests: data.contests } );
});

//To use this route, we must export it...Or use module.exports = router;
export default router;
