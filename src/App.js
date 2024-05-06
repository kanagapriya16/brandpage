import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import Home2 from './components/Home2';


function App() {
    return (
        <Router>
            <div >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
