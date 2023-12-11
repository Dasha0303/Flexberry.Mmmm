import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Mmmm',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Mmmm',
          title: 'Mmmm'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
