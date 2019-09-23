const snsService = require('../services/snsService');

const publishMessage = async (req, res) => {
  try {
    const topicId = req.params.id;
    const message = req.body.message;
    const response = await snsService.publish(message, topicId);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode).send(error.message);
  }
};

const listSubscriptions = async (req, res) => {
  try {
    const topicId = req.params.id;
    const response = await snsService.listSubscriptions(topicId);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode).send(error.message);
  }
};

const getTopicAttributes = async (req, res) => {
  try {
    const topicId = req.params.id;
    const response = await snsService.getTopicAttributes(topicId);
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode).send(error.message);
  }
};

const listTopics = async (req, res) => {
  try {
    const response = await snsService.listTopics();
    res.status(200).send(response);
  } catch (error) {
    res.status(error.statusCode).send(error.message);
    // next(error);
  }
};

module.exports = {
  publishMessage,
  listSubscriptions,
  getTopicAttributes,
  listTopics
};