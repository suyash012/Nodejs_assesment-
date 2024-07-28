const admin = require('firebase-admin');
const dotenv = require('dotenv');
dotenv.config();
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://my-project-ba2a6-default-rtdb.firebaseio.com/"
});

module.exports = admin;
