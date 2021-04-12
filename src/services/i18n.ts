import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from '../i18n/en.json';
import de from '../i18n/de.json';

addMessages('en', en);
addMessages('de', de);

const locale = getLocaleFromNavigator();

const langAliases = [
  {
    id: 'de',
    active: ['de-DE', 'de-AU'].indexOf(locale)
  },
  {
    id: 'en',
    active: ['en-US', 'en-GB'].indexOf(locale)
  }
];

const initial = langAliases.find((el) => {
  if (el.active > -1) return el;
});

init({
  fallbackLocale: 'en',
  initialLocale: initial?.id,
  formats: {
    number: {
      EUR: { style: 'currency', currency: 'EUR' }
    }
  }
});
