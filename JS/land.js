
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(productId) {
  const modal = document.getElementById("productModal");
  const modalDetails = document.getElementById("modal-details");

  let productDetails = '';
  if (productId === 1) {
    productDetails = `<h3>Stylish Hoodie</h3><p>This hoodie is perfect for everyday wear. Soft, durable, and stylish!</p>`;
  } else if (productId === 2) {
    productDetails = `<h3>Cozy Sweater</h3><p>This cozy sweater will keep you warm and fashionable during colder months.</p>`;
  } else if (productId === 3) {
    productDetails = `<h3>Classic Jacket</h3><p>A timeless piece for any wardrobe. Comfortable and stylish!</p>`;
  }

  modalDetails.innerHTML = productDetails;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("productModal").style.display = "none";
}