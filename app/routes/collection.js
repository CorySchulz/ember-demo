import Route from '@ember/routing/route';

export default class CollectionRoute extends Route {

	model(params) {
		console.log('in Collection router')
    return this.getData(params.collection_id)
  }

  getData(collectionName) {
    return fetch(`https://www.trypura.com/collections/${collectionName}/products.json`, {
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
          console.log('collection data is ', data )
          return data.products
        })
  }


}
