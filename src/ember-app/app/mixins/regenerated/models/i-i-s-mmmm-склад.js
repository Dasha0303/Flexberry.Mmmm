import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имяСклада: DS.attr('string'),
  кодСклада: DS.attr('number'),
  тЧАктаПриемки: DS.belongsTo('i-i-s-mmmm-т-ч-акта-приемки', { inverse: null, async: false })
});

export let ValidationRules = {
  имяСклада: {
    descriptionKey: 'models.i-i-s-mmmm-склад.validations.имяСклада.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСклада: {
    descriptionKey: 'models.i-i-s-mmmm-склад.validations.кодСклада.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  тЧАктаПриемки: {
    descriptionKey: 'models.i-i-s-mmmm-склад.validations.тЧАктаПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СкладE', 'i-i-s-mmmm-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    имяСклада: attr('Имя склада', { index: 1 }),
    тЧАктаПриемки: belongsTo('i-i-s-mmmm-т-ч-акта-приемки', 'Т ч акта приемки', {
      номерПозиции: attr('Номер позиции', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номерПозиции' })
  });

  modelClass.defineProjection('СкладL', 'i-i-s-mmmm-склад', {
    кодСклада: attr('Код склада', { index: 0 }),
    имяСклада: attr('Имя склада', { index: 1 }),
    тЧАктаПриемки: belongsTo('i-i-s-mmmm-т-ч-акта-приемки', 'Номер позиции', {
      номерПозиции: attr('Номер позиции', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
