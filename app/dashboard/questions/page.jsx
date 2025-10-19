import React from "react";

const QuestionsPage = () => {
  return (
    <div className="p-10">
      <div className="mb-8">
        <h2 className="font-bold text-3xl text-primary mb-4">Questions</h2>
        <p className="text-gray-600">
          Find answers to frequently asked questions about NeuraPrep AI Mock Interview
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            How does the AI Mock Interview work?
          </h3>
          <p className="text-gray-700">
            Our AI system generates relevant interview questions based on your job position and experience level. 
            It analyzes your responses and provides detailed feedback to help you improve your interview skills.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            What types of questions can I practice?
          </h3>
          <p className="text-gray-700">
            You can practice technical questions, behavioral questions, situational questions, and role-specific 
            questions tailored to your industry and experience level.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            How accurate is the AI feedback?
          </h3>
          <p className="text-gray-700">
            Our AI is powered by advanced language models and has been trained on thousands of successful 
            interview responses. It provides constructive feedback on content, structure, and presentation.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            Can I retake interviews?
          </h3>
          <p className="text-gray-700">
            Yes! You can create multiple mock interviews and practice as many times as you want. 
            Each session helps you improve and build confidence.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            Is my data secure?
          </h3>
          <p className="text-gray-700">
            Absolutely! We take data privacy seriously. All your responses are encrypted and stored securely. 
            We never share your personal information with third parties.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6">
          <h3 className="font-semibold text-xl text-primary mb-3">
            What devices can I use?
          </h3>
          <p className="text-gray-700">
            NeuraPrep works on any device with a web browser and microphone access. This includes 
            desktop computers, laptops, tablets, and smartphones.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <h3 className="font-bold text-2xl mb-4">Still have questions?</h3>
          <p className="text-purple-100 mb-6">
            Can't find the answer you're looking for? We're here to help!
          </p>
          <button className="bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionsPage;
