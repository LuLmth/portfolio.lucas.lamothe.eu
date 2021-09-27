import {useEffect, useState} from "react";

import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome />
            <Projects />
        </div>
    );
}

export default App;
