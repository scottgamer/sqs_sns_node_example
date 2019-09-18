const Router = require('express');
const router = Router();

router.get('/hello', (req, res) => {
  res.status(200).send('Hello');
});

module.exports = router;