import handleAboutSlide from "./handleAboutSlide.js";
import handleTechSlide from "./handleTechSlide.js";
import scrollToSections from "./scrollToSections.js";
import { currentSection } from "./headerFunctions.js";
// import carousel from "./carousel.js";

$(window).on("load", function () {
    // Hide the loading screen when all content has loaded
    setTimeout(() => {
        $("#loader-page").fadeOut();
    }, 1500);
});

$(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
        });
    });
    // content
    const aboutContent =
        " We majorly deal in manufacturing cotton canvas, woven PP fabric, non-woven melt-blown, and roto fabric bags. Our forte lies in creating visually appealing promotional bags,tailored to captivate a new audience for your business.";
    const abRmButtom = $("#about-us-read-more-button");

    // about section related
    const aboutSlide = $(".about_us-lower");
    const aboutDots = [$("#abdot1"), $("#abdot2"), $("#abdot3")];
    const abConPara = $("#about-us-main-paragraph");

    // tech section related
    const techSlide = $(".tech-portrait");
    const techDots = [$("#tedot1"), $("#tedot2"), $("#tedot3")];

    // header related
    const menu = $(".menu-hamburger-button");
    const submenu = $(".header-navbar-submenu");

    // elements for scroll
    const home = $(".home");
    const homeButton = $("#home-button-m");
    const homeButtonP = $("#home-button-p");
    const homeButtonOne = $(".home-products");
    const homeButtonTwo = $(".home-connect");
    const aboutUs = $(".about_us");
    const aboutUsButton = $("#about-us-m");
    const aboutUsButtonP = $("#about-us-p");
    const gallery = $(".products-main");
    const galleryButton = $("#gallery-m");
    const galleryButtonP = $("#gallery-p");
    const contact = $(".contact_us");
    const contactButton = $("#contact-m");
    const contactButtonP = $("#contact-p");
    const menuCancelButton = $(".navbar-cancel-button");
    const corausel = $(".clients-carousel");
    const camelTea = $(".clients-camel-tea clients-logo");
    
    // carousel(corausel[0], camelTea[0]);

    let temp = 400;

    let isFadeIn = false;

    // adding current section underline in nav bar
    window.addEventListener("scroll", () => {
        setTimeout(() => {
            currentSection(home, aboutUs, gallery, contact);
        }, 0);
    });

    // adding about us content from read more button
    const handleAbcontent = () => {
        const clength = aboutContent.length;
        let count = 0;
        abRmButtom.prop("disabled", true);
        const interval = setInterval(() => {
            if (count == clength) {
                abRmButtom.text("Thanks for reading :)");
                clearInterval(interval);
            }
            abConPara.append(aboutContent[count]);
            count += 1;
        }, 8);
    };
    abRmButtom.click(() => handleAbcontent());

    // adding workflow to the navigation buttons
    scrollToSections(
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
    );

    // hamburger menu code for mobile portrait
    // submenu.css({ display: "none" });
    submenu.fadeOut();
    menu.click(() => {
            submenu.fadeIn();
            menuCancelButton.css({"display":"inline-block"});
            menu.css({"display":"none"});
    });

    menuCancelButton.click(() => {
        submenu.fadeOut();
        menu.css({"display":"inline-block"});
        menuCancelButton.css({"display":"none"});
    })

    // make about us below section slideable in phone
    handleAboutSlide(aboutSlide, aboutDots);

    // make tech section slideable in phone
    handleTechSlide(techSlide, techDots);
});
