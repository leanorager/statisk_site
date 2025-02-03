const categoryList = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories?limit=100`)
  .then((response) => response.json())
  .then((data) => showCategoryList(data));

function showCategoryList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (category) => `<a href="productlist.html?category=${category.category}" class="category_link">${category.category}</a>
        `
    )
    .join("");
  console.log(markup);
  categoryList.innerHTML = markup;
}
