const admin=require('./firebaseAdmin');
const db =admin.database();

const smsData = {
    sms1: {
      message: "Payment received",
      amount: 100,
      timestamp: 1658323200000
    },
    sms2: {
      message: "Payment sent",
      amount: 50,
      timestamp: 1658409600000
    },
    sms3: {
      message: "Payment received",
      amount: 200,
      timestamp: 1658496000000
    }
  };
  const dbRef = db.ref('sms');
  dbRef.set(smsData,(error)=>{
    if(error){
      console.log("Data could not be saved." + error);}
  });