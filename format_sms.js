const admin=require('./firebaseAdmin');
db =admin.database();
const moment = require('moment');
async function fetchAndFormatSMSData() {
    const smsRef = db.ref('sms');
    const formattedSmsRef = db.ref('formatted_sms');
  
    try {
      const snapshot = await smsRef.once('value');
      const smsData = snapshot.val();
  
      const formattedData = {};
      for (const [key, value] of Object.entries(smsData)) {
        formattedData[key] = {
          ...value,
          formattedTimestamp: moment(value.timestamp).format('YYYY-MM-DD HH:mm:ss')
        };
      }
  
      await formattedSmsRef.set(formattedData);
      console.log('Data formatted and saved successfully');
    } catch (error) {
      console.error('Error formatting and saving data:', error);
    }
  }
  
  // Call the function to fetch and format data
  fetchAndFormatSMSData();