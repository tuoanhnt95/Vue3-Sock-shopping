const app = Vue.createApp({
  data() {
    return {
      product: 'Socks',
      image: './assets/images/socks_blue.jpg',
      inStock: true,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {id: 2234, color: 'green'},
        {id: 2235, color: 'blue'}
      ],
      sizes: [
        {id: 1, text: 'XXS'},
        {id: 1, text: 'XS'},
        {id: 1, text: 'S'},
        {id: 1, text: 'M'},
        {id: 1, text: 'L'},
        {id: 1, text: 'XL'},
        {id: 1, text: 'XXL'}
       ]
    }
  }
})
