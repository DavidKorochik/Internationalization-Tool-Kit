// import axios from 'axios';

const promiseFunction = (data) => {
  return new Promise((res, rej) => {
    return res(data);
  });
};

const languageService = {
  getAllLanguages: async () => {
    //   axios.get(`${server}/languages`);
    return await promiseFunction([
      {
        language: 'English',
        abbreviation: 'en',
      },
      {
        language: 'Hebrew',
        abbreviation: 'he',
      },
      {
        language: 'France',
        abbreviation: 'fr',
      },
      {
        language: 'Spanish',
        abbreviation: 'es',
      },
      {
        language: 'Japaneese',
        abbreviation: 'jp',
      },
    ]);
  },

  getLanguages: async () => {
    //   axios.get(`${server}/words`);
    return await promiseFunction([
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
  getWordTranslation: async () => {
    return await promiseFunction([
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
