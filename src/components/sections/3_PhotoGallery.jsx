import { useState, useEffect } from 'react';

const PhotoGallery = ({ setSelectedPhoto }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // photos 폴더의 실제 이미지들을 로드
    const loadPhotos = async () => {
      try {
        const photoList = [
          { id: 1, src: `${import.meta.env.BASE_URL}image/photos/2023-08 제주도.jpg`, alt: '제주도 여행' },
          { id: 2, src: `${import.meta.env.BASE_URL}image/photos/2024-10 하늘공원.jpg`, alt: '하늘공원' },
          { id: 3, src: `${import.meta.env.BASE_URL}image/photos/2024-12 농담곰.jpg`, alt: '농담곰' }
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
              onClick={() => setSelectedPhoto(photo.src, index, photos)}
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