import Header from './Header/Header';
import Welcome from './Welcome/Welcome';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import ProjectsConfig from './Projects.config';

import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Welcome />
            <Projects projects={ProjectsConfig} />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
