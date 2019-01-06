import { mount } from '@vue/test-utils'
import Carousel from '../components/Carousel.js'

var testProduct = {
  "images":[
    {
      "href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-1-m.jpg",
    },
    {
      "href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-midnight-m.jpg",
    },
    {
      "href":"https://www.westelm.com/weimgs/rk/images/wcm/products/201848/0001/organic-luxe-fibrosoft-towels-white-m.jpg",
    }
  ],
}

describe('Carousel', () => {
  const wrapper = mount(Carousel, {
    propsData: {
      product: testProduct,
    }
  })

  it('renders all images correctly', () => {
    expect(wrapper.html()).toContain(`<img data-image="0" src="${testProduct.images[0].href}" class="active">`)
    expect(wrapper.html()).toContain(`<img data-image="1" src="${testProduct.images[1].href}" class="next">`)
    expect(wrapper.html()).toContain(`<img data-image="2" src="${testProduct.images[2].href}" class="next">`)
  })

  it('triggers next image correctly', () => {
    wrapper.find('.nextButton').trigger('click')

    expect(wrapper.html()).toContain(`<img data-image="0" src="${testProduct.images[0].href}" class="prev">`)
    expect(wrapper.html()).toContain(`<img data-image="1" src="${testProduct.images[1].href}" class="active">`)
    expect(wrapper.html()).toContain(`<img data-image="2" src="${testProduct.images[2].href}" class="next">`)
  })

  it('triggers select image by bullet point correctly', () => {
    wrapper.find('.bullet[data-image="2"]').trigger('click')

    expect(wrapper.html()).toContain(`<img data-image="0" src="${testProduct.images[0].href}" class="prev">`)
    expect(wrapper.html()).toContain(`<img data-image="1" src="${testProduct.images[1].href}" class="prev">`)
    expect(wrapper.html()).toContain(`<img data-image="2" src="${testProduct.images[2].href}" class="active">`)
  })

  it('wraps around image list correctly', () => {
    wrapper.find('.bullet[data-image="2"]').trigger('click')
    wrapper.find('.nextButton').trigger('click')

    expect(wrapper.html()).toContain(`<img data-image="0" src="${testProduct.images[0].href}" class="active">`)
    expect(wrapper.html()).toContain(`<img data-image="1" src="${testProduct.images[1].href}" class="next">`)
    expect(wrapper.html()).toContain(`<img data-image="2" src="${testProduct.images[2].href}" class="next">`)
  })

  it('triggers close callback correctly', () => {
    let closed = false

    wrapper.setProps({
        close: product => {
          closed = true
      }
    })

    wrapper.find('.closeButton').trigger('click')

    expect(closed).toBe(true)
  })
})
