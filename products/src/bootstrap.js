import faker from 'faker';

/**
 * <The function name is arbitrary>
 * Function that will handle the module and
 * render the HTML to page.
 * @param {*} el is an HTML element
 */
const mount = (el) => {
  let products = '';

  for(let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
}

// is in development mode
if(process.env.NODE_ENV === 'development') {
  const element = document.querySelector('#dev-only-products');
  // dev-only element exists - ASSUMING (not sure about it) that container wont have the same element
  if(element) {
    // probably running in isolation
    mount(element);
  }
}

// with export the container can import an call it when necessary.
export { mount };
