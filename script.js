document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links");
  const inputs = document.querySelectorAll("input");
  const textArea = document.querySelectorAll("textarea");
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");
  const closeIcon = document.getElementById("close-icon");
  const navigationLinks = document.querySelectorAll(".nav-links a");

  //Navigation links

  //input
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      const label = this.parentElement.querySelector("label");
      label.style.top = "-10px";
      label.style.fontSize = "12px";
    });

    input.addEventListener("blur", function () {
      if (this.value === "") {
        const label = this.parentElement.querySelector("label");
        label.style.top = "50%";
        label.style.fontSize = "16px";
      }
    });

    // Check for initial values on page load
    if (input.value !== "") {
      const label = input.parentElement.querySelector("label");
      label.style.top = "-10px";
      label.style.fontSize = "12px";
    }
  });

  //textarea
  textArea.forEach((textarea) => {
    textarea.addEventListener("focus", function () {
      const label = this.parentElement.querySelector("label");
      label.style.top = "-10px";
      label.style.fontSize = "12px";
    });

    textarea.addEventListener("blur", function () {
      if (this.value === "") {
        const label = this.parentElement.querySelector("label");
        label.style.top = "20%";
        label.style.fontSize = "16px";
      }
    });
  });

  if (menuIcon) {
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("responsive");
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      navbar.classList.remove("responsive");
    });
  }

  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navbar.classList.remove("responsive");
    });
  });
});

let navlist = document.getElementById("navlist");

function openmenu() {
  navlist.style.right = "0";
}
function closemenu() {
  navlist.style.right = "-200px";
}
