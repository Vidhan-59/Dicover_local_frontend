// import React from 'react'

// const userData = {
//   "user": {
//     "id": "66cb1d310b73e59c7a074363",
//     "username": "mayra",
//     "email": "mayramalhotra1232@gmail.com",
//     "contact_number": "6758935467",
//     "state": "goa",
//     "role": "USER",
//     "profile_picture": null
//   },
//   "booking_history": [
//     {
//       "id": "66f408878d17d2c1da12a9f7",
//       "gem": {
//         "id": "66effd96750a3dfa616d3904",
//         "name": "Hampi",
//         "description": "An ancient village in Karnataka, Hampi is famous for its ruins of Vijayanagara Empire, a UNESCO World Heritage Site.",
//         "state": "Gujarat",
//         "photos": [
//           "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
//           "https://t4.ftcdn.net/jpg/01/28/09/39/360_F_128093989_O8eefaRlYneRc1TanYBDP6hXrYRry6UC.jpg"
//         ],
//         "rating": 5.0,
//         "number_of_person_views": 6001,
//         "price": 500.0,
//         "best_time": "Winter",
//         "additional_info": "Known for its ancient temples, beautiful boulders, and history.",
//         "category": "HISTORICAL"
//       },
//       "package": null,
//       "static_package": null,
//       "guide": {
//         "id": "66f28e3b632ceb45e6527aeb",
//         "name": "Rajesh Singh",
//         "price": 220.0,
//         "available_dates": [
//           "2024-01-10T00:00:00Z",
//           "2024-02-22T00:00:00Z",
//           "2024-03-15T00:00:00Z"
//         ],
//         "rating": 4.8,
//         "state": "Gujarat",
//         "image": [
//           "https://example.com/images/rajeshsingh1.jpg",
//           "https://example.com/images/rajeshsingh2.jpg"
//         ]
//       },
//       "cab": {
//         "id": "66cb2c3678a987172b5f78b3",
//         "driver": "Driver object",
//         "car_name": "Toyota Camry",
//         "number_plate": "ABC123",
//         "number_of_persons": 4,
//         "price": 50.0,
//         "available": true,
//         "state": "Gujarat"
//       },
//       "booking_date": "2024-09-25T12:56:39.325000Z",
//       "price": 770.0,
//       "number_of_persons": 1,
//       "status": "CANCELLED",
//       "travel_date": "2024-12-30T00:00:00Z"
//     },
//     {
//       "id": "66f410d08d17d2c1da12a9fa",
//       "gem": null,
//       "package": {
//         "id": "66f4103c8d17d2c1da12a9f9",
//         "name": "Vidhan's package",
//         "places": [
//           {
//             "id": "66effd89750a3dfa616d3903",
//             "name": "Rann of Kutch",
//             "description": "A seasonal salt marsh in Gujarat, known for its white desert and the vibrant Rann Utsav festival.",
//             "state": "Gujarat",
//             "photos": [
//               "https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg",
//               "https://www.rannutsavgujarat.in/thumb/media/0/0/fLwcdhrZsXKnmCSw6YFJN7jFE5RtP9zT.jpg"
//             ],
//             "rating": 4.6,
//             "number_of_person_views": 7170,
//             "price": 1000.0,
//             "best_time": "Winter",
//             "additional_info": "Best known for the white sand desert and cultural celebrations during Rann Utsav.",
//             "category": "URBAN"
//           },
//           {
//             "id": "66effd96750a3dfa616d3904",
//             "name": "Hampi",
//             "description": "An ancient village in Karnataka, Hampi is famous for its ruins of Vijayanagara Empire, a UNESCO World Heritage Site.",
//             "state": "Gujarat",
//             "photos": [
//               "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
//               "https://t4.ftcdn.net/jpg/01/28/09/39/360_F_128093989_O8eefaRlYneRc1TanYBDP6hXrYRry6UC.jpg"
//             ],
//             "rating": 5.0,
//             "number_of_person_views": 6001,
//             "price": 500.0,
//             "best_time": "Winter",
//             "additional_info": "Known for its ancient temples, beautiful boulders, and history.",
//             "category": "HISTORICAL"
//           }
//         ],
//         "state": "Gujarat",
//         "price": 30000.0,
//         "number_of_persons": 20,
//         "booked_at": "2024-09-25T13:29:32.476000Z",
//         "guide": null
//       },
//       "static_package": null,
//       "guide": {
//         "id": "66f28e3b632ceb45e6527aeb",
//         "name": "Rajesh Singh",
//         "price": 220.0,
//         "available_dates": [
//           "2024-01-10T00:00:00Z",
//           "2024-02-22T00:00:00Z",
//           "2024-03-15T00:00:00Z"
//         ],
//         "rating": 4.8,
//         "state": "Gujarat",
//         "image": [
//           "https://example.com/images/rajeshsingh1.jpg",
//           "https://example.com/images/rajeshsingh2.jpg"
//         ]
//       },
//       "cab": null,
//       "booking_date": "2024-09-25T13:32:00.253000Z",
//       "price": 30220.0,
//       "number_of_persons": 20,
//       "status": "PENDING",
//       "travel_date": "2024-11-10T00:00:00Z"
//     },
//     {
//       "id": "66f412888d17d2c1da12a9fb",
//       "gem": null,
//       "package": null,
//       "static_package": {
//         "id": "66f16cf9c000408191e9d6db",
//         "name": "Royal Rajasthan Adventure",
//         "description": "Explore the royal palaces and deserts of Rajasthan.",
//         "state": "Rajasthan",
//         "photos": [
//           "https://example.com/rajasthan1.jpg",
//           "https://example.com/rajasthan2.jpg",
//           "https://example.com/rajasthan3.jpg",
//           "https://example.com/rajasthan4.jpg"
//         ],
//         "rating": 4.7,
//         "number_of_person_views": 200,
//         "price": 399.99,
//         "best_time": "Winter",
//         "additional_info": "Includes camel safari and cultural shows.",
//         "category": "ADVENTURE",
//         "type": "DELUXE",
//         "available_dates": [
//           "2024-11-01T00:00:00Z",
//           "2024-12-15T00:00:00Z",
//           "2025-01-01T00:00:00Z"
//         ],
//         "slots": {
//           "2024-11-01": 48,
//           "2024-12-15": 31,
//           "2025-01-01": 40
//         },
//         "itinerary": [
//           {
//             "day": 1,
//             "description": "Arrival in Jaipur and visit to Amber Fort.",
//             "activities": "Sightseeing, Cultural Experience",
//             "images": [
//               "https://example.com/rajasthan_day1.jpg"
//             ]
//           },
//           {
//             "day": 2,
//             "description": "Exploring the Blue City of Jodhpur.",
//             "activities": "City Tour, Photography",
//             "images": [
//               "https://example.com/rajasthan_day2.jpg"
//             ]
//           },
//           {
//             "day": 3,
//             "description": "Desert safari in Jaisalmer.",
//             "activities": "Camel Safari, Desert Camp",
//             "images": [
//               "https://example.com/rajasthan_day3.jpg"
//             ]
//           },
//           {
//             "day": 4,
//             "description": "Visit to Udaipur, the City of Lakes.",
//             "activities": "Boat Ride, Palace Visit",
//             "images": [
//               "https://example.com/rajasthan_day4.jpg"
//             ]
//           },
//           {
//             "day": 5,
//             "description": "Departure from Udaipur.",
//             "activities": "Free Time, Souvenir Shopping",
//             "images": [
//               "https://example.com/rajasthan_day5.jpg"
//             ]
//           }
//         ]
//       },
//       "guide": {
//         "id": "66f28e47632ceb45e6527aec",
//         "name": "Priya Sharma",
//         "price": 175.0,
//         "available_dates": [
//           "2024-10-03T00:00:00Z",
//           "2024-11-17T00:00:00Z",
//           "2024-12-25T00:00:00Z"
//         ],
//         "rating": 4.6,
//         "state": "Rajasthan",
//         "image": [
//           "https://example.com/images/priyasharma1.jpg",
//           "https://example.com/images/priyasharma2.jpg"
//         ]
//       },
//       "cab": {
//         "id": "66f2525191d419b02c79eb27",
//         "driver": "Driver object",
//         "car_name": "Mercedes-Benz E-Class",
//         "number_plate": "MER1234",
//         "number_of_persons": 4,
//         "price": 80.0,
//         "available": true,
//         "state": "Rajasthan"
//       },
//       "booking_date": "2024-09-25T13:39:20.756000Z",
//       "price": 654.99,
//       "number_of_persons": 2,
//       "status": "BOOKED",
//       "travel_date": "2024-11-01T00:00:00Z"
//     }
//   ]
// }

