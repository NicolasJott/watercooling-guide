import './App.css';

import { useLocation } from 'react-router-dom';


// Components
import Header from "./components/Header";
import Landing from "./components/Landing";
import GettingStarted from "./components/GettingStarted";
import Installation from "./components/Installation";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";


import {Main} from "./styled/Landing";


function App() {

    const location = useLocation()
    const isHome = location.pathname === '/';

    return (
        <div className="App">
            <Header isHome={isHome}/>
            <Main>
                <Landing/>
                <FAQ/>
                <GettingStarted/>
                <Installation/>
            </Main>
            <Footer/>
        </div>
    );
}

export default App;
