// import React from 'react';
import './App.css';
import About from './components/about/About';
import Header from './components/header/header';
import Home from './components/home/Home';
function App() {
    return (
        <div>
            <Header />
            <main className="main">
                <Home />
                <About/>
            </main>
        </div>
    );
}

export default App;
