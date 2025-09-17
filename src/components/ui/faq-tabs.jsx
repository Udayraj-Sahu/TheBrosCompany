
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = ({ title, subtitle, categories, faqData }) => {
  const [activeCategory, setActiveCategory] = useState(Object.keys(categories)[0]);

  return (
    <div className="w-full mx-auto py-10 md:py-16 bg-zinc-900 text-white rounded-lg shadow-xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center mb-4 leading-tight break-words"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base sm:text-xl text-zinc-400 text-center mb-10 md:mb-12 break-words"
      >
        {subtitle}
      </motion.p>

      <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-6">
        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-1/4 flex-shrink-0 mb-6 md:mb-0 min-w-0"
        >
          <div className="bg-zinc-800 rounded-lg p-4 space-y-2">
            {Object.entries(categories).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-full text-left px-2 py-2 md:py-3 rounded-md transition-colors duration-200 text-sm ${activeCategory === key
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                <span className="break-words">{name}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full md:w-3/4 space-y-4 min-w-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory} // Key change triggers re-animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {faqData[activeCategory] && faqData[activeCategory].map((faq, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 p-6 rounded-lg shadow-md"
                >
                  <details className="group cursor-pointer">
                    <summary className="flex justify-between items-center font-semibold text-base md:text-lg text-zinc-200 leading-relaxed break-words">
                      {faq.question}
                      <ChevronDown
                        size={24}
                        className="transform transition-transform duration-300 group-open:rotate-180 text-blue-400"
                      />
                    </summary>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export { FAQ }; 
