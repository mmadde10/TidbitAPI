var serviceAccount = require('../../secure/serviceAccountKey');
const admin = require('firebase-admin');
var db = admin.database();


module.exports = function initFirebase(){
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://tidbit-f2667.firebaseio.com'
    });
    

var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});
}
