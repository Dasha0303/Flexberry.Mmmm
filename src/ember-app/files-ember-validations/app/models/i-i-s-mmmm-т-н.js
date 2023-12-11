import {
  defineNamespace,
  defineProjections,
  Model as ТНMixin
} from '../mixins/regenerated/models/i-i-s-mmmm-т-н';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТНMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
