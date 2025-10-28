import React from 'react';
import cart1 from '../assets/cart1.jpg';
import cart2 from '../assets/cart2.jpg';
import cart3 from '../assets/cart3.jpg';

const Gallery = () => {
  const carts = [
    { img: cart1, title: 'Classic Burger Cart', desc: 'Perfect for quick-service burgers and fries with premium equipment.' },
    { img: cart2, title: 'Taco Truck Style', desc: 'Authentic Mexican cuisine on wheels with vibrant branding.' },
    { img: cart3, title: 'Dessert Cart', desc: 'Sweet treats and ice cream delights for dessert lovers.' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white animate-fade-in animate-delay-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore some of our recent custom food cart builds. Each one is uniquely designed to meet our clients' specific needs and visions with exceptional quality.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {carts.map((cart, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img src={cart.img} alt={cart.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{cart.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cart.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
