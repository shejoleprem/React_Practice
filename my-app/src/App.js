import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div className="App">
            {isAuthenticated ? (
                <div>
                    <Navbar onLogout={handleLogout} />
                    <Sidebar />
                    
                    <div className="main-content">
                        
                    `   <Home />
                        <Quiz />
                    </div>
                </div>
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
