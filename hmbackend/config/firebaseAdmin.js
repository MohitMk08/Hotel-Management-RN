const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../firebase/serviceAccountKey.json");

initializeApp({
  credential: cert(serviceAccount),
});
