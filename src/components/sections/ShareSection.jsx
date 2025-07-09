import React from 'react';
import { Heart } from 'lucide-react';

const ShareSection = ({ handleShare, copyToClipboard, copied }) => {
  return (
    <section id="section-7" className="mobile-section final-section">
      <div className="fade-in">
        <div className="final-date">25</div>
        <div className="final-month">NOVEMBER</div>
        <div className="final-date">15</div>
        
        <div className="wedding-script" style={{ margin: '2rem 0' }}>
          Wedding Day
        </div>
        
        <div className="final-names">
          KIM JEHYUN · KIM MINGYEONG
        </div>
        
        <div className="fade-in delay-1">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '2rem' }}>
            <button
              onClick={handleShare}
              className="wedding-button"
            >
              청첩장 공유하기
            </button>
            
            <button
              onClick={copyToClipboard}
              className="wedding-button outline"
            >
              {copied ? '복사됨!' : '링크 복사'}
            </button>
          </div>
        </div>
        
        <div className="fade-in delay-2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#718096', fontSize: '0.9rem' }}>
            <Heart size={16} style={{ color: '#f56565' }} />
            <span>감사합니다</span>
            <Heart size={16} style={{ color: '#f56565' }} />
          </div>
          <div style={{ color: '#718096', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            김제현 · 김민경
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;