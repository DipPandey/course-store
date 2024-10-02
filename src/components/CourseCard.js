import React from 'react';

const CourseCard = ({ course }) => {
  const { title, price, Icon, stripeLink, totalSeats, availableSeats } = course;

  const getAvailabilityColor = () => {
    if (availableSeats === 0) return 'bg-red-500';
    if (availableSeats <= 5) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getAvailabilityText = () => {
    if (availableSeats === 0) return 'Sold Out';
    if (availableSeats <= 5) return 'Almost Full';
    return `${availableSeats} Seats Left`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          {Icon && <Icon className="text-6xl text-blue-500" />}
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500">
            {totalSeats} Total Seats
          </span>
          <span className={`text-sm font-semibold text-white px-2 py-1 rounded ${getAvailabilityColor()}`}>
            {getAvailabilityText()}
          </span>
        </div>
        <a
          href={stripeLink}
          className={`block w-full text-white text-center font-bold py-2 px-4 rounded transition duration-300 ${
            availableSeats === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={(e) => availableSeats === 0 && e.preventDefault()}
        >
          {availableSeats === 0 ? 'Sold Out' : 'Enroll Now'}
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
