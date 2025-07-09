import React, { useState } from 'react';
import ContactModal from '../ContactModal';

const ContactInfo = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <section id="section-5" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">연락하기</div>
        
        <div className="wedding-message">
          소중한 자리에 참석하시어 축복해 주시면<br/>
          사랑으로 보답하겠습니다.
        </div>
        
        <button 
          onClick={() => setIsContactModalOpen(true)}
          className="wedding-button"
        >
          연락하기
        </button>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default ContactInfo;