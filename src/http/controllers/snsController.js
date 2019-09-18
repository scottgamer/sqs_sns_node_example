const snsService = require('../services/snsService');

const listTopics = async (req, res) => {
  try {
    const response = await snsService.listTopics();
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(error.statusCode).send(error.message);
    // next(error);
  }
};

module.exports = {
  listTopics
};