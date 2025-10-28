import React from 'react';
import { Link } from 'react-router-dom';
import cart2 from '../assets/cart2.jpg';
import cart3 from '../assets/cart3.jpg';

function FoodCarts() {
  // You can fetch this data from an API or define it locally
  const foodCartProducts = [
    {
      id: 1,
      name: 'Modern Coffee Cart',
      image: cart2, // Use your cart images
      description: 'Sleek design, perfect for artisan coffee on the go.',
      price: '$18,500',
    },
    {
      id: 2,
      name: 'Vibrant Taco Truck',
      image: cart3,
      description: 'Eye-catching and fully equipped for a bustling taco business.',
      price: '$32,000',
    },
    {
      id: 3,
      name: 'Gourmet Hot Dog Stand',
      image: '/gourmet-hotdog.jpg', // You might need a new image for this
      description: 'Classic look, ideal for high-volume hot dog and snack sales.',
      price: '$12,000',
    },
    {
      id: 4,
      name: 'Artisan Crepe Cart',
      image: '/crepe-cart.jpg', // You might need a new image for this
      description: 'Charming and efficient for delicious crepes and desserts.',
      price: '$16,000',
    },
    {
      id: 5,
      name: 'Mobile Pizzeria',
      image: '/pizza-cart.jpg', // You might need a new image for this
      description: 'Custom-built with a wood-fired oven for authentic pizzas.',
      price: '$45,000',
    },
    {
      id: 6,
      name: 'Vintage Ice Cream Truck',
      image: '/icecream-cart.jpg', // You might need a new image for this
      description: 'Retro style with modern refrigeration for a sweet business.',
      price: '$28,000',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-gray-800 text-center mb-10">
          Explore Our Food Carts
        </h1>
        <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Find the perfect mobile kitchen to kickstart your culinary dream.
          From compact carts to full-sized trucks, we have a solution for every vision.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {foodCartProducts.map((cart) => (
            <div
              key={cart.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={cart.image}
                alt={cart.name}
                className="w-full h-72 object-cover object-center"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">{cart.name}</h2>
                <p className="text-gray-700 text-base mb-4">{cart.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-orange-600 text-xl font-bold">{cart.price}</span>
                  <Link
                    to={`/foodcarts/${cart.id}`} // Link to a potential detail page
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action for Custom Builds */}
        <div className="text-center mt-20 p-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-xl mb-8">
            Let us build your dream food cart from scratch.
          </p>
          <Link
            to="/custombuild"
            className="inline-block bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg shadow-md transform hover:scale-105 transition-all duration-300"
          >
            Start a Custom Build
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodCarts;