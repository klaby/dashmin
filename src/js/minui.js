/**
 * NAVBAR
 */

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const dropToggle = document.getElementById('drop-toggle');
const dropdownUser = document.getElementById('dropdown-user');

// Menu
menuToggle.addEventListener('click', e => {
    if(window.innerWidth > 768 && sidebar.classList.contains('is-visible')) hideSidebar();
    else showSidebar();
});

function showSidebar() {
    sidebar.classList.replace('is-hidden', 'is-visible');
}
function hideSidebar(){
    sidebar.classList.replace('is-visible', 'is-hidden');
}

// Dropdown
dropToggle.addEventListener('click', e => {
    if(dropdownUser.classList.contains('dropdown-user-min')) showDrop();
    else hideDrop();
});

function showDrop(){
    dropToggle.classList.replace('fa-caret-down', 'fa-caret-up');
    dropdownUser.classList.replace('dropdown-user-min', 'dropdown-user');
}
function hideDrop(){
    dropToggle.classList.replace('fa-caret-up', 'fa-caret-down');
    dropdownUser.classList.replace('dropdown-user', 'dropdown-user-min');
}