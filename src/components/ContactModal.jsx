import React from 'react';
import { Phone, MessageCircle, X, Users } from 'lucide-react';

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleCall = (number) => {
    window.open(`tel:${number}`);
  };

  const handleMessage = (number) => {
    window.open(`sms:${number}`);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="contact-modal-close"
        >
          <X size={20} />
        </button>
        
        <div className="contact-modal-content">
          <div className="contact-modal-title">연락하기</div>
          
          <div className="contact-section">
            <div className="contact-item">
              <div className="contact-name">
                <img src="/wedding/image/icons/groom.png" alt="신랑" className="couple-icon-img" />
                신랑 김제현
              </div>
              <div className="contact-buttons">
                <button 
                  onClick={() => handleCall('010-2676-7752')}
                  className="contact-btn phone"
                >
                  <Phone size={16} />
                </button>
                <button 
                  onClick={() => handleMessage('010-2676-7752')}
                  className="contact-btn sms"
                >
                  <MessageCircle size={16} />
                </button>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-name">
                <img src="/wedding/image/icons/bride.png" alt="신부" className="couple-icon-img" />
                신부 김민경
              </div>
              <div className="contact-buttons">
                <button 
                  onClick={() => handleCall('010-9694-4813')}
                  className="contact-btn phone"
                >
                  <Phone size={16} />
                </button>
                <button 
                  onClick={() => handleMessage('010-9694-4813')}
                  className="contact-btn sms"
                >
                  <MessageCircle size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="contact-divider"></div>
          
          <div className="contact-section">
            <div className="contact-section-title">혼주에게 연락하기</div>
            
            <div className="contact-parents">
              <div className="contact-parent-group">
                <div className="contact-parent-title">신랑측 혼주</div>
                <div className="contact-parent-item">
                  <span>아버지 김상엽</span>
                  <div className="contact-buttons">
                    <button 
                      onClick={() => handleCall('010-8846-7752')}
                      className="contact-btn phone"
                    >
                      <Phone size={12} />
                    </button>
                    <button 
                      onClick={() => handleMessage('010-8846-7752')}
                      className="contact-btn sms"
                    >
                      <MessageCircle size={12} />
                    </button>
                  </div>
                </div>
                <div className="contact-parent-item">
                  <span>어머니 배상희</span>
                  <div className="contact-buttons">
                    <button 
                      onClick={() => handleCall('010-3320-7752')}
                      className="contact-btn phone"
                    >
                      <Phone size={12} />
                    </button>
                    <button 
                      onClick={() => handleMessage('010-3320-7752')}
                      className="contact-btn sms"
                    >
                      <MessageCircle size={12} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="contact-parent-group">
                <div className="contact-parent-title">신부측 혼주</div>
                <div className="contact-parent-item">
                  <span>아버지 김대환</span>
                  <div className="contact-buttons">
                    <button 
                      onClick={() => handleCall('010-3360-0657')}
                      className="contact-btn phone"
                    >
                      <Phone size={12} />
                    </button>
                    <button 
                      onClick={() => handleMessage('010-3360-0657')}
                      className="contact-btn sms"
                    >
                      <MessageCircle size={12} />
                    </button>
                  </div>
                </div>
                <div className="contact-parent-item">
                  <span>어머니 주영진</span>
                  <div className="contact-buttons">
                    <button 
                      onClick={() => handleCall('010-3455-5093')}
                      className="contact-btn phone"
                    >
                      <Phone size={12} />
                    </button>
                    <button 
                      onClick={() => handleMessage('010-3455-5093')}
                      className="contact-btn sms"
                    >
                      <MessageCircle size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;