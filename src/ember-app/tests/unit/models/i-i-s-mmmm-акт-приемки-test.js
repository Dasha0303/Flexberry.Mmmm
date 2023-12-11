import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mmmm-акт-приемки', 'Unit | Model | i-i-s-mmmm-акт-приемки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-mmmm-акт-приемки',
    'model:i-i-s-mmmm-склад',
    'model:i-i-s-mmmm-сотрудники',
    'model:i-i-s-mmmm-т-н',
    'model:i-i-s-mmmm-т-ч-акта-приемки',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
