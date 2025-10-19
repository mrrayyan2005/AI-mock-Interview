import React from "react";

const HowItWorksPage = () => {
  return (
    <div className="p-10">
      <div className="mb-12 text-center">
        <h2 className="font-bold text-4xl text-primary mb-4">How NeuraPrep Works</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Master your interview skills with our AI-powered platform in just 4 simple steps
        </p>
      </div>

      {/* Steps Section */}
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                1
              </div>
              <h3 className="font-bold text-2xl text-primary">Create Your Profile</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Tell us about your job position, experience level, and industry. Our AI will tailor 
              questions specifically for your career goals and background.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Enter job title and description
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Specify years of experience
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Choose your industry focus
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">👤</div>
              <h4 className="font-semibold text-lg text-primary">Personalized Setup</h4>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                2
              </div>
              <h3 className="font-bold text-2xl text-primary">AI Generates Questions</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our advanced AI creates realistic interview questions based on your profile. 
              Get a mix of technical, behavioral, and situational questions that real employers ask.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Role-specific questions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Behavioral scenarios
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Technical assessments
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🤖</div>
              <h4 className="font-semibold text-lg text-primary">Smart Question Generation</h4>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                3
              </div>
              <h3 className="font-bold text-2xl text-primary">Practice & Record</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Answer questions naturally using your microphone. Practice as many times as you want 
              to build confidence and improve your responses.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Voice recording capability
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Unlimited practice sessions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Real-time speech analysis
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">🎤</div>
              <h4 className="font-semibold text-lg text-primary">Interactive Practice</h4>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                4
              </div>
              <h3 className="font-bold text-2xl text-primary">Get AI Feedback</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              Receive detailed feedback on your answers including content quality, structure, 
              and delivery. Learn what to improve for your actual interviews.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Content analysis and scoring
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Improvement suggestions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Performance tracking
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8 text-center">
              <div className="text-6xl mb-4">📊</div>
              <h4 className="font-semibold text-lg text-primary">Detailed Analytics</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Features Highlight */}
      <div className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
        <h3 className="font-bold text-2xl text-primary text-center mb-8">Why Choose NeuraPrep?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-lg text-primary mb-2">Instant Feedback</h4>
            <p className="text-gray-700">
              Get immediate analysis and suggestions to improve your interview performance.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-semibold text-lg text-primary mb-2">Targeted Practice</h4>
            <p className="text-gray-700">
              Practice with questions specifically designed for your role and industry.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="font-semibold text-lg text-primary mb-2">Track Progress</h4>
            <p className="text-gray-700">
              Monitor your improvement over time with detailed performance analytics.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <h3 className="font-bold text-3xl mb-4">Ready to Start Practicing?</h3>
          <p className="text-purple-100 mb-6 text-lg">
            Join thousands of professionals who have improved their interview skills with NeuraPrep
          </p>
          <button className="bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Create Your First Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
