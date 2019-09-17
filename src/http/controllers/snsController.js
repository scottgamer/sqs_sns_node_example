import SnsService from '../services/snsService';

class SnsController {

  constructor() {
    this.snsService = new SnsService();
  }

  async listTopics(req, res, next) {
    try {
      const response = await this.snsService.listTopics();
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

}

export default SnsController;