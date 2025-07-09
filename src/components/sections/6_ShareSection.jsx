import React, { useState } from 'react';
import { Heart, Camera, Utensils, Car, Clock, MapPin, Info } from 'lucide-react';

const ShareSection = ({ handleShare, copyToClipboard, copied }) => {
  const [activeTab, setActiveTab] = useState('photobooth');

  const tabs = [
    { id: 'photobooth', label: '포토부스', icon: Camera },
    { id: 'dining', label: '식사안내', icon: Utensils },
    { id: 'parking', label: '주차안내', icon: Car }
  ];

  const tabContent = {
    photobooth: {
      title: '포토부스',
      message: '웨딩홀 입구에서 포토부스를 운영합니다.\n소중한 순간을 기록해보세요.',
      info: '운영시간: 오후 4:30 - 7:00\n위치: 가천컨벤션센터 5층 로비'
    },
    dining: {
      title: '식사 안내',
      message: '결혼식 후 스테이크 정식을 준비했습니다.\n맛있는 식사와 함께 축하해 주세요.',
      info: '식사시간: 오후 6:00 - 8:00\n위치: 식장 윗층'
    },
    parking: {
      title: '주차 안내',
      message: '지하 주차장을 무료로 이용하실 수 있습니다.\n주차권은 별도로 받으실 필요 없습니다.',
      info: '주차위치: 지하 4층 주차장\n이용시간: 오후 4:00 - 9:00\n주차요금: 무료'
    }
  };

  return (
    <section id="section-7" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">안내사항</div>
        
        {/* 탭 버튼들 */}
        <div className="tab-buttons">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              >
                <IconComponent size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
        
        {/* 탭 콘텐츠 */}
        <div className="tab-content">
          <div className="wedding-info-card">
            <div className="info-icon">
              {React.createElement(tabs.find(tab => tab.id === activeTab).icon, { size: 24 })}
            </div>
            <div className="wedding-message">
              {tabContent[activeTab].message.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < tabContent[activeTab].message.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
            <div className="wedding-info">
              {tabContent[activeTab].info.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index < tabContent[activeTab].info.split('\n').length - 1 && <br />}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        {/* 공유 섹션 */}
        <div className="share-section">
          <div className="wedding-script" style={{ margin: '2rem 0 1rem' }}>
            Wedding Day
          </div>
          
          <div className="final-date-container">
            <div className="final-date">25</div>
            <div className="final-month">NOVEMBER</div>
            <div className="final-date">15</div>
          </div>
          
          <div className="final-names">
            KIM JEHYUN · KIM MINGYEONG
          </div>
          
          <div className="fade-in delay-1">
            <div className="share-buttons">
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
            <div className="thank-you-message">
              <Heart size={16} style={{ color: '#f56565' }} />
              <span>감사합니다</span>
              <Heart size={16} style={{ color: '#f56565' }} />
            </div>
            <div className="couple-names-final">
              김제현 · 김민경
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShareSection;