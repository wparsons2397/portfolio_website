import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import ContentContainer from '../ContentContainer/ContentContainer';
import LargeFormContent from '../LargeFormContent/LargeFormContent';
import Spacer from '../../CommonComponents/Spacer/Spacer.jsx';
import ContentHeader from "../ContentHeader/ContentHeader.jsx";
import NavBar from "../../CommonComponents/NavBar/NavBar.jsx";

function MainPage() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <Sidebar/>
          <div className="All-Content">
            <LargeFormContent color="#28A745"/>
            <Spacer spacer="100px" color="lightblue"/>
            <ContentHeader text="Important Work"/>
            <Spacer spacer="100px" color="lightblue"/>
            <ContentContainer contentDisplay='Accessibility' color="#007BFF"/>
            <Spacer spacer="100px" color="lightblue"/>
            <ContentContainer contentDisplay='Translations' color="#C5D400"/>
            <Spacer spacer="100px" color="lightblue"/>
            <ContentContainer contentDisplay='Testing' color="darkgoldenrod"/>
          </div>
        </header>
      </div>
    );
  }

export default MainPage;