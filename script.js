// variables
const cartBtn = document.querySelector('.cart-btn')
const closeCartBtn = document.querySelector('.close-cart')
const clearCartBtn = document.querySelector('.clear-cart')
const cartDOM = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart-overlay')
const cartItems = document.querySelector('.cart-items')
const cartTotal = document.querySelector('.cart-total')
const cartContent = document.querySelector('.cart-content')
const productsDOM = document.querySelector('.products-center')

document.addEventListener('DOMContentLoaded', () => {
  fetch('products.json').then(function (response) {
    return response.json()
  }).then(function (data){
    console.log(data.items)
    let html = ''
    data.items.forEach((product)=> {
      console.log(product)
      html += `
      <article class="product">
          <div class="img-container">
            <img
              class="product-img"
              src= ${product.fields.image.fields.file.url}
              alt="product"/>
            
            <button
              class="bag-btn"
              data-id= ${product.sys.id}
            onclick="addToCart({${product.sys}})"
            >
              <i class="bi bi-cart4"></i>add to cart
            </button>
          </div>
          <h3>${product.fields.title}</h3>
          <h4>$${product.fields.price}</h4>
        </article>
      `
    })
    productsDOM.innerHTML = html
  })
})

function addToCart (data) {
  console.log(data)
}
document.querySelector('.bag-btn').addEventListener('click', () => {
  console.log('here')
})


