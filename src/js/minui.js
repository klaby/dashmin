/* -----------------------------------*/
/* ---------->>> minUI.js <<<---------*/
/* -----------------------------------*/

/* JS > MINUI
//////////////////////////////////////*/

/**
* @author H i u k k y
*
* @section js/minui.js
*/

/**
 * NAVBAR
 */

const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const dropToggle = document.getElementById('drop-toggle');
const dropdownUser = document.getElementById('dropdown-user');
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

// Menu
menuToggle.addEventListener('click', e => showHideSidebar());

function showHideSidebar(){
    const width = window.innerWidth;
    
    if (width > 576 && sidebar.classList.contains('sidebar')) showSidebar('min');
    else if (width > 576 && sidebar.classList.contains('sidebar-min')) hideSidebar('min');
    else if (width < 576 && !sidebar.classList.contains('is-open')) showSidebar('mobile');
    else hideSidebar('mobile');
}

function showSidebar(type){
    switch (type) {
        case 'min':
            sidebar.classList.replace('sidebar', 'sidebar-min');
            navbar.classList.add('min');
            content.classList.add('min');
        break;  
        case 'mobile':
            sidebar.classList.add('is-open');
        break;
    }
}

function hideSidebar(type){
    switch (type) {
        case 'min':
            sidebar.classList.replace('sidebar-min', 'sidebar');
            navbar.classList.remove('min');
            content.classList.remove('min');
        break;  
        case 'mobile':
            sidebar.classList.remove('is-open');
        break;
    }
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

// Hidden Sidebar - DropDown user
window.addEventListener('click', event => {
    if(event.target !== dropdownUser && !dropdownUser.contains(event.target)) hideDrop();
    if(!sidebar.contains(event.target) && window.innerWidth < 767 && !menuToggle.contains(event.target)) hideSidebar();
});