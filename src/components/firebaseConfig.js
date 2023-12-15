import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC_AxXmk2kxsbhBq1fDWAqvGnKo0JnzDhA",
  authDomain: "keeper-app-1d039.firebaseapp.com",
  projectId: "keeper-app-1d039",
  appId: "832027118818-se3h2p6kglvb2kd58s7l6pn6728c97qu.apps.googleusercontent.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase auth object
const auth = getAuth(app);

export { auth, app };