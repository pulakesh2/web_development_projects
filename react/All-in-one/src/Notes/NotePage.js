import React, { useState } from "react";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";

import "./NotePage.css";

const DUMMY__NOTE = [
  // {
  //   title: "my life my rule",
  //   note: "I summarize this topic by one single quote, Like your life is your, If something happened then its your duty to fix it. Dont get distract by other oponions",
  // },
];

const NotePage = () => {
  const [note, setNoteData] = useState(DUMMY__NOTE);
  const retrieveNoteDatabase = (data) => {
    setNoteData([data, ...note]);
    // console.log(data);
  };
  return (
    <div className="note__container">
      <NoteForm retrieveDatabase={retrieveNoteDatabase} />
      <div className="note-grid grid-cols-4">
        {note.map((el) => (
          <NoteCard noteData={el} />
        ))}
      </div>
    </div>
  );
};

export default NotePage;
