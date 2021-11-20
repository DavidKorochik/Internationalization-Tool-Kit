import React, { useState } from 'react';
import { AutoComplete } from 'antd';

export default function LanguagesInput() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions('');
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
    console.log(value);
  };

  return (
    <>
      <AutoComplete
        options={options}
        style={{
          width: 500,
          marginLeft: '30%',
          border: '1px solid black',
        }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder='Search a language'
      />
      <button style={{ marginLeft: '30px' }}>Add Language</button>
    </>
  );
}
