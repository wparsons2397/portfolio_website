import React from "react";
import { useParams } from "react-router-dom";

function SecondaryPage({setLocale}) {

    const {id} = useParams();

    return (
      <div className="App">
        <h1>This is just a fun little page to show off routing, nothing more to it</h1>
        <h2>Now showing {id}</h2>
      </div>
    );
  }

export default SecondaryPage;