import axios from 'axios';

const promiseFunction = (data) => {
  return new Promise((res, rej) => {
    return res(data);
  });
};

const languageService = {
  getLanguages: () => {
    //   axios.get(`${server}/words`);
    promiseFunction([
      {
        languageId: 1,
        language: 'English',
        abbreviation: 'en',
      },
      {
        languageId: 2,
        language: 'Hebrew',
        abbreviation: 'he',
      },
    ]);
  },
  saveLanguage: () => {
    //   axios.post(`${server}/words`, data)
  },
  deleteSavedLanguage: () => {
    // axios.delete(`${server}/words/${id}`);
  },
  addWordTranslation: () => {
    // axios.post(`${server}/words/translation`, data);
  },
  getWordTranslation: () => {
    promiseFunction([
      {
        key: 'welcome_page_hello_text',
        translations: [
          {
            languageId: 1,
            language: 'English',
            sentence: 'Hello',
          },
          {
            languageId: 2,
            language: 'Hebrew',
            sentence: 'שלום',
          },
          {
            languageId: 3,
            language: 'Spanish',
            sentence: '',
          },
        ],
      },
    ]);
  },
  getGoogleTranslateTranslation: () => {
    // axios.post(`${server}/googletranslate`);
  },
};

export default languageService;
