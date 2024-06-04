//! ITI input
const input = document.querySelector("#phone");
if (input) {
  setTimeout(() => {
    let iti = window.intlTelInput(input, {
      initialCountry: "auto",
      useFullscreenPopup: false,
      geoIpLookup: (callback) => {
        fetch("https://ipapi.co/json")
          .then((res) => res.json())
          .then((data) => callback(data.country_code))
          .catch(() => callback("us"));
      },
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@21.2.6/build/js/utils.js",
    });
  }, 1000);
}

//! toggle classlist in radio buttons
let items = document.querySelectorAll("form.tg-form .item.input-collect");
items.forEach((el) => {
  el.querySelector(".show-input").addEventListener("click", function () {
    el.querySelector(".item__hidden").classList.add("show");
  });
  el.querySelector(".hide-input").addEventListener("click", function () {
    el.querySelector(".item__hidden").classList.remove("show");
  });
});

let fileItem = document.querySelector("form.tg-form .item.input-file");
if (fileItem) {
  fileItem.querySelector(".input-yes").addEventListener("click", function () {
    fileItem.querySelector(".item__hidden").classList.add("show");
  });
  fileItem.querySelector(".input-no").addEventListener("click", function () {
    fileItem.querySelector(".item__hidden").classList.remove("show");
  });
}

// ! TELEGRAM BOT
const TOKEN = "6574739136:AAHhiB3_xkOvykFpUuIT78RMnJjKL4kZ0Pw";
const CHAT_ID = "-1002052481730";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let message = "";

if (document.querySelector(".footer-form")) {
  document
    .querySelector(".footer-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let allOk = true;
      message = "";
      let footerName = document.querySelector(".footer input[name='name']");
      let footerPhone = document.querySelector(".footer input[name='phone']");
      let footerMessage = document.querySelector(".footer textarea");
      let dialcode = document.querySelector(".iti__flag .iti__a11y-text");

      // add name to message
      if (footerName.value == "") {
        allOk = false;
        footerName.classList.add("err");
      } else {
        message += `Ім'я: ${footerName.value} \n`;
      }

      // add phone to message
      if (footerPhone.value == "") {
        allOk = false;
        footerPhone.classList.add("err");
      } else {
        message += `Країна (код): ${dialcode.innerHTML} \n`;
        message += ` Телефон: ${footerPhone.value} \n`;
        console.log(allOk);
      }

      // add comment to message
      if (footerMessage.value == "") {
        message += `Без повідомлення`;
      } else {
        message += `Повідомлення: \n ${footerMessage.value}`;
      }
      console.log(allOk);
      if (allOk) {
        axios
          .post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
            // photo: file,
          })
          .then((res) => {
            console.log(message);
          })
          .catch((err) => {
            console.warn(err);
          })
          .finally(() => {
            console.log("ok");
          });
      }
    });
}

