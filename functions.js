$(function () {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const brandFullName = $(".header-brand_name_full");
  const brandLogo = $(".header-logo");
  const brandName = $(".header-brand_name");
  const introLB = $(".pitch-write hr");
  const introLine1 = $(".pitch-write :nth-child(1)");
  const introLine2 = $(".pitch-write :nth-child(3)");
  const instaGrocery = $(".insta-base-grocery");
  const instaSpices = $(".insta-base-spices");
  const instaClothes = $(".insta-base-clothes");
  const instaAccessories = $(".insta-base-accessories");
  const instaJwellery = $(".insta-base-jwellery");
  const aboutImg = $(".about_us-image");
  const aboutIntro = $(".about_us-intro");
  const aboutLc1 = $(".about_us-lc1");
  const aboutLc2 = $(".about_us-lc2");
  const aboutLc3 = $(".about_us-lc3");
  const aboutLower = $(".about_us-lower-container");
  const products = $(".our_products");
  const cardList = [
    $(".our_products-in-card"),
    $(".our_products-card1"),
    $(".our_products-card2"),
    $(".our_products-card3"),
    $(".our_products-card4"),
    $(".our_products-card5"),
    $(".our_products-card6"),
    $(".our_products-card7"),
    $(".our_products-out-card"),
  ];
  const latestTech = $(".latest_tech");
  const lTechScroll = $(".latest_tech-scroll");
  const lTechImgTxt = [
    $(".latest_tech-i1-div"),
    $(".latest_tech-t0"),
    $(".latest_tech-i2"),
    $(".latest_tech-t2"),
    $(".latest_tech-i3"),
    $(".latest_tech-t3"),
  ];
  const stats = $(".stats");

  let dist;

  let introVisible = false;
  const instaVisible = [5, false, false, false, false, false];
  let aboutVisible = false;
  let productBVisible = false;

  const productImgB = [
    "https://cdn.pixabay.com/photo/2023/10/05/10/55/bag-8295487_640.jpg",
    "https://img.freepik.com/premium-photo/yellow-bag-notebook-pencil-wooden-table-back-school-concept-generate-ai_35674-20154.jpg",
    "https://us.123rf.com/450wm/awaisbinaziz/awaisbinaziz2310/awaisbinaziz231005528/215704447-orange-school-backpack-with-books-on-a-yellow-background-3d-rendering.jpg?ver=6",
    "https://img.freepik.com/premium-photo/backpack-books-blue-background-back-school-concept-generative-ai_124603-939.jpg",
    "https://img.freepik.com/premium-photo/yellow-bag-notebook-pencil-wooden-table-back-school-concept-generate-ai_35674-20154.jpg",
    "https://cdn.pixabay.com/photo/2023/10/05/10/55/bag-8295487_640.jpg",
    "https://us.123rf.com/450wm/usmanify/usmanify2307/usmanify230700553/208034897-backpack-on-the-table-with-school-supplies-protruding-school-study-and-teacher-s-day-concept-ai.jpg?ver=6",
    "https://burst.shopifycdn.com/photos/climber-repelling-a-mountain.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    "https://png.pngtree.com/thumb_back/fh260/background/20230831/pngtree-blue-backpack-and-a-clock-image_13177116.jpg",
    "https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?cs=srgb&dl=pexels-matheus-bertelli-2905238.jpg&fm=jpg",
  ];
  let imageNum = 7;
  let intStarter;

  const productBFunction = () => {
    console.log(cardList, imageNum);
    if (productImgB.length - 1 <= imageNum) {
      imageNum = 0;
    } else {
      imageNum += 1;
    }

    cardList[0].css({
      "z-index": "0",
      "background-image": `url(${productImgB[imageNum]})`,
      opacity: "1",
    });

    cardList[1].animate(
      {
        top: "19.8%",
        left: "69.7%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[1].css({ "z-index": "1" });

    cardList[2].animate(
      {
        top: "35%",
        left: "64%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[2].css({ "z-index": "2" });

    cardList[3].animate(
      {
        top: "46.5%",
        left: "56.8%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[3].css({ "z-index": "3" });

    cardList[4].animate(
      {
        top: "53.8%",
        left: "48.5%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[4].css({ "z-index": "4" });

    cardList[5].animate(
      {
        top: "55.8%",
        left: "36.5%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[5].css({ "z-index": "5" });

    cardList[6].animate(
      {
        top: "57%",
        left: "23%",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    cardList[6].css({ "z-index": "6" });

    cardList[7].css({
      "clip-path": "inset(0 100% 0 0)",
      "z-index": "8",
    });

    cardList[8].css({
      opacity: "0",
      top: "2%",
      left: "73.7%",
      "clip-path": "inset(0 0 0 0)",
      "z-index": "0",
    });

    let lastCard = cardList.pop();
    cardList.unshift(lastCard);
  };

  function animationStarter() {
    intStarter = setInterval(() => {
      productBFunction();
    }, 5000);
  }

  function animationStopper() {
    clearInterval(intStarter);
  }

  document.addEventListener("scroll", () => {
    const scrollDistance = parseInt(window.scrollY);
    console.log(scrollDistance);

    if (scrollDistance < 100) {
      brandFullName.css({
        top: `50%`,
        "font-size": `3vw`,
      });
      brandLogo.css({
        top: `35%`,
        width: `10vw`,
        left: `37.5%`,
      });
      brandName.css({
        top: `39.5%`,
        "font-size": `5vw`,
        left: `46%`,
      });
      introLB.css({
        "clip-path": `inset(0 60vw 0 0)`,
      });
    } else if (scrollDistance > 100 && scrollDistance < 1100) {
      dist = scrollDistance - 100;

      // intro 2nd line visibility off
      if (introVisible) {
        introLine2.css({ opacity: "0" });
        introVisible = false;
      }

      // visibility of product cards off
      if (instaVisible[0] !== 5) {
        if (instaVisible[1]) {
          instaSpices.css({ opacity: "0" });
          instaVisible[1] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[2]) {
          instaJwellery.css({ opacity: "0" });
          instaVisible[2] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[3]) {
          instaGrocery.css({ opacity: "0" });
          instaVisible[3] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[4]) {
          instaClothes.css({ opacity: "0" });
          instaVisible[4] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[5]) {
          instaAccessories.css({ opacity: "0" });
          instaVisible[5] = false;
          instaVisible[0] += 1;
        }
      }

      // scroll based animation
      brandFullName.css({
        top: `${50 - 0.0455 * dist}%`,
        "font-size": `${3 - 0.0022 * dist}vw`,
        left: `${37.5 + 0.0093 * dist}%`,
      });
      brandLogo.css({
        top: `${35 - 0.0342 * dist}%`,
        width: `${10 - 0.0076 * dist}vw`,
        left: `${37.5 + 0.0093 * dist}%`,
      });
      brandName.css({
        top: `${39.5 - 0.0377 * dist}%`,
        "font-size": `${5 - 0.0038 * dist}vw`,
        left: `${46 + 0.003 * dist}%`,
      });
      introLB.css({
        opacity: "1",
        "clip-path": `inset(0 ${60 - scrollDistance * 0.06}vw 0 0)`,
      });
      introLine1.css({
        opacity: "1",
        "clip-path": `inset(0 ${70 - scrollDistance * 0.07}vw 0 0)`,
      });
    } else if (scrollDistance > 1100 && scrollDistance < 2000) {
      dist = scrollDistance - 1100;

      // about us visibility off
      if (aboutVisible) {
        aboutVisible = false;
        aboutImg.css({ opacity: "0" });
        aboutIntro.css({ opacity: "0" });
        aboutLc1.css({ opacity: "0" });
        aboutLc2.css({ opacity: "0" });
        aboutLc3.css({ opacity: "0" });
        aboutLower.css({ opacity: "0" });
      }

      // intro line visibility onn
      introLB.css({ opacity: "1" });
      introLine1.css({ opacity: "1" });
      introLine2.css({ opacity: "1" });

      // intro line 2 visibility onn
      if (!introVisible) {
        introLine2.css({ opacity: "1" });
        introVisible = true;
      }

      // product card visibility onn
      if (!instaVisible[1] && scrollDistance > 1300) {
        instaSpices.css({ opacity: "1" });
        instaVisible[1] = true;
        instaVisible[0] -= 1;
      }
      if (!instaVisible[2] && scrollDistance > 1450) {
        instaJwellery.css({ opacity: "1" });
        instaVisible[2] = true;
        instaVisible[0] -= 1;
      }
      if (!instaVisible[3] && scrollDistance > 1600) {
        instaGrocery.css({ opacity: "1" });
        instaVisible[3] = true;
        instaVisible[0] -= 1;
      }
      if (!instaVisible[4] && scrollDistance > 1750) {
        instaClothes.css({ opacity: "1" });
        instaVisible[4] = true;
        instaVisible[0] -= 1;
      }
      if (!instaVisible[5] && scrollDistance > 1900) {
        instaAccessories.css({ opacity: "1" });
        instaVisible[5] = true;
        instaVisible[0] -= 1;
      }
    } else if (scrollDistance > 2200 && scrollDistance < 2600) {
      // our product visibility off
      if (productBVisible) {
        products.css({ opacity: "0" });
        animationStopper();
        productBVisible = false;
      }

      // about section visibility on
      if (!aboutVisible && scrollDistance > 2200) {
        aboutVisible = true;
        aboutImg.css({ opacity: "1" });
        aboutIntro.css({ opacity: "1" });
        aboutLower.css({ opacity: "1" });
        aboutLc1.css({ opacity: "1" });
        aboutLc2.css({ opacity: "1" });
        aboutLc3.css({ opacity: "1" });
      }

      // intro line visisbility off
      introLB.css({ opacity: "0" });
      introLine1.css({ opacity: "0" });
      introLine2.css({ opacity: "0" });

      // intro product card visibility off
      if (instaVisible[0] !== 5) {
        if (instaVisible[1]) {
          instaSpices.css({ opacity: "0" });
          instaVisible[1] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[2]) {
          instaJwellery.css({ opacity: "0" });
          instaVisible[2] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[3]) {
          instaGrocery.css({ opacity: "0" });
          instaVisible[3] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[4]) {
          instaClothes.css({ opacity: "0" });
          instaVisible[4] = false;
          instaVisible[0] += 1;
        }
        if (instaVisible[5]) {
          instaAccessories.css({ opacity: "0" });
          instaVisible[5] = false;
          instaVisible[0] += 1;
        }
      }
    } else if (scrollDistance > 2600 && scrollDistance < 3400) {
      // latestTech visibility hide
      latestTech.css({
        visibility: "hidden",
        opacity: "0",
      });

      if (aboutVisible) {
        aboutVisible = false;
        aboutImg.css({ opacity: "0" });
        aboutIntro.css({ opacity: "0" });
        aboutLc1.css({ opacity: "0" });
        aboutLc2.css({ opacity: "0" });
        aboutLc3.css({ opacity: "0" });
        aboutLower.css({ opacity: "0" });
      }

      if (!productBVisible) {
        productBVisible = true;
        products.css({ opacity: "1" });
        animationStarter();
      }
    } else if (scrollDistance > 3400 && scrollDistance < 5150) {
      dist = scrollDistance - 3700;
      stats.css({"opacity":"0"});
      if (scrollDistance > 3700) {
        lTechScroll.css({
          top: `${20 - (dist * 0.05)}%`,
        });
      }

      if (scrollDistance > 3900) {
        lTechImgTxt[0].animate(
          {
            left: "0%",
          },
          {
            duration: 1000,
            easing: "linear",
          }
        );
        // lTechImgTxt[1].animate(
        //   {
        //     left: "0%",
        //   },
        //   {
        //     duration: 1000,
        //     easing: "linear",
        //   }
        // );
      }

      // latestTech visibility show
      latestTech.css({
        visibility: "visible",
        opacity: "1",
      });

      // our product visibility off
      if (productBVisible) {
        products.css({ opacity: "0" });
        animationStopper();
        productBVisible = false;
      }
    } else if (scrollDistance > 5150 && scrollDistance < 6150) {
      stats.css({"opacity":"1"});
    }
  });
});
