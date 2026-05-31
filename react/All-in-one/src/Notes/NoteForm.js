import "./NoteForm.css";
import React, { useState } from "react";

const NoteForm = (props) => {
  const [enterNoteTitle, setEnterNoteTitle] = useState("");
  const [enterNote, setEnterNote] = useState("");

  const noteInputTitleChangeHandler = (event) => {
    setEnterNoteTitle(event.target.value);
    // console.log(event.target.value);
  };
  const noteInputNoteChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnterNote(event.target.value);
  };

  const RetrieveNoteData = (event) => {
    event.preventDefault();
    const noteData = {
      title: enterNoteTitle,
      note: enterNote,
    };

    props.retrieveDatabase(noteData);

    // console.log(noteData);

    setEnterNote("");
    setEnterNoteTitle("");
  };
  return (
    <div>
      <form onSubmit={RetrieveNoteData} className="note__form">
        <div className="note__title-box flex u-margin-bottom-sm">
          <label for="user__title" className="note__label">
            Title:
          </label>
          <input
            onChange={noteInputTitleChangeHandler}
            type="text"
            value={enterNoteTitle}
            id="user__title"
            className="note__input"
            placeholder="Note Title..."
          />
        </div>
        <div className="note__description-box flex u-margin-bottom-sm">
          <label for="user__desc" className="note__label">
            Note:{" "}
          </label>
          <textarea
            onChange={noteInputNoteChangeHandler}
            className="note-text"
            placeholder="your Note..."
            value={enterNote}
          ></textarea>
        </div>

        <button href="#" className="btn btn-blue" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default NoteForm;
