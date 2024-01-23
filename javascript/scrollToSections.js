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
    aboutUsButton.click(() => scrollDiv(aboutUs[0]));
    galleryButton.click(() => scrollDivTwo(gallery[0]));
    homeButtonOne.click(() => scrollDivTwo(gallery[0]));
    contactButton.click(() => scrollDivTwo(contact[0]));
    homeButtonTwo.click(() => scrollDivTwo(contact[0]));
};

export default scrollToSections;
