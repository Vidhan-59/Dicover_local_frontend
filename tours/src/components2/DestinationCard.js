// import React, { useState, useEffect } from 'react';
// import { FaStar, FaUserAlt, FaRupeeSign } from 'react-icons/fa'; // Icons used in the card
// import './DestinationPage.css'; // Import the separate CSS file

// const DestinationPage = () => {
//   const [destinations, setDestinations] = useState([]); // State for storing destinations
//   const [selectedDestination, setSelectedDestination] = useState(null);

//   // Function to fetch hidden gems from the API
//   const fetchDestinations = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/hidden_gems/'); // Make GET request
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       setDestinations(data); // Set the fetched destinations in state
//     } catch (error) {
//       console.error('Error fetching destinations:', error);
//     }
//   };

//   // Fetch destinations on component mount
//   useEffect(() => {
//     fetchDestinations();
//   }, []);

//   // Close the modal when clicked outside of it
//   const handleOutsideClick = (event) => {
//     if (event.target.id === 'modal-background') {
//       setSelectedDestination(null);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="grid">
//         {destinations.map((destination) => (
//           <div
//             key={destination.id}
//             className="card"
//             onClick={() => setSelectedDestination(destination)}
//           >
//             {/* Image Section */}
//             <div className="overflow-hidden">
//               <img
//                 src={destination.photos[0]} // Use the first photo for the card
//                 alt={destination.name}
//                 className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
//               />
//             </div>

//             {/* Card Content */}
//             <div className="card-content">
//               <h3 className="card-title">{destination.name}</h3>
//               <p className="card-description">{destination.description}</p>
//               <div className="card-rating">
//                 <FaStar className="icon" />
//                 <span>{destination.rating} Rating</span>
//               </div>
//               <div className="card-views">
//                 <FaUserAlt className="icon" />
//                 <span>{destination.number_of_person_views} views</span>
//               </div>
//               <div className="card-price">
//                 <FaRupeeSign className="icon" /> {destination.price.toFixed(2)}
//               </div>
//               <div className="card-additional-info">
//                 Best Time to Visit: <strong>{destination.best_time}</strong>
//               </div>

//               {/* Add to Package Button */}
//               <button className="btn">Add to Package</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Selected Destination */}
//       {selectedDestination && (
//         <div
//           id="modal-background"
//           className="modal-background"
//           onClick={handleOutsideClick}
//         >
//           <div className="modal">
//             {/* Close Modal */}
//             <button
//               className="modal-close"
//               onClick={() => setSelectedDestination(null)}
//             >
//               ✖
//             </button>

//             {/* Modal Content */}
//             <div>
//               {/* Larger Images */}
//               <div className="modal-images">
//                 {selectedDestination.photos.map((photo, index) => (
//                   <img
//                     key={index}
//                     src={photo}
//                     alt={`Photo ${index + 1}`}
//                     className="w-64 h-64 object-cover rounded-md"
//                   />
//                 ))}
//               </div>

//               {/* Destination Details */}
//               <div className="modal-content">
//                 {selectedDestination.state && (
//                   <p>
//                     <strong>State:</strong> {selectedDestination.state}
//                   </p>
//                 )}
//                 {selectedDestination.additional_info && (
//                   <p>
//                     <strong>Additional Info:</strong> {selectedDestination.additional_info}
//                   </p>
//                 )}
//                 {selectedDestination.category && (
//                   <p>
//                     <strong>Category:</strong> {selectedDestination.category}
//                   </p>
//                 )}
//               </div>

//               {/* Add to Package Button */}
//               <button className="btn">Add to Package</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DestinationPage;


// import React, { useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom';

