import { mount } from '@vue/test-utils'
import Product from '../components/Product.js'

var testProduct = {
  "id":"organic-luxe-fibrosoft-towels-white-b2650",
  "name":"Organic Luxe Fibrosoft&#8482; Towels - White",
  "priceRange":{
    "regular":{
      "high":95,
      "low":9
    },
    "selling":{
      "high":69,
      "low":6
    },
    "type":"special"
  },
  "hero":{
    "href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201847/0012/organic-luxe-fibrosoft-towels-white-m.jpg",
  },
}

describe('Product', () => {
  const wrapper = mount(Product, {
    propsData: {
      product: testProduct,
    }
  })

  it('renders the hero image correctly', () => {
    expect(wrapper.html()).toContain(`<img src="${testProduct.hero.href}" class="hero">`)
  })

  it('triggers select callback correctly', () => {
    let selectedProduct = null

    wrapper.setProps({
        select: product => {
          selectedProduct = product
      }
    })

    wrapper.trigger('click')

    expect(selectedProduct).toEqual(testProduct)
  })
})
