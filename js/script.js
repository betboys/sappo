var $ = jQuery;
const windowWidth = window.innerWidth;
// preloader
$(document).ready(function () {
  window.setTimeout('fadeout();', 3000);
  document.querySelector('body').classList.add('hidden');
});
function fadeout() {
  $('.preloader').delay(3000).fadeOut('slow', function () {
    $('.notLoaded').removeClass('notLoaded');
    document.querySelector('body').classList.remove('hidden');
  });
}
/* Translate Language */
function Translate() {
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      $(".socal-media-title1").text("Էլեկտրոնային հասցե");
      $(".socal-media-subtitle1").text("ուղարկեք նամակ");
      $(".socal-media-title2").text("Հեռախոսահամար");
      $(".socal-media-subtitle2").text("Զանգահարեք մեզ");
      $(".socal-media-title3").text("Հասցե");
      $(".socal-media-subtitle3").text("Ուղղություն");
      // $(".form-name1").text("Անուն Ազգանուն");
      // $(".input1").attr("placeholder", "Անուն Ազգանուն");
      // $(".form-name2").text("էլեկտրոնային հասցե");
      // $(".input2").attr("placeholder", "Էլեկտրոնային Հասցե");
      // $(".form-name3").text("նամակ");
      // $(".input3").attr("placeholder", "Ձեր Հաղորդագրությունը . . . ");
      // $(".wpcf7-submit").attr("value", "Ուղարկել");
    }
    if (lang === 'ru-RU') {
      $(".socal-media-title1").text("Электронная почта");
      $(".socal-media-subtitle1").text("Отправить письмо");
      $(".socal-media-title2").text("Номер телефона");
      $(".socal-media-subtitle2").text("Позвоните нам");
      $(".socal-media-title3").text("Адрес");
      $(".socal-media-subtitle3").text("Направление");
      // $(".form-name1").text("Имя Фамилия");
      // $(".input1").attr("placeholder", "Имя Фамилия");
      // $(".form-name2").text("Электронная почта");
      // $(".input2").attr("placeholder", "Электронная почта");
      // $(".form-name3").text("письмо");
      // $(".input3").attr("placeholder", "Ваше сообщение. . .");
      // $(".wpcf7-submit").attr("value", "Отправить");
    }
  });
}
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
  const copy = document.querySelector(".header").cloneNode(true);
  document.querySelector(".main").appendChild(copy);
  let headers= document.querySelectorAll(".header");
  headers[1].setAttribute("class", "header-mobile");
  let dropdownToggle = document.querySelector(".dropdown-toggle");
  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
  });
  if (windowWidth >= 1321 && windowWidth <= 1920) {
    let dropdownMenu = document.querySelector(".dropdown-menu");
    let header = document.querySelector(".header");
    header.appendChild(dropdownMenu);
    let dropdown = document.querySelector(".dropdown");
    let dropdownIcon = document.querySelector(".dropdown-icon");
    let dropdownIconFill = document.querySelector(".dropdown-icon-fill");
    let submenuInner = document.querySelector(".dropdown-menu-inner");
    let submenuInnerH = submenuInner.clientHeight + "px";
    dropdown.addEventListener("mouseover", function () {
      document.querySelector("body").classList.add("no-scroll");
      dropdownMenu.style.height = submenuInnerH;
      dropdownToggle.style.color = "#FAC917";
      dropdownIcon.style.transform = "rotate(180deg)";
      dropdownIconFill.style.fill = "#FAC917";
    });
    dropdownMenu.addEventListener("mouseover", function () {
      document.querySelector("body").classList.add("no-scroll");
      dropdownMenu.style.height = submenuInnerH;
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
  }
  // responsive header mobile
  // if (windowWidth <= 1320) {
    let menuOpen = document.querySelectorAll(".burger-menu-open");
    let lineN1 = document.querySelectorAll(".lineN1");
    let lineN2 = document.querySelectorAll(".lineN2");
    let navigation = document.querySelectorAll(".navigation");
    let dropdownIcon = document.querySelectorAll(".dropdown-icon");
    let dropdownMenu = document.querySelectorAll(".dropdown-menu");
    let dropdown = document.querySelectorAll(".dropdown");
    let menuUl = document.querySelectorAll(".menu-inner");
    let languageWpml = document.querySelectorAll(".wpml-ls-statics-shortcode_actions");
    menuUl[1].append(languageWpml);
    menuOpen[1].addEventListener("click", function () {
      menuOpen[1].classList.toggle("new-element");
      lineN1[1].classList.toggle("new-lineN1");
      lineN2[1].classList.toggle("new-lineN2");
      if (navigation[1].style.height != "100vh") {
        document.querySelector("body").classList.add("no-scroll");
        navigation[1].setAttribute(
          "style",
          "height: 100vh; margin-top: 49.63px;display:flex;"
        );
      } else {
        document.querySelector("body").classList.remove("no-scroll");
        navigation[1].setAttribute(
          "style",
          "height: 0; margin-top: 0;display:none;"
        );
      }
    });
    dropdown[1].addEventListener("click", function () {
      if (dropdownMenu[1].style.height != "max-content") {
        dropdownMenu.setAttribute(
          "style",
          "height: max-content; margin-top: 20.3px"
        );
        dropdownIcon[1].style.transform = "rotate(180deg)";
      } else {
        dropdownMenu[1].setAttribute("style", "height: 0; margin-top: 0");
        dropdownIcon[1].style.transform = "rotate(0deg)";
      }
    });
  // }
}
/* footer navigation */
function footer() {
  let footerMenuTitle = document.querySelectorAll(".footer-menu-title");
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      footerMenuTitle[0].innerHTML = "Ծառայություններ";
      footerMenuTitle[1].innerHTML = "մեր մասին";
      footerMenuTitle[2].innerHTML = "Մենք սոց. ցանցերում";
    }
    if (lang === 'ru-RU') {
      footerMenuTitle[0].innerHTML = "Обслуживание";
      footerMenuTitle[1].innerHTML = "о нас";
      footerMenuTitle[2].innerHTML = "МЬ В соц. сетях";
    }
  });
}
/* our service card */
function ourServiceCards() {
  let cards = document.querySelectorAll(".card");
  let cardTitle = document.querySelectorAll(".card-title");
  let cardTitleHover = document.querySelectorAll(".card-title-hover");
  let cardHoverVisitble = document.querySelectorAll(".card-hover-visitble");
  let cardImages = document.querySelectorAll(".card-image");
  let cardMobile = document.querySelectorAll(".card-link-mobile");
  let cardInfoInner = document.querySelectorAll(".card-info-inner")
  let cardLength = cards.length;
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.width = 100 / cardLength + "%";
    cardTitleHover[i].textContent = cardTitle[i].textContent;
    if (windowWidth >= 1025 && windowWidth <= 3840) {
      cards[i].addEventListener("mouseover", function () {
        cards[i].style.width = 100 / 2 + "%";
      });
      cards[i].addEventListener("mouseout", function () {
        cards[i].style.width = 100 / cardLength + "%";
      });
    }
    // if (windowWidth <= 1024) {
    //   cards[i].style.width = 100 + "%";
    // }
    if (windowWidth <= 1024) {
      cardTitleHover[i].addEventListener("click", function (e) {
        e.preventDefault();
      })
      let cardInfoInnerH = cardInfoInner[i].clientHeight;
      let cardsH = cards[i].clientHeight;
      let newCardsH = cardsH + cardInfoInnerH;
      // cardInfoInner[i].setAttribute("style", "height: 0; margin-top: 0");
      // cards[i].addEventListener("click", function () {
      //   // cardHoverVisitble[i].classList.toggle("bottom");
      //   cardInfoInner[i].setAttribute("style", `height: ${cardInfoInnerH}px; margin-top: 7.69px`);
      //   cards[i].setAttribute("style", `height: ${newCardsH}px`);
      // });
    }
  }
  cards.forEach((acc) => acc.addEventListener("click", toggleAcc));
  function toggleAcc() {
    cards.forEach((item) =>
      item != this ? item.classList.remove("height") : null
    );
    if (this.classList != "height") {
      this.classList.add("height");
    }
  }
}
/* our trusted partners */
function partners() {
  let partnersCard = document.querySelectorAll(".side-2");
  let masterInner = document.querySelectorAll(".master-master-inner");
  let cardIntro = document.querySelectorAll(".card-intro");
  for (let i = 0; i < partnersCard.length; i++) {
    if (windowWidth > 1001 && windowWidth <= 3840) {
      masterInner[i].addEventListener("mouseover", function () {
        partnersCard[i].classList.add("click");
      });
      masterInner[i].addEventListener("mouseout", function () {
        partnersCard[i].classList.remove("click");
      });
    }
  }
  if (windowWidth <= 1001) {
    // masterInner[i].addEventListener("click", function () {
    //   partnersCard[i].classList.toggle("click");
    // });
    cardIntro.forEach((acc) => acc.addEventListener("click", toggleAcc));
    function toggleAcc() {
      cardIntro.forEach((item) =>
        item != this ? item.classList.remove("click") : null
      );
      if (this.classList != "click") {
        this.classList.toggle("click");
      }
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
  let inputs = document.querySelectorAll(".input");
  let sendBtn = document.querySelector(".wpcf7-submit");
  let popup = document.querySelector(".popup-mail");
  let goBack = document.querySelector(".go-back");
  for (ind of inputs) {
    ind.addEventListener("input", function () {
      if (ind.value != "") {
        sendBtn.addEventListener("click", function () {
          popup.style.display = "flex";
        });
      }
    })
  }
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'en-US') {
      $(".popup-title").text("Thank you!");
      $(".popup-subtitle").text("Your message has been successfully received. Our team will review your inquiry and get back to you as soon as possible.");
      $(".go-back").text("Go back");
    }
    if (lang === 'hy-AM') {
      $(".popup-title").text("Շնորհակալություն");
      $(".popup-subtitle").text("Մեր թիմը կուսումնասիրի ձեր հարցումը և կապ կհաստատի ձեզ հետ հնարավորինս շուտ:");
      $(".go-back").text("Վերադառնալ");
    }
    if (lang === 'ru-RU') {
      $(".popup-title").text("Спасибо!");
      $(".popup-subtitle").text("Ваше сообщение успешно получено. Наша команда рассмотрит ваш запрос и свяжется с вами в ближайшее время.");
      $(".go-back").text("Вернуться назад");
    }
  });
  goBack.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 0);
    window.location.reload();
  });
}
/* Home */
if (document.getElementById("home")) {
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
  document.addEventListener('DOMContentLoaded', (event) => {
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
  // Translate
  Translate();
  // footer
  footer();
}
/* Contact Us */
if (document.getElementById("contact")) {
  // header
  headerSubmenu();
  // form
  form();
  // Translate
  Translate();
  // footer
  footer();
}
/* About Us */
if (document.getElementById("about")) {
  let swiperSlide = document.querySelectorAll(".swiper");
  let swiperButtonNext = document.querySelectorAll(".swiper-button-next");
  let swiperButtonprev = document.querySelectorAll(".swiper-button-prev");
  // header
  headerSubmenu();
  // strength and reliability
  if (windowWidth <= 1024) {
    let aboutImage = document.querySelector(".strength-reliability-img");
    let aboutTextInner = document.querySelector(".strength-reliability-text-inner");
    aboutTextInner.appendChild(aboutImage);
  }
  // our services
  if (windowWidth <= 1100) {
    let serivesItem = document.querySelectorAll(".about-our-serives-card-item");
    let serivesImage = document.querySelectorAll(
      ".about-our-serives-card-image"
    );
    let cardInfo = document.querySelectorAll(".card-item-info");
    for (let i = 0; i < serivesItem.length; i++) {
      serivesItem[i].addEventListener("click", function () {
        serivesImage[i].classList.toggle("grayscale");
        cardInfo[i].classList.toggle("top");
      });
    }
    serivesItem.forEach((acc) => acc.addEventListener("click", toggleAcc));
    function toggleAcc() {
      serivesItem.forEach((item) =>
        item != this ? item.classList.remove("top") : null
      );
      if (this.classList != "top") {
        this.classList.toggle("top");
      }
    }
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
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      $(".about-card-link").text("Իմանալ ավելին");
    }
    if (lang === 'ru-RU') {
      $(".about-card-link").text("Узнать больше");
    }
  })
  partners();
  // form
  form();
  // Translate
  Translate();
  // footer
  footer();
}
/* Serives Single Pages */
if (document.getElementById("single")) {
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
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      $(".other-services1").text("այլ");
      $(".other-services2").text("ծառայություններ");
    }
    if (lang === 'ru-RU') {
      $(".other-services1").text("другие");
      $(".other-services2").text("услуги");
    }
  })
  partners();
  // form
  form();
  // Translate
  Translate();
  // footer
  footer();
}
/* Carrer */
if (document.getElementById("carrer")) {
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
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      $(".list-group-item:first-child").text("Բոլորը");
      $(".category-item-link").text("Դիմել հիմա");
    }
    if (lang === 'ru-RU') {
      $(".list-group-item:first-child").text("Все");
      $(".category-item-link").text("Применить сейчас");
    }
  });
  // form
  form();
  // Translate
  Translate();
  // footer
  footer();
}
/* Career Single */
if (document.getElementById("career-single")) {
  // header
  headerSubmenu();
  // form choose file
  $("document").ready(function () {
    var $file = $("#file-input"),
      $label = $file.next(".label-file"),
      $labelText = $label.find(".file-text"),
      $labelRemove = $(".remove"),
      labelDefault = $labelText.text();
    $file.on("change", function (event) {
      var fileName = $file.val().split("\\").pop();
      if (fileName) {
        var x = event.target.files[0].name;
        $(".file-text").text(x);
        $labelRemove.show();
      } else {
        $(".file-text").text(labelDefault);
        $labelRemove.hide();
      }
    });
    $labelRemove.on("click", function (event) {
      $file.val("");
      var lang = $('html').attr('lang');
      if (lang === 'hy-AM') {
        $(".file-text").text("Կցեք Ձեր ինքնակենսագրականը (CV)");
      }
      if (lang === 'en-US') {
        $(".file-text").text("Attach your CV");
      }
      if (lang === 'ru-RU') {
        $(".file-text").text("Прикрепите свое резюме (CV)");
      }
      $labelRemove.hide();
    });
  });
  // form
  let inputs = document.querySelectorAll(".input");
  let sendBtn = document.querySelector(".wpcf7-submit");
  let popup = document.querySelector(".popup-mail");
  let goBack = document.querySelector(".go-back");
  let remove = document.querySelector(".remove");
  // for (ind of inputs) {
  //   ind.addEventListener("input", function () {
  //     if (ind.value != "") {
  //       sendBtn.addEventListener("click", function () {
  //         popup.style.display = "flex";
  //       });
  //     }
  //   })
  // }
  var $file = $("#file-input");
  $file.on("change", function (event) {
    var fileName = $file.val().split("\\").pop();
    if (fileName != "") {
      sendBtn.addEventListener("click", function () {
        popup.style.display = "flex";
      });
    }
  })
  document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('wpcf7invalid', function (event) {
      var $form = jQuery(event.target);
      var $fileInput = $form.find('#file-input');

      if (!$fileInput.val()) {
        var lang = $('html').attr('lang');
        if (lang === 'en-US') {
          $fileInput.after('<span class="wpcf7-not-valid-tip wpcf7-not-valid-tip-el">Please attach your CV</span>');
        }
        if (lang === 'hy-AM') {
          $fileInput.after('<span class="wpcf7-not-valid-tip wpcf7-not-valid-tip-el">Խնդրում ենք կցել ձեր ռեզյումեն</span>');
        }
        if (lang === 'ru-RU') {
          $fileInput.after('<span class="wpcf7-not-valid-tip wpcf7-not-valid-tip-el">Пожалуйста, прикрепите свое резюме</span>');
        }
      }
    }, false);
  });
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'en-US') {
      $(".popup-title").text("Thank you!");
      $(".popup-subtitle").text("Your message has been successfully received. Our team will review your inquiry and get back to you as soon as possible.");
      $(".go-back").text("Go back");
    }
    if (lang === 'hy-AM') {
      $(".popup-title").text("Շնորհակալություն");
      $(".popup-subtitle").text("Մեր թիմը կուսումնասիրի ձեր հարցումը և կապ կհաստատի ձեզ հետ հնարավորինս շուտ:");
      $(".go-back").text("Վերադառնալ");
    }
    if (lang === 'ru-RU') {
      $(".popup-title").text("Спасибо!");
      $(".popup-subtitle").text("Ваше сообщение успешно получено. Наша команда рассмотрит ваш запрос и свяжется с вами в ближайшее время.");
      $(".go-back").text("Вернуться назад");
    }
  });
  goBack.addEventListener("click", function () {
    $("html, body").animate({ scrollTop: "0" }, 0);
    window.location.reload();
  });
  $(document).ready(function ($) {
    let position = document.querySelector(".position-input");
    let positionInner = position.innerHTML;
    let inputPosition = document.querySelector(".input2");
    inputPosition.placeholder = positionInner;
    let text = inputPosition.innerHTML;
    let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);
    inputPosition.innerHTML = capitalizedText;
    // var lang = $('html').attr('lang');
    // if (lang === 'hy-AM') {
    //   $(".form-name1").text("Անուն Ազգանուն");
    //   $(".input1").attr("placeholder", "Անուն Ազգանուն");
    //   $(".form-name2").text("պաշտոն");
    //   // $(".input2").attr("placeholder", "Պահնորդ");
    //   $(".form-name3").text("էլեկտրոնային հասցե");
    //   $(".input3").attr("placeholder", "էլեկտրոնային հասցե");
    //   $(".form-name4").text("հեռախոսահամար");
    //   $(".file-text").text("Կցեք Ձեր ինքնակենսագրականը (CV)");
    //   $(".wpcf7-submit").attr("value", "Դիմել հիմա");
    // }
    // if (lang === 'ru-RU') {
    //   $(".form-name1").text("Имя Фамилия");
    //   $(".input1").attr("placeholder", "Имя Фамилия");
    //   $(".form-name2").text("позиция");
    //   // $(".input2").attr("placeholder", "Напр. Старший Java-разработчик");
    //   $(".form-name3").text("Электронная почта");
    //   $(".input3").attr("placeholder", "Электронная почта");
    //   $(".form-name4").text("номер телефона");
    //   $(".file-text").text("Прикрепите свое резюме (CV)");
    //   $(".wpcf7-submit").attr("value", "Применить сейчас");
    // }
  });
  // footer
  footer();
}
/* secureity */
if (document.getElementById("secureity")) {
  // header
  headerSubmenu();
  // footer
  footer();
}