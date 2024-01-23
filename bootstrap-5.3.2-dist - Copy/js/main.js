window.addEventListener('load', function () {
    document.querySelector('.loading-overlay').style.display = 'none';
});

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animated');

    animatedElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('animate-in');
        }
    });
}

document.addEventListener('scroll', handleScrollAnimations);
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
})

// form contact
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animated');

        animatedElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('animate-in');
            }
        });
    }

    document.addEventListener('scroll', handleScrollAnimations);
    document.addEventListener('DOMContentLoaded', handleScrollAnimations);
