document.addEventListener('contextmenu', function (e) {
  if (e.target.closest('.product-card img')) {
    e.preventDefault();
  }
});
