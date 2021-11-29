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
        imageUrl:
          'https://media.istockphoto.com/photos/flag-of-england-picture-id854115776',
      },
      {
        language: 'Hebrew',
        abbreviation: 'he',
        imageUrl:
          'https://studentaffairs.duke.edu/sites/default/files/2021-01/israeli%20flag.jpg',
      },
      {
        language: 'France',
        abbreviation: 'fr',
        imageUrl:
          'https://www.bestcustomflags.com/wp-content/uploads/2016/06/france-flag.jpg',
      },
      {
        language: 'Spanish',
        abbreviation: 'sp',
        imageUrl:
          'https://flagcolor.com/wp-content/uploads/2018/11/spain_flag.png',
      },
      {
        language: 'Japaneese',
        abbreviation: 'jp',
        imageUrl:
          'https://img5.goodfon.com/wallpaper/nbig/b/e8/japan-flag-flag-of-japan-japanese-flag-japan-large-flag.jpg',
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
