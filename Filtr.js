const products = [
    { name: "Wiertarka", price: 250, category: "Narzędzia" },
    { name: "Mikser kuchenny", price: 120, category: "AGD" },
    { name: "Fotel biurowy", price: 350, category: "Meble" },
    { name: "Koc elektryczny", price: 80, category: "AGD" },
    { name: "Odtwarzacz MP3", price: 150, category: "Elektronika" },
    { name: "Lampa biurkowa", price: 60, category: "Meble" },
    { name: "Grill elektryczny", price: 220, category: "AGD" },
    { name: "Odkurzacz", price: 450, category: "AGD" },
    { name: "Tablica korkowa", price: 45, category: "Meble" },
    { name: "Zestaw narzędzi", price: 180, category: "Narzędzia" }
  ];

  function filterProducts(products, category, minPrice, maxPrice) {
    const filteredProducts = products.filter(product => {
      const inCategory = category ? product.category.toLowerCase() === category.toLowerCase(): true
      const inPriceRange = product.price >= minPrice && product.price <= maxPrice
      return inCategory && inPriceRange
    });

    if (filteredProducts.length === 0) {
      console.log("Brak produktów")
    } else {
      filteredProducts.forEach(product => {
        console.log(`${product.name}, ${product.category}, ${product.price} PLN`)
      });
    }
  }
  
  filterProducts(products, "Meble", 110, 200)
  filterProducts(products, "", 0, 50)
  filterProducts(products, "AGD", 100, 300)
  filterProducts(products, "Narzędzia", 150, 300)