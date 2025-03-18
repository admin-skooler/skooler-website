'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Powerful AI Features for Modern Education
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Discover how Skooler&apos;s AI-powered platform transforms the way teachers teach and students learn.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* AI Teacher Assistant */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="AI Teacher Assistant"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">AI Teacher Assistant</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Intelligent lesson planning assistance
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Content creation and resource recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Student engagement strategies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Personalized teaching recommendations
                </li>
              </ul>
            </div>
          </div>

          {/* Smart Homework Evaluation */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Smart Homework Evaluation</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Instant feedback on student submissions
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Detailed performance analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Personalized learning recommendations
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Progress tracking and reporting
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop"
                alt="Smart Homework Evaluation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* AI-Powered Grading */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="md:w-1/2">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
                alt="AI-Powered Grading"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Grading</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Automated assessment and grading
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Consistent and unbiased evaluation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Detailed feedback generation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Performance trend analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Attendance Tracking</h3>
              <p className="text-gray-600">
                Automated attendance tracking with facial recognition and real-time reporting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Parent Portal</h3>
              <p className="text-gray-600">
                Dedicated portal for parents to monitor their child&apos;s progress and communicate with teachers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Resource Library</h3>
              <p className="text-gray-600">
                AI-curated educational resources and materials for enhanced learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Comprehensive analytics and insights for data-driven decision making.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Communication Tools</h3>
              <p className="text-gray-600">
                Integrated messaging and notification system for seamless communication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Schedule Management</h3>
              <p className="text-gray-600">
                Intelligent scheduling system with automated conflict detection and resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Experience the Future?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of schools already transforming their education with Skooler.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}