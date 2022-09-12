import EmberRouter from '@ember/routing/router';
import config from 'ember-demo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('collection', { 
    path: 'collection/:collection_id'
  });
  this.route('product', { 
    path: 'product/:product_id'
  });
});
