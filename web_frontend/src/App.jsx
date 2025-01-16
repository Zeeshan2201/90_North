import React, { useState, useEffect } from 'react';
import './App.css';
import img1 from './assets/react.svg';

function App() {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  let widthPercentage = 100;

  if (pageWidth >= 992 && pageWidth <= 1600) {
    widthPercentage = 90; // 90% shrink
  } else if (pageWidth >= 700 && pageWidth <= 767) {
    widthPercentage = 80; // 80% shrink
  } else if (pageWidth >= 600 && pageWidth <= 700) {
    widthPercentage = 75; // 75% shrink
  } else if (pageWidth <= 600) {
    widthPercentage = 50; // 50% shrink
  }

  const containerStyle = {
    width: `${widthPercentage}%`,
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img src={img1} alt="Logo" /> 
          </a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="/" className="nav-links">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-links">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/services" className="nav-links">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-links">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container" style={containerStyle}> 
        <div className={`left-menu ${isMenuCollapsed ? 'collapsed' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuCollapsed ? '>' : '<'} 
          </button>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
        <div className="main-content">
          <h2>Welcome to Our Website</h2>
          <p>
            This is the main content area. 
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Image 1" className="main-content-image" /> 
        </div>
        <div className="right-panel">
          <h2>Contact Us</h2>
          <p>
            Phone: 123-456-7890
            <br />
            Email: info@example.com
          </p>
          <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Image 2" className="right-panel-image" /> 
        </div>
      </div>

      <div className="container" style={containerStyle}> 
        <div className={`left-menu ${isMenuCollapsed ? 'collapsed' : ''}`}>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuCollapsed ? '>' : '<'} 
          </button>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
        <div className="main-content">
          <h2>Welcome to Our Website</h2>
          <p>
            This is the main content area. 
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>
          <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Image 1" className="main-content-image" /> 
        </div>
        <div className="right-panel">
          <h2>Contact Us</h2>
          <p>
            Phone: 123-456-7890
            <br />
            Email: info@example.com
          </p>
          <img src="https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg" alt="Image 2" className="right-panel-image" /> 
        </div>
      </div>

      <footer>
      <div className="footer">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <p>
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Service</a> |
          <a href="#">FAQ</a> |
          <a href="#">Careers</a>
        </p>
      </div>
      </footer>
    </div>
  );
}

export default App;