import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import CourseCard from '../components/CourseCard';
import { FaCode, FaReact, FaPython, FaBrain } from 'react-icons/fa';

const courses = [
  { 
    id: 1, 
    name: 'Advanced JavaScript', 
    description: 'Master modern JavaScript concepts and practices.',
    price: 99.99, 
    stripeLink: 'https://buy.stripe.com/test_yourLinkForJavaScriptCourse',
    icon: FaCode,
    duration: '8 weeks',
    level: 'Intermediate',
    availableSeats: 20
  },
  { 
    id: 2, 
    name: 'React Fundamentals', 
    description: 'Build powerful web applications with React.',
    price: 129.99, 
    stripeLink: 'https://buy.stripe.com/test_yourLinkForReactCourse',
    icon: FaReact,
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    availableSeats: 15
  },
  { 
    id: 3, 
    name: 'Python for Data Science', 
    description: 'Learn Python for data analysis and machine learning.',
    price: 149.99, 
    stripeLink: 'https://buy.stripe.com/test_yourLinkForPythonCourse',
    icon: FaPython,
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    availableSeats: 25
  },
  { 
    id: 4, 
    name: 'Machine Learning Fundamentals', 
    description: 'Introduction to core machine learning concepts and algorithms.',
    price: 199.99, 
    stripeLink: 'https://buy.stripe.com/test_yourLinkForMLCourse',
    icon: FaBrain,
    duration: '14 weeks',
    level: 'Advanced',
    availableSeats: 18
  }
];

const HeroSection = () => (
  <div className="bg-blue-600 text-white py-20 mb-12 rounded-lg shadow-lg">
    <div className="container mx-auto px-6">
      <h1 className="text-5xl font-extrabold mb-4">Level Up Your Coding & AI Skills</h1>
      <p className="text-xl mb-8">Join our premium courses and transform your career in tech.</p>
      <a href="#courses" className="bg-white text-blue-600 py-3 px-6 rounded-full font-bold hover:bg-blue-100 transition duration-300">
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
