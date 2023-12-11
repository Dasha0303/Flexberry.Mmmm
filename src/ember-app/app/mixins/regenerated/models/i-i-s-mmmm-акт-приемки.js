import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПриемки: DS.attr('string'),
  номерАкта: DS.attr('number'),
  сотрудники: DS.belongsTo('i-i-s-mmmm-сотрудники', { inverse: null, async: false })
});

export let ValidationRules = {
  датаПриемки: {
    descriptionKey: 'models.i-i-s-mmmm-акт-приемки.validations.датаПриемки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерАкта: {
    descriptionKey: 'models.i-i-s-mmmm-акт-приемки.validations.номерАкта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-mmmm-акт-приемки.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('АктПриемкиE', 'i-i-s-mmmm-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-mmmm-сотрудники', 'Сотрудники', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('АктПриемкиL', 'i-i-s-mmmm-акт-приемки', {
    номерАкта: attr('Номер акта', { index: 0 }),
    датаПриемки: attr('Дата приемки', { index: 1 }),
    сотрудники: belongsTo('i-i-s-mmmm-сотрудники', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
