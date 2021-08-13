import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDHjk4nH4emkVe_c8jruFuMbfSCP2mb_O4",
    authDomain: "budget-app-6dbd6.firebaseapp.com",
    databaseURL: "https://budget-app-6dbd6-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "budget-app-6dbd6",
    storageBucket: "budget-app-6dbd6.appspot.com",
    messagingSenderId: "825947092121",
    appId: "1:825947092121:web:f3c977381105b237537408"
};

const fire = firebase.initializeApp(config);
export default fire;