var $ = jQuery;
const windowWidth = window.innerWidth;
/* Translate Language */
function Translate() {
  $(document).ready(function ($) {
    let socalMediaTitle1 = document.querySelector(".socal-media-title1");
    let socalMediaTitle2 = document.querySelector(".socal-media-title2");
    let socalMediaTitle3 = document.querySelector(".socal-media-title3");
    let socalMediaSubTitle1 = document.querySelector(".socal-media-subtitle1");
    let socalMediaSubTitle2 = document.querySelector(".socal-media-subtitle2");
    let socalMediaSubTitle3 = document.querySelector(".socal-media-subtitle3");
    let formName1 = document.querySelector(".form-name1");
    let formName2 = document.querySelector(".form-name2");
    let formName3 = document.querySelector(".form-name3");
    let input1 = document.querySelector(".input1");
    let input2 = document.querySelector(".input2");
    let input3 = document.querySelector(".input3");
    let sumbitInput = document.querySelector(".wpcf7-submit");
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      socalMediaTitle1.innerHTML = "Էլեկտրոնային հասցե";
      socalMediaTitle2.innerHTML = "Հեռախոսահամար";
      socalMediaTitle3.innerHTML = "Հասցե";
      socalMediaSubTitle1.innerHTML = "ուղարկեք նամակ";
      socalMediaSubTitle2.innerHTML = "Զանգահարեք մեզ";
      socalMediaSubTitle3.innerHTML = "Ուղղություն";
      formName1.innerHTML = "Անուն Ազգանուն";
      formName2.innerHTML = "էլեկտրոնային հասցե";
      formName3.innerHTML = "նամակ";
      sumbitInput.value = "Ուղարկել";
      input1.placeholder = "Անուն Ազգանուն";
      input2.placeholder = "Էլեկտրոնային Հասցե";
      input3.placeholder = "Ձեր Հաղորդագրությունը . . . ";
    }
    if (lang === 'ru-RU') {
      // fonts
      let fontRegular = "Noto Sans Regular";
      let fontMedium = "Noto Sans Medium";
      let fontSemiBold = "Noto Sans SemiBold";
      let fontBold = "Noto Sans Bold";
      // all class`s
      let body = document.querySelector("body");
      let menuLink = document.querySelectorAll(".menu-link");
      let dropdownMenuItemTitle = document.querySelectorAll(".dropdown-menu-item-title");
      let dropdownMenuItemList = document.querySelectorAll(".dropdown-menu-item-list-intro");
      let dropdownMenuItemDesc = document.querySelectorAll(".dropdown-menu-item-desc");
      // all elements fonts change
      body.style.fontFamily = fontRegular;
      for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].style.fontFamily = fontMedium;
        dropdownMenuItemTitle[i].style.fontFamily = fontSemiBold;
        // dropdownMenuItemList[i].style.fontFamily = fontRegular;
        // dropdownMenuItemDesc[i].style.fontFamily = fontRegular;
      }













      socalMediaTitle1.innerHTML = "Электронная почта";
      socalMediaTitle2.innerHTML = "Номер телефона";
      socalMediaTitle3.innerHTML = "Адрес";
      socalMediaSubTitle1.innerHTML = "Отправиты письмо";
      socalMediaSubTitle2.innerHTML = "Позвоните нам";
      socalMediaSubTitle3.innerHTML = "Направление";
      formName1.innerHTML = "Имя Фамилия";
      formName2.innerHTML = "Электронная почта";
      formName3.innerHTML = "письмо";
      sumbitInput.value = "Отправить";
      input1.placeholder = "Имя Фамилия";
      input2.placeholder = "Электронная почта";
      input3.placeholder = "Ваше сообщение. . .";
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
  let footerMenuTitle = document.querySelectorAll(".footer-menu-title");
  $(document).ready(function ($) {
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      footerMenuTitle[0].innerHTML = "Ծառայություննեռ";
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
  let sendButton = document.querySelector(".send-button");
  let inputs = document.querySelectorAll(".input");
  let sendBtn = document.querySelector(".wpcf7-submit");
  let popup = document.querySelector(".popup-mail");
  let goBack = document.querySelector(".go-back");
  for (ind of inputs) {
    ind.addEventListener("input", function () {
      if (ind.value != "") {
        sendButton.disabled = false;
        sendBtn.addEventListener("click", function () {
          popup.style.display = "flex";
        });
        goBack.addEventListener("click", function () {
          $("html, body").animate({ scrollTop: "0" }, 0);
          window.location.reload();
        });
      }
      else {
        sendButton.disabled = true;
        sendBtn.addEventListener("click", function () {
          popup.style.display = "none";
        });
      }
    })
  }
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
      $labelRemove.hide();
    });
  });
  // form
  let sendButton = document.querySelector(".incidents-form-button");
  let inputs = document.querySelectorAll(".input");
  let sendBtn = document.querySelector(".wpcf7-submit");
  let popup = document.querySelector(".popup-mail");
  let goBack = document.querySelector(".go-back");
  for (ind of inputs) {
    ind.addEventListener("input", function () {
      if (ind.value != "") {
        sendButton.disabled = false;
        sendBtn.addEventListener("click", function () {
          popup.style.display = "flex";
        });
        goBack.addEventListener("click", function () {
          $("html, body").animate({ scrollTop: "0" }, 0);
          window.location.reload();
        });
      }
      else {
        sendButton.disabled = true;
        sendBtn.addEventListener("click", function () {
          popup.style.display = "none";
        });
      }
    })
  }
  $(document).ready(function ($) {
    let formName1 = document.querySelector(".form-name1");
    let formName2 = document.querySelector(".form-name2");
    let formName3 = document.querySelector(".form-name3");
    let formName4 = document.querySelector(".form-name4");
    let input1 = document.querySelector(".input1");
    let input2 = document.querySelector(".input2");
    let input3 = document.querySelector(".input3");
    let fileText = document.querySelector(".file-text");
    let label1 = document.querySelector(".label1");
    let sumbitInput = document.querySelector(".wpcf7-submit");
    var lang = $('html').attr('lang');
    if (lang === 'hy-AM') {
      formName1.innerHTML = "Անուն ազգանուն";
      formName2.innerHTML = "պաշտոն";
      formName3.innerHTML = "էլեկտռոնայի հասցե";
      formName4.innerHTML = "հեռախոսահամար";
      input1.placeholder = "Անուն ազգանուն";
      input2.placeholder = "Պահնորդ";
      input3.placeholder = "էլեկտրոնային հասցե";
      fileText.innerHTML = "Կցեք Ձեր ինքնակենսագրականը (CV)";
      label1.innerHTML = "Համաձայն եմ";
      sumbitInput.value = "Դիմել հիմա";
    }
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