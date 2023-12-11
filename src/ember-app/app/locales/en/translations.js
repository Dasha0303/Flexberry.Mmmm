import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISMmmmАктПриемкиLForm from './forms/i-i-s-mmmm-акт-приемки-l';
import IISMmmmСкладLForm from './forms/i-i-s-mmmm-склад-l';
import IISMmmmСотрудникиLForm from './forms/i-i-s-mmmm-сотрудники-l';
import IISMmmmТНLForm from './forms/i-i-s-mmmm-т-н-l';
import IISMmmmТЧАктаПриемкиLForm from './forms/i-i-s-mmmm-т-ч-акта-приемки-l';
import IISMmmmАктПриемкиEForm from './forms/i-i-s-mmmm-акт-приемки-e';
import IISMmmmСкладEForm from './forms/i-i-s-mmmm-склад-e';
import IISMmmmСотрудникиEForm from './forms/i-i-s-mmmm-сотрудники-e';
import IISMmmmТНEForm from './forms/i-i-s-mmmm-т-н-e';
import IISMmmmТЧАктаПриемкиEForm from './forms/i-i-s-mmmm-т-ч-акта-приемки-e';
import IISMmmmАктПриемкиModel from './models/i-i-s-mmmm-акт-приемки';
import IISMmmmСкладModel from './models/i-i-s-mmmm-склад';
import IISMmmmСотрудникиModel from './models/i-i-s-mmmm-сотрудники';
import IISMmmmТНModel from './models/i-i-s-mmmm-т-н';
import IISMmmmТЧАктаПриемкиModel from './models/i-i-s-mmmm-т-ч-акта-приемки';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-mmmm-акт-приемки': IISMmmmАктПриемкиModel,
    'i-i-s-mmmm-склад': IISMmmmСкладModel,
    'i-i-s-mmmm-сотрудники': IISMmmmСотрудникиModel,
    'i-i-s-mmmm-т-н': IISMmmmТНModel,
    'i-i-s-mmmm-т-ч-акта-приемки': IISMmmmТЧАктаПриемкиModel
  },

  'application-name': 'Mmmm',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Mmmm',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mmmm',
          title: 'Mmmm'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        mmmm: {
          caption: 'Mmmm',
          title: 'Mmmm',
          'i-i-s-mmmm-склад-l': {
            caption: 'Склад',
            title: ''
          },
          'i-i-s-mmmm-т-н-l': {
            caption: 'ТН',
            title: ''
          },
          'i-i-s-mmmm-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-mmmm-акт-приемки-l': {
            caption: 'Акт приемки',
            title: ''
          },
          'i-i-s-mmmm-т-ч-акта-приемки-l': {
            caption: 'Т ч акта приемки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-mmmm-акт-приемки-l': IISMmmmАктПриемкиLForm,
    'i-i-s-mmmm-склад-l': IISMmmmСкладLForm,
    'i-i-s-mmmm-сотрудники-l': IISMmmmСотрудникиLForm,
    'i-i-s-mmmm-т-н-l': IISMmmmТНLForm,
    'i-i-s-mmmm-т-ч-акта-приемки-l': IISMmmmТЧАктаПриемкиLForm,
    'i-i-s-mmmm-акт-приемки-e': IISMmmmАктПриемкиEForm,
    'i-i-s-mmmm-склад-e': IISMmmmСкладEForm,
    'i-i-s-mmmm-сотрудники-e': IISMmmmСотрудникиEForm,
    'i-i-s-mmmm-т-н-e': IISMmmmТНEForm,
    'i-i-s-mmmm-т-ч-акта-приемки-e': IISMmmmТЧАктаПриемкиEForm
  },

});

export default translations;
