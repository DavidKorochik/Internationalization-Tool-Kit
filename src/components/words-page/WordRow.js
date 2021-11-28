import React, { useState } from 'react';
import { Input } from 'antd';
import languageService from '../../services/languageService';

const WordRow = ({ translatedSentece, dataTranslation }) => {
  const [inputValue, setInputValue] = useState(translatedSentece);

  console.log(dataTranslation);

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

      <button style={{ margin: '10px' }} onClick={translateNewWordInput}>
        G
      </button>
      <button onClick={onSaveTranslatedWord}>Save</button>
    </div>
  );
};

export default WordRow;
