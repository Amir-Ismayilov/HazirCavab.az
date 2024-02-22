// QR animation
var square = document.querySelector('.square-wrapper');

var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var entrySquare = entry.target.querySelector('.square');
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
            return;
        }

        if (entry.isIntersecting) {
            entrySquare.classList.add('square-animation');
            return;
        }

        entrySquare.classList.remove('square-animation');
    });
});

observer.observe(square);



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
