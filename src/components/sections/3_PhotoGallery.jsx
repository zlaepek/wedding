import { useState, useEffect } from 'react';

const PhotoGallery = ({ setSelectedPhoto }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // photos 폴더의 실제 이미지들을 로드
    const loadPhotos = async () => {
      try {
        const photoList = [
          { id: 0, src: `${import.meta.env.BASE_URL}image/photos/시작페이지.png`, alt: '시작' },
          { id: 1, src: `${import.meta.env.BASE_URL}image/photos/2022-06 에버랜드.jpg`, alt: '에버랜드' },
          { id: 2, src: `${import.meta.env.BASE_URL}image/photos/2022-06 에버랜드(2).jpg`, alt: '에버랜드' },
          { id: 3, src: `${import.meta.env.BASE_URL}image/photos/2022-10.jpg`, alt: '2022년 10월' },
          { id: 4, src: `${import.meta.env.BASE_URL}image/photos/2023-05 부산.jpg`, alt: '부산 여행' },
          { id: 5, src: `${import.meta.env.BASE_URL}image/photos/2023-05 속초(1).jpg`, alt: '속초 여행' },
          { id: 6, src: `${import.meta.env.BASE_URL}image/photos/2023-05 속초(2).jpg`, alt: '속초 여행' },
          { id: 7, src: `${import.meta.env.BASE_URL}image/photos/2023-05 속초(3).jpg`, alt: '속초 여행' },
          { id: 8, src: `${import.meta.env.BASE_URL}image/photos/2023-08 제주도.jpg`, alt: '제주도 여행' },
          { id: 9, src: `${import.meta.env.BASE_URL}image/photos/2023-10 포천 고양이.jpg`, alt: '포천' },
          { id: 10, src: `${import.meta.env.BASE_URL}image/photos/2023-12 송년회.jpg`, alt: '송년회' },
          { id: 11, src: `${import.meta.env.BASE_URL}image/photos/2024-10 하늘공원.jpg`, alt: '하늘공원' },
          { id: 12, src: `${import.meta.env.BASE_URL}image/photos/2024-12 농담곰.jpg`, alt: '농담곰' },
          { id: 13, src: `${import.meta.env.BASE_URL}image/photos/2025-02 스키장.jpg`, alt: '스키장' },
          { id: 14, src: `${import.meta.env.BASE_URL}image/photos/Character.png`, alt: 'Character' },
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