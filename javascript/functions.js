$(() => {
    let startX = 0;
    let endX = 0;
    let aboutFlag = false;
    let leftOrRight = true;
    let aboutCWidth = 0;
    let currentSlide = 0;

    const menu = $(".header-navbar-portrait img");
    const submenu = $(".header-navbar-submenu");
    const aboutSlide = $(".about_us-lower");
    const dot1 = $(".dot1");
    const dot2 = $(".dot2");
    const dot3 = $(".dot3");

    // hamburger menu code for mobile portrait
    submenu.css({ display: "none" });
    menu.click(() => {
        if (submenu.css("display") == "none") {
            submenu.css({ display: "block" });
        } else {
            submenu.css({ display: "none" });
        }
    });

    // about slides code carousel
    const touchStart = (e) => {
        startX = e.touches[0].clientX;
        aboutCWidth = aboutSlide.scrollLeft();
    };
    const touchMove = (e) => {
        endX = startX - e.touches[0].clientX;

        if (endX > 100) {
            aboutFlag = true;
            leftOrRight = true;
        } else if (endX < -100) {
            aboutFlag = true;
            leftOrRight = false;
        } else {
            aboutFlag = false;
            leftOrRight = true;
        }
    };
    const touchEnd = () => {
        let width = aboutSlide[0].clientWidth;
        const nSlide = Math.ceil(aboutCWidth / width) + 1;

        if (aboutFlag && leftOrRight) {
            aboutSlide[0].scrollTo({
                left: 430 * nSlide,
                behavior: "smooth",
            });
        } else if (aboutFlag && !leftOrRight) {
            aboutSlide[0].scrollTo({
                left: 430 * (nSlide - 2),
                behavior: "smooth",
            });
        } else {
            aboutSlide[0].scrollTo({
                left: 430 * (nSlide - 1),
                behavior: "smooth",
            });
        }
        console.log(nSlide)
        aboutFlag = false;
        leftOrRight = true;
    };

    const touchScroll = (e) =>{
        e.preventDefault();
    }

    aboutSlide[0].addEventListener("scroll", touchScroll);
    aboutSlide[0].addEventListener("touchstart", touchStart);
    aboutSlide[0].addEventListener("touchmove", touchMove);
    aboutSlide[0].addEventListener("touchend", touchEnd);
});
