import React from "react";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <img
          src="/assets/cart1.png" // 👉 replace with your actual image path
          alt="About our food cart"
          className="rounded-3xl shadow-lg w-[90%] md:w-[80%] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          About Our Food Cart
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          We believe that great food brings people together. Our mission is to
          serve freshly prepared dishes made with love and locally sourced
          ingredients. From street-style favorites to classic comfort meals,
          every bite tells a story of flavor and passion.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
