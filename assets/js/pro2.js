$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 3000);
});
$(function() {
    var slides = $('.slides'),
        images = slides.find('img');

    images.each(function(i) {
        $(this).attr('data-id', i + 1);
    })

    var typed = new Typed('.typed-words', {
        strings: ["(1962-2022)"],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        preStringTyped: (arrayPos, self) => {
            arrayPos++;
            console.log(arrayPos);
            $('.slides img').removeClass('active');
            $('.slides img[data-id="' + arrayPos + '"]').addClass('active');
        }

    });
})

function scrollHeader() {
    const header = document.getElementById('devices-wrapper')
    if (this.scrollY >= 100) header.classList.add('devices-up');
    else header.classList.remove('devices-up');
}
window.addEventListener('scroll', scrollHeader);

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 95) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true
})
sr.reveal(`.content h1`, { delay: 4000 })
sr.reveal(`.logo`, { delay: 3500, origin: 'left' })
sr.reveal(`.devices-wrapper`, { delay: 4500, origin: 'top' })
sr.reveal(`.author`, { delay: 3500, origin: 'left' })
sr.reveal(`.part_1`, { delay: 300, origin: 'left' })
sr.reveal(`.part_2`, { delay: 300, origin: 'right' })
sr.reveal(`.part_3`, { delay: 300, origin: 'left' })
sr.reveal(`.part_4`, { delay: 300, origin: 'right' })
sr.reveal(`.video-part`, { interval: 300, origin: 'bottom' })
var hidden_iframe = document.querySelector('.hidden-iframe');
console.log(hidden_iframe);
hidden_iframe.addEventListener('click', function() {
    hidden_iframe.style.display = 'block';
})