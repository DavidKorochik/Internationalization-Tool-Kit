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
        abbreviation: 'sp',
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
      {
        languageId: 3,
        language: 'France',
        abbreviation: 'fr',
      },
      {
        languageId: 4,
        language: 'Spanish',
        abbreviation: 'sp',
      },
    ]);
  },
  saveLanguage: async (data) => {
    //   axios.post(`${server}/words`, data)
  },
  deleteSavedLanguage: async (id) => {
    // axios.delete(`${server}/words/${id}`);
  },
  addWordTranslation: async (data) => {
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
            language: 'France',
            sentence: 'Bonjour',
          },
          {
            languageId: 4,
            language: 'Spanish',
            sentence: 'Hola',
          },
        ],
      },
      {
        key: 'hello_world_text',
        translations: [
          {
            languageId: 1,
            language: 'English',
            sentence: 'Hello World',
          },
          {
            languageId: 2,
            language: 'Hebrew',
            sentence: 'שלום עולם',
          },
          {
            languageId: 3,
            language: 'France',
            sentence: 'Bonjour Olam',
          },
          {
            languageId: 4,
            language: 'Spanish',
            sentence: 'Holo Olamo',
          },
        ],
      },
    ]);
  },
  getGoogleTranslateTranslation: async (data) => {
    // axios.post(`${server}/googletranslate`, data);
  },
};

export default languageService;
