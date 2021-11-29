import React, { useState } from 'react';
import languageService from '../../services/languageService';
import { Form, Input, Button } from 'antd';

export default function AddWord({ dataTranslation, setDataTranslation }) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [form] = Form.useForm();

  const addWordToTranslation = async () => {
    // const newWord = await languageService.addWordTranslation({
    //   languageId: 1,
    //   key,
    //   sentence: value,
    // });

    const newWord = {
      languageId: 1,
      language: 'English',
      sentence: value,
    };

    const translations = dataTranslation.map((x) =>
      x.translations
        .filter((trans) => trans.language !== 'English')
        .map((trans) => ({
          languageId: trans.languageId,
          language: trans.language,
          sentence: '',
        }))
    );

    setDataTranslation([
      ...dataTranslation,
      {
        key,
        translations: [newWord, ...translations[0]],
      },
    ]);

    form.resetFields();
  };

  return (
    <Form
      style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
      name='addWord'
      initialValues={{ remember: true }}
      autoComplete='off'
    >
      <Form.Item label='Key' name='key' style={{ width: '20%' }}>
        <Input
          style={{ width: '100%' }}
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </Form.Item>

      <Form.Item
        label='Value'
        name='value'
        style={{ marginLeft: '30px', width: '40%' }}
      >
        <Input
          style={{ width: '100%' }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Item>

      <Form.Item>
        <Button
          style={{ marginLeft: '15%', marginLeft: '30px' }}
          onClick={addWordToTranslation}
          type='primary'
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
