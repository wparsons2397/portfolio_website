import React from "react";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import './JournalPage.css';
import JournalEntry from "../JournalEntry/JournalEntry";
import Spacer from "../../CommonComponents/Spacer/Spacer";

function JournalPage() {

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    return (
      <div className="JournalPage">
        <NavBar/>
        <div className="JournalContent">
        <h1>Journal - Diary of an Expat</h1>
        <p>One of the things that I want to hold myself accountable on is keeping track of my experiences so far here abroad, so might as well make my portfolio website doble as a means to do so</p>
        <JournalEntry title="Lorem Ipsum" date="January 1st, 2025" content="test"/>
        <Spacer spacer="10px" color="lightgrey"/>
        <JournalEntry title="Lorem Ipsum" date="January 1st, 2025" content="test"/>
        <Spacer spacer="10px" color="lightgrey"/>
        <JournalEntry/>
        </div>
        <button onClick={backToTop}> Back to Top </button>
      </div>
    );
  }

export default JournalPage;