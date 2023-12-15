import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_AxXmk2kxsbhBq1fDWAqvGnKo0JnzDhA",
  authDomain: "keeper-app-1d039.firebaseapp.com",
  projectId: "keeper-app-1d039",
  // ... other config values if available ...
  appId: "832027118818-se3h2p6kglvb2kd58s7l6pn6728c97qu.apps.googleusercontent.com"
};

firebase.initializeApp(firebaseConfig);

export default firebase;