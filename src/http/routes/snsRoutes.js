import { Router } from 'express';
import SnsController from '../controllers/snsController';

const router = Router();

const snsController = new SnsController();

router.get('/hello', (req, res) => {
  res.status(200).send('Hello');
});

router.get('/topics', snsController.listTopics);

export default router;