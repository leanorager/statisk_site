const categoryList = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories?limit=100`)
  .then((response) => response.json())
  .then((data) => showCategoryList(data));

function showCategoryList(categories) {
  console.log(categories);
  const markup = categories
    .map(
      (element) => `<a href="productlist.html?category=${element.category}" class="category_link">${element.category}</a>
        `
    )
    .join(""); //joiner array og fjerner komma imellem
  console.log(markup); //logger i console
  categoryList.innerHTML = markup; //udskriver i html
}
