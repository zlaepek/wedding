import React from 'react';
import { X } from 'lucide-react';

const PhotoModal = ({ photo, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <img 
        src={photo} 
        alt="Wedding photo" 
        className="modal-image"
      />
      <button 
        onClick={onClose}
        className="modal-close-btn"
      >
        <X size={24} />
      </button>
    </div>
  </div>
);

export default PhotoModal;