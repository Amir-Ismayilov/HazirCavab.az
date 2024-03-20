$(document).ready(function () {
    $(window).scroll(function () {
        $('.animate-on-scroll').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass($(this).data('animation')).css('visibility', 'visible');
            } else {
                $(this).removeClass($(this).data('animation')).css('visibility', 'hidden');
            }
        });
    }).scroll(); // Trigger scroll event on page load
});

// QR animation
// var square = document.querySelector('.square-wrapper');

// var observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         var entrySquare = entry.target.querySelector('.square');
//         if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
//             return;
//         }

//         if (entry.isIntersecting) {
//             entrySquare.classList.add('square-animation');
//             return;
//         }

//         entrySquare.classList.remove('square-animation');
//     });
// });

// observer.observe(square);

// Progressbar
const pageProgressBar = document.querySelector(".progress-bar");

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    const scrolledPercentage =
        (scrollContainer().scrollTop /
            (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
        100;
    pageProgressBar.style.width = `${scrolledPercentage}%`;
});