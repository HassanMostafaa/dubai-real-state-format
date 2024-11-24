import { motion } from 'framer-motion';
import { images } from '../assets/images';
import { useState } from 'react';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={images.dubaiSkyline}
          alt="Dubai Skyline"
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Luxury Living in
            <span className="text-dubai-gold"> Dubai</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-dubai-sand-light">
            Discover exceptional properties in the heart of the most prestigious locations
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-dubai-gold hover:bg-dubai-gold-dark text-secondary-800 font-semibold rounded-lg transition-colors duration-300">
              Explore Properties
            </button>
            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 font-semibold rounded-lg transition-colors duration-300">
              Schedule Viewing
            </button>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-4xl mx-auto border border-white/20"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Location"
                className="w-full p-3 bg-white/10 text-white placeholder-white/60 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dubai-gold"
              />
            </div>
            <div className="flex-1">
              <select className="w-full p-3 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dubai-gold">
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </select>
            </div>
            <div className="flex-1">
              <select className="w-full p-3 bg-white/10 text-white border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dubai-gold">
                <option value="">Price Range</option>
                <option value="1">$500k - $1M</option>
                <option value="2">$1M - $2M</option>
                <option value="3">$2M+</option>
              </select>
            </div>
            <button className="px-8 py-3 bg-dubai-gold hover:bg-dubai-gold-dark text-secondary-800 font-semibold rounded-lg transition-colors duration-300">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
