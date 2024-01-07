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
    const aboutSlides = [
        $(".about_us-experience"),
        $(".about_us-mission"),
        $(".about_us-vision"),
    ];

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
        // aboutSlides[2].remove();
    };
    const touchMove = (e) => {
        endX = startX - e.touches[0].clientX;

        if (endX > 50) {
            aboutFlag = true;
            leftOrRight = true;
        } else if (endX < -50) {
            aboutFlag = true;
            leftOrRight = false;
        } else {
            aboutFlag = false;
            leftOrRight = true;
        }
        aboutSlide[0].scrollTo({
            left: aboutSlide.scrollLeft(),
            behavior: "smooth",
        });
    };
    const touchEnd = async () => {
        let width = aboutSlide[0].clientWidth;
        const nSlide = Math.ceil(aboutCWidth / width) + 1;
        let count = 0;

        if (aboutFlag && leftOrRight) {
            count = 0;
            aboutSlide[0].scrollTo({
                left: width * nSlide,
                behavior: "smooth",
            });
            setTimeout(() => {
                const interval = setInterval(() => {
                    count += 1;
                    if (count > 1) {
                        clearInterval(interval);
                    }
                    aboutSlide[0].scrollTo({
                        left: width * nSlide,
                        behavior:"smooth"
                    });
                }, 50);
            }, 500);
        } else if (aboutFlag && !leftOrRight) {

            setTimeout(() => {
                const interval = setInterval(() => {
                    count += 1;
                    if (count > 1) {
                        clearInterval(interval);
                    }
                    aboutSlide[0].scrollTo({
                        left: width * (nSlide - 2),
                        behavior: "smooth",
                    });
                }, 50);
            }, 500);
        } else {

            setTimeout(() => {
                const interval = setInterval(() => {
                    count += 1;
                    if (count > 1) {
                        clearInterval(interval);
                    }
                    aboutSlide[0].scrollTo({
                        left: width * (nSlide - 1),
                        behavior: "smooth",
                    });
                }, 50);
            }, 500);
        }
        aboutFlag = false;
        leftOrRight = true;
        // setTimeout(() => {
        //     let parent = aboutSlides[0][0].parentNode
        //     parent.appendChild(aboutSlides[2][0])
        // },500)
    };

    aboutSlide[0].addEventListener("touchstart", touchStart);
    aboutSlide[0].addEventListener("touchmove", touchMove);
    aboutSlide[0].addEventListener("touchend", touchEnd);
});
