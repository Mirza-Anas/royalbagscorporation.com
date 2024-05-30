const scrollToSections = (
    home,
    homeButton,
    homeButtonP,
    homeButtonOne,
    homeButtonTwo,
    aboutUs,
    aboutUsButton,
    aboutUsButtonP,
    gallery,
    galleryButton,
    galleryButtonP,
    contact,
    contactButton,
    contactButtonP
) => {
    const submenu = $(".header-navbar-submenu");
    const menu = $(".menu-hamburger-button");
    const menuCancelButton = $(".navbar-cancel-button");

    const scrollDiv = (object) => {
        const rect = object.getBoundingClientRect();
        const divTop = rect.top;
        const goTo = divTop + window.scrollY;
        window.scrollTo({
            top: goTo - 100,
            behavior: "smooth",
        });
    };

    const scrollDivTwo = (object) => {
        const rect = object.getBoundingClientRect();
        const divTop = rect.top;
        const goTo = divTop + window.scrollY;
        window.scrollTo({
            top: goTo - 50,
            behavior: "smooth",
        });
    };

    homeButton.click(() => scrollDiv(home[0]));
    homeButtonP.click(() => {
        scrollDivTwo(home[0]);
        submenu.fadeOut();
        menu.css({"display":"block"});
        menuCancelButton.css({"display":"none"});
    });
    aboutUsButton.click(() => scrollDiv(aboutUs[0]));
    aboutUsButtonP.click(() => {
        scrollDivTwo(aboutUs[0]);
        submenu.fadeOut();
        menu.css({"display":"block"});
        menuCancelButton.css({"display":"none"});
    });
    galleryButton.click(() => scrollDivTwo(gallery[0]));
    galleryButtonP.click(() => {
        scrollDivTwo(gallery[0]);
        submenu.fadeOut();
        menu.css({"display":"block"});
        menuCancelButton.css({"display":"none"});
    });
    homeButtonOne.click(() => scrollDivTwo(gallery[0]));
    contactButton.click(() => scrollDivTwo(contact[0]));
    contactButtonP.click(() => {
        scrollDivTwo(contact[0]);
        submenu.fadeOut();
        menu.css({"display":"block"});
        menuCancelButton.css({"display":"none"});
    });
    homeButtonTwo.click(() => scrollDivTwo(contact[0]));
};

export default scrollToSections;
