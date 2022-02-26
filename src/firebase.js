import firebase from 'firebase/app';
import 'firebase/auth';

var  firebaseConfig={
    apiKey: "AIzaSyDMpCPRAwtiWYtjLUVC33q0H1H_hyijpY4",
    authDomain: "mernstack-285c4.firebaseapp.com",
    projectId: "mernstack-285c4",
    storageBucket: "mernstack-285c4.appspot.com",
    messagingSenderId: "623349715244",
    appId: "1:623349715244:web:08b0e0f640742fbcf01c89"
  }

firebase.initializeApp(firebaseConfig);
export default firebase;