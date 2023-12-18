var body = document.body;

function toggleNightMode() {

    body.classList.toggle('night-mode');
    nightModeButton.style.display = 'none';
    brightModeButton.style.display = 'inline-block';
}


function toggleBrightMode() {

    body.classList.toggle('bright-mode');
    brightModeButton.style.display = 'none';
    nightModeButton.style.display = 'inline-block';

}


var nightModeButton = document.getElementById('NightMode');
var brightModeButton = document.getElementById('BrightMode');


nightModeButton.addEventListener('click', toggleNightMode);
brightModeButton.addEventListener('click', toggleBrightMode);

document.addEventListener('DOMContentLoaded', function() {
    var aboutMeButton = document.getElementById('AboutMe');
    aboutMeButton.addEventListener('click', function() {
        window.location.href = 'about.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var resumeButton = document.getElementById('Resume');
    resumeButton.addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'SuraItana.pdf';
        link.download = 'SuraItana.pdf';
        link.click();
    });
});
const submitButton = document.getElementById(submit);
submitButton.addEventListener('click', submitForm)

function submitForm(event) {
    event.preventDefault();
    location.reload();
}