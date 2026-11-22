const tabs = document.querySelectorAll('.menu__tab');
const grids = document.querySelectorAll('.menu__grid');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        
        tabs.forEach((item) => {
            item.classList.remove('menu__tab--active');
        });

        tab.classList.add('menu__tab--active');

        const target = tab.dataset.target;

        grids.forEach((grid) => {
            grid.classList.remove('menu__grid--active');

            if (grid.dataset.tab === target) {
                grid.classList.add('menu__grid--active');
            }
        });
    });
});

const bookingForm = document.querySelector('.contacts__form');
const formMessage = document.querySelector('.contacts__message');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    formMessage.textContent = 'Спасибо! Ваша заявка на бронирование принята.';

    bookingForm.reset();

    setTimeout(() => {
        formMessage.textContent = '';
    }, 4000);
});

