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




// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import { Link } from "react-router-dom";  // Import Link from react-router-dom
// import "./Navbar.css";  // Import the CSS file for styling

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [username, setUsername] = useState(null);

//   // Retrieve the username from cookies on component mount
//   useEffect(() => {
//     const cookieUsername = Cookies.get('username'); // Get the username from cookies
//     console.log(cookieUsername);
    
//     if (cookieUsername) {
//       setUsername(cookieUsername); // If it exists, set it in state
//     }
//   }, []);
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   function handleLogout() {
//     fetch('http://localhost:8000/api/logout/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${Cookies.get('auth_token')}`,
//         // Add any necessary authorization headers, e.g., 
//         // 'Authorization': `Token ${yourToken}`
//       },
//     })
//     .then((response) => {
//       if (response.ok) {
//         Cookies.remove('auth_token');
//         Cookies.remove('username');
//         // Handle successful logout (e.g., redirect to login page)
//         window.location.href = '/login'; // redirect to login page or homepage
//       } else {
//         // Handle logout failure
//         console.error('Logout failed');
//       }
//     })
//     .catch((error) => {
//       console.error('Error during logout:', error);
//     });
//   }

//   return (
//     <nav className="navbar">
//       <div className="navbar-links left-links">
//         <Link to="/aboutus">About Us</Link>
//         <Link to="/package">Package</Link>
//         <Link to="/destination">Desination</Link>
//         {/* Conditionally render username or login link */}


//         <Link to="/places">Places</Link>
//       </div>

//       {/* Logo and Heading */}
//       <div className="navbar-logo">
//         <img
//           src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
//           alt="Website Logo"
//           className="logo"
//         />
//         <a href='/'><h1 className="navbar-heading">Discover Local</h1></a>
//       </div>

//       {/* Links for larger screens */}
//       <div className="navbar-links right-links">
//         <Link to="/activity">Activity</Link>
//         <Link to="/package">Package</Link>
//         {username ? (
//   <button onClick={() => window.location.href = '/userprofile'}>
//     <span style={{ color: 'white' }}>{username}</span>
//   </button>
// ) : (
//   <Link to="/login">Login</Link>
// )}
//               <button
//         onClick={handleLogout}
//         style={{
//           color: 'black',
//           border: 'none',
//           borderRadius: '5px',
//           padding: '0.5rem 1rem',
//           cursor: 'pointer',
//         }}
//       >
//         Logout
//       </button>
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
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about-us">About Us</Link></li>
//             <li><Link to="/destination">Destination</Link></li>
//             <li><Link to="/services">Services</Link></li>
//             <li><Link to="/activity">Activity</Link></li>
//             <li><Link to="/package">Package</Link></li>
//             <li><Link to="/Login">Login</Link></li>
//             <li><Link to="/places">Places</Link></li>
//           </ul>
//         </div>
//       </div>

//       {/* Overlay for blur effect */}
//       {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Menu, X, User, LogOut, LogIn, UserPlus, Home, Package, MapPin } from 'lucide-react'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [username, setUsername] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const cookieUsername = Cookies.get('username')
    if (cookieUsername) {
      setUsername(cookieUsername)
    }
  }, [])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/logout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('auth_token')}`,
        },
      })
      if (response.ok) {
        Cookies.remove('auth_token')
        Cookies.remove('username')
        setUsername(null)
        navigate('/login')
      } else {
        console.error('Logout failed')
      }
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-8 w-auto mr-3"
                src="https://s3.us-east-1.amazonaws.com/cdn.designcrowd.com/blog/tourism-logos-to-promote-your-happy-travels/airplane-flight-sky-travel-by-ions-brandcrowd.png"
                alt="Discover Local"
              />
              <span className="font-serif font-bold text-xl">Discover Local</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="font-serif px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
                  <Home className="font-bold h-4 w-4 mr-1" />
                  Home
                </Link>
                <Link to="/aboutus" className="font-serif px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  About Us
                </Link>
                <Link to="/package" className="font-serif px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
                  <Package className="h-4 w-4 mr-1" />
                  Package
                </Link>
                <Link to="/places" className="font-serif px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  Places
                </Link>
              </div>
            </div>
          </div>
          <div className="font-serif hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {username ? (
                <>
                  <button
                    onClick={() => navigate('/userprofile')}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center"
                  >
                    <User className="h-5 w-5 mr-1" />
                    {username}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out flex items-center"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center"
                  >
                    <LogIn className="h-5 w-5 mr-1" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="ml-4 px-3 py-2 rounded-md text-sm font-medium bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out flex items-center"
                  >
                    <UserPlus className="h-5 w-5 mr-1" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isSidebarOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isSidebarOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
              <Home className="h-5 w-5 mr-2" />
              Home
            </Link>
            <Link to="/aboutus" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
              <User className="h-5 w-5 mr-2" />
              About Us
            </Link>
            <Link to="/package" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
              <Package className="h-5 w-5 mr-2" />
              Package
            </Link>
            <Link to="/places" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Places
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-blue-700">
            <div className="flex items-center px-5">
              {username ? (
                <>
                  <button
                    onClick={() => navigate('/userprofile')}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out w-full text-left flex items-center"
                  >
                    <User className="h-5 w-5 mr-2" />
                    {username}
                  </button>
                  <button
                    onClick={handleLogout}
                    className="mt-3 block px-3 py-2 rounded-md text-base font-medium bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out w-full text-left flex items-center"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition duration-150 ease-in-out w-full text-left flex items-center"
                  >
                    <LogIn className="h-5 w-5 mr-2" />
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="mt-3 block px-3 py-2 rounded-md text-base font-medium bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out w-full text-left flex items-center"
                  >
                    <UserPlus className="h-5 w-5 mr-2" />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}