const Router = require('express');
const SnsController = require('../controllers/snsController');

const router = Router();

const snsController = new SnsController();

router.get('/hello', (req, res) => {
  res.status(200).send('Hello');
});

router.get('/topics', snsController.listTopics);

module.exports = router;