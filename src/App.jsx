import React, { useState, useEffect } from 'react';
import {
  MainCover,
  Invitation,
  PhotoGallery,
  Location,
  ContactInfo,
  ShareSection
} from './components/sections';
import PhotoModal from './components/PhotoModal';

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const weddingDate = new Date('2025-11-15T17:30:00');
  const timeUntilWedding = () => {
    const now = new Date();
    const diff = weddingDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const handleMapApp = (app) => {
    const address = '가천컨벤션센터';
    const encodedAddress = encodeURIComponent(address);
    
    const mapUrls = {
      kakaomap: `https://map.kakao.com/link/search/${encodedAddress}`,
      navermap: `https://map.naver.com/v5/search/${encodedAddress}`,
      tmap: `https://tmap.life/route/search?name=${encodedAddress}`,
      googlemap: `https://maps.google.com/maps?q=${encodedAddress}`
    };
    
    window.open(mapUrls[app], '_blank');
  };

  const handleShare = async () => {
    const shareData = {
      title: '김제현 ♥ 김민경 결혼식',
      text: '2025년 11월 15일 토요일 오후 5시 30분\n가천컨벤션센터 5층 웨딩홀',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="wedding-container">
      <MainCover isVisible={isVisible} />
      <Invitation timeUntilWedding={timeUntilWedding} />
      <PhotoGallery 
        setSelectedPhoto={setSelectedPhoto} 
      />
      <ContactInfo />
      <Location handleMapApp={handleMapApp} />
      <ShareSection 
        handleShare={handleShare} 
        copyToClipboard={copyToClipboard} 
        copied={copied} 
      />
      
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
    </div>
  );
};

export default WeddingInvitation;