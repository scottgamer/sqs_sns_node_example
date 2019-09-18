const SnsService = require('../services/snsService');

class SnsController {

  constructor() {
    this.snsService = new SnsService();
  }

  listTopics = async (req, res, next) => {
    try {
      const response = await this.snsService.listTopics();
      res.status(200).send(response);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = SnsController;