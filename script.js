// ......................................................Left side navbar open and close functions......................................
let menuclosebtn1 = document.getElementById("menu-close-i1");
let menuclosebtn2 = document.getElementById("menu-close-i2");
let leftmenu = document.getElementById("left-side-menus");
let isTrue = true;
menuclosebtn1.addEventListener("click", () => {
  if (isTrue) {
    leftmenu.style.display = "block";
    isTrue = false;
  } else {
    leftmenu.style.display = "none";
    isTrue = true;
  }
});
menuclosebtn2.addEventListener("click", () => {
  leftmenu.style.display = "none";
});

// ....................................................right side profile open and close functions................................
let profile_btn_img = document.getElementById("right-profile-btn");
let right_side_profile_menu = document.getElementById("right-side-navbar");
let btn2 = true;

profile_btn_img.addEventListener("click", () => {
  if (btn2) {
    right_side_profile_menu.style.display = "block";
    btn2 = false;
  } else {
    right_side_profile_menu.style.display = "none";
    btn2 = true;
  }
});

// ................................................site color and background changing functions.........................
let light = true;
let btnlight = document.getElementById("btnlightmode");
let topmenu = document.querySelector(".top-header-menu");
let leftsidemenu = document.getElementById("left-side-menus");
let leftmenu_a = document.querySelectorAll(".left-a");
let topheader = document.getElementById("topheader");
let topheader1 = document.getElementById("topheader1");
let scolor = document.getElementById("searchcolor");
let leftsec_color = document.getElementById("leftsec-color");
let videos_bg = document.querySelectorAll(".v-bg");
let hrs_bg = document.querySelectorAll(".hr-bg");
let rightsidemenu = document.getElementById("right-side-navbar");
let footers = document.getElementById("footer");

btnlight.addEventListener("click", () => {
  if (light) {
    document.body.style.background = "black";
    footers.style.background = "black";
    btnlight.style.background = "white";
    btnlight.style.color = "black";
    btnlight.innerHTML = "White";
    topmenu.style.background = "black";
    leftsidemenu.style.background = "black";
    leftsidemenu.style.color = "white";
    topheader.style.background = "black";
    topheader1.style.background = "black";
    rightsidemenu.style.background = "black";
    rightsidemenu.style.color = "white";
    scolor.style.background = "black";
    leftsec_color.style.background = "black";
    hrs_bg.forEach((element) => {
      element.style.background = "white";
    });
    videos_bg.forEach((element) => {
      element.style.background = "black";
    });
    leftmenu_a.forEach((element) => {
      element.style.color = "white";
    });
    light = false;
  } else {
    document.body.style.background = "white";
    btnlight.style.background = "black";
    leftsec_color.style.background = "white";
    scolor.style.background = "white";
    btnlight.style.color = "white";
    btnlight.innerHTML = "Black";
    rightsidemenu.style.background = "white";
    rightsidemenu.style.color = "black";
    topmenu.style.background = "white";
    leftsidemenu.style.background = "white";
    leftsidemenu.style.color = "black";
    topheader.style.background = "white";
    topheader1.style.background = "white";
    footers.style.background = "whitesmoke";
    hrs_bg.forEach((element) => {
      element.style.background = "black";
    });
    videos_bg.forEach((element) => {
      element.style.background = "white";
    });
    leftmenu_a.forEach((element) => {
      element.style.color = "black";
    });
    light = true;
  }
});
