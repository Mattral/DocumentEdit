import React, { useState } from 'react';

const ConfigureModal = () => {
  const [question, setQuestion] = useState(1); // Track which question to display
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option (null by default)
  const [consigneeCount, setConsigneeCount] = useState(''); // Track the number of consignee people
  const [isOpen, setIsOpen] = useState(false); // Toggle expanded state

  // Next Question
  const handleNextQuestion = () => {
    setQuestion((prevQuestion) => prevQuestion + 1);
    setSelectedOption(null); // Reset selection for the next question
  };

  // Previous Question
  const handlePreviousQuestion = () => {
    if (question > 1) {
      setQuestion((prevQuestion) => prevQuestion - 1);
      setSelectedOption(null); // Reset selection for the previous question
    }
  };

  // Option selection handler
  const handleOptionSelect = (option) => {
    setSelectedOption(option); // Update selected option
  };

  // Handle consignee input change
  const handleConsigneeChange = (e) => {
    setConsigneeCount(e.target.value);
  };

  // Toggle open/close of the modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* "Configure" Button (Sticky at Bottom Right) */}
      {!isOpen && (
        <button
          onClick={toggleModal}
          className="bg-blue-600 text-white rounded-full p-3 shadow-lg fixed bottom-5 right-5 z-50 flex items-center justify-center"
          style={{ fontSize: '1rem' }}
        >
          Configure
        </button>
      )}

      {/* The Modal itself (Sticky in the Bottom-Right Corner) */}
      {isOpen && (
        <div
          className="fixed bottom-5 right-5 w-80 h-72 bg-white p-5 rounded-lg shadow-xl z-50"
          style={{
            position: 'fixed',
            bottom: '80px', // Space above the button (you can adjust this)
            right: '20px',  // Positioned to the right of the page
            zIndex: 1001,   // Just above the button
            width: '300px', // Adjust width of the modal
            height: '250px', // Adjust height of the modal
            overflowY: 'auto', // Ensure it's scrollable if content overflows
            borderRadius: '8px', // Optional for rounded corners
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional for a subtle shadow
          }}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-lg text-gray-800">
              {question === 1
                ? 'Are you a Company or an Individual?'
                : question === 2
                ? 'Is this a legal document?'
                : question === 3
                ? 'How many people will be consignee?'
                : 'Is this local or international?'}
            </p>
            <button
              type="button"
              className="text-gray-600"
              onClick={toggleModal} // Close the modal
              aria-label="Close"
              style={{ fontSize: '1.5rem' }}
            >
              &times;
            </button>
          </div>

          {/* Question Buttons or Input Fields */}
          <div className="mt-4">
            {question === 1 ? (
              <>
                <button
                  className={`w-full p-3 rounded-full text-sm ${selectedOption === 'Company' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('Company')}
                >
                  Company
                </button>
                <button
                  className={`w-full mt-2 p-3 rounded-full text-sm ${selectedOption === 'Individual' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('Individual')}
                >
                  Individual
                </button>
              </>
            ) : question === 2 ? (
              <>
                <button
                  className={`w-full p-3 rounded-full text-sm ${selectedOption === 'Yes' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('Yes')}
                >
                  Yes
                </button>
                <button
                  className={`w-full mt-2 p-3 rounded-full text-sm ${selectedOption === 'No' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('No')}
                >
                  No
                </button>
              </>
            ) : question === 3 ? (
              <>
                <input
                  type="number"
                  className="w-full p-3 border-2 border-gray-300 rounded-full text-sm"
                  placeholder="Enter number of consignee"
                  value={consigneeCount}
                  onChange={handleConsigneeChange}
                />
              </>
            ) : question === 4 ? (
              <>
                <button
                  className={`w-full p-3 rounded-full text-sm ${selectedOption === 'Local' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('Local')}
                >
                  Local
                </button>
                <button
                  className={`w-full mt-2 p-3 rounded-full text-sm ${selectedOption === 'International' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => handleOptionSelect('International')}
                >
                  International
                </button>
              </>
            ) : null}
          </div>

          {/* Bottom Navigation Buttons (Previous/Next) */}
          <div className="flex justify-between mt-6">
            <button
              className="w-28 text-sm p-3 bg-blue-800 text-white rounded-full"
              onClick={handlePreviousQuestion}
            >
              Previous
            </button>
            <button
              className="w-28 text-sm p-3 bg-blue-800 text-white rounded-full"
              onClick={handleNextQuestion}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfigureModal;
