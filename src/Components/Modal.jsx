// This component is a modal that displays submitted feedbacks.
import React, { useState, useEffect } from "react";

const Modal = ({ show, onClose, feedbacks }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Trigger modal visibility with a delay to allow the transition
  useEffect(() => {
    if (show) {
      setIsModalVisible(true);
    } else {
      // Adding a small delay before hiding the modal to allow the transition
      setTimeout(() => setIsModalVisible(false), 300);
    }
  }, [show]);

  if (!isModalVisible) return null; // Don't render the modal if it's not visible

  return (
    <>
      {/* Modal Background (Form with transparent blur effect) */}
      <div
        className={`fixed inset-0 bg-transparent backdrop-blur-sm z-40 transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Modal Content with animation */}
      <div
        className={`fixed inset-0 flex justify-center items-center z-50 transform transition-all duration-500 ease-out ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Title Section */}
          <h2 className="text-2xl font-semibold text-center mb-6">
            Submitted Feedbacks
          </h2>

          {/* Feedback List */}
          {!feedbacks || feedbacks.length === 0 ? (
            <p className="text-center text-gray-600">No feedbacks submitted yet.</p>
          ) : (
            <div className="max-h-80 overflow-y-auto space-y-4 pr-2">
              {feedbacks.map((feedback, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-md shadow-md border border-gray-200"
                >
                  <h3 className="text-lg text-gray-700 font-semibold">{feedback.name}</h3>
                  <p className="text-sm text-gray-600">{feedback.email}</p>
                  <p className="mt-2 text-gray-700">{feedback.feedback}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(feedback.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Custom Modal In/Out Animation */}
      <style>{`
        @keyframes modalIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes modalOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(50px);
          }
        }

        .animate-modal-in {
          animation: modalIn 0.5s ease-out forwards;
        }

        .animate-modal-out {
          animation: modalOut 0.3s ease-in forwards;
        }
      `}</style>
    </>
  );
};

export default Modal;