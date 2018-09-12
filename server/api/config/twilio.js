const twilio = require('twilio');
const credentials = require('./twilio_config');

module.exports = twilio(credentials.accountSid,credentials.authToken);

