import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import CheckoutButton from '../components/CheckoutButton';
import { FaCode, FaReact, FaPython, FaBrain, FaChevronLeft, FaChevronRight, FaClock, FaGraduationCap, FaUsers } from 'react-icons/fa';

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
    demoVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Rick Roll for JavaScript :)
    syllabus: [
      'Week 1: Advanced Functions and Scope',
      'Week 2: Closures and Prototypes',
      'Week 3: Asynchronous JavaScript',
      'Week 4: ES6+ Features',
      'Week 5: Modules and Build Tools',
      'Week 6: Testing and Debugging',
      'Week 7: Performance Optimization',
      'Week 8: Real-world Project'
    ],
    testimonials: [
      {
        name: 'John Doe',
        comment: 'This course was amazing! I learned so much about JavaScript.',
        rating: 5
      },
      {
        name: 'Jane Smith',
        comment: 'Highly recommend this course to anyone looking to deepen their JS knowledge.',
        rating: 4
      }
    ],
    instructor: {
      name: 'Dr. JavaScript',
      bio: 'Dr. JavaScript has over 10 years of experience in web development and has taught thousands of students worldwide.',
      photo: 'https://via.placeholder.com/150'
    },
    highlights: [
      'In-depth coverage of advanced JavaScript topics',
      'Hands-on projects and real-world examples',
      'Access to a community of fellow learners'
    ],
    benefits: [
      'Lifetime access to the course',
      'Certificate of completion',
      'Downloadable resources and code samples'
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'Basic understanding of JavaScript and web development.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course.'
      }
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
    demoVideo: 'https://www.youtube.com/embed/Tn6-PIqc4UM', // React in 100 Seconds
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
    ],
    testimonials: [
      {
        name: 'Alice Johnson',
        comment: 'Great introduction to React. The projects were very helpful.',
        rating: 5
      },
      {
        name: 'Bob Brown',
        comment: 'I feel confident in building React apps after taking this course.',
        rating: 4
      }
    ],
    instructor: {
      name: 'React Master',
      bio: 'React Master has been developing with React since its inception and has a wealth of knowledge to share.',
      photo: 'https://via.placeholder.com/150'
    },
    highlights: [
      'Comprehensive introduction to React',
      'Hands-on projects and real-world examples',
      'Access to a community of fellow learners'
    ],
    benefits: [
      'Lifetime access to the course',
      'Certificate of completion',
      'Downloadable resources and code samples'
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'Basic understanding of JavaScript and web development.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course.'
      }
    ]
  },
  { 
    id: 3, 
    name: 'Python for Data Science', 
    description: 'Learn Python for data analysis and machine learning. Cover libraries like NumPy, Pandas, and Scikit-learn to analyze and visualize data.',
    price: 149.99, 
    stripeLink: 'https://buy.stripe.com/test_6oE5o4feGece7yU28a',
    icon: FaPython,
    duration: '12 weeks',
    level: 'Intermediate to Advanced',
    availableSeats: 25,
    demoVideo: 'https://www.youtube.com/embed/x7X9w_GIm1s', // Python in 100 Seconds
    syllabus: [
      'Week 1-2: Python Basics and Data Structures',
      'Week 3-4: NumPy and Mathematical Computing',
      'Week 5-6: Data Manipulation with Pandas',
      'Week 7-8: Data Visualization with Matplotlib and Seaborn',
      'Week 9-10: Introduction to Machine Learning with Scikit-learn',
      'Week 11-12: Final Project and Advanced Topics'
    ],
    testimonials: [
      {
        name: 'Charlie Davis',
        comment: 'This course provided a solid foundation in Python and data analysis.',
        rating: 5
      },
      {
        name: 'Dana Lee',
        comment: 'The machine learning section was particularly insightful.',
        rating: 4
      }
    ],
    instructor: {
      name: 'AI Guru',
      bio: 'AI Guru has been working in the field of AI and machine learning for over a decade.',
      photo: 'https://via.placeholder.com/150'
    },
    highlights: [
      'Comprehensive introduction to AI and machine learning',
      'Hands-on projects and real-world examples',
      'Access to a community of fellow learners'
    ],
    benefits: [
      'Lifetime access to the course',
      'Certificate of completion',
      'Downloadable resources and code samples'
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'Basic understanding of Python and data analysis.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course.'
      }
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
    demoVideo: 'https://www.youtube.com/embed/Qi1Yry33TQE', // Machine Learning in 100 Seconds
    syllabus: [
      'Week 1-2: Introduction to Machine Learning and Python for ML',
      'Week 3-4: Supervised Learning: Regression and Classification',
      'Week 5-6: Unsupervised Learning: Clustering and Dimensionality Reduction',
      'Week 7-8: Model Evaluation and Validation',
      'Week 9-10: Ensemble Methods and Random Forests',
      'Week 11-12: Introduction to Neural Networks and Deep Learning',
      'Week 13-14: Final Project and Advanced Topics'
    ],
    testimonials: [
      {
        name: 'Eve Martinez',
        comment: 'A comprehensive introduction to machine learning. Highly recommended!',
        rating: 5
      },
      {
        name: 'Frank Wilson',
        comment: 'The course content was well-structured and easy to follow.',
        rating: 4
      }
    ],
    instructor: {
      name: 'ML Expert',
      bio: 'ML Expert has been teaching machine learning for over 15 years and has a deep understanding of the subject.',
      photo: 'https://via.placeholder.com/150'
    },
    highlights: [
      'Comprehensive introduction to machine learning',
      'Hands-on projects and real-world examples',
      'Access to a community of fellow learners'
    ],
    benefits: [
      'Lifetime access to the course',
      'Certificate of completion',
      'Downloadable resources and code samples'
    ],
    faqs: [
      {
        question: 'What are the prerequisites for this course?',
        answer: 'Basic understanding of Python and statistics.'
      },
      {
        question: 'How long do I have access to the course?',
        answer: 'You have lifetime access to the course.'
      }
    ]
  },
];

