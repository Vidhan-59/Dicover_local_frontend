import React, { useState, useEffect } from 'react';
import { FaStar, FaUserAlt, FaRupeeSign } from 'react-icons/fa'; // Icons used in the card
import './DestinationPage.css'; // Import the separate CSS file

const DestinationPage = () => {
  const [destinations, setDestinations] = useState([]); // State for storing destinations
  const [selectedDestination, setSelectedDestination] = useState(null);

  // Function to fetch hidden gems from the API
  const fetchDestinations = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/hidden_gems/'); // Make GET request
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDestinations(data); // Set the fetched destinations in state
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  // Fetch destinations on component mount
  useEffect(() => {
    fetchDestinations();
  }, []);

  // Close the modal when clicked outside of it
  const handleOutsideClick = (event) => {
    if (event.target.id === 'modal-background') {
      setSelectedDestination(null);
    }
  };

  return (
    <div className="container">
      <div className="grid">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="card"
            onClick={() => setSelectedDestination(destination)}
          >
            {/* Image Section */}
            <div className="overflow-hidden">
              <img
                src={destination.photos[0]} // Use the first photo for the card
                alt={destination.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="card-content">
              <h3 className="card-title">{destination.name}</h3>
              <p className="card-description">{destination.description}</p>
              <div className="card-rating">
                <FaStar className="icon" />
                <span>{destination.rating} Rating</span>
              </div>
              <div className="card-views">
                <FaUserAlt className="icon" />
                <span>{destination.number_of_person_views} views</span>
              </div>
              <div className="card-price">
                <FaRupeeSign className="icon" /> {destination.price.toFixed(2)}
              </div>
              <div className="card-additional-info">
                Best Time to Visit: <strong>{destination.best_time}</strong>
              </div>

              {/* Add to Package Button */}
              <button className="btn">Add to Package</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Destination */}
      {selectedDestination && (
        <div
          id="modal-background"
          className="modal-background"
          onClick={handleOutsideClick}
        >
          <div className="modal">
            {/* Close Modal */}
            <button
              className="modal-close"
              onClick={() => setSelectedDestination(null)}
            >
              ✖
            </button>

            {/* Modal Content */}
            <div>
              {/* Larger Images */}
              <div className="modal-images">
                {selectedDestination.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="w-64 h-64 object-cover rounded-md"
                  />
                ))}
              </div>

              {/* Destination Details */}
              <div className="modal-content">
                {selectedDestination.state && (
                  <p>
                    <strong>State:</strong> {selectedDestination.state}
                  </p>
                )}
                {selectedDestination.additional_info && (
                  <p>
                    <strong>Additional Info:</strong> {selectedDestination.additional_info}
                  </p>
                )}
                {selectedDestination.category && (
                  <p>
                    <strong>Category:</strong> {selectedDestination.category}
                  </p>
                )}
              </div>

              {/* Add to Package Button */}
              <button className="btn">Add to Package</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationPage;
