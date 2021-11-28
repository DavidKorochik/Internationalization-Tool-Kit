import React, { useState, useEffect } from 'react';
import { AutoComplete, Button } from 'antd';
import languageService from '../../services/languageService';

export default function LanguagesInput() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const onSearch = (searchText) => {
    setFilteredOptions(
      options.filter((x) =>
        x.value.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  const onSelect = (data) => {
    setSelectedLanguage(data);
  };

  const onChange = (data) => {
    setValue(data);
  };

  const addLanguage = async () => {
    const selectedLanguageSeperated = selectedLanguage.split(' '); // For example - ['Hebrew', '(he)']

    const language = selectedLanguageSeperated[0]; // For example - Hebrew
    const abbreviation = selectedLanguageSeperated[1].replace(/[{()}]/g, ''); // For example - he and not (he)

    return await languageService.saveLanguage({
      language,
      abbreviation,
    });
  };

  useEffect(() => {
    (async () => {
      const langs = await languageService.getAllLanguages();

      const _options = langs.map((lang) => ({
        value: `${lang.language} (${lang.abbreviation})`,
      }));

      setOptions(_options);
      setFilteredOptions(_options);
    })();
  }, []);

  return (
    <>
      <AutoComplete
        options={filteredOptions}
        style={{
          width: 500,
          marginLeft: '30%',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='Search a language'
      />
      <Button
        onClick={addLanguage}
        type='primary'
        style={{ marginLeft: '30px' }}
      >
        Add Language
      </Button>
    </>
  );
}
