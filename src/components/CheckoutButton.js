import React from 'react';

const CheckoutButton = ({ stripeLink }) => {
  const handleCheckout = () => {
    window.location.href = stripeLink;
  };

  return (
    <button onClick={handleCheckout} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
      Buy Now
    </button>
  );
};

export default CheckoutButton;
