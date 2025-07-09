import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, ChevronDown, Navigation, Car, Train } from 'lucide-react';

const Location = ({ handleMapApp, scrollToSection }) => {
  return (
    <section id="section-6" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">오시는 길</div>
        
        <div className="location-details">
          2025년 11월 15일 토요일 오후 5시 30분<br/>
          가천컨벤션센터 5층 웨딩홀
        </div>
        
        <div className="location-address">
          경기 성남시 수정구 성남대로 1342 가천컨벤션센터<br/>
          수인분당선 가천대역 1번 출구 도보 2분<br/>
          지하 4층 주차장 무료 이용
        </div>

        {/* 지도 영역 */}
        <div className="fade-in delay-2">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.8!2d127.1279!3d37.4486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca8f2d7e5e7f5%3A0x8c7b8b4b5b5b5b5b!2z6rCA7LKc7Lqo67Kk7IWY7ISc7YSw!5e0!3m2!1sko!2skr!4v1640000000000!5m2!1sko!2skr&q=가천컨벤션센터+경기+성남시+수정구+성남대로+1342"
              width="100%"
              height="250"
              style={{
                border: 0,
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="가천컨벤션센터 위치"
            ></iframe>
          </div>
        </div>

        {/* 지도 앱 버튼들 */}
        <div className="fade-in delay-3">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleMapApp('kakaomap')}
              className="map-app-btn bg-yellow-400 hover:bg-yellow-500 text-black font-medium shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">K</span>
                </div>
                <span>카카오맵</span>
              </div>
            </button>
            
            <button
              onClick={() => handleMapApp('navermap')}
              className="map-app-btn bg-green-500 hover:bg-green-600 text-white font-medium shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm font-bold">N</span>
                </div>
                <span>네이버지도</span>
              </div>
            </button>
            
            <button
              onClick={() => handleMapApp('tmap')}
              className="map-app-btn bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm font-bold">T</span>
                </div>
                <span>티맵</span>
              </div>
            </button>
            
            <button
              onClick={() => handleMapApp('googlemap')}
              className="map-app-btn bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-500 rounded-full -ml-1"></div>
                  <div className="w-2 h-2 bg-white rounded-full -ml-1"></div>
                </div>
                <span>구글맵</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={() => scrollToSection(7)}
          className="scroll-indicator opacity-50 hover:opacity-100 transition-opacity"
        >
          <ChevronDown size={24} className="text-yellow-600" />
        </button>
      </div>
    </section>
  );
};

export default Location;