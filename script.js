document.addEventListener('DOMContentLoaded', () => {
  const optionButtons = document.querySelectorAll('.product-card__option-btn');
  const priceElement = document.getElementById('product-price');
  const oldPriceElement = document.getElementById('product-old-price');
  const skuElement = document.getElementById('product-sku');
  const addToCartBtn = document.getElementById('add-to-cart-btn');

  optionButtons.forEach(button => {
    button.addEventListener('click', () => {
      optionButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-checked', 'true');
      const newPrice = button.getAttribute('data-price');
      const newOldPrice = button.getAttribute('data-old-price');
      const newSku = button.getAttribute('data-sku');
      if (priceElement) priceElement.textContent = newPrice;
      if (oldPriceElement) oldPriceElement.textContent = newOldPrice;
      if (skuElement) skuElement.textContent = newSku;
    });
  });

  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const originalText = addToCartBtn.querySelector('span').textContent;
      addToCartBtn.querySelector('span').textContent = 'Добавлено!';
      addToCartBtn.style.backgroundColor = '#21431d';

      setTimeout(() => {
        addToCartBtn.querySelector('span').textContent = originalText;
        addToCartBtn.style.backgroundColor = '';
      }, 1500);
    });
  }
});