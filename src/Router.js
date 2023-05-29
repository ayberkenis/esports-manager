import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import logow from './assets/logo-w.png'

function AppRouter() {
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    return (
        <Router>
            <div className="header-intro"></div>
            <header className="header">
                <div className="navbar">
                    <div className="navbar-logo">
                        <img src={logow} alt="logo" className="logo"/>
                    </div>
                    <div className="navbar-left">
                        <Link to="/" className="navbar-route">HOME</Link>
                        <Link to="/portfolio" className="navbar-route">NEWS</Link>
                        <Link to="/" className="navbar-route">COMMUNITY</Link>
                        <Link to="/" className="navbar-route">SUPPORT</Link>
                    </div>

                    <div className="navbar-right">
                        <Link to="/" className="navbar-route play-for-free">PLAY FOR FREE</Link>
                        <select className="language-picker" value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}>
                            <option value="en"> ENGLISH </option>
                            <option value="fr"> FRENCH</option>
                            <option value="es"> SPANISH</option>
                            <option value="tr"> TURKISH</option>
                            {/* Add more language options as needed */}
                        </select>

                    </div>

                    <Routes>
                        <Route exact path="/" element=""/>
                        <Route path="/portfolio" element=""/>
                    </Routes>
                </div>
            </header>
        </Router>
    );
}

export default AppRouter;
