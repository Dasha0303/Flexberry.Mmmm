import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.mmmm.caption'),
          title: i18n.t('forms.application.sitemap.mmmm.title'),
          children: [{
            link: 'i-i-s-mmmm-склад-l',
            caption: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-склад-l.caption'),
            title: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-склад-l.title'),
            children: null
          }, {
            link: 'i-i-s-mmmm-т-н-l',
            caption: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-т-н-l.caption'),
            title: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-т-н-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-mmmm-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-сотрудники-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-mmmm-акт-приемки-l',
            caption: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-акт-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-акт-приемки-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-mmmm-т-ч-акта-приемки-l',
            caption: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-т-ч-акта-приемки-l.caption'),
            title: i18n.t('forms.application.sitemap.mmmm.i-i-s-mmmm-т-ч-акта-приемки-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})