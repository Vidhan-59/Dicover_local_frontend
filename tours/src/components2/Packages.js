import React from "react";
import { useNavigate } from "react-router-dom";
import './Packages.css'; // For styling
import { FaStar, FaRupeeSign } from 'react-icons/fa';
import Navbar from "../components/Navbar";
const packageData = 
[
    {
        "id": "66f16cf9c000408191e9d6db",
        "name": "Royal Rajasthan Adventure",
        "description": "Explore the royal palaces and deserts of Rajasthan.",
        "state": "Rajasthan",
        "photos": [
            "https://media.istockphoto.com/id/942152278/photo/gadisar-lake-at-jaisalmer-rajasthan-at-sunrise-with-ancient-temples-and-archaeological-ruins.jpg?s=612x612&w=0&k=20&c=HvhbHZ8HH_lAjAAI2pmqL4mUipyyAwy31qp5jjKQTO0=",
            "https://media.istockphoto.com/id/494659822/photo/india-bada-bagh-cenotaph-in-jaisalmer-rajasthan.jpg?s=612x612&w=0&k=20&c=jKaURS6SI4HPmLKWv_m4MaFh2RgC94FoABfinqJPMGU=",
            "https://media.istockphoto.com/id/805563154/photo/mehrangharh-fort-and-jaswant-thada-mausoleum-in-jodhpur-rajasthan-india.jpg?s=612x612&w=0&k=20&c=5r9UxPkz9mIkfAIFPLyTwqBQyqSO7mcAdQtcqGHOboA=",
            "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_640.jpg"
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
            "2024-11-01": 50,
            "2024-12-15": 45,
            "2025-01-01": 40
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Jaipur and visit to Amber Fort.",
                "activities": "Sightseeing, Cultural Experience",
                "images": [
                    "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/menu/Tonk_jaa_masjid01.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Exploring the Blue City of Jodhpur.",
                "activities": "City Tour, Photography",
                "images": [
                    "https://static.toiimg.com/photo/36660445.cms"
                ]
            },
            {
                "day": 3,
                "description": "Desert safari in Jaisalmer.",
                "activities": "Camel Safari, Desert Camp",
                "images": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/c3/11/cd/caption.jpg?w=500&h=400&s=1"            
                ],
            },
            {
                "day": 4,
                "description": "Visit to Udaipur, the City of Lakes.",
                "activities": "Boat Ride, Palace Visit",
                "images": [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/33/75/c5/caption.jpg?w=1200&h=-1&s=1"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Udaipur.",
                "activities": "Free Time, Souvenir Shopping",
                "images": [
                    "https://images.herzindagi.info/image/2022/Jul/best-shopping-markets-in-udaipur.jpg"
                ]
            }
        ]
    },
    {
        "id": "66f16d14c000408191e9d6dc",
        "name": "Kerala Backwaters Escape",
        "description": "Relax on houseboats in the serene Kerala backwaters.",
        "state": "Kerala",
        "photos": [
            "https://example.com/kerala1.jpg",
            "https://example.com/kerala2.jpg",
            "https://example.com/kerala3.jpg",
            "https://example.com/kerala4.jpg"
        ],
        "rating": 4.9,
        "number_of_person_views": 300,
        "price": 499.99,
        "best_time": "Monsoon",
        "additional_info": "Includes houseboat stay and Ayurvedic treatments.",
        "category": "WILDLIFE",
        "type": "LUXURY",
        "available_dates": [
            "2024-07-01T00:00:00Z",
            "2024-08-15T00:00:00Z",
            "2024-09-01T00:00:00Z"
        ],
        "slots": {
            "2024-07-01": 60,
            "2024-08-15": 50,
            "2024-09-01": 40
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Cochin and backwater cruise.",
                "activities": "Houseboat Stay, Village Tour",
                "images": [
                    "https://example.com/kerala_day1.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Exploring Alleppey backwaters.",
                "activities": "Fishing, Photography",
                "images": [
                    "https://example.com/kerala_day2.jpg"
                ]
            },
            {
                "day": 3,
                "description": "Visit to Kumarakom Bird Sanctuary.",
                "activities": "Bird Watching, Nature Walk",
                "images": [
                    "https://example.com/kerala_day3.jpg"
                ]
            },
            {
                "day": 4,
                "description": "Day at Munnar Tea Gardens.",
                "activities": "Tea Plantation Tour, Trekking",
                "images": [
                    "https://example.com/kerala_day4.jpg"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Cochin.",
                "activities": "Shopping, Leisure Time",
                "images": [
                    "https://example.com/kerala_day5.jpg"
                ]
            }
        ]
    },
    {
        "id": "66f16d3fc000408191e9d6dd",
        "name": "Goa Beach Bonanza",
        "description": "Enjoy the sun, sand, and sea at the beaches of Goa.",
        "state": "Goa",
        "photos": [
            "https://example.com/goa1.jpg",
            "https://example.com/goa2.jpg",
            "https://example.com/goa3.jpg",
            "https://example.com/goa4.jpg"
        ],
        "rating": 4.6,
        "number_of_person_views": 180,
        "price": 299.99,
        "best_time": "Winter",
        "additional_info": "Includes beach parties and water sports.",
        "category": "BEACH",
        "type": "ECONOMY",
        "available_dates": [
            "2024-12-01T00:00:00Z",
            "2024-12-25T00:00:00Z",
            "2025-01-10T00:00:00Z"
        ],
        "slots": {
            "2024-12-01": 30,
            "2024-12-25": 25,
            "2025-01-10": 20
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Goa and beach exploration.",
                "activities": "Beach Walk, Sunset View",
                "images": [
                    "https://example.com/goa_day1.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Water sports and beach party.",
                "activities": "Jet Ski, Beach Party",
                "images": [
                    "https://example.com/goa_day2.jpg"
                ]
            },
            {
                "day": 3,
                "description": "Visit to historical churches.",
                "activities": "Sightseeing, Cultural Tour",
                "images": [
                    "https://example.com/goa_day3.jpg"
                ]
            },
            {
                "day": 4,
                "description": "Island hopping and snorkeling.",
                "activities": "Boat Ride, Snorkeling",
                "images": [
                    "https://example.com/goa_day4.jpg"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Goa.",
                "activities": "Shopping, Free Time",
                "images": [
                    "https://example.com/goa_day5.jpg"
                ]
            }
        ]
    },
    {
        "id": "66f16d7cc000408191e9d6de",
        "name": "Himalayan Trek Adventure",
        "description": "Experience the serene beauty of the Himalayas with this trekking package.",
        "state": "Uttarakhand",
        "photos": [
            "https://example.com/uttarakhand1.jpg",
            "https://example.com/uttarakhand2.jpg",
            "https://example.com/uttarakhand3.jpg",
            "https://example.com/uttarakhand4.jpg"
        ],
        "rating": 4.9,
        "number_of_person_views": 500,
        "price": 599.99,
        "best_time": "Summer",
        "additional_info": "Includes guide and all meals during the trek.",
        "category": "MOUNTAIN",
        "type": "LUXURY",
        "available_dates": [
            "2024-05-01T00:00:00Z",
            "2024-06-01T00:00:00Z",
            "2024-07-01T00:00:00Z"
        ],
        "slots": {
            "2024-05-01": 15,
            "2024-06-01": 20,
            "2024-07-01": 25
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Rishikesh and orientation.",
                "activities": "Orientation, Gear Check",
                "images": [
                    "https://example.com/uttarakhand_day1.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Start of the trek from Rishikesh.",
                "activities": "Trekking, Nature Walk",
                "images": [
                    "https://example.com/uttarakhand_day2.jpg"
                ]
            },
            {
                "day": 3,
                "description": "Reach the base camp in the Himalayas.",
                "activities": "Camping, Bonfire",
                "images": [
                    "https://example.com/uttarakhand_day3.jpg"
                ]
            },
            {
                "day": 4,
                "description": "Summit trek and return to base camp.",
                "activities": "Summit, Photography",
                "images": [
                    "https://example.com/uttarakhand_day4.jpg"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Rishikesh.",
                "activities": "Wrap-Up, Departure",
                "images": [
                    "https://example.com/uttarakhand_day5.jpg"
                ]
            }
        ]
    },
    {
        "id": "66f16dfbc000408191e9d6df",
        "name": "Kashmir Valley Escape",
        "description": "Discover the beautiful valleys of Kashmir.",
        "state": "Jammu and Kashmir",
        "photos": [
            "https://example.com/kashmir1.jpg",
            "https://example.com/kashmir2.jpg",
            "https://example.com/kashmir3.jpg",
            "https://example.com/kashmir4.jpg"
        ],
        "rating": 4.8,
        "number_of_person_views": 450,
        "price": 549.99,
        "best_time": "Spring",
        "additional_info": "Includes shikara ride and saffron farm visit.",
        "category": "BEACH",
        "type": "DELUXE",
        "available_dates": [
            "2024-03-01T00:00:00Z",
            "2024-04-01T00:00:00Z",
            "2024-05-01T00:00:00Z"
        ],
        "slots": {
            "2024-03-01": 35,
            "2024-04-01": 30,
            "2024-05-01": 25
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Srinagar and shikara ride.",
                "activities": "Shikara Ride, Houseboat Stay",
                "images": [
                    "https://example.com/kashmir_day1.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Exploring Gulmarg meadows.",
                "activities": "Cable Car, Hiking",
                "images": [
                    "https://example.com/kashmir_day2.jpg"
                ]
            },
            {
                "day": 3,
                "description": "Visit to Pahalgam valley.",
                "activities": "Sightseeing, Nature Walk",
                "images": [
                    "https://example.com/kashmir_day3.jpg"
                ]
            },
            {
                "day": 4,
                "description": "Saffron farm tour and local market visit.",
                "activities": "Cultural Tour, Shopping",
                "images": [
                    "https://example.com/kashmir_day4.jpg"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Srinagar.",
                "activities": "Shopping, Free Time",
                "images": [
                    "https://example.com/kashmir_day5.jpg"
                ]
            }
        ]
    },
    {
        "id": "66f16e2ec000408191e9d6e0",
        "name": "Spiritual Varanasi Journey",
        "description": "A spiritual retreat to the holy city of Varanasi.",
        "state": "Uttar Pradesh",
        "photos": [
            "https://example.com/varanasi1.jpg",
            "https://example.com/varanasi2.jpg",
            "https://example.com/varanasi3.jpg",
            "https://example.com/varanasi4.jpg"
        ],
        "rating": 4.5,
        "number_of_person_views": 320,
        "price": 199.99,
        "best_time": "Winter",
        "additional_info": "Includes Ganga Aarti and boat ride.",
        "category": "BEACH",
        "type": "DELUXE",
        "available_dates": [
            "2024-01-15T00:00:00Z",
            "2024-02-01T00:00:00Z",
            "2024-03-01T00:00:00Z"
        ],
        "slots": {
            "2024-01-15": 40,
            "2024-02-01": 35,
            "2024-03-01": 30
        },
        "itinerary": [
            {
                "day": 1,
                "description": "Arrival in Varanasi and Ganga Aarti.",
                "activities": "Evening Aarti, Cultural Experience",
                "images": [
                    "https://example.com/varanasi_day1.jpg"
                ]
            },
            {
                "day": 2,
                "description": "Boat ride on the Ganges.",
                "activities": "Morning Boat Ride, Temple Visit",
                "images": [
                    "https://example.com/varanasi_day2.jpg"
                ]
            },
            {
                "day": 3,
                "description": "Visit to Sarnath Buddhist site.",
                "activities": "Historical Tour, Meditation",
                "images": [
                    "https://example.com/varanasi_day3.jpg"
                ]
            },
            {
                "day": 4,
                "description": "Walking tour of old Varanasi.",
                "activities": "Walking Tour, Market Visit",
                "images": [
                    "https://example.com/varanasi_day4.jpg"
                ]
            },
            {
                "day": 5,
                "description": "Departure from Varanasi.",
                "activities": "Leisure Time, Departure",
                "images": [
                    "https://example.com/varanasi_day5.jpg"
                ]
            }
        ]
    }
]
const Packages = () => {
    const navigate = useNavigate();
  
    const handleCardClick = (id) => {
      navigate(`/package/${id}`);
    };
  
    return (
        <>
        <Navbar/>
      <div className="packages-container">
        {packageData.map((pkg) => (
          <div key={pkg.id} className="package-card" onClick={() => handleCardClick(pkg.id)}>
            <div className="package-image-container">
              <img src={pkg.photos[0]} alt={pkg.name} className="package-image" />
            </div>
            <div className="package-info">
              <h3 className="package-title h3-pack">{pkg.name}</h3>
              <div className="rating">
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color="gold" />
                <FaStar color={pkg.rating >= 4.5 ? "gold" : "gray"} />
                <span className="rating-number">{pkg.rating}</span>
              </div>
              <div className="price">
                <FaRupeeSign />
                <span className="amount">{pkg.price}</span>
            </div>
            <div>              
                <button className="book-now-btn">Book Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  };
  
  export default Packages;