import React, { useEffect, useState } from 'react';

const CrimeDataWidget = () => {
  const [stabbingCount, setStabbingCount] = useState(0);

  useEffect(() => {
    // Simulate fetching real-time crime data (replace with actual API call)
    // Example API URL: https://api.example.com/crime-data?location=myLocation&crime=stabbing
    fetch('https://api.example.com/crime-data?location=myLocation&crime=stabbing', {
      headers: {
        Authorization: 'Bearer YOUR_API_KEY', // Replace with your API key
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Extract and update the stabbing count from the API response
        setStabbingCount(data.stabbingCount);
      })
      .catch((error) => {
        console.error('Error fetching crime data:', error);
      });
  }, []);

  return (
    <div className="crime-widget">
      <h3>Stabbings Near You</h3>
      <p>Number of stabbings in your area: {stabbingCount}</p>
    </div>
  );
};

export default CrimeDataWidget;
