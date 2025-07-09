import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const ContactButton = ({ type, number, color }) => {
  const handleCall = (number) => {
    window.open(`tel:${number}`);
  };

  const handleMessage = (number) => {
    window.open(`sms:${number}`);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleCall(number)}
        className={`flex items-center justify-center w-10 h-10 rounded-full ${color} text-white shadow-lg hover:shadow-xl transition-all`}
      >
        <Phone size={16} />
      </button>
      <button
        onClick={() => handleMessage(number)}
        className="flex items-center justify-center w-10 h-10 bg-gray-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle size={16} />
      </button>
    </div>
  );
};

export default ContactButton;