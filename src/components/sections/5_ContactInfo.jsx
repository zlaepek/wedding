import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import ContactModal from '../ContactModal';

const ContactInfo = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleGoogleFormClick = () => {
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScM2vpBz4KMrGz8xXPpvwcpAP01fXZSkDIcOCWwIOrvjp1FfQ/viewform?usp=header';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="section-5" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">연락하기</div>
        
        <div className="wedding-message">
          소중한 자리에 참석하시어 축복해 주시면<br/>
          사랑으로 보답하겠습니다.
        </div>
        
        <div className="contact-info-buttons">
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="wedding-button contact-info-btn"
          >
            연락하기
          </button>
        </div>
        
        <div className="section-divider" style={{ margin: '2rem auto' }}></div>
        
        <div className="wedding-script">참석 여부</div>
        
        <div className="wedding-message">
          참석 여부와 동행 인원을 알려주세요.<br/>
          더 나은 준비를 위해 미리 확인하고 있습니다.
        </div>
        
        <div className="contact-info-buttons">
          <button 
            onClick={handleGoogleFormClick}
            className="wedding-button contact-info-btn"
          >
            <ExternalLink size={16} />
            참석 여부 보내기
          </button>
        </div>
      </div>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
};

export default ContactInfo;