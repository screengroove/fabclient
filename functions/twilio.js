const twilio = require('twilio');

const accountSid = 'ACfd57bcd645efe0e415950cf38e73114f';
const authToken = 'b73c28237cbe756ab012abe16476a96c';

module.exports = new twilio.Twilio(accountSid, authToken);