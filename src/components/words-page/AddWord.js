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
      name='addWord'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete='off'
    >
      <Form.Item label='Key' name='key'>
        <Input value={key} onChange={(e) => setKey(e.target.value)} />
      </Form.Item>

      <Form.Item label='Value' name='value'>
        <Input value={value} onChange={(e) => setValue(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={addWordToTranslation} type='primary'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
