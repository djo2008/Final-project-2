import React from 'react';
import './Navbar.css'; // Import CSS for navbar styling

function Navbar  ()  {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><a href="#new">New</a></li>
                <li><a href="#price">Price</a></li>
                <li><a href="#opportunities">Opportunities</a></li>
                <li><a href="#auto-guide">Auto Guide</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
