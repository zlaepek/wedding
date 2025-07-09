import React from 'react';
import { ChevronDown } from 'lucide-react';

const FamilyIntroduction = ({ scrollToSection }) => {
  return (
    <section id="section-4" className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-sm p-8 max-w-md w-full border border-gray-100">
        <div className="text-xs text-gray-400 tracking-widest text-center mb-6">FAMILY</div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-4">신랑측 혼주</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">아버지</div>
                <div className="font-light text-gray-700">이석훈</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">어머니</div>
                <div className="font-light text-gray-700">이미자</div>
              </div>
            </div>
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">신랑</div>
              <div className="font-medium text-gray-700">김제현</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-sm text-gray-400 mb-4">신부측 혼주</div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500">아버지</div>
                <div className="font-light text-gray-700">유성령</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">어머니</div>
                <div className="font-light text-gray-700">박효순</div>
              </div>
            </div>
            <div className="mt-6 p-3 bg-gray-50 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">신부</div>
              <div className="font-medium text-gray-700">김민경</div>
            </div>
          </div>
        </div>
        
        <button 
          onClick={() => scrollToSection(5)}
          className="mt-8 w-full flex justify-center animate-bounce"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default FamilyIntroduction;