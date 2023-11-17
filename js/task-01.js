const categories = document.querySelectorAll('.item');
let count = 0;
categories.forEach(() => { count++; });
console.log("Number of categories:", count);

categories.forEach((categoryItem) => {
  const titleElement = categoryItem.firstElementChild; 
  const subItems = categoryItem.lastElementChild.children; 
  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${subItems.length}`);
});
