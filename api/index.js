import express from 'express';
//Create the Route object...
const router = express.Router();

//This is an API call that we send a JSON object file to...
router.get('/', (req, res) => {
  res.send( {data: [] } );
});

//To use this route, we must export it...Or use module.exports = router;
export default router;
