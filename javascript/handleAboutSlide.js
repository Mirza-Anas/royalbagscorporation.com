const handleAboutSlide = (aboutSlide, aboutDots) => {
    // about slides
    let startX = 0;
    let endX = 0;
    let aboutFlag = false;
    let leftOrRight = true;
    let aboutCWidth = 0;
    let currentSlide = 0;
    let abTrigger = 1;

    // about slides code carousel
    const touchStart = (e) => {
        startX = e.touches[0].clientX;
        aboutCWidth = aboutSlide.scrollLeft();
    };
    const touchMove = (e) => {
        endX = startX - e.touches[0].clientX;
        abTrigger = 1;

        if (endX > 50) {
            aboutFlag = true;
            leftOrRight = true;
            abTrigger = 2;
        } else if (endX < -50) {
            aboutFlag = true;
            leftOrRight = false;
            abTrigger = 3;
        } else {
            aboutFlag = false;
            leftOrRight = true;
            abTrigger = 1;
        }
    };
    const touchEnd = () => {
        let width = aboutSlide[0].clientWidth;
        const nSlide = Math.ceil(aboutCWidth / width) + 1;
        if (abTrigger == 2 && currentSlide < 2) currentSlide += 1;
        if (abTrigger == 3 && currentSlide > 0) currentSlide -= 1;
        // console.log(currentSlide);

        if (aboutFlag && leftOrRight) {
            aboutSlide[0].scrollTo({
                left: width * nSlide,
                behavior: "smooth",
            });
            setTimeout(() => {
                aboutSlide[0].scrollTo({
                    left: width * nSlide,
                    behavior: "smooth",
                });
                setTimeout(() => {
                    aboutSlide[0].scrollTo({
                        left: width * nSlide,
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);
            aboutDots[currentSlide].css({
                "background-color": "rgb(235, 197, 28)",
            });
            aboutDots[currentSlide - 1].css({
                "background-color": "grey",
            });
        } else if (aboutFlag && !leftOrRight) {
            aboutSlide[0].scrollTo({
                left: width * (nSlide - 2),
                behavior: "smooth",
            });
            setTimeout(() => {
                aboutSlide[0].scrollTo({
                    left: width * (nSlide - 2),
                    behavior: "smooth",
                });
                setTimeout(() => {
                    aboutSlide[0].scrollTo({
                        left: width * (nSlide - 2),
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);

            aboutDots[currentSlide].css({
                "background-color": "rgb(235, 197, 28)",
            });
            aboutDots[currentSlide + 1].css({
                "background-color": "grey",
            });
        } else {
            aboutSlide[0].scrollTo({
                left: width * (nSlide - 1),
                behavior: "smooth",
            });
            setTimeout(() => {
                aboutSlide[0].scrollTo({
                    left: width * (nSlide - 1),
                    behavior: "smooth",
                });
                setTimeout(() => {
                    aboutSlide[0].scrollTo({
                        left: width * (nSlide - 1),
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);
        }
        aboutFlag = false;
        leftOrRight = true;
    };

    aboutSlide[0].addEventListener("touchstart", touchStart);
    aboutSlide[0].addEventListener("touchmove", touchMove);
    aboutSlide[0].addEventListener("touchend", touchEnd);
};

export default handleAboutSlide;