if (document.querySelector("form.tg-form")) {
  document
    .querySelector("form.tg-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      let allOk;
      message = "";
      items.forEach((el) => {
        // recieve a TITLE
        message += `${el.querySelector(".item__title p").innerHTML}  `;

        // recieve a VALUE OF RADIO BTN
        if (el.querySelector('input[type="radio"]:checked') == null) {
          allOk = false;
          message = "";
          // console.error("U have a null");
        } else {
          allOk = true;
          message += `${
            el.querySelector('input[type="radio"]:checked').value
          },  \n`;
        }

        // recieve a quantity from input number
        if (
          el.querySelector("input.input-yes:checked") &&
          el.querySelector('input[type="number"]').value == ""
        ) {
          allOk = false;
          el.querySelector('input[type="number"]').classList.add("err");
          message = "";
        } else if (el.querySelector("input.input-no:checked")) {
          allOk = true;
          // message = "";
        } else {
          message += `В кількості: ${
            el.querySelector('input[type="number"]').value
          } шт \n \n`;
        }
      });

      if (fileItem.querySelector('input[type="radio"]:checked') == null) {
        allOk = false;
      } else {
        message += `Наявність індивідуального теплового пункту: ${
          this.querySelector('input[type="radio"]:checked').value
        } \n \n`;
      }

      // add name to message
      if (document.querySelector(".contact .name").value == "") {
        allOk = false;
        document.querySelector(".contact .name").classList.add("err");
      } else {
        message += `Ім'я: ${document.querySelector(".contact .name").value} \n`;
      }

      let phone = document.querySelector(".contact .phone");
      let dialcode = document.querySelector(".iti__flag .iti__a11y-text");

      // add phone to message
      if (phone.value == "") {
        allOk = false;
        phone.classList.add("err");
      } else {
        message += `Країна (код): ${dialcode.innerHTML} \n`;
        message += ` Телефон: ${phone.value} \n`;
      }

      // add objname to message
      if (!document.querySelector(".contact .objname").value == "") {
        message += `Назва об'єкту: ${
          document.querySelector(".contact .objname").value
        } \n`;
      }

      // add address to message
      if (!document.querySelector(".contact .address").value == "") {
        message += `Адреса: ${
          document.querySelector(".contact .address").value
        } \n`;
      }

      // add comment to message
      if (!document.querySelector(".contact-wide .comment").value == "") {
        message += `Коментар: ${
          document.querySelector(".contact-wide .comment").value
        }`;
      }
      let allButtons = document.querySelectorAll('input[type="radio"]:checked');
      if (allButtons.length < 10) {
        allOk = false;
      }
      if (allOk) {
        axios
          .post(URI_API, {
            chat_id: CHAT_ID,
            parse_mode: "html",
            text: message,
            // photo: file,
          })
          .then((res) => {
            console.log(message);
          })
          .catch((err) => {
            console.warn(err);
          })
          .finally(() => {
            console.log("ok");
          });
        console.log(message);
        console.log(allOk);
        document.querySelector(".form-preloader").classList.remove("hidden");
        document.querySelector("form.tg-form").classList.add("hidden");
        setTimeout(() => {
          document.querySelector(".form-preloader").classList.add("hidden");
          document.querySelector(".success").classList.remove("hidden");
        }, 2000);
      }
    });

  document.querySelector(".btn.close").addEventListener("click", function () {
    location.reload();
  });
}

let mobileHamburger = document.querySelector(".mobile-hamburger");
if (mobileHamburger) {
  mobileHamburger.addEventListener("click", function () {
    document.querySelector(".header-mob").classList.toggle("show");
    document.querySelector("body").classList.toggle("hidden");
    mobileHamburger.classList.toggle("active");
  });
}

// Services
let tabs = document.querySelectorAll(".services__tab-list .tab");
let services = document.querySelectorAll(".services__items .service");
let servicesMenuText = document.querySelector(".tab-mobile__title");
let servicesMenuButton = document.querySelector(".service-hamburger");
if (servicesMenuButton) {
  servicesMenuButton.addEventListener("click", function () {
    document.querySelector(".services__tab-list").classList.toggle("show");
    servicesMenuButton.classList.toggle("active");
    // document
    //   .querySelector(".tab.tab-mobile")
    //   .scrollIntoView({ behavior: "smooth" });
  });
}

// scroll
let header = document.querySelector(".header");
let mobileHeader = document.querySelector(".header-mob");
if (header) {
  let menuLinks = header.querySelectorAll("[data-animate]");
  let mobileMenuLinks = mobileHeader.querySelectorAll("[data-animate]");
  menuLinks.forEach((el) => {
    el.addEventListener("click", function () {
      anchorScroll(el.getAttribute("data-animate"));
    });
  });
  mobileMenuLinks.forEach((el) => {
    el.addEventListener("click", function () {
      anchorScroll(el.getAttribute("data-animate"));
      document.querySelector(".header-mob").classList.toggle("show");
      mobileHamburger.classList.toggle("active");
      document.querySelector("body").classList.toggle("hidden");
    });
  });
}

let anchorScroll = function (uri) {
  let elements = [document.documentElement, document.body];
  let target = document.querySelector(`[data-block='${uri}']`);
  let offsetTop = target.getBoundingClientRect().top + window.scrollY - 100;
  elements.forEach((el) => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  });
};

tabs.forEach((el, index) => {
  el.addEventListener("click", () => {
    tabs.forEach((i) => {
      i.classList.remove("active");
    });
    el.classList.add("active");
    servicesMenuText.innerHTML = el.innerHTML;
    setTimeout(() => {
      document.querySelector(".services__tab-list").classList.remove("show");
    }, 200);
    services.forEach((i) => {
      i.classList.remove("active");
    });
    services[index].classList.add("active");
  });
});

let scrollSection = document.querySelector(".advantages__items");

