import firebase from 'firebase';  

var config = {
    apiKey: "AIzaSyB-ywU1pkPHmvWC9f_eW6RQjRMCyr-ZoTY",
    authDomain: "contract-database.firebaseapp.com",
    databaseURL: "https://contract-database.firebaseio.com",
    projectId: "contract-database",
    storageBucket: "contract-database.appspot.com",
    messagingSenderId: "205529720817"
  };
   firebase.initializeApp(config);

   export default firebase; 