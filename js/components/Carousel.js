export default {
  template: `<div :class="carouselClass()" :data-image="this.currentImage">
    <div class="background" v-on:click="close()"></div>

    <div class="box">
      <div class="images" v-if="product">
        <img
          v-for="(image, index) in product.images"
          :data-image="index"
          :src="image.href"
          :class="imageClass(index)"
        ></img>
      </div>

      <div class="bullets" v-if="product">
        <div
          v-if="product"
          v-for="(image, index) in product.images"
          v-on:click="selectImage(index)"
          :data-image="index"
          :class="'bullet ' + imageClass(index)"
        ></div>
      </div>

      <div class="prevButton" v-on:click="prev()"></div>
      <div class="nextButton" v-on:click="next()"></div>
      <div class="closeButton" v-on:click="close()"></div>
    </div>
  </div>`,
  data: () => {
    return {
      currentImage: 0
    }
  },
  methods: {
    next() {
      this.currentImage = (this.currentImage + 1) % this.product.images.length
    },
    prev() {
      this.currentImage = (this.product.images.length + this.currentImage - 1) % this.product.images.length
    },
    selectImage(index) {
      this.currentImage = index;
    },
    carouselClass() {
      let className = 'Carousel'

      if (this.product && this.product.images) {
        className += ' open'
      }

      return className
    },
    imageClass(index) {
      if (index < this.currentImage) {
        return 'prev'
      } else if (index > this.currentImage) {
        return 'next'
      }

      return 'active'
    },
  },
  watch: {
  	product(newVal, oldVal) {
      this.currentImage = 0
    }
  },
  props: ['product', 'close']
}
