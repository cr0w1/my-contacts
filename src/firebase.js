import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD2tnFlgAe9moI2rtt5wJhJRCdSXkOr_Ug",
    authDomain: "my-contacts-5998e.firebaseapp.com",
    databaseURL: "https://my-contacts-5998e.firebaseio.com",
    projectId: "my-contacts-5998e",
    storageBucket: "my-contacts-5998e.appspot.com",
    messagingSenderId: "558029201915",
    appId: "1:558029201915:web:1e409fd6255f27c3d4eb5e",
    measurementId: "G-ZPRSY1ZC4N"
}

firebase.initializeApp(config);

export default firebase;