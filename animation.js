const sidebar = document.querySelector('.menu');
const sidebarToggler = document.querySelector('.hamburger');

sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('showmenu');
});


window.addEventListener('click', (e) => {
    if (e.target.id !== 'menu' && e.target.className !== 'hamburger') {
        sidebar.classList.remove('showmenu');
    }
});