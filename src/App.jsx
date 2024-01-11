// import React from 'react';
import './App.css';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Home from './components/home/Home';
import ScrollUp from './components/scrollup/ScrollUp';
import Skills from './components/skills/Skills';
function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
            </main>
            <Footer />
            <ScrollUp />
        </div>
    );
}

export default App;
