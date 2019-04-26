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
 * VARIABLES
 */

// Navbar
var dropToggle = document.getElementById('drop-toggle');
var dropdownUser = document.getElementById('dropdown-user');

// Sidebar
var menuToggle = document.getElementById('menu-toggle');
var sidebar = document.getElementById('sidebar');
var navbar = document.getElementById('navbar');


/**
 * FUNCTIONS
 */

// Sidebar
menuToggle.addEventListener('click', e=> showHideSidebar());

function showHideSidebar(){
    [...sidebar.classList].map((value)=>{

        switch(value){
            case 'collapse':    
                showSide();
            break;

            case 'is-collapsed':
                hideSide();
            break;
        }

    });
}

// Show Sidebar
function showSide(){
    if(window.innerWidth < 767){
        sidebar.style.display = 'block';
        sidebar.classList.replace('collapse', 'is-collapsed');
    } else{
        navbar.classList.replace('navbar', 'navbar-min');
        replaceAll(sidebar, ['sidebar', 'collapse'], ['sidebar-min', 'is-collapsed']);
    }
}

//Hide Sidebar
function hideSide(){
    if(window.innerWidth < 767){
        sidebar.style.display = 'none';
        sidebar.classList.replace('is-collapsed', 'collapse');
    } else{
        navbar.classList.replace('navbar-min', 'navbar');
        replaceAll(sidebar, ['sidebar-min', 'is-collapsed'], ['sidebar', 'collapse']);
    }
}

// Navbar - Dropdown User
dropToggle.addEventListener('click',  event =>  showHideDrop());

function showHideDrop(){
    [...dropdownUser.classList].map((value)=>{

        switch(value){
            case 'collapse':
                showDrop();
            break;

            case 'is-collapsed':
                hideDrop();
            break;
        }

    });
}

// Show Drop
function showDrop(){
    dropToggle.classList.replace('fa-caret-down', 'fa-caret-up');
    replaceAll(dropdownUser, ['dropdown-user-min', 'collapse'], ['dropdown-user', 'is-collapsed']);
}

// Hide Drop
function hideDrop(){
    dropToggle.classList.replace('fa-caret-up', 'fa-caret-down');
    replaceAll(dropdownUser, ['dropdown-user', 'is-collapsed'], ['dropdown-user-min', 'collapse']);
}

/**
 * DEFAULT
 */

/* Hidden Sidebar / DropDown user */ 
window.addEventListener('click', event => {
    if(event.target !== dropdownUser && !dropdownUser.contains(event.target)) hideDrop();
    if(!sidebar.contains(event.target) && window.innerWidth < 767 && !menuToggle.contains(event.target)) hideSide();
});

/* Replace All */
function replaceAll(element, oldClass=[], newClass=[]){
    
    if(!oldClass.indexOf('') && !newClass.indexOf('')){
        console.error("replaceAll: Enter a value to be replaced");
    } else {
        for(let i = 0; i < oldClass.length && i < newClass.length; i++ ){
            element.classList.replace(oldClass[i], newClass[i]);
        }  
    }

}