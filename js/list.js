const pickedCategory = new URLSearchParams(window.location.search).get("category");
const productList = document.querySelector(".product_list_container");
const categoryHeadline = document.querySelector(".category_headline");

categoryHeadline.innerHTML = pickedCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${pickedCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  const markup = products
    .map(
      (product) => `<a href="product.html">
          <div class="product_card discount1">
            <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt" />
            <div class="product_info">
              <div class="product_brand">${product.brandname}</div>
              <div class="product_name">${product.productdisplayname}</div>
            </div>
            <div class="product_price">
            <span class="old_price"></span>
              <span class="new_price">DKK ${product.price}</span>
            </div>
          </div>
        </a>`
    )
    .join("");
  console.log(markup);
  productList.innerHTML = markup;
}
