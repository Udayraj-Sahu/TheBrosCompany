import React, { useState, useRef, useEffect } from "react";
import CarCard from "./CarCard";
import { motion, useInView } from "framer-motion";
import { carData } from "../data/carData";
import { ArrowRight } from "lucide-react";
// import TiltedCarCard from "./TiltedCarCard"; // Removed

function FeaturedCars() {
  const featuredCars = carData.filter((car) => car.featured && car.available);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  
  const sectionInView = useInView(sectionRef, { 
    once: true, 
    margin: "-50px 0px -50px 0px" 
  });
  
  const buttonInView = useInView(buttonRef, { 
    once: true, 
    margin: "-100px 0px -100px 0px" 
  });

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  // Determine the number of cards to show based on screen width
  const carsToShow = isDesktop
    ? featuredCars.slice(0, 8)
    : featuredCars.slice(0, 3);

  return (
    <div className="w-full py-10 md:py-20 relative z-30 bg-rich_black overflow-hidden">
      {/* Background elements for enhanced visual appeal */}
      <div className="absolute inset-0 bg-gradient-to-br from-yinmn_blue/5 to-silver_lake_blue/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yinmn_blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-silver_lake_blue/10 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <div className="w-full px-4 sm:px-10 md:px-20 border-b border-silver_lake_blue pb-10" ref={sectionRef}>
          <motion.h1 
            className="text-5xl md:text-7xl tracking-tight text-platinum"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={sectionInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 1,
                ease: [0.25, 0.4, 0.25, 1]
              }
            } : {}}
          >
            Featured Cars
          </motion.h1>
          <motion.p 
            className="text-silver_lake_blue mt-4 text-lg"
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={sectionInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.2,
                ease: [0.25, 0.4, 0.25, 1]
              }
            } : {}}
          >
            Discover our handpicked selection of premium vehicles
          </motion.p>
        </div>

        {/* Enhanced grid with tilted cards */}
        <div className="px-4 sm:px-10 md:px-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {carsToShow.map((car, index) => (
            <CarCard key={car.id || index} car={car} onBookNow={() => {}} />
          ))}
        </div>

        <motion.div 
          ref={buttonRef}
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={buttonInView ? { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.4, 0.25, 1]
            }
          } : {}}
        >
          <a
            href="/services"
            className="inline-flex items-center gap-3 text-lg font-semibold text-platinum bg-yinmn_blue px-8 py-4 rounded-full hover:bg-silver_lake_blue hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Cars
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default FeaturedCars;