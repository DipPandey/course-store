import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import { AuthContext } from '../contexts/AuthContext';
import { FaReact, FaNodeJs, FaRobot, FaBrain } from 'react-icons/fa';

const courses = [
  { 
    id: 1, 
    title: 'React for Beginners', 
    price: 99, 
    Icon: FaReact, 
    stripeLink: 'https://buy.stripe.com/test_6oE3fW9Um8RUg5q8ww',
    totalSeats: 50,
    availableSeats: 15
  },
  { 
    id: 2, 
    title: 'Advanced Node.js', 
    price: 120, 
    Icon: FaNodeJs, 
    stripeLink: 'https://buy.stripe.com/test_00g8AgaYqece6uQ7st',
    totalSeats: 40,
    availableSeats: 5
  },
  { 
    id: 3, 
    title: 'Building Full Stack with AI', 
    price: 149, 
    Icon: FaRobot, 
    stripeLink: 'https://buy.stripe.com/test_6oE5o4feGece7yU28a',
    totalSeats: 30,
    availableSeats: 30
  },
  { 
    id: 4, 
    title: 'Machine Learning Fundamentals', 
    price: 129, 
    Icon: FaBrain, 
    stripeLink: 'https://buy.stripe.com/test_8wMaIo0jM4BEg5q8wz',
    totalSeats: 35,
    availableSeats: 0
  }
];

const HeroSection = () => (
  <div className="bg-blue-600 text-white py-20 mb-12 rounded-lg shadow-lg">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl font-extrabold mb-4">Level Up Your Coding & AI Skills</h1>
      <p className="text-xl mb-8">Join thousands of developers who have transformed their careers with our premium courses, now including cutting-edge AI topics!</p>
      <a href="#courses" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Explore Courses
      </a>
    </div>
  </div>
);

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Course Platform</h1>
          {user ? (
            <div>
              <span className="mr-4">Welcome, {user.email}</span>
              <button 
                onClick={logout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link to="/login" className="mr-4 text-blue-500 hover:text-blue-600">Login</Link>
              <Link to="/register" className="text-blue-500 hover:text-blue-600">Register</Link>
            </div>
          )}
        </nav>
        <HeroSection />
        <div id="courses">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
            Our Premium Courses
          </h2>
          <p className="text-lg text-center text-gray-600 mb-6">
            Learn from the best in the industry. Select a course to get started!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;