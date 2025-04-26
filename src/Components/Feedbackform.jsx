// This component is a modal that displays submitted feedbacks.
import React, { useState } from "react";
import toast from "react-hot-toast";

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !feedback) {
    //   setMessage("All fields are required!");
    toast.error("All fields are required!");
      return;
    }
    setLoading(true);
    const data = { name, email, feedback };

    // Simulate feedback submission (you can implement the actual backend logic here)
    
     await  onSubmit(data); // Pass the feedback to the parent component
      setLoading(false);
      setName("");
      setEmail("");
      setFeedback("");
      setMessage("Feedback submitted successfully!");
  
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Submit Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm text-gray-600">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your name"
           
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your email"
          
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="feedback" className="text-sm text-gray-600">Feedback</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            placeholder="Enter your feedback"
            rows="4"
          
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-gray-700 text-white rounded-md ${loading ? 'bg-opacity-50' : ''} transition duration-300`}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit Feedback"}
        </button>
      </form>


    </div>
  );
};

export default FeedbackForm;