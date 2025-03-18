'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop",
    alt: "Students in a modern classroom"
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2000&auto=format&fit=crop",
    alt: "Students collaborating"
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop",
    alt: "Teacher helping students"
  }
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Images with Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImageIndex].src}
              alt={heroImages[currentImageIndex].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content */}
        <div className="container mx-auto px-6 relative h-full flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              The Future of Education is{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                AI-Powered
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Skooler AI brings the power of artificial intelligence to your school, making teaching and learning more efficient and effective.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                href="/features" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                  alt="AI Teacher Assistant"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Teacher Assistant</h3>
              <p className="text-gray-600">
                Get intelligent assistance for lesson planning, content creation, and student engagement strategies.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                  alt="Smart Homework Evaluation"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Homework Evaluation</h3>
              <p className="text-gray-600">
                Automatically evaluate student homework with AI, providing detailed feedback and insights.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
                  alt="AI-Powered Grading"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI-Powered Grading</h3>
              <p className="text-gray-600">
                Streamline the grading process with AI that understands context and provides fair, consistent assessments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-600">Schools Using Skooler</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50K+</h3>
              <p className="text-gray-600">Students Benefiting</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600">Teacher Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">AI Support Available</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Transform Your School?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the future of education with Skooler&apos;s AI-powered learning management system.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 inline-block"
            >
              Schedule a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
