import { useState, useEffect } from 'react';

const PhotoGallery = ({ setSelectedPhoto, scrollToSection }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // photos 폴더의 실제 이미지들을 로드
    const loadPhotos = async () => {
      try {
        const photoList = [
          { id: 1, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_151501992.jpg`, alt: 'Wedding Photo 1' },
          { id: 2, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_151501992_01.jpg`, alt: 'Wedding Photo 2' },
          { id: 3, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_151501992_02.jpg`, alt: 'Wedding Photo 3' },
          { id: 4, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_151501992_03.jpg`, alt: 'Wedding Photo 4' },
          { id: 5, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_161431463.jpg`, alt: 'Wedding Photo 5' },
          { id: 6, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_162958078.jpg`, alt: 'Wedding Photo 6' },
          { id: 7, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_163115660.jpg`, alt: 'Wedding Photo 7' },
          { id: 8, src: `${import.meta.env.BASE_URL}image/photos/KakaoTalk_20250622_163407617.jpg`, alt: 'Wedding Photo 8' }
        ];
        
        setPhotos(photoList);
      } catch (error) {
        console.log('Photos loading error:', error);
      }
    };

    loadPhotos();
  }, []);

  if (photos.length === 0) {
    return (
      <section id="section-3" className="mobile-section">
        <div className="fade-in">
          <div className="wedding-script">Gallery</div>
          <div className="wedding-message">
            사진이 준비되면 여기에 표시됩니다.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="section-3" className="mobile-section">
      <div className="fade-in">
        <div className="wedding-script">Gallery</div>
        <div className="wedding-message">
          우리의 소중한 순간들
        </div>
        
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className={`gallery-item fade-in delay-${(index % 3) + 1}`}
              onClick={() => setSelectedPhoto(photo.src)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;