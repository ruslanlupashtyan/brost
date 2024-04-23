// let input = document.querySelector("#phone");

let items = document.querySelectorAll("form.form .item.input-collect");
// toggle classlist in radio buttons
items.forEach((el) => {
  el.querySelector(".show-input").addEventListener("click", function () {
    el.querySelector(".item__hidden").classList.add("show");
  });
  el.querySelector(".hide-input").addEventListener("click", function () {
    el.querySelector(".item__hidden").classList.remove("show");
  });
});

let fileItem = document.querySelector("form.form .item.input-file");
fileItem.querySelector(".input-yes").addEventListener("click", function () {
  fileItem.querySelector(".item__hidden").classList.add("show");
});
fileItem.querySelector(".input-no").addEventListener("click", function () {
  fileItem.querySelector(".item__hidden").classList.remove("show");
});

const TOKEN = "6574739136:AAHhiB3_xkOvykFpUuIT78RMnJjKL4kZ0Pw";
const CHAT_ID = "-1002052481730";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

let message = "";

document.querySelector("form.form").addEventListener("submit", function (e) {
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
  } else {
    message += `Ім'я: ${document.querySelector(".contact .name").value} \n`;
  }

  let phone = document.querySelector(".contact .phone");
  let dialcode = document.querySelector(".iti__flag .iti__a11y-text");

  // add phone to message
  if (phone.value.split("").length != 12) {
    allOk = false;
  } else {
    message += `Країна та телефон: ${dialcode.innerHTML}  ${phone.value} \n`;
    console.log(phone.value.split("").length);
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
  console.log(`AllOk: ${allOk}`);
  console.log(phone.value.split("").length);
  console.log(dialcode.innerHTML);
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
    document.querySelector(".form-preloader").classList.remove("hidden");
    document.querySelector("form.form").classList.add("hidden");
    setTimeout(() => {
      document.querySelector(".form-preloader").classList.add("hidden");
      document.querySelector(".success").classList.remove("hidden");
    }, 2000);
  }
});

document.querySelector(".btn.close").addEventListener("click", function () {
  location.reload();
});
