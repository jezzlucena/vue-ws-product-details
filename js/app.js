import Product from './components/Product.js'
import Carousel from './components/Carousel.js'

Vue.component('Product', Product);
Vue.component('Carousel', Carousel);

window.onload = () => {
  let app = new Vue({
    el: '#app',
    data: {
      pageDetails: {
        title: 'Williams-Sonoma - Product Details',
        description: 'A Front-End Coding Challenge solution proposed by Jezz Lucena.',
      },
      error: false,
      productList: null,
      activeProduct: null,
    },
    methods: {
      select(product) {
        app.activeProduct = product
      },
      deselect() {
        app.activeProduct = null
      }
    }
  });

  fetch('js/products.json')
    .then(response => { return response.json() })
    .then(jsonResponse => {
      app.productList = jsonResponse;
    })
    .catch(err => {
      app.error = "An error occurred when fetching the data source.";
    });
};
