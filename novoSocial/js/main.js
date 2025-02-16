//добавление класса Active к нажатому пункту меню
const menuItems = document.querySelectorAll('.menu-item');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
    })
})

