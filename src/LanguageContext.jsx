LanguageContext: import React, { createContext, useState, useContext } from 'react';

const translations = {
  en: {
    currentTime: 'Current Time',
  },
  it: {
    currentTime: 'Ora attuale',
  },
  es: {
    currentTime: 'Horario actual'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); 

  const value = {
    language,
    setLanguage,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);