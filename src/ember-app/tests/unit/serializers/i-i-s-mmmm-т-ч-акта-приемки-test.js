import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-mmmm-т-ч-акта-приемки', 'Unit | Serializer | i-i-s-mmmm-т-ч-акта-приемки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-mmmm-т-ч-акта-приемки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
