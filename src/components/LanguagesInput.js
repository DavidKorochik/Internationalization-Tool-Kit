import React, { useState, useEffect } from 'react';
import { AutoComplete, Button } from 'antd';
import languageService from '../services/languageService';

export default function LanguagesInput() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const onSearch = (searchText) => {};

  const onSelect = (data) => {
    setSelectedLanguage(data);
  };

  const onChange = (data) => {
    setValue(data);
    console.log(value);
  };

  useEffect(() => {
    (async () => {
      const langs = await languageService.getAllLanguages();
      setOptions(
        langs.map((lang) => ({
          value: `${lang.language} (${lang.abbreviation})`,
        }))
      );
    })();
  }, []);

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 500,
          marginLeft: '30%',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='Search a language'
      />
      <Button type='primary' style={{ marginLeft: '30px' }}>
        Add Language
      </Button>
    </>
  );
}
