import React from 'react';
import { X } from 'lucide-react';

const PhotoModal = ({ photo, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <img 
        src={photo} 
        alt="Wedding photo" 
        className="modal-content"
      />
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all"
      >
        <X size={20} />
      </button>
    </div>
  </div>
);

export default PhotoModal;