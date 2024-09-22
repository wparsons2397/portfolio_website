import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import ContentContainer from './Components/ContentContainer/ContentContainer';
import LargeFormContent from './Components/LargeFormContent/LargeFormContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar/>
        <div className="All-Content">
          <LargeFormContent color="black"/>
          <ContentContainer color="lavender"/>
          <ContentContainer color="lemonchiffon"/>
        </div>
      </header>
    </div>
  );
}

export default App;
