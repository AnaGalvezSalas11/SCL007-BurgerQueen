  // Initialize Firebase
  import * as firebase from 'firebase';


  let config = {
    apiKey: "AIzaSyB6PRmXHWDcpJReITg2CfPambVUzSSoJzI",
    authDomain: "burguer-queen-71d9d.firebaseapp.com",
    databaseURL: "https://burguer-queen-71d9d.firebaseio.com",
    projectId: "burguer-queen-71d9d",
    storageBucket: "burguer-queen-71d9d.appspot.com",
    messagingSenderId: "1067443614641"
  };
  firebase.initializeApp(config);


export const database = firebase.database();