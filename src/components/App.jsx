import React, { useState, useEffect } from "react";
import firebase from './firebaseConfig';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { SignInWithGoogle } from './SignIn';

function App() {
  const [notes, setNotes] = useState([]);
  const [user, setUser] = useState(null);

  // Update with Heroku app's URL
  const baseURL = "https://ahmed-keeper-app-268db86f94df.herokuapp.com/api/notes";

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        fetch(`${baseURL}?userId=${user.uid}`)
        .then((response) => response.json())
        .then((data) => setNotes(data))
        .catch((error) => console.error("Error fetching notes:", error));
      }
    });
  }, []);

  if (!user) {
    return (
      <div>
        <Header />
        <SignInWithGoogle />
        <Footer />
      </div>
    );
  }

  // Add a new note
  function addNote(newNote) {
    newNote.userId = user.uid; // Include the user's ID
  
    fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newNote),
    })
    .then(() => {
      setNotes((prevNotes) => [...prevNotes, newNote]);
    })
    .catch((error) => console.error("Error adding note:", error));
  }

  // Delete a note
  function deleteNote(id) {
    fetch(`${baseURL}/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.uid }), // Include the user's ID
    })
    .then(() => {
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== id));
    })
    .catch((error) => console.error("Error deleting note:", error));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={noteItem._id || index}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
