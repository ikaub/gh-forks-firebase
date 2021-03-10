import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDl4CTrtu-6fDH4cUaT4wnLZ2-DTd-I2Qw',
  authDomain: 'gh-forks.firebaseapp.com',
  projectId: 'gh-forks',
  storageBucket: 'gh-forks.appspot.com',
  messagingSenderId: '869002135800',
  appId: '1:869002135800:web:f614c8b83738e9f614d30d',
  measurementId: 'G-BHMVWGNZB2',
  databaseURL: 'https://gh-forks-default-rtdb.firebaseio.com/',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const dbRef = firebase.database().ref('Favorites');

export default dbRef;
