import './App.css';

// Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import {Main} from "./styled/Landing";
import GettingStarted from "./components/GettingStarted";

function App() {
  return (
    <div className="App">
      <Header/>
        <Main>
            <Landing/>
            <GettingStarted/>
            <GettingStarted/>
        </Main>
    </div>
  );
}

export default App;
