import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТНMixin
} from '../mixins/regenerated/models/i-i-s-mmmm-т-н';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТНMixin, Validations, {
});

defineProjections(Model);

export default Model;
