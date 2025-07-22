$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // scroll to top
    $('.scroll-up-btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        $('html').css("scrollBehavior", "auto");
    });

    // smooth scroll on menu items click
    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle navbar menu
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    new Typed(".typing", {
        strings: ["a Software Developer", "an Applied Mathematician","a Researcher", "a Writer", "an Online Tutor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    new Typed(".typing-2", {
        strings: ["a Software Developer", "an Applied Mathematician", "a Researcher", "a Writer", "an Online Tutor"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
