import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @toDo

const firebaseConfig = {
  apiKey: 'AIzaSyD2czpcD9PIYh7oxjGZBQ6UneIAtQANTd8',
  authDomain: 'ttp-fs20180728.firebaseapp.com',
  databaseURL: 'https://ttp-fs20180728.firebaseio.com',
  projectId: 'ttp-fs20180728',
  storageBucket: 'ttp-fs20180728.appspot.com',
  messagingSenderId: '158621854382'
};

// React-Redux-Firbase Config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firestore
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

// ReactReduxFirebase enhancer
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Initial State
const initialState = {};

// Store
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
