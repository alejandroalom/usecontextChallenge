import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import MyJob from '../pages/MyJob';
import { ThemeContext } from '../themes/ThemeContext';

const RoutesApp = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`App ${theme}`}>
      <Router>
        <div className="content">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/myjob">My Job</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myjob" element={<MyJob />} />
          </Routes>
        </div>
      </Router>
    </section>
  );
};

export default RoutesApp;








































