window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar_sec");
  const contactBtn = document.querySelector(".cnt_btn");
  const logo = document.querySelector(".img_cont img");
  const links = document.querySelectorAll(".links_cont ul li a");
  const lines = document.querySelectorAll(".hamburger span");
  const nav_ul = document.querySelector("#nav_ul");

  if (window.scrollY > 60) {
    navbar.style.backgroundColor = "white";
    navbar.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    navbar.style.transition = "background-color 0.3s";
    contactBtn.style.borderColor = "#00d1b2";
    contactBtn.style.color = "#00d1b2";
    nav_ul.style.backgroundColor = "white";
    logo.src = "Assessts/logo-negative.png";

    lines.forEach((line) => {
      line.style.backgroundColor = "#00d1b2";
    });
    links.forEach((link) => {
      link.style.color = "#00d1b2";
      link.onmouseover = function () {
        link.style.color = " #00000099";
      };
      link.onmouseout = function () {
        link.style.color = "#00d1b2";
      };
    });

    contactBtn.onmouseover = function () {
      contactBtn.style.backgroundColor = "#00d1b2";
      contactBtn.style.color = "white";
    };

    contactBtn.onmouseout = function () {
      contactBtn.style.backgroundColor = "white";
      contactBtn.style.color = "#00d1b2";
      contactBtn.style.borderColor = "#00d1b2";
    };
  } else {
    navbar.style.backgroundColor = "#00d1b2";
    navbar.style.boxShadow = "none";
    contactBtn.style.borderColor = "white";
    contactBtn.style.backgroundColor = "transparent";
    contactBtn.style.color = "white";
    logo.src = "Assessts/logo.png";
    nav_ul.style.backgroundColor = "#00d1b2";
    lines.forEach((line) => {
      line.style.backgroundColor = "white";
    });
    links.forEach((link) => {
      link.style.color = "white";
      link.onmouseover = function () {
        link.style.color = "white";
      };
      link.onmouseout = function () {
        link.style.color = "white";
      };
    });

    contactBtn.onmouseover = function () {
      contactBtn.style.backgroundColor = "white";
      contactBtn.style.color = "#2a4642";
    };

    contactBtn.onmouseout = function () {
      contactBtn.style.backgroundColor = "transparent";
      contactBtn.style.color = "white";
      contactBtn.style.borderColor = "white";
    };
  }
});

function startCountdown() {
  const eventDate = new Date("December 9, 2024 10:00:00").getTime(); 
  const countdownElements = document.querySelectorAll(".time_div h2");

  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = eventDate - currentDate;

    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElements[0].textContent = days < 10 ? "0" + days : days;
    countdownElements[1].textContent = hours < 10 ? "0" + hours : hours;
    countdownElements[2].textContent = minutes < 10 ? "0" + minutes : minutes;
    countdownElements[3].textContent = seconds < 10 ? "0" + seconds : seconds;

    if (timeRemaining < 0) {
      clearInterval(interval);
      countdownElements.forEach((element) => {
        element.textContent = "00";
      });
    }
  }

  const interval = setInterval(updateCountdown, 1000);
}

window.addEventListener("DOMContentLoaded", startCountdown);

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, 
        behavior: "smooth",
      });
    }
  });
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.querySelector('a[href="#home"]');
  const overlayAnimation = document.getElementById("overlayAnimation");

  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    overlayAnimation.classList.add("animate-overlay");

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      overlayAnimation.classList.remove("animate-overlay");
    }, 1000);
  });
});

var hamburger = document.querySelector(".hamburger");
var mobileNav = document.querySelector("#nav_ul");
var active = false;

hamburger.addEventListener("click", function () {
  mobileNav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

const speakerCards = document.querySelectorAll(".speakers_details_cont");

const observerOptions = {
  threshold: 0.3,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
}, observerOptions);

speakerCards.forEach((card) => {
  card.classList.add("speaker-card"); 
  observer.observe(card);
});


//console the user data 
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const payment = document.getElementById("payment").value;

    console.log("User Registration Details:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Payment Method:", payment);
    form.reset();
    alert("Registration successful! Check the console for details.");
  });
