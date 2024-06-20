Clock: import React from 'react';
import { useLanguage } from './LanguageContext';

const Clock = () => {
  const { language, translations } = useLanguage();
  const { currentTime } = translations[language];

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  return (
    <div>
      <h2>{currentTime}</h2>
      <p>{getCurrentTime()}</p>
    </div>
  );
};

export default Clock;