import Route from '@ember/routing/route';

export default class CollectionProductRoute extends Route {

	model(params) {
		console.log('in Product router', params)
    return this.getData(params.product_id)
  }

  getData(product_name) {
    return fetch(`https://www.trypura.com/products/${product_name}.json`, {
      crossDomain: true,
      credentials: 'same-origin',
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch((error) => {
        console.error(error);
      })
        .then( data => {
          console.log('product data is ', data.product )
          return data.product
        })
  }

}
