import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mmmm-акт-приемки-l');
  this.route('i-i-s-mmmm-акт-приемки-e',
  { path: 'i-i-s-mmmm-акт-приемки-e/:id' });
  this.route('i-i-s-mmmm-акт-приемки-e.new',
  { path: 'i-i-s-mmmm-акт-приемки-e/new' });
  this.route('i-i-s-mmmm-склад-l');
  this.route('i-i-s-mmmm-склад-e',
  { path: 'i-i-s-mmmm-склад-e/:id' });
  this.route('i-i-s-mmmm-склад-e.new',
  { path: 'i-i-s-mmmm-склад-e/new' });
  this.route('i-i-s-mmmm-сотрудники-l');
  this.route('i-i-s-mmmm-сотрудники-e',
  { path: 'i-i-s-mmmm-сотрудники-e/:id' });
  this.route('i-i-s-mmmm-сотрудники-e.new',
  { path: 'i-i-s-mmmm-сотрудники-e/new' });
  this.route('i-i-s-mmmm-т-н-l');
  this.route('i-i-s-mmmm-т-н-e',
  { path: 'i-i-s-mmmm-т-н-e/:id' });
  this.route('i-i-s-mmmm-т-н-e.new',
  { path: 'i-i-s-mmmm-т-н-e/new' });
  this.route('i-i-s-mmmm-т-ч-акта-приемки-l');
  this.route('i-i-s-mmmm-т-ч-акта-приемки-e',
  { path: 'i-i-s-mmmm-т-ч-акта-приемки-e/:id' });
  this.route('i-i-s-mmmm-т-ч-акта-приемки-e.new',
  { path: 'i-i-s-mmmm-т-ч-акта-приемки-e/new' });
});

export default Router;
