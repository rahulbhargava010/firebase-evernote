import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDcgPuevV465dcB40ODDZBl_AC80QHz5lg",
  authDomain: "react-evernote-clone-f6199.firebaseapp.com",
  databaseURL: "https://react-evernote-clone-f6199.firebaseio.com",
  projectId: "react-evernote-clone-f6199",
  storageBucket: "react-evernote-clone-f6199.appspot.com",
  messagingSenderId: "680889781702",
  appId: "1:680889781702:web:cdcea3ecca46f14d8176c7",
  measurementId: "G-GGVPECL5VP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
