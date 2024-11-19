'use client';
import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

const ChatModal = () => {
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
      {/* Chat Bubble (Sticky at Bottom Left) */}
      {!isOpen && (
        <div
          onClick={toggleModal}
          className="fixed bottom-5 left-5 bg-blue-500 text-white p-3 rounded-full cursor-pointer shadow-md"
        >
          <ArrowDropDownOutlinedIcon />
        </div>
      )}

      {/* Expanded Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-5 left-5 w-80 bg-white p-5 rounded-lg shadow-lg">
          {/* Header */}
          <div className="flex justify-between items-center">
            <p className="font-semibold text-lg">
              {question === 1
                ? 'Are you a Company or an Individual?'
                : question === 2
                ? 'Is this a legal document?'
                : question === 3
                ? 'How many people will be consignee?'
                : 'Is this local or international?'}
            </p>
            <ArrowDropDownOutlinedIcon
              onClick={toggleModal}
              className="cursor-pointer"
            />
          </div>

          {/* Question Buttons or Input Fields */}
          <div className="mt-4">
            {question === 1 ? (
              <>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'Company' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('Company')}
                >
                  Company
                </Button>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'Individual' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('Individual')}
                >
                  Individual
                </Button>
              </>
            ) : question === 2 ? (
              <>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'Yes' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('Yes')}
                >
                  Yes
                </Button>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'No' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('No')}
                >
                  No
                </Button>
              </>
            ) : question === 3 ? (
              <>
                <input
                  type="number"
                  className="w-full p-2 border rounded-full text-sm"
                  placeholder="Enter number of consignee"
                  value={consigneeCount}
                  onChange={handleConsigneeChange}
                />
              </>
            ) : question === 4 ? (
              <>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'Local' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('Local')}
                >
                  Local
                </Button>
                <Button
                  variant="outlined"
                  className={`w-24 p-2 rounded-full ${selectedOption === 'International' ? 'bg-blue-500 text-white' : ''}`}
                  onClick={() => handleOptionSelect('International')}
                >
                  International
                </Button>
              </>
            ) : null}
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="text"
              className="w-24 text-sm p-2 bg-blue-800 text-white rounded-full"
              onClick={handlePreviousQuestion}
            >
              Previous
            </Button>
            <Button
              variant="text"
              className="w-24 text-sm p-2 bg-blue-800 text-white rounded-full"
              onClick={handleNextQuestion}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatModal;
