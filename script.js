const hamburgerMenu = document.querySelector(".hamburger");
const navGroup = document.querySelector(".nav-group");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  navGroup.classList.toggle("active");
  console.log("Hamburger is activated");
});

document.querySelectorAll(".nav-link").forEach((l) =>
  l.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navGroup.classList.remove("active");
    console.log("Hamburger deactivated");
  })
);

const scrolltoTop = () => {
  window.scrollTo(0, 0);
};

const openHome = () => {
  let openH = window.open("index.html", "_self");
  console.log("Opened Home: " + openH);
};

const openAbout = () => {
  let openA = window.open("about.html", "_self");
  console.log("Opened About: " + openA);
};

const openGallery = () => {
  let openG = window.open("gallery.html", "_self");
  console.log("Opened Gallery: " + openG);
};

const openProjects = () => {
  let openP = window.open("projects.html", "_self");
  console.log("Opened Projects: " + openP);
};

const openContact = () => {
  let openC = window.open("contact.html", "_self");
  console.log("Opened Contacts: " + openC);
};

const openLinked = () => {
  let openL = window.open(
    "https://www.linkedin.com/in/carl-justine-malabanan-2a868723a/",
    "_blank"
  );
};

const openTwitter = () => {
  let openT = window.open("https://twitter.com/@managerd26", "_blank");
};

const openGithub = () => {
  let openT = window.open("https://github.com/managerd", "_blank");
};

const openYoutube = () => {
  let openY = window.open("https://www.youtube.com/@managerd4385", "_blank");
};

const openJhelly = () => {
  let openJ = window.open("https://jhellydraws.netlify.app", "_blank");
};

const openImg = () => {
  let openI = window.open(
    "https://www.freepik.com/free-vector/e-business-cards-with-electronic-devices_757579.htm#query=apps%20design%20svg&position=0&from_view=keyword&track=ais",
    "_blank"
  );
};

const openImg2 = () => {
  let openImg2 = window.open(
    "https://www.freepik.com/free-vector/new-app-development-desktop_10276612.htm#query=web%20development&position=8&from_view=search&track=ais",
    "_blank"
  );
};

const openImg3 = () => {
  let openImg3 = window.open(
    "https://www.freepik.com/free-vector/animation-concept-illustration_14665182.htm#query=motion%20graphics&position=8&from_view=search&track=ais",
    "_blank"
  );
};
