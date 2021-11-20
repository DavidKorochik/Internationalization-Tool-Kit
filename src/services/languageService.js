import axios from 'axios';

const languageService = {
  getLanguages: () => {
    //   axios.get(`${server}/words`);
    return new Promise((res, rej) => {
      try {
        res([
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
      } catch (err) {
        rej(err);
      }
    });
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
    // axios.get(`${server}/words/translation`);
  },
  getGoogleTranslateTranslation: () => {
    // axios.post(`${server}/googletranslate`);
  },
};

export default languageService;