const ScrollableSection = ({ title, items, renderItem }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="mt-8 relative">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex items-center">
        <button onClick={() => scroll(-200)} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 absolute left-0 z-10">
          <FaChevronLeft />
        </button>
        <div ref={scrollRef} className="flex overflow-x-auto space-x-4 p-4 scrollbar-hide">
          {items.map((item, index) => renderItem(item, index))}
        </div>
        <button onClick={() => scroll(200)} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 absolute right-0 z-10">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const [activeTab, setActiveTab] = useState('overview');

  if (!course) {
    return <div className="text-center text-red-500">Course not found</div>;
  }

  const Icon = course.icon;

  const TabContent = ({ tab }) => {
    switch(tab) {
      case 'overview':
        return (
          <div className="space-y-4">
            <p className="text-gray-600">{course.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-100 p-4 rounded-lg flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>{course.duration}</p>
                </div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg flex items-center">
                <FaGraduationCap className="text-green-500 mr-2" />
                <div>
                  <p className="font-semibold">Level</p>
                  <p>{course.level}</p>
                </div>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
                <FaUsers className="text-yellow-500 mr-2" />
                <div>
                  <p className="font-semibold">Available Seats</p>
                  <p>{course.availableSeats}</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'syllabus':
        return (
          <ul className="space-y-2">
            {course.syllabus.map((week, index) => (
              <li key={index} className="bg-gray-100 p-3 rounded-lg">{week}</li>
            ))}
          </ul>
        );
      case 'instructor':
        return (
          <div className="flex items-center space-x-4">
            <img src={course.instructor.photo} alt={course.instructor.name} className="w-24 h-24 rounded-full" />
            <div>
              <h3 className="text-xl font-bold">{course.instructor.name}</h3>
              <p className="text-gray-600">{course.instructor.bio}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto p-6">
        <Link to="/" className="text-blue-500 hover:text-blue-600 mb-4 inline-block">&larr; Back to Courses</Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src="https://via.placeholder.com/1200x400" alt="Course banner" className="w-full h-64 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">{course.name}</h1>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <Icon className="text-5xl text-blue-500" />
                <span className="text-2xl font-bold">${course.price.toFixed(2)}</span>
              </div>
              <CheckoutButton stripeLink={course.stripeLink} />
            </div>
            <div className="sticky top-0 bg-white z-10">
              <div className="flex space-x-4 border-b">
                {['overview', 'syllabus', 'instructor'].map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 focus:outline-none ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <TabContent tab={activeTab} />
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Course Demo</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              src={course.demoVideo} 
              title="Course Demo" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        <ScrollableSection
          title="Course Highlights"
          items={course.highlights}
          renderItem={(highlight, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg flex-shrink-0 w-80">
              <p className="text-white">{highlight}</p>
            </div>
          )}
        />

        <ScrollableSection
          title="Enrollment Benefits"
          items={course.benefits}
          renderItem={(benefit, index) => (
            <div key={index} className="bg-gradient-to-r from-green-500 to-teal-500 p-6 rounded-lg shadow-lg flex-shrink-0 w-80">
              <p className="text-white">{benefit}</p>
            </div>
          )}
        />

        <ScrollableSection
          title="Frequently Asked Questions"
          items={course.faqs}
          renderItem={(faq, index) => (
            <div key={index} className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-lg shadow-lg flex-shrink-0 w-80">
              <p className="font-bold text-white">{faq.question}</p>
              <p className="text-white mt-2">{faq.answer}</p>
            </div>
          )}
        />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                <p className="mt-2 font-semibold">{testimonial.name}</p>
                <div className="text-yellow-500 mt-1">
                  {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;