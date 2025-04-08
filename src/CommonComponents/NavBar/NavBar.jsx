import React from "react";
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    const navigatePortfolio = () => {
        navigate('/');
    }

    const navigateJournal = () => {
        navigate('/journal');
    }

    const navigateCodersLog = () => {
        navigate('/coderslog');
    }
    const navigateComponentLibrary = () => {
        navigate('/componentlibrary');
    }

    return (
        <div className="NavBar">
            <button onClick={(navigatePortfolio)}> Portfolio </button>
            {/* <button onClick={(navigateJournal)}> Journal of an Expat </button>
            <button onClick={(navigateCodersLog)}> Coder's Log </button> */}
            <button onClick={(navigateComponentLibrary)}> Component Library </button>
        </div>
    );
}


export default NavBar;