// export default function UserProfile() {
//   const { user, booking_history } = userData

//   const formatDate = (dateString) => {
//     const options = { year: 'numeric', month: 'long', day: 'numeric' }
//     return new Date(dateString).toLocaleDateString(undefined, options)
//   }

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'PENDING':
//         return 'bg-yellow-100 text-yellow-800'
//       case 'CANCELLED':
//         return 'bg-red-100 text-red-800'
//       case 'BOOKED':
//         return 'bg-green-100 text-green-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const renderBookingDetails = (booking) => {
//     const details = booking.gem || booking.package || booking.static_package
//     if (!details) return null

//     return (
//       <div className="mt-4 bg-blue-50 p-4 rounded-lg">
//         <h4 className="font-semibold text-blue-800 mb-2">Booking Details</h4>
//         <p className="text-blue-600 mb-1">{details.description}</p>
//         <div className="flex items-center mb-1">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-500 mr-1">
//             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//           </svg>
//           <span className="text-blue-700">{details.rating} ({details.number_of_person_views} views)</span>
//         </div>
//         <p className="text-blue-600 mb-1">Best Time: {details.best_time}</p>
//         <p className="text-blue-600">{details.additional_info}</p>
//         {details.photos && details.photos.length > 0 && (
//           <div className="mt-2 flex space-x-2 overflow-x-auto">
//             {details.photos.map((photo, index) => (
//               <img key={index} src={photo} alt={`${details.name} - ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
//             ))}
//           </div>
//         )}
//       </div>
//     )
//   }

