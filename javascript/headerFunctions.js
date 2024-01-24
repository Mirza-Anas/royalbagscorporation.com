const handleNavanimation = (windowHeight,sectionPosition, button) => {
    // for about animation
    const buttonn = $("#home-button-m div");
    const button2 = $("#about-us-m div");
    console.log(sectionPosition)
    if ((windowHeight + sectionPosition) < windowHeight/2){
        buttonn.animate({
            left:"110%",
        },
        {
            duration:500,
            easing:"linear",
        });

        button2.animate({
            left:"-5%",
        },{
            duration:500,
            easing:"linear",
        })
    }

}

export const currentSection = (home, homeButton, aboutUs) => {
    // console.log(home.offset())
    const homePosition = home[0].getBoundingClientRect().top;
    const windowHeight = $(window).height();
    handleNavanimation(windowHeight, homePosition, homeButton);

    

};
