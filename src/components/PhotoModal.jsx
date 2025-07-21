import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PhotoModal = ({ photo, onClose, photos, currentIndex, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < photos.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0 && !isTransitioning) {
      setIsTransitioning(true);
      onNavigate(currentIndex - 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleNext = () => {
    if (currentIndex < photos.length - 1 && !isTransitioning) {
      setIsTransitioning(true);
      onNavigate(currentIndex + 1);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img 
          src={photo} 
          alt="Wedding photo" 
          className={`modal-image ${isTransitioning ? 'transitioning' : ''}`}
          draggable={false}
        />
        
        {currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className="modal-nav-btn prev"
            aria-label="Previous photo"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        
        {currentIndex < photos.length - 1 && (
          <button 
            onClick={handleNext}
            className="modal-nav-btn next"
            aria-label="Next photo"
          >
            <ChevronRight size={24} />
          </button>
        )}
        
        <button 
          onClick={onClose}
          className="modal-close-btn"
        >
          <X size={24} />
        </button>
        
        <div className="modal-indicator">
          {currentIndex + 1} / {photos.length}
        </div>
      </div>
    </div>
  );
};

export default PhotoModal;