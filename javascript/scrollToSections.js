const scrollToSections = (
    home,
    homeButton,
    homeButtonOne,
    homeButtonTwo,
    aboutUs,
    aboutUsButton,
    gallery,
    galleryButton,
    contact,
    contactButton
) => {
    const scrollDiv = (object, stringName) => {
        const rect = object.getBoundingClientRect();
        const divTop = rect.top;
        const goTo = divTop + window.scrollY;
        window.scrollTo({
            top: goTo - 100,
            behavior: "smooth",
        });
        history.pushState(null, "", stringName);
    };

    const scrollDivTwo = (object, stringName) => {
        const rect = object.getBoundingClientRect();
        const divTop = rect.top;
        const goTo = divTop + window.scrollY;
        window.scrollTo({
            top: goTo - 50,
            behavior: "smooth",
        });
        history.pushState(null, "", stringName);
    };

    homeButton.click(() => scrollDiv(home[0],"#home"));
    aboutUsButton.click(() => scrollDiv(aboutUs[0],"#about-us"));
    galleryButton.click(() => scrollDivTwo(gallery[0],"#promotional-bags"));
    homeButtonOne.click(() => scrollDivTwo(gallery[0],"#promotional-bags"));
    contactButton.click(() => scrollDivTwo(contact[0],"#contact-us"));
    homeButtonTwo.click(() => scrollDivTwo(contact[0],"#contact-us"));
};

export default scrollToSections;
