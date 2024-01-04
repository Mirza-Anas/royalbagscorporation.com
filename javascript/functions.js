$(() => {
    const menu = $(".header-navbar-portrait img");
    const submenu = $(".header-navbar-submenu");

    menu.click(() => {
        if (submenu.css("display") == "none") {
            submenu.css({ display: "block" });
        } else {
            submenu.css({ display: "none" });
        }
    });
});
