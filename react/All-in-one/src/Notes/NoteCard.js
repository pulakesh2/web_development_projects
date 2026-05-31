import "./NoteCard.css";

const NoteCard = (props) => {
  return (
    <div className="note__card">
      <h2 className="note__card-title">
        <span>Title: </span> {props.noteData.title}
      </h2>
      <p className="note__card-desc">
        <span>Description: </span>
        {props.noteData.note}
      </p>
    </div>
  );
};

export default NoteCard;
