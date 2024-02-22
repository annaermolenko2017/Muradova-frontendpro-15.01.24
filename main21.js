// Елементи на сторінці
const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');

sliderItems.forEach(function (slide,index) {
    // Приховуємо всі слайди, крім першого
    if (index !== 0) slide.classList.add('hidden');

    // Додаємо індекси
    slide.dataset.index = index;

    // Додаємо data-active атрибут для першого/активного слайду
    sliderItems[0].setAttribute('data-active', '');

    // Клік по слайдах
    slide.addEventListener('click', function () {
        showNextSlide('next')
    });
});

btnNext.onclick = function () {
    showNextSlide('next')
};

btnPrev.onclick = function () {
    showNextSlide('prev')
};

function showNextSlide(direction) {

    // Приховуємо поточний слайд
    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Розраховуємо наступний індекс залежно від напрямку руху
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    // Показуємо наступний слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}