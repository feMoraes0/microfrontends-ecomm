import { mount as ProductsMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/CartShow';

console.log('contaier');

const productsElement = document.querySelector('#my-products');
ProductsMount(productsElement);

const cartElement = document.querySelector('#my-cart');
CartMount(cartElement);
