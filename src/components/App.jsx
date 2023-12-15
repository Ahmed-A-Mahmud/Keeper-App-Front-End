import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  // Update with Heroku app's URL
  const baseURL = "https://ahmed-keeper-app-268db86f94df.herokuapp.com/api/notes";

  // Fetch notes from the backend
  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((error) => console.error("Error fetching notes:", error));
  }, []);

  // Add a new note
  function addNote(newNote) {
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
            key={noteItem._id || index} // Use _id if available
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
