const functions = require("firebase-functions");
const express = require("express");
const admin = require("./firebaseAdmin");

const app = express();
app.use(express.json());

app.get("/sumAmounts", async (req, res) => {
  const db = admin.database();
  const ref = db.ref("sms");
  const snapshot = await ref.once("value");
  const data = snapshot.val();
  let totalAmount = 0;

  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      totalAmount += data[key].amount;
    }
  }

  res.json({totalAmount});
});

exports.api = functions.https.onRequest(app);
