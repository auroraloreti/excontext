import React from 'react';
import Clock from './Clock';
import { LanguageProvider, useLanguage } from './LanguageContext';

const App = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <LanguageProvider>
      <div>
        <h1>Select Language:</h1>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Español</option>
        </select>
        <Clock />
      </div>
    </LanguageProvider>
  );
};

export default App;