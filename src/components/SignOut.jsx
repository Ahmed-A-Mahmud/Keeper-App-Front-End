import React from 'react';
import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';

const SignOut = () => {
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out:", error);
    });
  };

  return (
    <button onClick={handleSignOut} style={signOutButtonStyle}>
      Sign Out
    </button>
  );
};

const signOutButtonStyle = {
  backgroundColor: 'white',
  color: '#FFD700', // Adjust the color to match your banner's yellow
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  position: 'absolute',
  top: '20px',
  right: '20px'
};

export default SignOut;
