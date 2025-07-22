import React, { useState } from 'react';
import { X, Copy, Check, Heart } from 'lucide-react';

const AccountModal = ({ isOpen, onClose }) => {
  const [copiedAccount, setCopiedAccount] = useState(null);
  
  if (!isOpen) return null;
  
  const handleCopyAccount = (accountInfo, id) => {
    navigator.clipboard.writeText(accountInfo);
    setCopiedAccount(id);
    setTimeout(() => setCopiedAccount(null), 2000);
  };
  
  const accountData = [
    {
      id: 'groom',
      title: '신랑 김제현',
      icon: 'groom',
      bank: '신한은행',
      accountNumber: '110-356-968506',
      isMain: true
    },
    {
      id: 'bride',
      title: '신부 김민경',
      icon: 'bride',
      bank: '신한은행',
      accountNumber: '110-470-491350',
      isMain: true
    },
    {
      id: 'groom-father',
      title: '아버지 김상엽',
      bank: '국민은행',
      accountNumber: '228002-04-017846',
      isMain: false
    },
    {
      id: 'groom-mother',
      title: '어머니 배상희',
      bank: '국민은행',
      accountNumber: '373301-01-198447',
      isMain: false
    },
    {
      id: 'bride-father',
      title: '아버지 김대환',
      bank: '우리은행',
      accountNumber: '430-08-049131',
      isMain: false
    },
    {
      id: 'bride-mother',
      title: '어머니 주영진',
      bank: '우리은행',
      accountNumber: '1006-101-254952',
      isMain: false
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="account-modal" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="account-modal-close"
        >
          <X size={20} />
        </button>
        
        <div className="account-modal-content">
          <div className="account-modal-title">
            마음 전하실 곳
          </div>
          
          <div className="account-section">
            {accountData.filter(acc => acc.isMain).map((account) => (
              <div key={account.id} className="account-item main-account">
                <div className="account-header">
                  <img 
                    src={`/wedding/image/icons/${account.icon}.png`} 
                    alt={account.id === 'groom' ? '신랑' : '신부'} 
                    className="couple-icon-img" 
                  />
                  <span className="account-title">{account.title}</span>
                </div>
                <div className="account-info" onClick={() => handleCopyAccount(`${account.bank} ${account.accountNumber}`, account.id)}>
                  <span className="bank-name">{account.bank}</span>
                  <span className="account-number">{account.accountNumber}</span>
                  {copiedAccount === account.id && <span className="copied-text">복사됨!</span>}
                </div>
              </div>
            ))}
            
            <div className="parents-accounts">
              <div className="parents-account-group">
                <div className="parents-account-title">신랑측 혼주</div>
                {accountData.filter(acc => acc.id.includes('groom-') && !acc.isMain).map((account) => (
                  <div key={account.id} className="account-item parent-account">
                    <div className="account-title">{account.title}</div>
                    <div className="account-info" onClick={() => handleCopyAccount(`${account.bank} ${account.accountNumber}`, account.id)}>
                      <span className="bank-name">{account.bank}</span>
                      <span className="account-number">{account.accountNumber}</span>
                      {copiedAccount === account.id && <span className="copied-text small">복사됨!</span>}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="parents-account-group">
                <div className="parents-account-title">신부측 혼주</div>
                {accountData.filter(acc => acc.id.includes('bride-') && !acc.isMain).map((account) => (
                  <div key={account.id} className="account-item parent-account">
                    <div className="account-title">{account.title}</div>
                    <div className="account-info" onClick={() => handleCopyAccount(`${account.bank} ${account.accountNumber}`, account.id)}>
                      <span className="bank-name">{account.bank}</span>
                      <span className="account-number">{account.accountNumber}</span>
                      {copiedAccount === account.id && <span className="copied-text small">복사됨!</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;