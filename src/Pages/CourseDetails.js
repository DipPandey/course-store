import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaReact, FaNodeJs } from 'react-icons/fa';

const courses = [
  { 
    id: 1, 
    name: 'React Course', 
    description: 'Master React with our comprehensive course. Learn to build dynamic, interactive web applications from the ground up. Perfect for beginners and intermediate developers looking to level up their skills.',
    price: 99.99, 
    stripeLink: 'https://buy.stripe.com/test_6oE3fW9Um8RUg5q8ww',
    icon: FaReact,
    duration: '10 weeks',
    level: 'Beginner to Intermediate'
  },
  { 
    id: 2, 
    name: 'Node.js Course', 
    description: 'Dive into server-side JavaScript with our Node.js course. Learn to build scalable and efficient web applications using Node.js and Express. Ideal for developers looking to expand their full-stack capabilities.',
    price: 89.99, 
    stripeLink: 'https://buy.stripe.com/test_00g8AgaYqece6uQ7st',
    icon: FaNodeJs,
    duration: '8 weeks',
    level: 'Intermediate'
  },
];

function CourseDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  React.useEffect(() => {
    if (!course) {
      navigate('/courses');
    }
  }, [course, navigate]);

  if (!course) {
    return <div className="flex justify-center items-center h-screen text-xl text-gray-700">Loading...</div>;
  }

  const handlePurchase = () => {
    window.location.href = course.stripeLink;
  };

  const IconComponent = course.icon;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="h-72 bg-gradient-to-r from-blue-500 to-purple-600 relative flex justify-center items-center">
          <IconComponent className="text-white w-40 h-40" />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-6">
            <h1 className="text-3xl font-bold text-white">{course.name}</h1>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 text-lg mb-4">{course.description}</p>
          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              {course.duration}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
              {course.level}
            </span>
          </div>
          <div className="text-4xl font-bold text-green-600 mb-6">${course.price}</div>
          <button 
            onClick={handlePurchase}
            className="w-full bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