// const DestinationPage = () => {
//   const navigate = useNavigate()
//   const [destinations, setDestinations] = useState([])
//   const [selectedDestination, setSelectedDestination] = useState(null)
//   const [searchState, setSearchState] = useState('')
//   const [searchAdventure, setSearchAdventure] = useState('')
//   const [topRated, setTopRated] = useState(true)
//   const [customPackage, setCustomPackage] = useState([])
//   const [showBookingModal, setShowBookingModal] = useState(false)
//   const [bookingDetails, setBookingDetails] = useState({
//     travel_date: '',
//     number_of_persons: 1,
//   })
//   const [showCustomPackageModal, setShowCustomPackageModal] = useState(false)
//   const [customPackageDetails, setCustomPackageDetails] = useState({
//     name: '',
//     number_of_persons: 1,
//     travel_date: '',
//   })

//   useEffect(() => {
//     fetchDestinations()
//   }, [searchState, searchAdventure, topRated])

//   const fetchDestinations = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/hidden_gems/?state=${searchState}&category=${searchAdventure}&top_rated=${topRated}`)
//       if (!response.ok) throw new Error('Network response was not ok')
//       const data = await response.json()
//       setDestinations(data)
//     } catch (error) {
//       console.error('Error fetching destinations:', error)
//     }
//   }

//   const handleBookNow = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/book_hiddengem/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           gem_id: selectedDestination.id,
//           ...bookingDetails,
//         }),
//       })
//       if (!response.ok) throw new Error('Booking failed')
//       navigate('guide/')
//     } catch (error) {
//       console.error('Error booking destination:', error)
//     }
//   }

//   const handleAddToCustomPackage = (destination) => {
//     if (customPackage.length === 0 || customPackage[0].state === destination.state) {
//       setCustomPackage([...customPackage, destination])
//     } else {
//       alert('All destinations in a custom package must be from the same state.')
//     }
//   }

