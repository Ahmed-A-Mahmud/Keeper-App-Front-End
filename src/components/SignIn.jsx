import React from 'react';
import firebase from './firebaseConfig';

export function SignInWithGoogle() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
      // User signed in
    }).catch((error) => {
      console.error("Error signing in with Google:", error);
    });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}
