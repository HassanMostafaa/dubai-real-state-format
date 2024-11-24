import { motion } from 'framer-motion';
import { images } from '../assets/images';
import { useState } from 'react';

interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  image: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={property.image}
          alt={property.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 right-4">
          <span className="bg-dubai-gold text-secondary-800 px-4 py-2 rounded-lg font-semibold">
            {property.price}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-secondary-800 group-hover:text-dubai-night">
          {property.title}
        </h3>
        <p className="text-secondary-500 mb-4 flex items-center">
          <span className="text-dubai-sea mr-2">📍</span>
          {property.location}
        </p>
        <div className="flex justify-between items-center mb-4 text-secondary-600">
          <div className="flex space-x-4">
            <span className="flex items-center">
              <span className="text-dubai-gold mr-2">🛏️</span>
              {property.bedrooms} beds
            </span>
            <span className="flex items-center">
              <span className="text-dubai-sea mr-2">🚿</span>
              {property.bathrooms} baths
            </span>
          </div>
          <span className="flex items-center text-secondary-500">
            <span className="text-dubai-palm mr-2">📏</span>
            {property.area}
          </span>
        </div>
        <button className="w-full py-3 px-4 bg-dubai-night hover:bg-dubai-night-dark text-white rounded-lg transition-colors duration-300 flex items-center justify-center group-hover:bg-dubai-gold group-hover:text-secondary-800">
          View Details
          <span className="ml-2">→</span>
        </button>
      </div>
    </motion.div>
  );
};

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Penthouse with Dubai Marina View",
    location: "Dubai Marina",
    price: "$2,500,000",
    bedrooms: 3,
    bathrooms: 4,
    area: "2,500 sq ft",
    image: images.property1
  },
  {
    id: 2,
    title: "Modern Villa in Palm Jumeirah",
    location: "Palm Jumeirah",
    price: "$5,800,000",
    bedrooms: 5,
    bathrooms: 6,
    area: "4,200 sq ft",
    image: images.property2
  },
  {
    id: 3,
    title: "Downtown Dubai Apartment",
    location: "Downtown Dubai",
    price: "$1,800,000",
    bedrooms: 2,
    bathrooms: 2,
    area: "1,800 sq ft",
    image: images.property3
  }
];

const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in Dubai's most sought-after locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
