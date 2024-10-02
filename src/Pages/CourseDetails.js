import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CheckoutButton from '../components/CheckoutButton';
import { FaCode, FaReact, FaPython, FaBrain } from 'react-icons/fa';

const courses = [
  { 
    id: 1, 
    name: 'Advanced JavaScript', 
    description: 'Master modern JavaScript concepts and practices. This course covers advanced topics such as closures, prototypes, async programming, and ES6+ features.',
    price: 99.99, 
    stripeLink: 'https://buy.stripe.com/test_00g8AgaYqece6uQ7st',
    icon: FaCode,
    duration: '8 weeks',
    level: 'Intermediate',
    availableSeats: 20,
    syllabus: [
      'Week 1: Advanced Functions and Scope',
      'Week 2: Closures and Prototypes',
      'Week 3: Asynchronous JavaScript',
      'Week 4: ES6+ Features',
      'Week 5: Modules and Build Tools',
      'Week 6: Testing and Debugging',
      'Week 7: Performance Optimization',
      'Week 8: Real-world Project'
    ]
  },
  { 
    id: 2, 
    name: 'React Fundamentals', 
    description: 'Build powerful web applications with React. Learn component-based architecture, state management, and how to create responsive UIs.',
    price: 129.99, 
    stripeLink: 'https://buy.stripe.com/test_6oE3fW9Um8RUg5q8ww',
    icon: FaReact,
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    availableSeats: 15,
    syllabus: [
      'Week 1: Introduction to React and JSX',
      'Week 2: Components and Props',
      'Week 3: State and Lifecycle',
      'Week 4: Handling Events and Forms',
      'Week 5: Conditional Rendering and Lists',
      'Week 6: Hooks (useState, useEffect)',
      'Week 7: Context API and useContext',
      'Week 8: React Router',
      'Week 9: State Management with Redux',
      'Week 10: Building a Full React Application'
    ]
  },
  { 
    id: 3, 
    name: 'Building full stack web apps with React and Node.js using AI', 
    description: 'Learn Python for data analysis and machine learning. Cover libraries like NumPy, Pandas, and Scikit-learn to analyze and visualize data.',
    price: 149.99, 
    stripeLink: 'https://buy.stripe.com/test_6oE5o4feGece7yU28a',
    icon: FaPython,
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    availableSeats: 25,
    syllabus: [
      'Week 1-2: Python Basics and Data Structures',
      'Week 3-4: NumPy and Mathematical Computing',
      'Week 5-6: Data Manipulation with Pandas',
      'Week 7-8: Data Visualization with Matplotlib and Seaborn',
      'Week 9-10: Introduction to Machine Learning with Scikit-learn',
      'Week 11-12: Final Project and Advanced Topics'
    ]
  },
  { 
    id: 4, 
    name: 'Machine Learning Fundamentals', 
    description: 'Introduction to core machine learning concepts and algorithms. Learn about supervised and unsupervised learning, neural networks, and deep learning basics.',
    price: 199.99, 
    stripeLink: 'https://buy.stripe.com/test_8wMaIo0jM4BEg5q8wz',
    icon: FaBrain,
    duration: '14 weeks',
    level: 'Advanced',
    availableSeats: 18,
    syllabus: [
      'Week 1-2: Introduction to Machine Learning and Python for ML',
      'Week 3-4: Supervised Learning: Regression and Classification',
      'Week 5-6: Unsupervised Learning: Clustering and Dimensionality Reduction',
      'Week 7-8: Model Evaluation and Validation',
      'Week 9-10: Ensemble Methods and Random Forests',
      'Week 11-12: Introduction to Neural Networks and Deep Learning',
      'Week 13-14: Final Project and Advanced Topics'
    ]
  },
];

const CourseDetails = () => {
  console.log("CourseDetails component rendered");
  const { id } = useParams();
  console.log("Course ID:", id);
  const course = courses.find(c => c.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  const Icon = course.icon;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Courses</Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <Icon className="text-5xl text-blue-500 mr-4" />
            <h1 className="text-3xl font-bold">{course.name}</h1>
          </div>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="mb-4">
            <p className="text-gray-700"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-gray-700"><strong>Level:</strong> {course.level}</p>
            <p className="text-gray-700"><strong>Available Seats:</strong> {course.availableSeats}</p>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-4">${course.price.toFixed(2)}</p>
          <CheckoutButton stripeLink={course.stripeLink} />
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Course Syllabus</h2>
          <ul className="list-disc pl-5">
            {course.syllabus.map((week, index) => (
              <li key={index} className="mb-2">{week}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;