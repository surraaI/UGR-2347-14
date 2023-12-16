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
        window.location.href = 'about.html'; // Replace 'about.html' with the actual path to the desired HTML page
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var resumeButton = document.getElementById('Resume');
    resumeButton.addEventListener('click', function() {
        var link = document.createElement('a');
        link.href = 'SuraItana.pdf'; // Replace 'SuraItna.pdf' with the actual path to the PDF file
        link.download = 'SuraItana.pdf';
        link.click();
    });
});

function sendEmail(event) {
    event.preventDefault(); // Prevent form submission

    // Get the form data
    var form = document.getElementById('contactForm');
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var message = form.elements['message'].value;

    // Send the email using EmailJS
    emailjs.send('service_contactSura', 'template_Suraemail', {
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully');
            // Clear the form fields
            form.reset();
            // Reload the page
            location.reload();
        }, function(error) {
            console.error('Email sending failed:', error);
        });
}