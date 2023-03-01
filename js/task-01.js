const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll("li.item");

console.log(`Liczba kategorii: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElement = item.querySelectorAll("li");

  console.log(
    `Kategorie: ${categoryTitle}\nElements: ${categoryElement.length}`
  );
});