//   const renderGuideDetails = (guide) => {
//     if (!guide) return null

//     return (
//       <div className="mt-4 bg-blue-50 p-4 rounded-lg">
//         <h4 className="font-semibold text-blue-800 mb-2">Guide Details</h4>
//         <p className="text-blue-600 mb-1">Name: {guide.name}</p>
//         <p className="text-blue-600 mb-1">Price: ₹{guide.price.toFixed(2)}</p>
//         <div className="flex items-center mb-1">
//           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-500 mr-1">
//             <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//           </svg>
//           <span className="text-blue-700">{guide.rating}</span>
//         </div>
//         <p className="text-blue-600 mb-1">State: {guide.state}</p>
//         {guide.image && guide.image.length > 0 && (
//           <div className="mt-2 flex space-x-2 overflow-x-auto">
//             {guide.image.map((photo, index) => (
//               <img key={index} src={photo} alt={`${guide.name} - ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
//             ))}
//           </div>
//         )}
//       </div>
//     )
//   }

//   const renderCabDetails = (cab) => {
//     if (!cab) return null

//     return (
//       <div className="mt-4 bg-blue-50 p-4 rounded-lg">
//         <h4 className="font-semibold text-blue-800 mb-2">Cab Details</h4>
//         <p className="text-blue-600 mb-1">Car: {cab.car_name}</p>
//         <p className="text-blue-600 mb-1">Number Plate: {cab.number_plate}</p>
//         <p className="text-blue-600 mb-1">Capacity: {cab.number_of_persons} persons</p>
//         <p className="text-blue-600 mb-1">Price: ₹{cab.price.toFixed(2)}</p>
//         <p className="text-blue-600 mb-1">State: {cab.state}</p>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl font-bold text-blue-900 mb-8">User Profile</h1>
        
//         <div className="bg-white rounded-lg shadow-md p-6 mb-8">
//           <div className="flex items-center space-x-4">
//             <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold">
//               {user.profile_picture ? (
//                 <img src={user.profile_picture} alt={user.username} className="w-full h-full object-cover rounded-full" />
//               ) : (
//                 user.username.charAt(0).toUpperCase()
//               )}
//             </div>
//             <div>
//               <h2 className="text-2xl font-semibold text-blue-900">{user.username}</h2>
//               <p className="text-blue-600">{user.email}</p>
//               <p className="text-blue-500">{user.contact_number}</p>
//               <p className="text-blue-400">{user.state}</p>
//             </div>
//           </div>
//         </div>

