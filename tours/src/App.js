// import React from 'react';
// import './App.css';
// import HomePage from './components/HomePage';
// import AboutUsPage from './components/AboutUsPage';
// import TourGuideSwiper from './components/Tourguide';
// // import Navbar from './components/Navbar';  // Import the Navbar component
// // import ImageSlider from './components/ImageSlider';
// // import DestinationBlock from './components/DestinationBlock';
// // import PopularDestinations from './components/PopularDestination';
// // import TourCategories from './components/TourCategories';
// import 
// function App() {
//   return (
//     <div className="App">
//       <HomePage/>
//       <TourGuideSwiper/>
//       {/* <AboutUsPage/> */}
//       {/* Add any other components or content here */}
//     </div>
//   );
// }

// export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Login/Register';
import VerifyOTP from './Login/VerifyOTP';
import './App.css'; // Include CSS here
import HomePage from './components/HomePage';
import Packages from "./components2/Packages";
import PackageDetail from "./components2/PackageDetail";
import Places from './Pages/Places';
import AboutUsPage from './components/AboutUsPage';
import Navbar from './components/Navbar';
import UserProfile from './Pages/UserProfile';
import Guides from './components/Guide';
import Cabs from './components/Cabs';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/navbar' element={<Navbar/>}/>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/package" element={<Packages />} /> 
         <Route path="/package/:id" element={<PackageDetail />} />
         <Route path="/places" element={<Places/>}/>
         <Route path="/aboutus" element={<AboutUsPage/>}/>
         <Route path="/userprofile" element={<UserProfile/>}/>
         <Route path="/guide" element={<Guides/>}/>
         <Route path="/cabs" element={<Cabs/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
