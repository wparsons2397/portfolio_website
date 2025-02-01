import React from "react";
import './JournalEntry.css';

function JournalEntry({ title, date, content }) {

  return (
    <div className="JournalEntry">
      <h3>{title}</h3>
      <div className="JournalEntryContent">

        <div className="TimelineCircle">{date}</div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default JournalEntry;