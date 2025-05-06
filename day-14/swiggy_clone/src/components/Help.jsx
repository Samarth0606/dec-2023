import React from 'react'

const Help = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Need Help?</h1>
        <p className="text-center text-gray-600 mb-12">
          Find answers to common questions below or reach out to us if you need further assistance.
        </p>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How do I place an order?</h2>
            <p className="text-gray-600">To place an order, simply browse the menu, add items to your cart, and proceed to checkout. You can pay using various available methods.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">How can I track my order?</h2>
            <p className="text-gray-600">Once your order is placed, you can track its status live on the 'My Orders' page. We'll also send updates via SMS and email.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">What if I receive the wrong item?</h2>
            <p className="text-gray-600">We apologize for the inconvenience. Please contact our support team with your order details, and we'll resolve the issue promptly.</p>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Help