//         <h2 className="text-2xl font-semibold text-blue-900 mb-4">Booking History</h2>
//         <div className="space-y-6">
//           {booking_history.map((booking, index) => (
//             <div key={booking.id} className="bg-white rounded-lg shadow-md p-6">
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
//                 <h3 className="text-xl font-semibold text-blue-800 mb-2 sm:mb-0">
//                   {booking.gem?.name || booking.package?.name || booking.static_package?.name || 'Unnamed Booking'}
//                 </h3>
//                 <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)} inline-block`}>
//                   {booking.status}
//                 </span>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
//                 <div className="flex items-center text-blue-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                     <line x1="16" y1="2" x2="16" y2="6" />
//                     <line x1="8" y1="2" x2="8" y2="6" />
//                     <line x1="3" y1="10" x2="21" y2="10" />
//                   </svg>
//                   <span>Travel Date: {formatDate(booking.travel_date)}</span>
//                 </div>
//                 <div className="flex items-center text-blue-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
//                     <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
//                     <circle cx="9" cy="7" r="4" />
//                     <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
//                     <path d="M16 3.13a4 4 0 0 1 0 7.75" />
//                   </svg>
//                   <span>Persons: {booking.number_of_persons}</span>
//                 </div>
//                 <div className="flex items-center text-blue-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
//                     <line x1="12" y1="1" x2="12" y2="23" />
//                     <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//                   </svg>
//                   <span>Price: ₹{booking.price.toFixed(2)}</span>
//                 </div>
//                 <div className="flex items-center text-blue-600">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
//                     <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//                     <circle cx="12" cy="10" r="3" />
//                   </svg>
//                   <span>{booking.gem?.state || booking.package?.state || booking.static_package?.state || 'N/A'}</span>
//                 </div>
//               </div>
//               {renderBookingDetails(booking)}
//               {renderGuideDetails(booking.guide)}
//               {renderCabDetails(booking.cab)}
//               {booking.static_package?.itinerary && (
//                 <div className="mt-4">
//                   <h4 className="font-semibold text-blue-800 mb-2">Itinerary</h4>
//                   {booking.static_package.itinerary.map((day, idx) => (
//                     <div key={idx} className="mb-2">
//                       <p className="font-medium text-blue-700">Day {day.day}: {day.description}</p>
//                       <p className="text-blue-600 text-sm">{day.activities}</p>
//                     </div>
//                   ))}
//                 </div>
//               )}
//               <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center" aria-label={`View full details for ${booking.gem?.name || booking.package?.name || booking.static_package?.name || 'Unnamed Booking'}`}>
//                 View Full Details
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1" aria-hidden="true">
//                   <polyline points="9 18 15 12 9 6" />
//                 </svg>
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }













