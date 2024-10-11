
import React from "react";

interface ChatbotComponentProps {
  isVisible: boolean; 
}

const ChatbotComponent: React.FC<ChatbotComponentProps> = ({ isVisible }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-5 right-5 cursor-pointer z-50"
          onClick={toggleChatbot}
        >
          <div className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center transition duration-300 transform hover:scale-110">
            <span className="text-white text-2xl">💬</span>
          </div>
          {isOpen && (
            <div className="chat-bubble bg-white shadow-lg rounded-lg p-4 mt-2">
              <h3 className="font-bold text-green-500">GreenBot</h3>
              <p>Hello! I'm GreenBot. What can I do for you?</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatbotComponent;
