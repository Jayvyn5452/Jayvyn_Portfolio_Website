document.addEventListener('DOMContentLoaded', function () {
    // Function to handle smooth scrolling
    function scrollToSection(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Function to toggle the menu
    function toggleMenu() {
        const menuLinks = document.querySelector('.menu-links');
        if (menuLinks) {
            menuLinks.classList.toggle('show');
        }
    }

    // Function to show project details
    function showProjectDetails(projectId) {
        const projectDetails = document.getElementById('project-details');
        if (projectDetails) {
            const cards = projectDetails.getElementsByClassName('project-detail-card');

            for (let i = 0; i < cards.length; i++) {
                cards[i].style.display = 'none';
            }

            const selectedCard = cards[projectId - 1];

            // Your existing logic for showing project details

            if (selectedCard) {
                selectedCard.style.display = 'block';
                projectDetails.style.display = 'flex';

                projectDetails.addEventListener('click', function (event) {
                    if (event.target === projectDetails) {
                        projectDetails.style.display = 'none';
                    }
                });
            }
        }
    }

    // Add smooth scrolling for navigation links, including skills
    document.querySelectorAll('.menu-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);

            // Check if the target is the skills section
            if (targetId === 'skills') {
                // Scroll to the skills section with a specific offset (adjust as needed)
                const skillsSection = document.getElementById('skills');
                if (skillsSection) {
                    window.scrollTo({
                        top: skillsSection.offsetTop - document.querySelector('.navbar').offsetHeight,
                        behavior: 'smooth'
                    });
                }
            } else {
                // Scroll to other sections
                scrollToSection(targetId);
            }

            // Close the menu after clicking
            toggleMenu();
        });
    });

    // Trigger smooth scroll when the page loads if there's a hash in the URL
    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        scrollToSection(targetId);
    }

    //=================================================================//

    // Additional code for coolLink
    const coolLink = document.getElementById('coolLink');

    if (coolLink) {
        coolLink.addEventListener('click', function (e) {
            e.preventDefault();

            this.classList.add('clicked');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1200); // Increased the timeout for a smoother animation
        });

        coolLink.addEventListener('transitionend', function (event) {
            if (event.propertyName === 'transform') {
                this.classList.remove('clicked');
            }
        });

        coolLink.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
        });

        coolLink.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    }

    //===============================================================================//

    // Slider logic for education section
    let slideIndex = 0;

    function showSlides() {
        const slides = document.querySelector('.education-slider');
        const educationItems = document.querySelectorAll('.education-item');

        if (slides && educationItems.length > 0) {
            if (slideIndex >= educationItems.length) {
                slideIndex = 0;
            } else if (slideIndex < 0) {
                slideIndex = educationItems.length - 1;
            }

            slides.style.transform = `translateX(${-slideIndex * 100}%)`;
        }
    }

    function nextSlide() {
        slideIndex++;
        showSlides();
    }

    function prevSlide() {
        slideIndex--;
        showSlides();
    }

    // Button click event listeners for next and previous slides
    const rightArrow = document.querySelector('.slider-arrow.right');
    const leftArrow = document.querySelector('.slider-arrow.left');

    if (rightArrow) {
        rightArrow.addEventListener('click', nextSlide);
    }

    if (leftArrow) {
        leftArrow.addEventListener('click', prevSlide);
    }

    // Button click event listener for project details
    const projectCards = document.querySelectorAll('.project-card');
    if (projectCards) {
        projectCards.forEach((card, index) => {
            card.addEventListener('click', function () {
                showProjectDetails(index + 1);
            });
        });
    }

    // Call showSlides() after the document has loaded
    showSlides();
});

// script.js
// script.js

// Initialize EmailJS with your service ID
 // Initialize EmailJS with your service ID
 // Initialize EmailJS with your service ID
// Initialize EmailJS with your service ID
(function(){
    emailjs.init("RF0dKYEMbHvCI04LQ");
})();
document.getElementById()
// Function to send email
function sendMail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Check if any of the required fields are empty
    if (!name || !email || !subject || !message) {
        // Use SweetAlert2 for an error notification
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please fill out all required fields.',
            
            confirmButtonColor: '#c11b1d' // Use confirmButtonColor instead of ErrorButton
            
        });
        return; // Exit the function early if any field is empty
    }

    var parms = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    emailjs.send("service_mqp7ymg", "template_41jn0df", parms)
        .then(function(response) {
            console.log("Email sent:", response);
            // Use SweetAlert2 for a nice success notification
            Swal.fire({
                icon: 'success',
                title: 'Email Sent!',
                text: 'Your message has been sent successfully.',
                confirmButtonColor: '#4d13a9' // Change this to the color you desire
            });
        })
        .catch(function(error) {
            console.error("Email error:", error);
            // Use SweetAlert2 for an error notification
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error sending your email.',
                confirmButtonColor: '#c11b1d' // Use confirmButtonColor instead of ErrorButton
            });
        });
}

