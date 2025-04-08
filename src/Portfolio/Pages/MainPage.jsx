import React from "react";
import Sidebar from "../Sidebar/Sidebar.jsx";
import ContentContainer from '../ContentContainer/ContentContainer';
import LargeFormContent from '../LargeFormContent/LargeFormContent';
import Spacer from '../../CommonComponents/Spacer/Spacer.jsx';
import ContentHeader from "../ContentHeader/ContentHeader.jsx";
import NavBar from "../../CommonComponents/NavBar/NavBar.jsx";
import { Colors } from "../../constants/colors";

function MainPage() {
  const spacerHeight = '100px';

  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Sidebar />
        <div className="All-Content">
          <Spacer spacer={spacerHeight} color={Colors.BACKGROUND} />
          <LargeFormContent color={Colors.PRIMARY} />
          <Spacer spacer={spacerHeight} color={Colors.BACKGROUND} />
          <ContentHeader text="Key Projects" />
          <Spacer spacer={spacerHeight} color={Colors.BACKGROUND} />
          <ContentContainer contentDisplay='Translations' color={Colors.PRIMARY} />
          <Spacer spacer={spacerHeight} color={Colors.BACKGROUND} />
          <ContentContainer contentDisplay='Accessibility' color={Colors.PRIMARY} />
          <Spacer spacer={spacerHeight} color={Colors.BACKGROUND} />
          <ContentContainer contentDisplay='Testing' color={Colors.PRIMARY} />
        </div>
      </header>
    </div>
  );
}

export default MainPage;