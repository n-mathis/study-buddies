import firebase from 'react-native-firebase';

// import * as React from 'react';
// import App from '../../index';
// import firebase from '@react-native-firebase/app';
// import Auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBIhbo33NoJIpnbeVIc5CU17T-02ss2zWQ',
  authDomain: 'studybuddies-fcd14.firebaseapp.com',
  databaseURL: 'https://studybuddies-fcd14.firebaseio.com',
  projectId: 'studybuddies-fcd14',
  storageBucket: 'studybuddies-fcd14.appspot.com',
  messagingSenderId: '596698457907',
  appId: '1:596698457907:web:e324c9c60e94b395470046',
  measurementId: 'G-88KMFLDKDV',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

this.database = firebase.database();
// const app = firebase.initializeApp(firebaseConfig);
// export const db = app.database();
