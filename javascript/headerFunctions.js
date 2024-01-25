let currentButton = "home";
let currentId = $("#home-button-m");

const navAnimateRight = (fromButton, toButton, current, stringName) => {
    // for about animation
    fromButton.animate(
        {
            left: "110%",
        },
        {
            duration: 700,
            easing: "linear",
        }
    );

    toButton.animate(
        {
            left: "-5%",
        },
        {
            duration: 500,
            easing: "linear",
        }
    );
    currentButton = current;
    history.pushState(null, "", stringName);
};

const navAnimateLeft = (fromButton, toButton, current, stringName) => {
    // for about animation
    fromButton.animate(
        {
            left: "-110%",
        },
        {
            duration: 700,
            easing: "linear",
        }
    );

    toButton.animate(
        {
            left: "-5%",
        },
        {
            duration: 500,
            easing: "linear",
        }
    );
    currentButton = current;
    history.pushState(null, "", stringName);
};

export const currentSection = (home, aboutUs, gallery, contact) => {
    // console.log(home.offset())
    const windowHeight = $(window).height();
    const homePosition = home[0].getBoundingClientRect().top;
    const aboutPosition = aboutUs[0].getBoundingClientRect().top;
    const galleryPosition = gallery[0].getBoundingClientRect().top;
    const contactPosition = contact[0].getBoundingClientRect().top;

    const homeButton = $("#home-button-m div");
    const aboutButton = $("#about-us-m div");
    const galleryButton = $("#gallery-m div");
    const contactbutton = $("#contact-m div");

    if (
        currentButton === "home" &&
        windowHeight + homePosition < windowHeight / 2
    ) {
        navAnimateRight(homeButton, aboutButton, "about", "#about-us");
    } else if (currentButton === "about") {
        if (windowHeight + homePosition > windowHeight / 2) {
            navAnimateLeft(aboutButton, homeButton, "home", "#home");
        } else if (windowHeight - galleryPosition > windowHeight / 2) {
            navAnimateRight(
                aboutButton,
                galleryButton,
                "gallery",
                "#promotional-bags"
            );
        }
    } else if (currentButton === "gallery") {
        if (windowHeight + aboutPosition > windowHeight / 2) {
            navAnimateLeft(galleryButton, aboutButton, "about", "#about-us");
        } else if (windowHeight - contactPosition > windowHeight / 2) {
            navAnimateRight(
                galleryButton,
                contactbutton,
                "contact",
                "#contact-us"
            );
        }
    } else if (
        currentButton === "contact" &&
        windowHeight - contactPosition < windowHeight / 2
    ) {
        navAnimateLeft(
            contactbutton,
            galleryButton,
            "gallery",
            "#promotional-bags"
        );
    }
};
