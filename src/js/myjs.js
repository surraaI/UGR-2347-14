const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
burgerIcon.addEventListener('click', () => { navbarMenu.classList.toggle('is-active') })

const nightModeSwitch = document.getElementById('NightMode');
const contentSection = document.getElementById('');

nightModeSwitch.addEventListener('change', function() {
    if (this.checked) {
        contentSection.classList.add('has-background-dark', 'has-text-light');
    } else {
        contentSection.classList.remove('has-background-dark', 'has-text-light');
    }
});