if (window.innerWidth < 768 && window.innerWidth >= 536) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 220, 2.1, -275);
    console.log(768);
  });
} else if (window.innerWidth < 536 && window.innerWidth >= 426) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 210, 2.1, -290);
    console.log(536);
  });
} else if (window.innerWidth < 426 && window.innerWidth >= 406) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 180, 2.1, -395);
    console.log(426);
  });
} else if (window.innerWidth < 406 && window.innerWidth >= 386) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 150, 2.1, -415);
    console.log(406);
  });
} else if (window.innerWidth < 386 && window.innerWidth >= 376) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 145, 2.1, -425);
    console.log(386);
  });
} else if (window.innerWidth < 376 && window.innerWidth >= 320) {
  document.addEventListener("scroll", function () {
    scrollHorisontal(scrollSection, 360, 140, 2.1, -447);
    console.log(376);
  });
}

function scrollHorisontal(e, maxY, minY, koef, endVal) {
  let rect = e.getBoundingClientRect();
  let y = rect.y;
  // console.log(`BEFORE: ${y}`);
  if (y < maxY && y > minY) {
    y = (y - 350) * koef;
    e.style.transform = `translateX(${y}px)`;
    // console.log(`AFTER: ${y}`);
  } else if (y < minY) {
    e.style.transform = `translateX(${endVal}px)`;
  }
}

// ! Фіксуємо плашку на підара
// let tabMobile = document.querySelector(".tab.tab-mobile");
// let tabMobileTarget = document.querySelector(".service__title");
// let servicesTabList = document.querySelector(".services__tab-list");

// if (window.innerWidth < 768) {
//   document.addEventListener("scroll", function () {
//     fixTabItem(tabMobile, tabMobileTarget);
//   });
// }

// function fixTabItem(e, target) {
//   let rect = target.getBoundingClientRect();
//   let y = rect.y;
//   console.log(`BEFORE: ${y}`);
//   if (y < 180) {
//     e.style.position = "fixed";
//     e.style.top = "80px";
//     e.style.width = "100%";
//     servicesTabList.style.position = "fixed";
//     servicesTabList.style.top = "130px";
//   } else {
//     e.style.position = "unset";
//     e.style.top = "unset";
//     e.style.width = "100%";
//     servicesTabList.style.position = "unset";
//     servicesTabList.style.top = "unset";
//   }
// }

// let serviceParent = document.querySelector(".service.active");
// console.log(serviceParent);

// window.addEventListener("scroll", function () {
//   let posY = this.window.scrollY;
//   if (posY < posY) {
//     serviceParent.querySelector(".items").style.transform = "translateX(-102%)";
//   } else {
//     serviceParent.querySelector(".items").style.transform = "translateX(0%)";
//   }
//   console.log(posY);
// });

// const scrollContainer = document.querySelector(".service.active .items");

// if (scrollContainer) {
//   if (window.innerWidth > 768) {
//     scrollContainer.addEventListener("wheel", (evt) => {
//       evt.preventDefault();
//       let count;
//       count += evt.deltaY;
//       console.log(evt.deltaY);
//       scrollContainer.scrollLeft += evt.deltaY * 20;
//     });
//   }
// }

// window.addEventListener("scroll", function () {
//   let rect = scrollContainer.getBoundingClientRect();
//   console.log(rect.y);
//   if (rect.y < 120) {
//     scrollContainer.scrollLeft = 1400;
//   }
// });

let casesCards = document.querySelectorAll(".flip-card-inner");
if (casesCards) {
  casesCards.forEach((el) => {
    el.addEventListener("click", function () {
      casesCards.forEach((i) => {
        // if (i.classList.contain("rotated")) {
        //   return;
        // } else {
        i.classList.remove("rotated");
        // }
      });
      el.classList.toggle("rotated");
    });
  });
}

//! TEST

// // Adding scroll event listener
// document.addEventListener("scroll", horizontalScroll);

// //Selecting Elements
// let sticky = document.querySelector(".sticky");
// let stickyParent = document.querySelector(".sticky-parent");

// let scrollWidth = sticky.scrollWidth;
// let verticalScrollHeight =
//   stickyParent.getBoundingClientRect().height -
//   sticky.getBoundingClientRect().height;

// //Scroll function
// function horizontalScroll() {
//   //Checking whether the sticky element has entered into view or not
//   let stickyPosition = sticky.getBoundingClientRect().top;
//   if (stickyPosition > 1) {
//     return;
//   } else {
//     let scrolled = stickyParent.getBoundingClientRect().top; //how much is scrolled?
//     sticky.scrollLeft = (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
//   }
// }
