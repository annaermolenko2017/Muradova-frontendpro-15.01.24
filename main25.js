
const categoriesData = ['Кросівки', 'Черевики', 'Туфлі', 'Плоске взуття', 'Сандалії та капці'];
const productsData = {
    'Кросівки': [
        { name: 'Бігові кросівки', price: '$30' },
        { name: 'Повсякденні кросівки', price: '$40' },
        { name: 'Спортивні кросівки', price: '$45' },
        { name: 'Високі кросівки', price: '$35' },
        { name: 'Тактичні кросівки', price: '$50' }
    ],
    'Черевики': [
        { name: 'Туристичні черевики', price: '$60' },
        { name: 'Зимові черевики', price: '$75' },
        { name: 'Челсі', price: '$65' },
        { name: 'Ботильони', price: '$60' },
        { name: 'Ботфорти', price: '$50' }
    ],
    'Туфлі': [
        { name: 'Туфлі на шпильці', price: '$40' },
        { name: 'Туфлі на танкетці', price: '$35' },
        { name: 'Туфлі-човники', price: '$45' },
        { name: 'Туфлі на платформі', price: '$30' }
    ],
    'Плоске взуття': [
        { name: 'Балетки', price: '$50' },
        { name: 'Мокасини', price: '$45' },
        { name: 'Еспадрильї', price: '$50' },
        { name: 'Оксфорди', price: '$35' },
        { name: 'Лофери', price: '$45' }
    ],
    'Сандалії та капці': [
        { name: 'Сандалії', price: '$35' },
        { name: 'Босоніжки', price: '$45' },
        { name: 'Шльопанці', price: '$20' },
        { name: 'Капці', price: '$15' }
    ],
};

const choiceCategories = () => {
    const categoriesElement = document.getElementById('categories');
    categoriesElement.innerHTML = `
                <h2>Категорії взуття</h2>
                <ul id="category-list">
                    ${categoriesData.map(category => `<li onclick="showProducts('${category}')">${category}</li>`).join('')}
                </ul>
            `;
};

const choiceProducts = (category) => {
    const productsElement = document.getElementById('products');
    productsElement.innerHTML = `
                <h2>${category}</h2>
                <ul id="product-list">
                    ${productsData[category].map(product => `<li onclick="showProductInfo('${product.name}', '${product.price}')">${product.name}</li>`).join('')}
                </ul>
            `;
};

const choiceProductInfo = (name, price) => {
    const productInfoElement = document.getElementById('product-info');
    productInfoElement.innerHTML = `
                <h2>Інформація про товар</h2>
                <p>${name}</p>
                <p>Ціна: ${price}</p>
                <button onclick="buyProduct()">Купити</button>
            `;
};
const showProducts = (category) => {
    choiceProducts(category);
};
const showProductInfo = (name, price) => {
    choiceProductInfo(name, price);
};
const buyProduct = () => {
    alert('Вибачте, товар куплений!');
    resetCategories();
};

const resetCategories = () => {
    const categoriesElement = document.getElementById('categories');
    const productsElement = document.getElementById('products');
    const productInfoElement = document.getElementById('product-info');

    categoriesElement.innerHTML = '';
    productsElement.innerHTML = '';
    productInfoElement.innerHTML = '';

    categoriesElement.innerHTML = `
                <h2>Категорії взуття</h2>
                <ul id="category-list">
                    ${categoriesData.map(category => `<li onclick="showProducts('${category}')">${category}</li>`).join('')}
                </ul>
            `;
};

choiceCategories();