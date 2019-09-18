const { config, SNS, SharedIniFileCredentials } = require('aws-sdk');

const profile = process.env.SNS_PROFILE;
const credentials = new SharedIniFileCredentials({ profile });

config.update({ region: 'us-east-2' });
config.credentials = credentials;

const apiVersion = '2010-03-31';
const simpleNotificationService = new SNS({ apiVersion });

// publish(message, topicArn) {
//   const params = {
//     Message: message,
//     TopicArn: topicArn
//   };
//   const publishTextPromise = this.SimpleNotificationService
//     .publish(params)
//     .promise();

//   publishTextPromise
//     .then(data => {
//       console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
//       console.log('MessageID is' + data.MessageId);
//     })
//     .catch(err =>
//       console.error(err, err.stack));
// }

const listSubscriptions = async (topicArn) => {
  const subslistPromise = simpleNotificationService
    .listSubscriptionsByTopic({ TopicArn: topicArn })
    .promise();

  const subscriptions = await subslistPromise;
  return subscriptions;
};

// createTopic(name) {
//   const createTopicPromise = this.SimpleNotificationService
//     .createTopic({ Name: name })
//     .promise();

//   createTopicPromise
//     .then(data =>
//       console.log('Topic ARN is' + data.TopicArn))
//     .catch(err =>
//       console.error(err, err.stack));
// }

// deleteTopic(topicArn) {
//   const deleteTopicPromise = this.SimpleNotificationService
//     .deleteTopic({ TopicArn: topicArn })
//     .promise();

//   deleteTopicPromise
//     .then(data =>
//       console.log('Topic Deleted', data))
//     .catch(err =>
//       console.error(err, err.stack));
// }

const getTopicAttributes = async (topicArn) => {
  const getTopicAttribsPromise = simpleNotificationService
    .getTopicAttributes({ TopicArn: topicArn })
    .promise();

  const topicAttributes = await getTopicAttribsPromise;
  return topicAttributes;
};

// setTopicAttributes() {
//   const params = {
//     AttributeName: 'DisplayName', /* required */
//     TopicArn: 'arn:aws:sns:us-east-2:817439561489:NODE_TOPIC', /* required */
//     AttributeValue: 'NODE_TOPIC_CHANGED'
//   };

//   const setTopicAttribsPromise = this.SimpleNotificationService
//     .setTopicAttributes(params)
//     .promise();

//   setTopicAttribsPromise
//     .then(data =>
//       console.log(data))
//     .catch(err =>
//       console.error(err, err.stack));
// }

const listTopics = async () => {
  const listTopicsPromise = simpleNotificationService
    .listTopics({})
    .promise();

  const topics = await listTopicsPromise;
  return topics.Topics;
};

module.exports = {
  listSubscriptions,
  getTopicAttributes,
  listTopics
};