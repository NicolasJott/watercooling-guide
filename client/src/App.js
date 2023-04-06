import './App.css';

// Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import {Main} from "./styled/Landing";
import GettingStarted from "./components/GettingStarted";
import { useLocation } from 'react-router-dom';

function App() {

    const location = useLocation()
    const isHome = location.pathname === '/';

    return (
        <div className="App">
            <Header isHome={isHome}/>
            <Main>
                <Landing/>
                <GettingStarted/>
            </Main>
        </div>
    );
}

export default App;
