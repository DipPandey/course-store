import React from 'react';

const CheckoutButton = ({ stripeLink }) => {
  const handleCheckout = () => {
    console.log("Stripe Link:", stripeLink); // For debugging
    if (stripeLink) {
      window.open(stripeLink, '_blank', 'noopener,noreferrer');
    } else {
      console.error("Stripe link is undefined");
    }
  };

  return (
    <button 
      onClick={handleCheckout} 
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
    >
      Buy Now
    </button>
  );
};

export default CheckoutButton;
