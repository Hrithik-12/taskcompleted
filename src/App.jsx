
import { useState, useEffect } from "react";
import FeedbackForm from "./Components/Feedbackform";
import AdminView from "./Components/Admin";
import { toast } from "react-hot-toast"; 
import { GitBranch, Sun, Moon } from 'lucide-react';

export default function Home() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Use effect to check if dark theme preference exists in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
      return newMode;
    });
  };

  // Fetch feedbacks from API when the modal is toggled
  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      // Updated endpoint to use Netlify Functions
      const response = await fetch("/.netlify/functions/getfeedback");
      
      if (!response.ok) {
        throw new Error(`Server responded with ${response.status}`);
      }
      
      const data = await response.json();
      
      // Check if data is an array before setting state
      if (Array.isArray(data)) {
        setFeedbacks(data);
        toast.success("Feedbacks loaded successfully!");
      } else {
        // If not an array, initialize as empty array
        console.error("API did not return an array:", data);
        setFeedbacks([]);
        toast.error("Invalid data format received from server");
      }
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
      setFeedbacks([]); // Initialize as empty array to prevent mapping errors
      toast.error(`Failed to load feedbacks: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle the feedback submission
  const handleSubmitFeedback = async (newFeedback) => {
    try {
      // Updated endpoint to use Netlify Functions
      const response = await fetch("/.netlify/functions/submitfeedback"
        , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFeedback),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Server responded with ${response.status}`);
      }

      const result = await response.json();
      
      // Check if result contains the feedback data
      if (result.feedback) {
        setFeedbacks((prevFeedbacks) => [...prevFeedbacks, result.feedback]);
        toast.success("Feedback submitted successfully!");
      } else {
        toast.success(result.message || "Feedback submitted!");
      }
    } catch (error) {
      toast.error(`Error: ${error.message || "Something went wrong!"}`);
      console.error("Error submitting feedback:", error);
    }
  };

  // Function to handle "View Submitted Feedback" button click
  const handleViewFeedbacks =async () => {
    await fetchFeedbacks();
    setShowModal(true);
   
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} flex flex-col items-center justify-center py-10`}>
      <div className={`w-full max-w-3xl p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-lg transition-all duration-300`}>
        
        {/* Dark Mode Toggle Button */}
        <button 
          onClick={toggleTheme}
          className={`absolute top-5 right-5 p-3 rounded-full transition-all duration-300
            ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'}
            hover:scale-110 focus:outline-none shadow-lg`}
        >
          {isDarkMode ? <Sun /> : <Moon />}
        </button>

        <FeedbackForm onSubmit={handleSubmitFeedback} />

        <button
          className={`mt-4 w-full p-3 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-700 text-white'} rounded-md transition-all duration-300`}
          onClick={handleViewFeedbacks}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "View Submitted Feedback"}
        </button>

        <AdminView
          feedbacks={feedbacks}
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      </div>
      <footer className="w-full bg-transparent text-center text-sm p-4 absolute bottom-0 flex flex-col items-center justify-center">
        <p className="text-gray-500">Hrithik Garg - © 2025</p>
        <a
          href="https://github.com/Hrithik-12/taskcompleted"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition-all duration-300"
        >
          <GitBranch className="inline-block mr-2" />
          GitHub Repository
        </a>
      </footer>
    </div>
  );
}