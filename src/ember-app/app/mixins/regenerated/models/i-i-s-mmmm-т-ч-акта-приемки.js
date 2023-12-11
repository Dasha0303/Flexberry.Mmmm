import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номерПозиции: DS.attr('number'),
  актПриемки: DS.belongsTo('i-i-s-mmmm-акт-приемки', { inverse: null, async: false })
});

export let ValidationRules = {
  номерПозиции: {
    descriptionKey: 'models.i-i-s-mmmm-т-ч-акта-приемки.validations.номерПозиции.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  актПриемки: {
    descriptionKey: 'models.i-i-s-mmmm-т-ч-акта-приемки.validations.актПриемки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧАктаПриемкиE', 'i-i-s-mmmm-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    актПриемки: belongsTo('i-i-s-mmmm-акт-приемки', 'Акт приемки', {
      датаПриемки: attr('Дата приемки', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'датаПриемки' })
  });

  modelClass.defineProjection('ТЧАктаПриемкиL', 'i-i-s-mmmm-т-ч-акта-приемки', {
    номерПозиции: attr('Номер позиции', { index: 0 }),
    актПриемки: belongsTo('i-i-s-mmmm-акт-приемки', 'Дата приемки', {
      датаПриемки: attr('Дата приемки', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
