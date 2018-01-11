const i18nDictionary = {
  en: {
    greet: 'Hello',
    world: 'World'
  },
  fr: {
    greet: 'Salut',
    world: 'Monde'
  },
  nl: {
    greet: 'Hallo',
    world: 'Wereld'
  }
};

const printHelloWorldI18n = lang => 
  i18nDictionary[lang].greet + ' ' + i18nDictionary[lang].world; 

console.log(printHelloWorldI18n('en'));
console.log(printHelloWorldI18n('fr'));
console.log(printHelloWorldI18n('nl'));
