import React from 'react';
import { Link } from 'react-router-dom';
import CheckoutButton from './CheckoutButton';

const CourseCard = ({ course }) => {
  console.log(`Generating link for course ${course.id}: /CourseDetails/${course.id}`);
  const Icon = course.icon;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="text-3xl text-blue-500 mr-2" />
          <h3 className="text-xl font-semibold">{course.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="mb-4">
          <p className="text-sm text-gray-500">Duration: {course.duration}</p>
          <p className="text-sm text-gray-500">Level: {course.level}</p>
          <p className="text-sm text-gray-500">Available Seats: {course.availableSeats}</p>
        </div>
        <p className="text-2xl font-bold text-blue-600 mb-4">${course.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/CourseDetails/${course.id}`} 
            className="text-blue-500 hover:text-blue-600 underline"
          >
            View Details
          </Link>
          <CheckoutButton stripeLink={course.stripeLink} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