import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const userData = {
  "user": {
    "id": "66cb1d310b73e59c7a074363",
    "username": "mayra",
    "email": "mayramalhotra1232@gmail.com",
    "contact_number": "6758935467",
    "state": "goa",
    "role": "USER",
    "profile_picture": null
  },
  "booking_history": [
    {
      "id": "66f408878d17d2c1da12a9f7",
      "gem": {
        "id": "66effd96750a3dfa616d3904",
        "name": "Hampi",
        "description": "An ancient village in Karnataka, Hampi is famous for its ruins of Vijayanagara Empire, a UNESCO World Heritage Site.",
        "state": "Gujarat",
        "photos": [
          "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
          "https://t4.ftcdn.net/jpg/01/28/09/39/360_F_128093989_O8eefaRlYneRc1TanYBDP6hXrYRry6UC.jpg"
        ],
        "rating": 5.0,
        "number_of_person_views": 6001,
        "price": 500.0,
        "best_time": "Winter",
        "additional_info": "Known for its ancient temples, beautiful boulders, and history.",
        "category": "HISTORICAL"
      },
      "package": null,
      "static_package": null,
      "guide": {
        "id": "66f28e3b632ceb45e6527aeb",
        "name": "Rajesh Singh",
        "price": 220.0,
        "available_dates": [
          "2024-01-10T00:00:00Z",
          "2024-02-22T00:00:00Z",
          "2024-03-15T00:00:00Z"
        ],
        "rating": 4.8,
        "state": "Gujarat",
        "image": [
          "https://example.com/images/rajeshsingh1.jpg",
          "https://example.com/images/rajeshsingh2.jpg"
        ]
      },
      "cab": {
        "id": "66cb2c3678a987172b5f78b3",
        "driver": "Driver object",
        "car_name": "Toyota Camry",
        "number_plate": "ABC123",
        "number_of_persons": 4,
        "price": 50.0,
        "available": true,
        "state": "Gujarat"
      },
      "booking_date": "2024-09-25T12:56:39.325000Z",
      "price": 770.0,
      "number_of_persons": 1,
      "status": "CANCELLED",
      "travel_date": "2024-12-30T00:00:00Z"
    },
    {
      "id": "66f410d08d17d2c1da12a9fa",
      "gem": null,
      "package": {
        "id": "66f4103c8d17d2c1da12a9f9",
        "name": "Vidhan's package",
        "places": [
          {
            "id": "66effd89750a3dfa616d3903",
            "name": "Rann of Kutch",
            "description": "A seasonal salt marsh in Gujarat, known for its white desert and the vibrant Rann Utsav festival.",
            "state": "Gujarat",
            "photos": [
              "https://www.tripsavvy.com/thmb/Yh7C0nh6CKbB5BmhRz3il-V8sm8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-537000923-541774dbe2d44759815fdf0719b04685.jpg",
              "https://www.rannutsavgujarat.in/thumb/media/0/0/fLwcdhrZsXKnmCSw6YFJN7jFE5RtP9zT.jpg"
            ],
            "rating": 4.6,
            "number_of_person_views": 7170,
            "price": 1000.0,
            "best_time": "Winter",
            "additional_info": "Best known for the white sand desert and cultural celebrations during Rann Utsav.",
            "category": "URBAN"
          },
          {
            "id": "66effd96750a3dfa616d3904",
            "name": "Hampi",
            "description": "An ancient village in Karnataka, Hampi is famous for its ruins of Vijayanagara Empire, a UNESCO World Heritage Site.",
            "state": "Gujarat",
            "photos": [
              "https://t4.ftcdn.net/jpg/03/75/40/73/360_F_375407347_spt4AF5sxsIt9gBIKVzJl95tiQhEGNXy.jpg",
              "https://t4.ftcdn.net/jpg/01/28/09/39/360_F_128093989_O8eefaRlYneRc1TanYBDP6hXrYRry6UC.jpg"
            ],
            "rating": 5.0,
            "number_of_person_views": 6001,
            "price": 500.0,
            "best_time": "Winter",
            "additional_info": "Known for its ancient temples, beautiful boulders, and history.",
            "category": "HISTORICAL"
          }
        ],
        "state": "Gujarat",
        "price": 30000.0,
        "number_of_persons": 20,
        "booked_at": "2024-09-25T13:29:32.476000Z",
        "guide": null
      },
      "static_package": null,
      "guide": {
        "id": "66f28e3b632ceb45e6527aeb",
        "name": "Rajesh Singh",
        "price": 220.0,
        "available_dates": [
          "2024-01-10T00:00:00Z",
          "2024-02-22T00:00:00Z",
          "2024-03-15T00:00:00Z"
        ],
        "rating": 4.8,
        "state": "Gujarat",
        "image": [
          "https://example.com/images/rajeshsingh1.jpg",
          "https://example.com/images/rajeshsingh2.jpg"
        ]
      },
      "cab": null,
      "booking_date": "2024-09-25T13:32:00.253000Z",
      "price": 30220.0,
      "number_of_persons": 20,
      "status": "PENDING",
      "travel_date": "2024-11-10T00:00:00Z"
    },
    {
      "id": "66f412888d17d2c1da12a9fb",
      "gem": null,
      "package": null,
      "static_package": {
        "id": "66f16cf9c000408191e9d6db",
        "name": "Royal Rajasthan Adventure",
        "description": "Explore the royal palaces and deserts of Rajasthan.",
        "state": "Rajasthan",
        "photos": [
          "https://example.com/rajasthan1.jpg",
          "https://example.com/rajasthan2.jpg",
          "https://example.com/rajasthan3.jpg",
          "https://example.com/rajasthan4.jpg"
        ],
        "rating": 4.7,
        "number_of_person_views": 200,
        "price": 399.99,
        "best_time": "Winter",
        "additional_info": "Includes camel safari and cultural shows.",
        "category": "ADVENTURE",
        "type": "DELUXE",
        "available_dates": [
          "2024-11-01T00:00:00Z",
          "2024-12-15T00:00:00Z",
          "2025-01-01T00:00:00Z"
        ],
        "slots": {
          "2024-11-01": 48,
          "2024-12-15": 31,
          "2025-01-01": 40
        },
        "itinerary": [
          {
            "day": 1,
            "description": "Arrival in Jaipur and visit to Amber Fort.",
            "activities": "Sightseeing, Cultural Experience",
            "images": [
              "https://example.com/rajasthan_day1.jpg"
            ]
          },
          {
            "day": 2,
            "description": "Exploring the Blue City of Jodhpur.",
            "activities": "City Tour, Photography",
            "images": [
              "https://example.com/rajasthan_day2.jpg"
            ]
          },
          {
            "day": 3,
            "description": "Desert safari in Jaisalmer.",
            "activities": "Camel Safari, Desert Camp",
            "images": [
              "https://example.com/rajasthan_day3.jpg"
            ]
          },
          {
            "day": 4,
            "description": "Visit to Udaipur, the City of Lakes.",
            "activities": "Boat Ride, Palace Visit",
            "images": [
              "https://example.com/rajasthan_day4.jpg"
            ]
          },
          {
            "day": 5,
            "description": "Departure from Udaipur.",
            "activities": "Free Time, Souvenir Shopping",
            "images": [
              "https://example.com/rajasthan_day5.jpg"
            ]
          }
        ]
      },
      "guide": {
        "id": "66f28e47632ceb45e6527aec",
        "name": "Priya Sharma",
        "price": 175.0,
        "available_dates": [
          "2024-10-03T00:00:00Z",
          "2024-11-17T00:00:00Z",
          "2024-12-25T00:00:00Z"
        ],
        "rating": 4.6,
        "state": "Rajasthan",
        "image": [
          "https://example.com/images/priyasharma1.jpg",
          "https://example.com/images/priyasharma2.jpg"
        ]
      },
      "cab": {
        "id": "66f2525191d419b02c79eb27",
        "driver": "Driver object",
        "car_name": "Mercedes-Benz E-Class",
        "number_plate": "MER1234",
        "number_of_persons": 4,
        "price": 80.0,
        "available": true,
        "state": "Rajasthan"
      },
      "booking_date": "2024-09-25T13:39:20.756000Z",
      "price": 654.99,
      "number_of_persons": 2,
      "status": "BOOKED",
      "travel_date": "2024-11-01T00:00:00Z"
    }
  ]
}

