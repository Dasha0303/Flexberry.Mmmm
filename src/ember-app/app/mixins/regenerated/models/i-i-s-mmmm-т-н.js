import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колво: DS.attr('number'),
  материал: DS.attr('string'),
  номерТН: DS.attr('number'),
  номерТС: DS.attr('string'),
  поставщик: DS.attr('string'),
  актПриемки: DS.belongsTo('i-i-s-mmmm-акт-приемки', { inverse: null, async: false }),
  тЧАктаПриемки: DS.belongsTo('i-i-s-mmmm-т-ч-акта-приемки', { inverse: null, async: false })
});

export let ValidationRules = {
  колво: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.колво.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерТН: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.номерТН.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТС: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.номерТС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  поставщик: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.поставщик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  актПриемки: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.актПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧАктаПриемки: {
    descriptionKey: 'models.i-i-s-mmmm-т-н.validations.тЧАктаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТНE', 'i-i-s-mmmm-т-н', {
    номерТН: attr('Номер ТН', { index: 0 }),
    поставщик: attr('Поставщик', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    материал: attr('Материал', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    актПриемки: belongsTo('i-i-s-mmmm-акт-приемки', 'Акт приемки', {
      датаПриемки: attr('Дата приемки', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'датаПриемки' }),
    тЧАктаПриемки: belongsTo('i-i-s-mmmm-т-ч-акта-приемки', 'Т ч акта приемки', {
      номерПозиции: attr('Номер позиции', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'номерПозиции' })
  });

  modelClass.defineProjection('ТНL', 'i-i-s-mmmm-т-н', {
    номерТН: attr('Номер ТН', { index: 0 }),
    поставщик: attr('Поставщик', { index: 1 }),
    номерТС: attr('Номер ТС', { index: 2 }),
    материал: attr('Материал', { index: 3 }),
    колво: attr('Колво', { index: 4 }),
    актПриемки: belongsTo('i-i-s-mmmm-акт-приемки', 'Дата приемки', {
      датаПриемки: attr('Дата приемки', { index: 5 })
    }, { index: -1, hidden: true }),
    тЧАктаПриемки: belongsTo('i-i-s-mmmm-т-ч-акта-приемки', 'Номер позиции', {
      номерПозиции: attr('Номер позиции', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
