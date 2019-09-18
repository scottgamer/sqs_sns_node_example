const Router = require('express');
const snsController = require('../controllers/snsController');

const router = Router();

router.get('/hello', (req, res) => {
  res.status(200).send('Hello');
});

router.get('/topics', snsController.listTopics);

module.exports = router;