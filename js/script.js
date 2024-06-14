var $ = jQuery;
const windowWidth = window.innerWidth;
/* language select */
$(document).ready(function () {
  // title animation fide up
  AOS.init({
    duration: 400,
    easing: 'linear',
    once: true
  });
  let languageIcon = document.querySelector(".language-icon");
  let flags = document.querySelectorAll(".flag");
  let langs = document.querySelectorAll(".lang");
  let langsSpan = document.querySelectorAll(".lang .flag");
  for (let i = 0; i < langs.length; i++) {
    langs[i].addEventListener("click", function () {
      flags[0].innerHTML = langsSpan[i].innerHTML;
    });
  }
  if (windowWidth > 1024 && windowWidth <= 3840) {
    $(".lang-flag").mouseover(function () {
      $(".language-dropdown").addClass("open");
      $(".language-icon").addClass("language-icon-rotate");
    });
    $(".lang-list").mouseover(function () {
      $(".language-dropdown").addClass("open");
      $(".language-icon").addClass("language-icon-rotate");
    });
    $(".lang-flag").mouseout(function () {
      $(".language-dropdown").removeClass("open");
      $(".language-icon").removeClass("language-icon-rotate");
    });
    $(".lang-list").mouseout(function () {
      $(".language-dropdown").removeClass("open");
      $(".language-icon").removeClass("language-icon-rotate");
    });
  }
  if (windowWidth <= 1024) {
    $(".lang-flag").click(function () {
      $(".language-dropdown").toggleClass("open");
      languageIcon.classList.toggle("language-icon-rotate");
    });
  }
  $(".wpml-ls-item-toggle").click(function () {
    $(".wpml-ls-item-toggle").toggleClass("icon-rotate");
    let subWpml = document.querySelector(".wpml-ls-sub-menu");
    if (subWpml.style.visibility != "visible") {
      subWpml.style.visibility = "visible";
    }
    else {
      subWpml.style.visibility = "hidden";
    }
  });
  $("ul.lang-list li").click(function () {
    $(".language-icon").removeClass("language-icon-rotate");
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).hasClass("lang-arm")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-arm")
        .removeClass("lang-en")
        .removeClass("lang-ru");
    } else if ($(this).hasClass("lang-ru")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-ru")
        .removeClass("lang-en")
        .removeClass("lang-arm");
    } else {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-en")
        .removeClass("lang-arm")
        .removeClass("lang-ru");
    }
    $(".language-dropdown").removeClass("open");
  });
});
/* header submenu  */
function headerSubmenu() {
  let dropdownToggle = document.querySelector(".dropdown-toggle");
  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
  });
  if (windowWidth >= 1025 && windowWidth <= 3840) {
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let header = document.querySelector(".header");
    header.appendChild(dropdownMenu);
    let dropdown = document.querySelector(".dropdown");
    let dropdownIcon = document.querySelector(".dropdown-icon");
    let dropdownIconFill = document.querySelector(".dropdown-icon-fill");
    dropdown.addEventListener("mouseover", function () {
      document.querySelector("body").classList.add("no-scroll");
      dropdownMenu.style.height = "600px";
      dropdownToggle.style.color = "#FAC917";
      dropdownIcon.style.transform = "rotate(180deg)";
      dropdownIconFill.style.fill = "#FAC917";
    });
    dropdownMenu.addEventListener("mouseover", function () {
      document.querySelector("body").classList.add("no-scroll");
      dropdownMenu.style.height = "600px";
      dropdownToggle.style.color = "#FAC917";
      dropdownIcon.style.transform = "rotate(180deg)";
      dropdownIconFill.style.fill = "#FAC917";
    });
    dropdown.addEventListener("mouseout", function () {
      document.querySelector("body").classList.remove("no-scroll");
      dropdownMenu.style.height = "0";
      dropdownToggle.style.color = "#fff";
      dropdownIcon.style.transform = "rotate(0deg)";
      dropdownIconFill.style.fill = "#fff";
    });
    dropdownMenu.addEventListener("mouseout", function () {
      document.querySelector("body").classList.remove("no-scroll");
      dropdownMenu.style.height = "0";
      dropdownToggle.style.color = "#fff";
      dropdownIcon.style.transform = "rotate(0deg)";
      dropdownIconFill.style.fill = "#fff";
    });
    if (windowWidth >= 1025 && windowWidth <= 1240) {
      dropdown.addEventListener("mouseover", function () {
        document.querySelector("body").classList.add("no-scroll");
        dropdownMenu.style.height = "640px";
        dropdownToggle.style.color = "#FAC917";
        dropdownIcon.style.transform = "rotate(180deg)";
        dropdownIconFill.style.fill = "#FAC917";
      });
      dropdownMenu.addEventListener("mouseover", function () {
        document.querySelector("body").classList.add("no-scroll");
        dropdownMenu.style.height = "640px";
        dropdownToggle.style.color = "#FAC917";
        dropdownIcon.style.transform = "rotate(180deg)";
        dropdownIconFill.style.fill = "#FAC917";
      });
    }
    if (window.innerHeight <= 760) {
      $(".dropdown-menu-inner").css("padding", "20px 2vw");
      $(".dropdown-menu-inner").css("row-gap", "20px");
      let listsItems = document.querySelectorAll(".dropdown-menu-item");
      listsItems[0].style.width = "38.875vw";
      listsItems[1].style.width = "38.875vw";
      listsItems[2].style.width = "25.2vw";
      listsItems[3].style.width = "25.2vw";
      listsItems[4].style.width = "25.2vw";
      dropdown.addEventListener("mouseover", function () {
        dropdownMenu.style.height = "450px";
      });
      dropdownMenu.addEventListener("mouseover", function () {
        dropdownMenu.style.height = "450px";
      });
    }
    if (window.innerHeight <= 600) {
      $(".dropdown-menu-inner").css("padding", "20px 2vw");
      $(".dropdown-menu-inner").css("row-gap", "20px");
      let listsItems = document.querySelectorAll(".dropdown-menu-item");
      listsItems[0].style.width = "38.875vw";
      listsItems[1].style.width = "38.875vw";
      listsItems[2].style.width = "25.2vw";
      listsItems[3].style.width = "25.2vw";
      listsItems[4].style.width = "25.2vw";
      dropdown.addEventListener("mouseover", function () {
        dropdownMenu.style.height = "400px";
      });
      dropdownMenu.addEventListener("mouseover", function () {
        dropdownMenu.style.height = "400px";
      });
    }
  }
  // responsive header mobile
  if (windowWidth <= 1024) {
    let menuOpen = document.querySelector(".burger-menu-open");
    let lineN1 = document.querySelector(".lineN1");
    let lineN2 = document.querySelector(".lineN2");
    let navigation = document.querySelector(".navigation");
    let dropdownIcon = document.querySelector(".dropdown-icon");
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let dropdown = document.querySelector(".dropdown");
    let menuUl = document.querySelector(".menu-inner");
    let languageWpml = document.querySelector(".wpml-ls-statics-shortcode_actions");
    menuUl.append(languageWpml);
    menuOpen.addEventListener("click", function () {
      menuOpen.classList.toggle("new-element");
      lineN1.classList.toggle("new-lineN1");
      lineN2.classList.toggle("new-lineN2");
      if (navigation.style.height != "100vh") {
        document.querySelector("body").classList.add("no-scroll");
        navigation.setAttribute(
          "style",
          "height: 100vh; margin-top: 49.63px;display:flex;"
        );
      } else {
        document.querySelector("body").classList.remove("no-scroll");
        navigation.setAttribute(
          "style",
          "height: 0; margin-top: 0;display:none;"
        );
      }
    });
    dropdown.addEventListener("click", function () {
      if (dropdownMenu.style.height != "max-content") {
        dropdownMenu.setAttribute(
          "style",
          "height: max-content; margin-top: 20.3px"
        );
        dropdownIcon.style.transform = "rotate(180deg)";
      } else {
        dropdownMenu.setAttribute("style", "height: 0; margin-top: 0");
        dropdownIcon.style.transform = "rotate(0deg)";
      }
    });
  }
}
/* footer navigation */
function footer() {
  let footerNav = document.querySelector(".footer-rigth");
  let footerMenuInner = document.querySelectorAll(".footer-menu-inner");
  let footerMenuFlex = document.createElement("div");
  footerMenuFlex.className = "footer-menu-flex";
  footerMenuFlex.append(footerMenuInner[0], footerMenuInner[1]);
  footerNav.appendChild(footerMenuFlex);
  if (windowWidth <= 1024) {
    for (let i = 0; i < footerMenuInner.length; i++) {
      footerNav.append(footerMenuInner[i]);
    }
    footerMenuFlex.remove();
  }
}
/* gsap text animation */
// function gsapTextSplit() {
//   gsap.registerPlugin(ScrollTrigger, SplitText);
//   function setupSplits() {
//     const targets = gsap.utils.toArray(".split");
//     targets.forEach((target) => {
//       let splitHeading = new SplitText(target, { type: "words, chars" });
//       let chars = splitHeading.chars;
//       gsap.from(chars, {
//         yPercent: 100,
//         stagger: true,
//         duration: 0.5,
//         scrollTrigger: {
//           trigger: target,
//           start: "top 75%",
//           end: "bottom center",
//         },
//       });
//     });
//   }
//   setupSplits();
// }
/* our service card */
function ourServiceCards() {
  let cards = document.querySelectorAll(".card");
  let cardTitle = document.querySelectorAll(".card-title");
  let cardTitleHover = document.querySelectorAll(".card-title-hover");
  let cardHoverVisitble = document.querySelectorAll(".card-hover-visitble");
  let cardImages = document.querySelectorAll(".card-image");
  let cardMobile = document.querySelectorAll(".card-link-mobile");
  let cardLength = cards.length;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = 100 / cardLength + "%";
    cardTitleHover[i].textContent = cardTitle[i].textContent;
    if (windowWidth >= 1025 && windowWidth <= 3840) {
      // cardTitleHover[i].addEventListener("click", function (e) {
      //   e.preventDefault();
      // });
      cards[i].addEventListener("mouseover", function () {
        cards[i].style.width = 100 / 2 + "%";
      });
      cards[i].addEventListener("mouseout", function () {
        cards[i].style.width = 100 / cardLength + "%";
      });
    }
    if (windowWidth <= 1024) {
      cards[i].style.width = 100 + "%";
    }
    if (windowWidth <= 520) {
      cards[i].addEventListener("click", function () {
        cardHoverVisitble[i].classList.toggle("bottom");
      });
    }
  }
  cards.forEach((acc) => acc.addEventListener("click", toggleAcc));
  function toggleAcc() {
    cards.forEach((item) =>
      item != this ? item.classList.remove("height") : null
    );
    if (this.classList != "height") {
      this.classList.toggle("height");
    }
  }
}
/* our trusted partners */
function partners() {
  let partnersCard = document.querySelectorAll(".side-2");
  let masterInner = document.querySelectorAll(".master-master-inner");
  for (let i = 0; i < partnersCard.length; i++) {
    if (windowWidth > 1001 && windowWidth <= 3840) {
      masterInner[i].addEventListener("mouseover", function () {
        partnersCard[i].classList.add("click");
      });
      masterInner[i].addEventListener("mouseout", function () {
        partnersCard[i].classList.remove("click");
      });
    }
    if (windowWidth <= 1001) {
      masterInner[i].addEventListener("click", function () {
        partnersCard[i].classList.toggle("click");
      });
    }
  }
}
/* faq */
function faq() {
  let question = document.querySelectorAll(".faq-text");
  question.forEach((question) => {
    question.addEventListener("click", (event) => {
      const active = document.querySelector(".faq-text.active");
      if (active && active !== question) {
        active.classList.toggle("active");
        active.nextElementSibling.style.maxHeight = 0;
      }
      question.classList.toggle("active");
      const answer = question.nextElementSibling;
      if (question.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });
}
/* form */
function form() {
  let sendButton = document.getElementById("send-btn");
  let inputs = document.querySelectorAll(".input");
  let valid = document.querySelectorAll(".valid");
  if (sendButton) {
    sendButton.addEventListener("click", function (e) {
      e.preventDefault();
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
          valid[i].style.display = "block";
          inputs[i].required = true;
        }
        if (valid[i].style.display == "block") {
          inputs[i].addEventListener("input", function () {
            valid[i].style.display = "none";
            inputs[i].required = false;
          });
        }
      }
      setInterval(() => {
        sendButton.disabled = false;
      }, 3000);
    });
  }
}
/* Home */
if (document.getElementById("home")) {
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // our serive cards
  ourServiceCards();
  // scrolling text slide
  gsap.to(".text-wrapper-list-first", {
    scrollTrigger: {
      trigger: ".text-wrapper-ul",
      start: "center 80%",
      end: "top 45%",
      scrub: 5,
    },
    x: "-25%",
  });
  gsap.to(".text-wrapper-list-last", {
    scrollTrigger: {
      trigger: ".text-wrapper-ul",
      start: "center 80%",
      end: "top 45%",
      scrub: 5,
    },
    x: "23%",
  });
  if (windowWidth <= 520) {
    gsap.to(".text-wrapper-list-first", {
      scrollTrigger: {
        trigger: ".text-wrapper-ul",
        start: "center 80%",
        end: "top 45%",
        scrub: 5,
      },
      x: "-60%",
    });
    gsap.to(".text-wrapper-list-last", {
      scrollTrigger: {
        trigger: ".text-wrapper-ul",
        start: "center 80%",
        end: "top 45%",
        scrub: 5,
      },
      x: "12%",
    });
  }
  // galleri section card
  const listItems = document.querySelectorAll(".gallery-photo-intro");
  const nextButton = document.getElementById("next-button");
  const prevButton = document.getElementById("prev-button");
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const paginationContainer = document.querySelector(".pagination-container");
  const paginatedList = document.getElementById("paginated-list");
  if (windowWidth <= 767) {
    paginatedList.appendChild(paginationContainer);
  }
  // window.addEventListener("load", function () {
  //   for (let i = 0; i < listItems.length; i++) {
  //     let imageWidth = listItems[i].clientWidth;
  //     let imagaHeight = listItems[i].clientHeight;
  //     if (windowWidth > 1260 && windowWidth <= 1920) {
  //       let newImageWidth = (imageWidth / 1920) * 100;
  //       let newImageHeight = (imagaHeight / 1920) * 100;
  //       listItems[i].setAttribute(
  //         "style",
  //         `width: ${newImageWidth}vw; height: ${newImageHeight}vw`
  //       );
  //     }
  //     if (windowWidth <= 520) {
  //       listItems[i].setAttribute("style", `height: ${imageWidth}px`);
  //     }
  //   }
  // });
  if (listItems.length > 1 && listItems.length <= 4) {
    one.innerHTML = 1;
    two.innerHTML = 1;
  }
  function slideNum() {
    nextButton.addEventListener("click", function () {
      one.innerHTML = +one.innerHTML + 1;
    });
    prevButton.addEventListener("click", function () {
      one.innerHTML = +one.innerHTML - 1;
    });
  }
  if (listItems.length > 4 && listItems.length <= 8) {
    one.innerHTML = 1;
    two.innerHTML = 2;
    slideNum();
  }
  if (listItems.length > 8 && listItems.length <= 12) {
    one.innerHTML = 1;
    two.innerHTML = 3;
    slideNum();
  }
  if (listItems.length > 12 && listItems.length <= 15) {
    one.innerHTML = 1;
    two.innerHTML = 4;
    slideNum();
  }
  if (listItems.length > 16 && listItems.length <= 20) {
    one.innerHTML = 1;
    two.innerHTML = 5;
    slideNum();
  }
  if (listItems.length > 20 && listItems.length <= 24) {
    one.innerHTML = 1;
    two.innerHTML = 6;
    slideNum();
  }
  if (listItems.length > 24 && listItems.length <= 28) {
    one.innerHTML = 1;
    two.innerHTML = 7;
    slideNum();
  }
  if (listItems.length > 32 && listItems.length <= 36) {
    one.innerHTML = 1;
    two.innerHTML = 8;
    slideNum();
  }
  if (listItems.length > 36 && listItems.length <= 40) {
    one.innerHTML = 1;
    two.innerHTML = 9;
    slideNum();
  }
  if (listItems.length > 40 && listItems.length <= 44) {
    one.innerHTML = 1;
    two.innerHTML = 10;
    slideNum();
  }
  const paginationLimit = 4;
  const pageCount = Math.ceil(listItems.length / paginationLimit);
  let currentPage = 1;
  const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
  };
  const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
  };
  const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
      disableButton(prevButton);
    } else {
      enableButton(prevButton);
    }
    if (pageCount === currentPage) {
      disableButton(nextButton);
    } else {
      enableButton(nextButton);
    }
  };
  const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
      button.classList.remove("active");
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex == currentPage) {
        button.classList.add("active");
      }
    });
  };
  const setCurrentPage = (pageNum) => {
    currentPage = pageNum;
    handleActivePageNumber();
    handlePageButtonsStatus();
    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;
    listItems.forEach((item, index) => {
      item.classList.add("hidden-intro");
      if (index >= prevRange && index < currRange) {
        item.classList.remove("hidden-intro");
      }
    });
  };
  window.addEventListener("load", () => {
    setCurrentPage(1);
    prevButton.addEventListener("click", () => {
      setCurrentPage(currentPage - 1);
    });
    nextButton.addEventListener("click", () => {
      setCurrentPage(currentPage + 1);
    });
    document.querySelectorAll(".pagination-number").forEach((button) => {
      const pageIndex = Number(button.getAttribute("page-index"));
      if (pageIndex) {
        button.addEventListener("click", () => {
          setCurrentPage(pageIndex);
        });
      }
    });
  });
  // Our trusted partners
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiperButtons = document.querySelector(".next-prev-buttons");
  let ourTrustedPartners = document.querySelector(".our-trusted-partners");
  if (windowWidth <= 767) {
    ourTrustedPartners.appendChild(swiperButtons);
  }
  partners();
  // faq
  faq();
  // form
  form();
  // footer
  footer();
}
/* Contact Us */
if (document.getElementById("contact")) {
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // form
  form();
  // footer
  footer();
}
/* About Us */
if (document.getElementById("about")) {
  let swiperSlide = document.querySelectorAll(".swiper");
  let swiperButtonNext = document.querySelectorAll(".swiper-button-next");
  let swiperButtonprev = document.querySelectorAll(".swiper-button-prev");
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // strength and reliability
  let strengthReliabilityImg = document.querySelector(
    ".strength-reliability-img"
  );
  let strengthReliabilityTextInner = document.querySelector(
    ".strength-reliability-text-inner"
  );
  if (windowWidth <= 1024) {
    let aboutImage = document.querySelector(".strength-reliability-img");
    let aboutTextInner = document.querySelector(".strength-reliability-text-inner");
    aboutTextInner.appendChild(aboutImage);
  }
  // if ((windowWidth > 1000) & (windowWidth <= 1920)) {
  //   let strengthReliabilityTextInnerHeight =
  //     strengthReliabilityTextInner.clientHeight + 135;
  //   strengthReliabilityImg.setAttribute(
  //     "style",
  //     `height: ${strengthReliabilityTextInnerHeight}px`
  //   );
  // }
  // if (windowWidth <= 1000) {
  //   let strengthReliability = document.querySelector(".strength-reliability");
  //   let acrossTitle = document.querySelector(".across-title");
  //   strengthReliability.appendChild(acrossTitle);
  // }
  // our services
  if (windowWidth <= 1100) {
    let serivesItem = document.querySelectorAll(".about-our-serives-card-item");
    let serivesImage = document.querySelectorAll(
      ".about-our-serives-card-image"
    );
    let cardInfo = document.querySelectorAll(".card-item-info");
    for (let i = 0; i < serivesItem.length; i++) {
      serivesItem[i].addEventListener("click", function () {
        // serivesItem[i].classList.toggle("about-cards");
        serivesImage[i].classList.toggle("grayscale");
        cardInfo[i].classList.toggle("top");
      });
    }
    // serivesItem.forEach((acc) => acc.addEventListener("click", toggleAcc));
    // function toggleAcc() {
    //   cardInfo.forEach((item) =>
    //     item != this ? item.classList.remove("top") : null
    //   );
    //   if (this.classList != "top") {
    //     this.classList.toggle("top");
    //   }
    // }
  }
  // testimonials
  const swiper1 = new Swiper(swiperSlide[0], {
    slidesPerView: "auto",
    speed: 1000,
    navigation: {
      nextEl: swiperButtonNext[0],
      prevEl: swiperButtonprev[0],
    },
  });
  // Our trusted partners
  const swiper2 = new Swiper(swiperSlide[1], {
    slidesPerView: "auto",
    speed: 1000,
    navigation: {
      nextEl: swiperButtonNext[1],
      prevEl: swiperButtonprev[1],
    },
  });
  if (windowWidth <= 744) {
    let nextPrevButtons = document.querySelectorAll(".next-prev-buttons");
    let swiperContainer = document.querySelectorAll(".swiper-container");
    for (let i = 0; i < swiperContainer.length; i++) {
      swiperContainer[i].appendChild(nextPrevButtons[i]);
    }
  }
  partners();
  // form
  form();
  // footer
  footer();
}
/* Serives Single Pages */
if (document.getElementById("single")) {
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // our serive cards
  ourServiceCards();
  // Our trusted partners
  const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  let swiperButtons = document.querySelector(".next-prev-buttons");
  let ourTrustedPartners = document.querySelector(".our-trusted-partners");
  if (windowWidth <= 744) {
    ourTrustedPartners.appendChild(swiperButtons);
  }
  partners();
  // form
  form();
  // footer
  footer();
}
/* Carrer */
if (document.getElementById("carrer")) {
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // select category
  function addClassElementEvent(element, className, event) {
    let elements = document.querySelectorAll(element);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(event, function (event) {
        [].forEach.call(elements, function (el) {
          el.classList.remove(className);
        });
        this.classList.add(className);
      });
    }
  }
  $(function () {
    $(".list-group").find(".list-group-item").on('click', function () {
      choseBox($(this).attr('data-name'));
    });
    function choseBox(choseClass) {
      console.log(choseClass);
      $(".category-item").fadeOut(0);
      $(".category-item").each(function () {
        var _this = $(this);
        var _thisValue = _this.attr('data-cat').indexOf(choseClass);
        if (!(_thisValue < 0)) {
          _this.fadeIn(0);
        }
      });
    };
    let first = document.querySelectorAll(".list-group-item");
    let categorys = document.querySelectorAll(".category-item");
    first[0].addEventListener("click", function () {
      for (let i = 0; categorys.length; i++) {
        categorys[i].style.display = "block";
      }
    })
  });
  addClassElementEvent(".list-group-item", "active", "click");
  // secure environment
  if (windowWidth <= 1100) {
    let carrerSe = document.querySelector(".carrer-se");
    let seSuttitle = document.querySelector(".se-suttitle");
    carrerSe.appendChild(seSuttitle);
  }
  // form
  form();
  // footer
  footer();
}
/* Career Single */
if (document.getElementById("career-single")) {
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // form choose file
  $("document").ready(function () {
    var $file = $("#file-input"),
      $label = $file.next(".label-file"),
      $labelText = $label.find(".file-text"),
      $labelRemove = $(".remove"),
      labelDefault = $labelText.text();
    // on file change
    $file.on("change", function (event) {
      var fileName = $file.val().split("\\").pop();
      if (fileName) {
        $labelText.text(fileName);
        $labelRemove.show();
      } else {
        $labelText.text(labelDefault);
        $labelRemove.hide();
      }
    });
    // Remove file
    $labelRemove.on("click", function (event) {
      $file.val("");
      $labelText.text(labelDefault);
      $labelRemove.hide();
    });
  });
  // form
  form();
  // footer
  footer();
}
/* secureity */
if (document.getElementById("secureity")) {
  // h1 setAttribute
  let heading = document.querySelector("h1");
  heading.className = "split";
  // title text animation
  // gsapTextSplit();
  // header
  headerSubmenu();
  // footer
  footer();
}
