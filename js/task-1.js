const categoriesList = document.querySelector('#categories');
const categories = categoriesList.querySelectorAll('li.item');
console.log(`Количество категорий: ${categories.length}`);
categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Категория: ${title}, количество элементов: ${itemsCount}`);
});