import {
  defineNamespace,
  defineProjections,
  Model as ТЧАктаПриемкиMixin
} from '../mixins/regenerated/models/i-i-s-mmmm-т-ч-акта-приемки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧАктаПриемкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
