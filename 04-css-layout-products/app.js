// Add JS here

const amazonImages = [
    {
      url: "https://m.media-amazon.com/images/I/81+vTBpIB9L._AC_SF226,226_QL85_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/71OWtcxKgvL._AC_SF226,226_QL85_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/71ERiMq+7tL._AC_SF226,226_QL85_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61hZIUf9iDL._AC_SF226,226_QL85_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61mP9vPVqAL._AC_SL1000_.jpg",
    },
    {
      url: "https://m.media-amazon.com/images/I/61d46oYQgdL._AC_SL1500_.jpg",
    },
  ];

  const productsContainer = document.getElementById('productsContainer');

  amazonImages.forEach(amazonImage => {
    const productImage = document.createElement('img');
    productImage.src = amazonImage.url;
    productsContainer.appendChild(productImage);
  })