const MainCover = () => {
  return (
    <section id="section-0" className="mobile-section main-cover">
      <div className="fade-in">
        <div className="main-date">11</div>
        <div className="main-date">15</div>
      </div>
      
      <div className="fade-in delay-1">
        <img 
          src={`${import.meta.env.BASE_URL}image/Title.jpg`}
          alt="Wedding couple"
          className="main-image"
        />
      </div>
      
      <div className="fade-in delay-2">
        <div className="couple-name">김제현 & 김민경</div>
      </div>
      
      <div className="fade-in delay-3">
        <div className="wedding-info">2025년 11월 15일 5시 30분</div>
        <div className="wedding-info">가천컨벤션센터 5층 웨딩홀</div>
      </div>
    </section>
  );
};

export default MainCover;