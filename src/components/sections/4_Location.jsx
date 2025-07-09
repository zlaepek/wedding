const Location = ({ handleMapApp }) => {
  return (
    <section id="section-6" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">오시는 길</div>
        
        <div className="location-details">
          2025년 11월 15일 토요일 오후 5시 30분<br/>
          가천컨벤션센터 5층 웨딩홀<br/>
          <br/>
        </div>
        
        <div className="location-address">
          경기 성남시 수정구 성남대로 1342 가천컨벤션센터<br/>
          수인분당선 가천대역 1번 출구 도보 2분<br/>
          지하철 B3 지하주차장 연결통로<br/>
          지하 4층 주차장 무료 이용
        </div>

        {/* 지도 영역 */}
        <div className="fade-in delay-1" style={{ margin: '2rem 0' }}>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.0186484537756!2d127.12593!3d37.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca1c0e2b24f33%3A0x2e2b2d2d2d2d2d2d!2z6rCA7LKc7Lqo67Kk7IWY7ISc7YSw!5e0!3m2!1sko!2skr!4v1640000000000!5m2!1sko!2skr"
              width="100%"
              height="250"
              style={{
                border: 0,
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="가천컨벤션센터 위치"
            ></iframe>
            <div className="map-overlay">
              <div className="map-info">
                <h3>가천컨벤션센터</h3>
                <p>경기 성남시 수정구 성남대로 1342</p>
              </div>
            </div>
          </div>
        </div>

        {/* 지도 앱 버튼들 */}
        <div className="fade-in delay-2">
          <div className="map-buttons-row">
            <button
              onClick={() => handleMapApp('kakaomap')}
              className="map-btn-row kakao"
            >
              카카오맵
            </button>
            
            <button
              onClick={() => handleMapApp('navermap')}
              className="map-btn-row naver"
            >
              네이버지도
            </button>
            
            <button
              onClick={() => handleMapApp('tmap')}
              className="map-btn-row tmap"
            >
              티맵
            </button>
            
            <button
              onClick={() => handleMapApp('googlemap')}
              className="map-btn-row google"
            >
              구글맵
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;