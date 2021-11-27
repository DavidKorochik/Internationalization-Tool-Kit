import React, { useState } from 'react';
import { Input } from 'antd';
import languageService from '../../services/languageService';

const WordRow = ({ translatedSentece }) => {
  const [inputValue, setInputValue] = useState(translatedSentece);

  const translateNewWordInput = async () => {
    const translatedWord = await languageService.getGoogleTranslateTranslation(
      inputValue
    );

    setInputValue(translatedWord);
  };

  const onSaveTranslatedWord = () => {
    setInputValue(inputValue);
  };

  return (
    <div>
      <Input
        type='text'
        placeholder='Enter translation ...'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        style={{ width: '70%' }}
      />

      <button
        onClick={translateNewWordInput}
        style={{ marginLeft: '20px', padding: '5px' }}
      >
        G
      </button>
      <button onClick={onSaveTranslatedWord}>Save</button>
    </div>
  );
};

export default WordRow;
