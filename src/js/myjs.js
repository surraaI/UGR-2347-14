const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownToggle.addEventListener('mouseover', function(event) {
    event.preventDefault();
    dropdownMenu.classList.add('show');
});

dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.classList.remove('show');
});


window.addEventListener('click', function(event) {
    dropdownMenu.classList.remove('show');
});