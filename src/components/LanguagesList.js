import React, { useEffect, useState } from 'react';
import languageService from '../services/languageService';

export default function LanguagesList() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    (async () => {
      const langs = await languageService.getLanguages();
      setLanguages(langs);
    })();
  }, []);

  return (
    <>
      <h1
        style={{ display: 'flex', justifyContent: 'center', fontSize: '24px' }}
      >
        Languages List
      </h1>
      {languages.map((lang) => (
        <div>
          <h2>{lang.language}</h2>
          <h3>{lang.abbreviation}</h3>
        </div>
      ))}
    </>
  );
}
