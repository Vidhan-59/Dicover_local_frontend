// import React, { useState } from "react";
// import "./Navbar.css";  // Import the CSS file for styling

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* Links for larger screens */}
//       <div className="navbar-links left-links">
//         <a href="#home">Home</a>
//         <a href="#about-us">About Us</a>
//         <a href="#destination">Destination</a>
//         <a href="#services">Services</a>
//       </div>

//       {/* Logo and Heading */}
//       <div className="navbar-logo">
//         <img
//           src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
//           alt="Website Logo"
//           className="logo"
//         />
//         <h1 className="navbar-heading">TourXplorer</h1>
//       </div>

//       {/* Links for larger screens */}
//       <div className="navbar-links right-links">
//         <a href="#activity">Activity</a>
//         <a href="#pages">Pages</a>
//         <a href="#blog">Login</a>
//         <a href="#contact-us">Contact Us</a>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="mobile-menu" onClick={toggleSidebar}>
//         <span className="menu-icon">&#9776;</span>
//       </div>

//       {/* Sidebar for mobile view */}
//       <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
//         <div className="sidebar-content">
//           <img
//             src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
//             alt="Website Logo"
//             className="sidebar-logo"
//           />
//           <h1>TourXplorer</h1>
//           <ul className="sidebar-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about-us">About Us</a></li>
//             <li><a href="#destination">Destination</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#activity">Activity</a></li>
//             <li><a href="#pages">Pages</a></li>
//             <li><a href="#blog">Blog</a></li>
//             <li><a href="#contact-us">Contact Us</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay for blur effect */}
//       {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </nav>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import "./Navbar.css";  // Import the CSS file for styling

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [username, setUsername] = useState(null);

  // Retrieve the username from cookies on component mount
  useEffect(() => {
    const cookieUsername = Cookies.get('username'); // Get the username from cookies
    console.log(cookieUsername);
    
    if (cookieUsername) {
      setUsername(cookieUsername); // If it exists, set it in state
    }
  }, []);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links left-links">
        <Link to="/aboutus">About Us</Link>
        <Link to="/package">Package</Link>
        <Link to="/destination">Desination</Link>
        {/* Conditionally render username or login link */}


        <Link to="/places">Places</Link>
      </div>

      {/* Logo and Heading */}
      <div className="navbar-logo">
        <img
          src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
          alt="Website Logo"
          className="logo"
        />
        <a href='/'><h1 className="navbar-heading">Discover Local</h1></a>
      </div>

      {/* Links for larger screens */}
      <div className="navbar-links right-links">
        <Link to="/activity">Activity</Link>
        <Link to="/package">Package</Link>
        {username ? (
  <span style={{ color: 'white' }}>{username}</span>
) : (
  <Link to="/login">Login</Link>
)}
        <Link to="/places">Places</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="mobile-menu" onClick={toggleSidebar}>
        <span className="menu-icon">&#9776;</span>
      </div>

      {/* Sidebar for mobile view */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <img
            src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
            alt="Website Logo"
            className="sidebar-logo"
          />
          <h1>TourXplorer</h1>
          <ul className="sidebar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/destination">Destination</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/activity">Activity</Link></li>
            <li><Link to="/package">Package</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/places">Places</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay for blur effect */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </nav>
  );
};

export default Navbar;
