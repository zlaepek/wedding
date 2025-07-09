import React from 'react';

const Invitation = () => {
  return (
    <section id="section-1" className="mobile-section invitation">
      <div className="fade-in">
        <div className="wedding-script">INVITATION</div>
        <div className="wedding-script">소중한 분들을 초대합니다</div>
        
        <div className="wedding-message">
          저희의 인연이 시작된 곳에서<br/>
          이제 부부로서 함께하고자 합니다.<br/><br/>
          
          언제나 서로의 든든한 친구이자<br/>
          연인이었던 저희가<br/>
          새로운 시작을 맞이하려 합니다.<br/><br/>
          
          이 소중한 자리에 함께해 주셔서<br/>
          축복해 주시면 큰 기쁨이 되겠습니다.
        </div>
        
        <div className="wedding-info" style={{ marginTop: '2rem' }}>
          <div style={{ marginBottom: '0.5rem' }}>김상엽·배상희 의 장남 신랑 <strong>김제현</strong></div>
          <div style={{ marginBottom: '0.5rem' }}>김대환·주영진 의 장녀 신부 <strong>김민경</strong></div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;