export default function UserProfile() {
    <Navbar/>
  const { user, booking_history } = userData
  const [activeTab, setActiveTab] = useState('profile')
  const [expandedBooking, setExpandedBooking] = useState(null)

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800'
      case 'CANCELLED':
        return 'bg-red-100 text-red-800'
      case 'BOOKED':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const renderBookingDetails = (booking) => {
    const details = booking.gem || booking.package || booking.static_package
    if (!details) return null

    return (
      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Booking Details</h4>
        <p className="text-blue-600 mb-1">{details.description}</p>
        <div className="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-500 mr-1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-blue-700">{details.rating} ({details.number_of_person_views} views)</span>
        </div>
        <p className="text-blue-600 mb-1">Best Time: {details.best_time}</p>
        <p className="text-blue-600">{details.additional_info}</p>
        {details.photos && details.photos.length > 0 && (
          <div className="mt-2 flex space-x-2 overflow-x-auto">
            {details.photos.map((photo, index) => (
              <img key={index} src={photo} alt={`${details.name} - ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderGuideDetails = (guide) => {
    if (!guide) return null

    return (
      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Guide Details</h4>
        <p className="text-blue-600 mb-1">Name: {guide.name}</p>
        <p className="text-blue-600 mb-1">Price: ₹{guide.price.toFixed(2)}</p>
        <div className="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-yellow-500 mr-1">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span className="text-blue-700">{guide.rating}</span>
        </div>
        <p className="text-blue-600 mb-1">State: {guide.state}</p>
        {guide.image && guide.image.length > 0 && (
          <div className="mt-2 flex space-x-2 overflow-x-auto">
            {guide.image.map((photo, index) => (
              <img key={index} src={photo} alt={`${guide.name} - ${index + 1}`} className="w-24 h-24 object-cover rounded-md" />
            ))}
          </div>
        )}
      </div>
    )
  }

  const renderCabDetails = (cab) => {
    if (!cab) return null

    return (
      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Cab Details</h4>
        <p className="text-blue-600 mb-1">Car: {cab.car_name}</p>
        <p className="text-blue-600 mb-1">Number Plate: {cab.number_plate}</p>
        <p className="text-blue-600 mb-1">Capacity: {cab.number_of_persons} persons</p>
        <p className="text-blue-600 mb-1">Price: ₹{cab.price.toFixed(2)}</p>
        <p className="text-blue-600 mb-1">State: {cab.state}</p>
      </div>
    )
  }

  const renderItinerary = (itinerary) => {
    if (!itinerary) return null

    return (
      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
        <h4 className="font-semibold text-blue-800 mb-2">Itinerary</h4>
        {itinerary.map((day, idx) => (
          <div key={idx} className="mb-4">
            <h5 className="font-medium text-blue-700">Day {day.day}: {day.description}</h5>
            <p className="text-blue-600 text-sm">{day.activities}</p>
            {day.images && day.images.length > 0 && (
              <img src={day.images[0]} alt={`Day ${day.day}`} className="mt-2 w-full h-40 object-cover rounded-md" />
            )}
          </div>
        ))}
      </div>
    )
  }

  const renderBookingCard = (booking) => {
    const isExpanded = expandedBooking === booking.id
    const details = booking.gem || booking.package || booking.static_package

    return (
      <div key={booking.id} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-blue-800 mb-2 sm:mb-0">
            {details?.name || 'Unnamed Booking'}
          </h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)} inline-block`}>
            {booking.status}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <span>Travel Date: {formatDate(booking.travel_date)}</span>
          </div>
          <div className="flex items-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>Persons: {booking.number_of_persons}</span>
          </div>
          <div className="flex items-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span>Price: ₹{booking.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{details?.state || 'N/A'}</span>
          </div>
        </div>
        {isExpanded && (
          <>
            {renderBookingDetails(booking)}
            {renderGuideDetails(booking.guide)}
            {renderCabDetails(booking.cab)}
            {booking.static_package && renderItinerary(booking.static_package.itinerary)}
          </>
        )}
        <button 
          className="mt-4 text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200"
          onClick={() => setExpandedBooking(isExpanded ? null : booking.id)}
          aria-expanded={isExpanded}
          aria-controls={`booking-details-${booking.id}`}
        >
          {isExpanded ? 'Hide Details' : 'View Details'}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-4 h-4 ml-1 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-8">User Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center text-blue-600 text-4xl font-bold">
              {user.profile_picture ? (
                <img src={user.profile_picture} alt={user.username} className="w-full h-full object-cover rounded-full" />
              ) : (
                user.username.charAt(0).toUpperCase()
              )}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold text-blue-900">{user.username}</h2>
              <p className="text-blue-600">{user.email}</p>
              <p className="text-blue-500">{user.contact_number}</p>
              <p className="text-blue-400 capitalize">{user.state}</p>
              <p className="text-blue-400 mt-2">Member since {formatDate(user.id.substring(0, 8))}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <nav className="flex space-x-4">
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`}
              onClick={() => setActiveTab('profile')}
            >
              Profile
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${activeTab === 'bookings' ? 'bg-blue-600 text-white' : 'text-blue-600 hover:bg-blue-100'}`}
              onClick={() => setActiveTab('bookings')}
            >
              Bookings
            </button>
          </nav>
        </div>

        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Profile Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Username</p>
                <p className="text-lg text-blue-800">{user.username}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-lg text-blue-800">{user.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Contact Number</p>
                <p className="text-lg text-blue-800">{user.contact_number}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">State</p>
                <p className="text-lg text-blue-800 capitalize">{user.state}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Role</p>
                <p className="text-lg text-blue-800">{user.role}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Booking History</h2>
            <div className="space-y-6">
              {booking_history.map(renderBookingCard)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}