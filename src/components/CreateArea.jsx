import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [error, setError] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
    if (error) {
      // Reset error state if user starts typing again
      setError(false);
    }
  }

  function submitNote(event) {
    event.preventDefault();
    if (!note.title.trim() || !note.content.trim()) {
      setError(true);
      return;
    }
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder={error && !note.title.trim() ? "Enter a Title" : "Title"}
          className={error && !note.title.trim() ? "inputError" : ""}
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder={
            error && !note.content.trim() ? "Enter a Note" : "Take a note..."
          }
          rows="3"
          className={error && !note.content.trim() ? "textareaError" : ""}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
