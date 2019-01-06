export default {
  template: `<div class="Product" v-on:click="onClick">
    <div v-html="product.name" class="name"></div>
    <div class="priceRange" v-if="product.priceRange">
      <div class="price" v-if="product.priceRange.regular">
        <span class="currencyValue">
          {{ product.priceRange.regular.low }}
        </span>
        <span class="currencyValue">
          {{ product.priceRange.regular.high }}
        </span>
      </div>
      <div class="price" v-if="product.priceRange.selling">
        <span class="currencyValue">
          {{ product.priceRange.selling.low }}
        </span>
        <span class="currencyValue">
          {{ product.priceRange.selling.high }}
        </span>
      </div>
    </div>
    <img :src="product.hero.href" class="hero"></img>
  </div>`,
  methods: {
    onClick() {
      this.select(this.product)
    }
  },
  props: ['product', 'select']
}
