const handleTechSlide = (techSlide, techDots) => {

     // tech slides
     let techStartX = 0;
     let techEndX = 0;
     let techFlag = false;
     let techLeftOrRight = true;
     let techCWidth = 0;
     let techCurrentSlide = 0;
     let techTrigger = 1;
 
    // make tech section slideable in phone
    const techTouchStart = (e) => {
        techStartX = e.touches[0].clientX;
        techCWidth = techSlide.scrollLeft();
    };
    const techTouchMove = (e) => {
        techEndX = techStartX - e.touches[0].clientX;
        techTrigger = 1;

        if (techEndX > 50) {
            techFlag = true;
            techLeftOrRight = true;
            techTrigger = 2;
        } else if (techEndX < -50) {
            techFlag = true;
            techLeftOrRight = false;
            techTrigger = 3;
        } else {
            techFlag = false;
            techLeftOrRight = true;
            techTrigger = 1;
        }
    };
    const techTouchEnd = () => {
        let width = techSlide[0].clientWidth;
        const nSlide = Math.ceil(techCWidth / width) + 1;
        if (techTrigger == 2 && techCurrentSlide < 2) techCurrentSlide += 1;
        if (techTrigger == 3 && techCurrentSlide > 0) techCurrentSlide -= 1;
        // console.log(techCurrentSlide);

        if (techFlag && techLeftOrRight) {
            // count = 0;
            techSlide[0].scrollTo({
                left: width * nSlide,
                behavior: "smooth",
            });
            setTimeout(() => {
                techSlide[0].scrollTo({
                    left: width * nSlide,
                    behavior: "smooth",
                });
                setTimeout(() => {
                    techSlide[0].scrollTo({
                        left: width * nSlide,
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);
            techDots[techCurrentSlide].css({
                "background-color": "rgb(235, 197, 28)",
            });
            techDots[techCurrentSlide - 1].css({
                "background-color": "grey",
            });
        } else if (techFlag && !techLeftOrRight) {
            techSlide[0].scrollTo({
                left: width * (nSlide - 2),
                behavior: "smooth",
            });
            setTimeout(() => {
                techSlide[0].scrollTo({
                    left: width * (nSlide - 2),
                    behavior: "smooth",
                });
                setTimeout(() => {
                    techSlide[0].scrollTo({
                        left: width * (nSlide - 2),
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);

            techDots[techCurrentSlide].css({
                "background-color": "rgb(235, 197, 28)",
            });
            techDots[techCurrentSlide + 1].css({
                "background-color": "grey",
            });
        } else {
            techSlide[0].scrollTo({
                left: width * (nSlide - 1),
                behavior: "smooth",
            });
            setTimeout(() => {
                techSlide[0].scrollTo({
                    left: width * (nSlide - 1),
                    behavior: "smooth",
                });
                setTimeout(() => {
                    techSlide[0].scrollTo({
                        left: width * (nSlide - 1),
                        behavior: "smooth",
                    });
                }, 50);
            }, 600);
        }
        techFlag = false;
        techLeftOrRight = true;
    };
    techSlide[0].addEventListener("touchstart", techTouchStart);
    techSlide[0].addEventListener("touchmove", techTouchMove);
    techSlide[0].addEventListener("touchend", techTouchEnd);
};

export default handleTechSlide;
