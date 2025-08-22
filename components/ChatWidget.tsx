import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    setMessages(prevMessages => [...prevMessages, { sender: 'user', text: inputValue }]);
    setInputValue('');

    setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, {sender: 'bot', text: 'Thanks for your message. An agent will be with you shortly.'}])
    }, 1000);
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-ozonxt-blue-dark text-white rounded-full p-4 shadow-lg hover:bg-ozonxt-blue-light transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle chat"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col z-50">
          <header className="bg-ozonxt-blue-dark text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-lg">Ozonxt Support</h3>
          </header>
          <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`rounded-lg px-3 py-2 max-w-xs ${msg.sender === 'user' ? 'bg-ozonxt-blue-light text-white' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ozonxt-blue-light"
              />
              <button onClick={handleSendMessage} className="bg-ozonxt-blue-dark text-white px-4 rounded-r-md hover:bg-ozonxt-blue-light transition-colors">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;