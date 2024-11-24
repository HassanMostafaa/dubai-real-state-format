import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      id: 1,
      title: "Premium Locations",
      description: "Access to the most prestigious addresses in Dubai",
      icon: "🌟"
    },
    {
      id: 2,
      title: "Expert Guidance",
      description: "Professional real estate consultants at your service",
      icon: "👨‍💼"
    },
    {
      id: 3,
      title: "Luxury Portfolio",
      description: "Handpicked selection of high-end properties",
      icon: "🏰"
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your needs",
      icon: "🕒"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Why Choose Dubai Estates?</h2>
            <p className="text-gray-600 mb-8">
              With years of experience in Dubai's luxury real estate market, we offer unparalleled service
              and access to the most exclusive properties in the region. Our commitment to excellence
              ensures your journey to finding the perfect property is seamless and rewarding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="/images/about-image.jpg"
                alt="Luxury Dubai Property"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-8 rounded-lg">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-primary">500+</h4>
                  <p className="text-gray-600">Properties Sold</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">98%</h4>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-primary">15+</h4>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
