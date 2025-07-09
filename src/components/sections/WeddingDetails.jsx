import React from 'react';

const WeddingDetails = ({ scrollToSection }) => {
  return (
    <section id="section-2" className="mobile-section details">
      <div className="fade-in">
        <div className="timeline-container">
          <div className="timeline-text">복정역</div>
          <div className="timeline-point"></div>
          <div className="timeline-line"></div>
          <div className="timeline-point"></div>
          <div className="timeline-text">수인분당선</div>
          <div className="timeline-point"></div>
          <div className="timeline-line"></div>
          <div className="timeline-point"></div>
          <div className="timeline-text">가천대역</div>
        </div>
        
        <div className="location-name">GACHON Convention Center</div>
        
        <div className="location-details">
          2025년 11월 15일 토요일 오후 5시 30분<br/>
          가천컨벤션센터 5층 웨딩홀
        </div>
        
        <div className="wedding-script" style={{ margin: '2rem 0' }}>오시는 길</div>
        
        <div className="location-address">
          경기 성남시 수정구 성남대로 1342 가천컨벤션센터<br/>
          수인분당선 가천대역 1번 출구 도보 2분<br/>
          지하 4층 주차장 무료 이용
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;