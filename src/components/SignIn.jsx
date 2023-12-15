import React from 'react';
import { auth } from './firebaseConfig';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


export function SignInWithGoogle() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      // User signed in
    }).catch((error) => {
      console.error("Error signing in with Google:", error);
    });
  };

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  );
}