//   const handleCreateCustomPackage = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/bookCustompackage/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           ...customPackageDetails,
//           place_ids: customPackage.map(dest => dest.id),
//         }),
//       })
//       if (!response.ok) throw new Error('Custom package booking failed')
//       navigate('guide/')
//     } catch (error) {
//       console.error('Error creating custom package:', error)
//     }
//   }

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-blue-900 mb-4">Discover Hidden Gems</h1>
//         <div className="flex flex-wrap gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="Search by state"
//             value={searchState}
//             onChange={(e) => setSearchState(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <input
//             type="text"
//             placeholder="Search by adventure"
//             value={searchAdventure}
//             onChange={(e) => setSearchAdventure(e.target.value)}
//             className="p-2 border rounded"
//           />
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               checked={topRated}
//               onChange={(e) => setTopRated(e.target.checked)}
//               className="mr-2"
//             />
//             Top Rated
//           </label>
//           <button onClick={fetchDestinations} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//             Search
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {destinations.map((destination) => (
//           <div key={destination.id} className="bg-white rounded-lg shadow-md overflow-hidden">
//             <img src={destination.photos[0]} alt={destination.name} className="w-full h-48 object-cover" />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold text-blue-900 mb-2">{destination.name}</h3>
//               <p className="text-gray-600 mb-2">{destination.description}</p>
//               <div className="flex items-center mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                 </svg>
//                 <span>{destination.rating} Rating</span>
//               </div>
//               <div className="flex items-center mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
//                 </svg>
//                 <span>{destination.number_of_person_views} views</span>
//               </div>
//               <div className="flex items-center mb-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
//                 </svg>
//                 <span>₹{destination.price.toFixed(2)}</span>
//               </div>
//               <p className="text-sm text-gray-500 mb-4">Best Time: {destination.best_time}</p>
//               <div className="flex space-x-2">
//                 <button
//                   onClick={() => {
//                     setSelectedDestination(destination)
//                     setShowBookingModal(true)
//                   }}
//                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex-1"
//                 >
//                   Book Now
//                 </button>
//                 <button
//                   onClick={() => handleAddToCustomPackage(destination)}
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1"
//                 >
//                   Add to Package
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showBookingModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Book {selectedDestination.name}</h2>
//             <input
//               type="date"
//               value={bookingDetails.travel_date}
//               onChange={(e) => setBookingDetails({...bookingDetails, travel_date: e.target.value})}
//               className="w-full p-2 border rounded mb-4"
//             />
//             <input
//               type="number"
//               value={bookingDetails.number_of_persons}
//               onChange={(e) => setBookingDetails({...bookingDetails, number_of_persons: parseInt(e.target.value)})}
//               min="1"
//               className="w-full p-2 border rounded mb-4"
//               placeholder="Number of persons"
//             />
//             <div className="flex justify-end space-x-2">
//               <button onClick={() => setShowBookingModal(false)} className="px-4 py-2 border rounded">
//                 Cancel
//               </button>
//               <button onClick={handleBookNow} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Confirm Booking
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {customPackage.length > 0 && (
//         <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
//           <h3 className="text-lg font-semibold mb-2">Custom Package ({customPackage.length} items)</h3>
//           <button
//             onClick={() => setShowCustomPackageModal(true)}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Book Custom Package
//           </button>
//         </div>
//       )}

//       {showCustomPackageModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
//           <div className="bg-white rounded-lg p-6 max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Create Custom Package</h2>
//             <input
//               type="text"
//               value={customPackageDetails.name}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, name: e.target.value})}
//               className="w-full p-2 border rounded mb-4"
//               placeholder="Package Name"
//             />
//             <input
//               type="date"
//               value={customPackageDetails.travel_date}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, travel_date: e.target.value})}
//               className="w-full p-2 border rounded mb-4"
//             />
//             <input
//               type="number"
//               value={customPackageDetails.number_of_persons}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, number_of_persons: parseInt(e.target.value)})}
//               min="1"
//               className="w-full p-2 border rounded mb-4"
//               placeholder="Number of persons"
//             />
//             <div className="flex justify-end space-x-2">
//               <button onClick={() => setShowCustomPackageModal(false)} className="px-4 py-2 border rounded">
//                 Cancel
//               </button>
//               <button onClick={handleCreateCustomPackage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Create Package
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default DestinationPage


















// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Cookies from 'js-cookie';
// const CATEGORY_CHOICES = [
//   'ADVENTURE', 'BEACH', 'MOUNTAIN',
//   'HISTORICAL', 'URBAN', 'WILDLIFE'
// ]

// const INDIAN_STATES = [
//   'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
//   'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
//   'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
//   'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
//   'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
// ]

// function HiddenGems() {
//   const navigate = useNavigate()
//   const [gems, setGems] = useState([])
//   const [filteredGems, setFilteredGems] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')
//   const [selectedCategory, setSelectedCategory] = useState([])
//   const [selectedState, setSelectedState] = useState('')
//   const [customPackage, setCustomPackage] = useState([])
//   const [showBookingModal, setShowBookingModal] = useState(false)
//   const [showCustomPackageModal, setShowCustomPackageModal] = useState(false)
//   const [bookingDetails, setBookingDetails] = useState({ travel_date: '', number_of_persons: 1 })
//   const [customPackageDetails, setCustomPackageDetails] = useState({ name: '', travel_date: '', number_of_persons: 1 })
//   const [currentGem, setCurrentGem] = useState(null)
//   const [showGemDetails, setShowGemDetails] = useState(false)

//   useEffect(() => {
//     fetchGems()
//   }, [])

//   useEffect(() => {
//     filterGems()
//   }, [searchTerm, selectedCategory, selectedState, gems])

//   const fetchGems = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/api/hidden_gems/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           category: selectedCategory,
//           top_rated: true
//         })
//       })
//       const data = await response.json()
//       setGems(data)
//       setFilteredGems(data)
//     } catch (error) {
//       console.error('Error fetching gems:', error)
//     }
//   }

//   const filterGems = () => {
//     const filtered = gems.filter(gem =>
//       gem.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//       (selectedCategory.length === 0 || selectedCategory.includes(gem.category)) &&
//       (selectedState === '' || gem.state === selectedState)
//     )
//     setFilteredGems(filtered)
//   }

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(prev => 
//       prev.includes(category) 
//         ? prev.filter(c => c !== category)
//         : [...prev, category]
//     )
//   }

//   const handleGemClick = (gem) => {
//     setCurrentGem(gem)
//     setShowGemDetails(true)
//   }

//   const handleBookNow = (gem) => {
//     setCurrentGem(gem)
//     setShowBookingModal(true)
//   }

//   const handleAddToCustomPackage = (gem) => {
//     if (customPackage.length === 0 || customPackage[0].state === gem.state) {
//       setCustomPackage(prev => [...prev, gem])
//     } else {
//       alert('All places in a custom package must be from the same state.')
//     }
//   }

//   const handleRemoveFromCustomPackage = (gemId) => {
//     setCustomPackage(prev => prev.filter(item => item.id !== gemId))
//   }
  
//   const handleBookGem = async () => {
//     try {
//       // const token = Cookies.get('auth_token')
//       // console.log(token)
//       const response = await fetch('http://localhost:8000/api/bookhiddengem/', {
//         method: 'POST',

//         headers: { 
//           'Content-Type': 'application/json' , 
//           'Authorization': `Bearer ${Cookies.get('auth_token')}`,
//         },
//         body: JSON.stringify({
//           gem_id: currentGem.id,
//           travel_date : bookingDetails.travel_date,
//           number_of_persons: bookingDetails.number_of_persons
//         })
//       })
//       if (response.ok) {
//         navigate('/guide')
//       } else {
//         alert('Booking failed. Please try again.')
//       }
//     } catch (error) {
//       console.error('Error booking gem:', error)
//     }
//   }

//   const handleBookCustomPackage = async () => {
//     try {
//       // First API call to create a custom package
//       console.log(Cookies.get('auth_token'));
      
//       const response = await fetch('http://localhost:8000/api/custom-package/', {
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${Cookies.get('auth_token')}`,
//         },
//         body: JSON.stringify({
//           name: customPackageDetails.name,
//           places: customPackage.map(gem => gem.id),
//           travel_date: customPackageDetails.travel_date,
//           number_of_persons: customPackageDetails.number_of_persons
//         })
//       });
  
//       if (response.ok) {
//         const packageData = await response.json();
//         const packageId = packageData.package_id;  // Assuming response includes package_id
  
//         // Second API call to book the package
//         const bookingResponse = await fetch('http://localhost:8000/api/bookcustompackage/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${Cookies.get('auth_token')}`,
//           },
//           body: JSON.stringify({
//             package_id: packageId,
//             travel_date: customPackageDetails.travel_date
//           })
//         });
  
//         if (bookingResponse.ok) {
//           const bookingData = await bookingResponse.json();
//           const bookingId = bookingData.booking_id;  // Assuming response includes booking_id
//           // Navigate to guide page or another success action
//           navigate('/guide' , bookingId);
//         } else {
//           alert('Booking failed. Please try again.');
//         }
//       } else {
//         alert('Custom package booking failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error booking custom package:', error);
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Hidden Gems of India</h1>
      
//       {/* Search and Filter Section */}
//       <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//         <div className="flex flex-wrap items-center justify-between gap-4">
//           <input
//             type="text"
//             placeholder="Search hidden gems..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//           />
//           <div className="flex flex-wrap gap-2">
//             {CATEGORY_CHOICES.map(category => (
//               <button
//                 key={category}
//                 onClick={() => handleCategoryChange(category)}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${
//                   selectedCategory.includes(category)
//                     ? 'bg-indigo-600 text-white'
//                     : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                 }`}
//               >
//                 {category}
//               </button>
//             ))}
//           </div>
//           <select
//             value={selectedState}
//             onChange={(e) => setSelectedState(e.target.value)}
//             className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
//           >
//             <option value="">All States</option>
//             {INDIAN_STATES.map(state => (
//               <option key={state} value={state}>{state}</option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {/* Hidden Gems Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredGems.map(gem => (
//           <div key={gem.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
//             <img src={gem.photos[0]} alt={gem.name} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{gem.name}</h2>
//               <p className="text-gray-600 mb-4">{gem.description.slice(0, 100)}...</p>
//               <div className="flex justify-between items-center">
//                 <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
//                   {gem.category}
//                 </span>
//                 <span className="text-gray-500">{gem.state}</span>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <button
//                   onClick={() => handleGemClick(gem)}
//                   className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
//                 >
//                   View Details
//                 </button>
//                 <button
//                   onClick={() => handleAddToCustomPackage(gem)}
//                   className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
//                 >
//                   Add to Package
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Custom Package Section */}
//       <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold mb-4 text-indigo-800">Your Custom Package</h2>
//         {customPackage.length === 0 ? (
//           <p className="text-gray-500">Your package is empty. Add some hidden gems!</p>
//         ) : (
//           <div className="space-y-4">
//             {customPackage.map(item => (
//               <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
//                 <div>
//                   <h3 className="font-semibold text-lg">{item.name}</h3>
//                   <p className="text-sm text-gray-600">{item.state}</p>
//                 </div>
//                 <button
//                   onClick={() => handleRemoveFromCustomPackage(item.id)}
//                   className="text-red-500 hover:text-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <button
//               onClick={() => setShowCustomPackageModal(true)}
//               className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 mt-4"
//             >
//               Book/Create My Custom Package
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Booking Modal */}
//       {showBookingModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Book {currentGem.name}</h2>
//             <input
//               type="date"
//               value={bookingDetails.travel_date}
//               onChange={(e) => setBookingDetails({...bookingDetails, travel_date: e.target.value})}
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <input
//               type="number"
//               value={bookingDetails.number_of_persons}
//               onChange={(e) => setBookingDetails({...bookingDetails, number_of_persons: e.target.value})}
//               min="1"
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Number of persons"
//             />
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={() => setShowBookingModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleBookGem}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//               >
//                 Book
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Custom Package Modal */}
//       {showCustomPackageModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-lg max-w-md w-full">
//             <h2 className="text-2xl font-bold mb-4">Book Custom Package</h2>
//             <input
//               type="text"
//               value={customPackageDetails.name}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, name: e.target.value})}
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Package Name"
//             />
//             <input
//               type="date"
//               value={customPackageDetails.travel_date}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, travel_date: e.target.value})}
//               className="w-full p-2 mb-4 border rounded"
//             />
//             <input
//               type="number"
//               value={customPackageDetails.number_of_persons}
//               onChange={(e) => setCustomPackageDetails({...customPackageDetails, number_of_persons: e.target.value})}
//               min="1"
//               className="w-full p-2 mb-4 border rounded"
//               placeholder="Number of persons"
//             />
//             <div className="flex justify-end gap-4">
//               <button
//                 onClick={() => setShowCustomPackageModal(false)}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleBookCustomPackage}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//               >
//                 Book Custom Package
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Gem Details Modal */}
//       {showGemDetails && currentGem && (
//         <GemDetails
//           gem={currentGem}
//           onClose={() => setShowGemDetails(false)}
//           onBook={() => {
//             setShowGemDetails(false)
//             handleBookNow(currentGem)
//           }}
//         />
//       )}
//     </div>
//   )
// }

// function GemDetails({ gem, onClose, onBook }) {
//   console.log(gem)
//   const [fullGemDetails, setFullGemDetails] = useState(null)

//   useEffect(() => {
//     fetchGemDetails()
//   }, [])

  

//   const fetchGemDetails = async () => {
//     try {
//       const response = await fetch(`http://localhost:8000/api/hidden_gems/${gem.id}/`)
//       const data = await response.json()
//       setFullGemDetails(data)
//     } catch (error) {
//       console.error('Error fetching gem details:', error)
//     }
//   }

//   if (!fullGemDetails) {
//     return <div>Loading...</div>
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto">
//       <div className="bg-white p-8 rounded-lg max-w-4xl w-full m-4">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//         <h2 className="text-3xl font-bold mb-4 text-indigo-800">{fullGemDetails.name}</h2>
//         <div className="mb-6 flex gap-4 overflow-x-auto">
//           {fullGemDetails.photos.map((photo, index) => (
//             <img key={index} src={photo} alt={`${fullGemDetails.name} - ${index + 1}`} className="w-64 h-48 object-cover rounded-lg" />
//           ))}
//         </div>
//         <p className="text-gray-700 mb-4">{fullGemDetails.description}</p>
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <h3 className="font-semibold text-lg">State</h3>
//             <p>{fullGemDetails.state}</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Category</h3>
//             <p>{fullGemDetails.category}</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Rating</h3>
//             <p>{fullGemDetails.rating} / 5</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Views</h3>
//             <p>{fullGemDetails.number_of_person_views}</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Price</h3>
//             <p>₹{fullGemDetails.price}</p>
//           </div>
//           <div>
//             <h3 className="font-semibold text-lg">Best Time to Visit</h3>
//             <p>{fullGemDetails.best_time}</p>
//           </div>
//         </div>
//         <div className="mb-4">
//           <h3 className="font-semibold text-lg">Additional Information</h3>
//           <p>{fullGemDetails.additional_info}</p>
//         </div>
//         <div className="flex justify-end gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//           >
//             Close
//           </button>
//           <button
//             onClick={onBook}
//             className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
//           >
//             Book Now
//           </button>
//         </div>  
//       </div>
//     </div>
//   )
// }

// export default HiddenGems
























import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Loader2, X, Plus, Minus, Star, MapPin, Calendar, Users, Info } from 'lucide-react';

const CATEGORY_CHOICES = [
  'ADVENTURE', 'BEACH', 'MOUNTAIN', 'HISTORICAL', 'URBAN', 'WILDLIFE'
];

const INDIAN_STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
  'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

export default function HiddenGems() {
  const navigate = useNavigate();
  const [gems, setGems] = useState([]);
  const [filteredGems, setFilteredGems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [customPackage, setCustomPackage] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showCustomPackageModal, setShowCustomPackageModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({ travel_date: '', number_of_persons: 1 });
  const [customPackageDetails, setCustomPackageDetails] = useState({ name: '', travel_date: '', number_of_persons: 1 });
  const [currentGem, setCurrentGem] = useState(null);
  const [showGemDetails, setShowGemDetails] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    fetchGems();
  }, []);

  useEffect(() => {
    filterGems();
  }, [searchTerm, selectedCategory, selectedState, gems]);

  const fetchGems = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/hidden_gems/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: selectedCategory,
          top_rated: true
        })
      });
      const data = await response.json();
      setGems(data);
      setFilteredGems(data);
    } catch (error) {
      console.error('Error fetching gems:', error);
      showNotification('Failed to fetch hidden gems. Please try again.', 'error');
    }
  };

  const filterGems = () => {
    const filtered = gems.filter(gem =>
      gem.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory.length === 0 || selectedCategory.includes(gem.category)) &&
      (selectedState === '' || gem.state === selectedState)
    );
    setFilteredGems(filtered);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleGemClick = (gem) => {
    setCurrentGem(gem);
    setShowGemDetails(true);
  };

  const handleBookNow = (gem) => {
    setCurrentGem(gem);
    setShowBookingModal(true);
  };

  const handleAddToCustomPackage = (gem) => {
    if (customPackage.length === 0) {
      setCustomPackage([gem]);
      showNotification(`${gem.name} added to your custom package!`, 'success');
    } else if (customPackage[0].state === gem.state) {
      if (!customPackage.some(item => item.id === gem.id)) {
        setCustomPackage(prev => [...prev, gem]);
        showNotification(`${gem.name} added to your custom package!`, 'success');
      } else {
        showNotification('This place is already in your custom package.', 'info');
      }
    } else {
      showNotification('All places in a custom package must be from the same state.', 'error');
    }
  };

  const handleRemoveFromCustomPackage = (gemId) => {
    const removedGem = customPackage.find(item => item.id === gemId);
    setCustomPackage(prev => prev.filter(item => item.id !== gemId));
    showNotification(`${removedGem.name} removed from your custom package.`, 'info');
  };
  
  const handleBookGem = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/bookhiddengem/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('auth_token')}`,
        },
        body: JSON.stringify({
          gem_id: currentGem.id,
          travel_date: bookingDetails.travel_date,
          number_of_persons: bookingDetails.number_of_persons
        })
      });
      if (response.ok) {
        showNotification(`Successfully booked ${currentGem.name}!`, 'success');
        setShowBookingModal(false);
        navigate('/guide');
      } else {
        showNotification('Booking failed. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error booking gem:', error);
      showNotification('An error occurred while booking. Please try again.', 'error');
    }
  };

  const handleBookCustomPackage = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/custom-package/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('auth_token')}`,
        },
        body: JSON.stringify({
          name: customPackageDetails.name,
          places: customPackage.map(gem => gem.id),
          travel_date: customPackageDetails.travel_date,
          number_of_persons: customPackageDetails.number_of_persons
        })
      });
  
      if (response.ok) {
        const packageData = await response.json();
        const packageId = packageData.package_id;
  
        const bookingResponse = await fetch('http://localhost:8000/api/bookcustompackage/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('auth_token')}`,
          },
          body: JSON.stringify({
            package_id: packageId,
            travel_date: customPackageDetails.travel_date
          })
        });
  
        if (bookingResponse.ok) {
          const bookingData = await bookingResponse.json();
          const bookingId = bookingData.booking_id;
          showNotification('Custom package booked successfully!', 'success');
          setShowCustomPackageModal(false);
          navigate('/guide', { state: { bookingId } });
        } else {
          showNotification('Booking failed. Please try again.', 'error');
        }
      } else {
        showNotification('Custom package booking failed. Please try again.', 'error');
      }
    } catch (error) {
      console.error('Error booking custom package:', error);
      showNotification('An error occurred while booking. Please try again.', 'error');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: '', type: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-indigo-800">Hidden Gems of India</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search hidden gems..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORY_CHOICES.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory.includes(category)
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          >
            <option value="">All States</option>
            {INDIAN_STATES.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Hidden Gems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGems.map(gem => (
          <div key={gem.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={gem.photos[0]} alt={gem.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{gem.name}</h2>
              <p className="text-gray-600 mb-4">{gem.description.slice(0, 100)}...</p>
              <div className="flex justify-between items-center mb-4">
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  {gem.category}
                </span>
                <span className="text-gray-500 flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {gem.state}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => handleGemClick(gem)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                >
                  <Info className="w-4 h-4 mr-2" />
                  View Details
                </button>
                <button
                  onClick={() => handleAddToCustomPackage(gem)}
                  className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300 flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add to Package
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Package Section */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-indigo-800">Your Custom Package</h2>
        {customPackage.length === 0 ? (
          <p className="text-gray-500">Your package is empty. Add some hidden gems!</p>
        ) : (
          <div className="space-y-4">
            {customPackage.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.state}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCustomPackage(item.id)}
                  className="text-red-500 hover:text-red-700 flex items-center"
                >
                  <Minus className="w-4 h-4 mr-1" />
                  Remove
                </button>
              </div>
            ))}
            <button
              onClick={() => setShowCustomPackageModal(true)}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 mt-4 flex items-center justify-center"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book/Create My Custom Package
            </button>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book {currentGem.name}</h2>
            <input
              type="date"
              value={bookingDetails.travel_date}
              onChange={(e) => setBookingDetails({...bookingDetails, travel_date: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 mr-2 text-gray-500" />
              <input
                type="number"
                value={bookingDetails.number_of_persons}
                onChange={(e) => setBookingDetails({...bookingDetails, number_of_persons: e.target.value})}
                min="1"
                className="w-full p-2 border rounded"
                placeholder="Number of persons"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowBookingModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleBookGem}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
              >
                Book
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Package Modal */}
      {showCustomPackageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Book Custom Package</h2>
            <input
              type="text"
              value={customPackageDetails.name}
              onChange={(e) => setCustomPackageDetails({...customPackageDetails, name: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
              placeholder="Package Name"
            />
            <input
              type="date"
              value={customPackageDetails.travel_date}
              onChange={(e) => setCustomPackageDetails({...customPackageDetails, travel_date: e.target.value})}
              className="w-full p-2 mb-4 border rounded"
            />
            <div className="flex items-center mb-4">
              <Users className="w-5 h-5 mr-2 text-gray-500" />
              <input
                type="number"
                value={customPackageDetails.number_of_persons}
                onChange={(e) => setCustomPackageDetails({...customPackageDetails, number_of_persons: e.target.value})}
                min="1"
                className="w-full p-2 border rounded"
                placeholder="Number of persons"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowCustomPackageModal(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleBookCustomPackage}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
              >
                Book Custom Package
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Gem Details Modal */}
      {showGemDetails && currentGem && (
        <GemDetails
          gem={currentGem}
          onClose={() => setShowGemDetails(false)}
          onBook={() => {
            setShowGemDetails(false);
            handleBookNow(currentGem);
          }}
        />
      )}

      {/* Notification */}
      {notification.show && (
        <div className={`fixed bottom-4 right-4 p-4 rounded-md shadow-md ${
          notification.type === 'success' ? 'bg-green-500' :
          notification.type === 'error' ? 'bg-red-500' :
          'bg-blue-500'
        } text-white`}>
          {notification.message}
        </div>
      )}
    </div>
  );
}

function GemDetails({ gem, onClose, onBook }) {
  const [fullGemDetails, setFullGemDetails] = useState(null);

  useEffect(() => {
    fetchGemDetails();
  }, []);

  const fetchGemDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/hidden_gems/${gem.id}/`);
      const data = await response.json();
      setFullGemDetails(data);
    } catch (error) {
      console.error('Error fetching gem details:', error);
    }
  };

  if (!fullGemDetails) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg">
          <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full m-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">{fullGemDetails.name}</h2>
        <div className="mb-6 flex gap-4 overflow-x-auto">
          {fullGemDetails.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`${fullGemDetails.name} - ${index + 1}`} className="w-64 h-48 object-cover rounded-lg" />
          ))}
        </div>
        <p className="text-gray-700 mb-4">{fullGemDetails.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">State</h3>
              <p>{fullGemDetails.state}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Info className="w-5 h-5 mr-2 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Category</h3>
              <p>{fullGemDetails.category}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 mr-2 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Rating</h3>
              <p>{fullGemDetails.rating} / 5</p>
            </div>
          </div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Views</h3>
              <p>{fullGemDetails.number_of_person_views}</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 mr-2 text-indigo-600 flex items-center justify-center">₹</div>
            <div>
              <h3 className="font-semibold text-lg">Price</h3>
              <p>₹{fullGemDetails.price}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
            <div>
              <h3 className="font-semibold text-lg">Best Time to Visit</h3>
              <p>{fullGemDetails.best_time}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-lg">Additional Information</h3>
          <p>{fullGemDetails.additional_info}</p>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors duration-300"
          >
            Close
          </button>
          <button
            onClick={onBook}
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
          >
            Book Now
          </button>
        </div>  
      </div>
    </div>
  );
}