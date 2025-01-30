let productId = 1532;

let productContainer = document.querySelector(".product_container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  // Det er en funktion, der konverterer til json
  .then((data) => {
    productContainer.innerHTML = `
    <div class="product_img">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Produkt" />
        </div>
        <div class="product_details">
          <h1 class="product_name">${data.productdisplayname}</h1>
          <p class="product_price">${data.price} DKK</p>

          <div class="size_details">
            <button class="size-btn">XS</button>
            <button class="size-btn">S</button>
            <button class="size-btn">M</button>
            <button class="size-btn">L</button>
            <button class="size-btn">XL</button>
            <button class="size-btn">XXL</button>
          </div>

          <button class="add-to-cart">LÆG I KURV</button>

          <div class="product_info">
            <h2>Product information</h2>
            <p class="product_number">Product number: ${data.id}</p>
            <p class="category">Category: ${data.category}</p>
            <p class="subcategory">Subcategory: ${data.subcategory}</p>
            <p class="arctile_type">Article type: ${data.articletype}</p>
            <p class="color">Color: ${data.basecolour}</p>
            <p class="brand">Brand: ${data.brandname}</p>
          </div>
        </div>`;
  });

// ${data.nøgle-fra-api} ved de ting der er hardcoded
