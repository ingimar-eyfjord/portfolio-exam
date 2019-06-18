// JavaScript Document
document.getElementById("AaboutMeButton").style.display = "none"; document.getElementById("portfolioButton").style.display = "none";document.getElementById("x").style.display = "none";document.getElementById("home").style.display = "none";document.getElementById("about-me").style.display = "none";document.getElementById("portfolio").style.display = "none";document.getElementById("Theme01BasicWeb").style.display = "none";document.getElementById("Theme02BasicAnimation").style.display = "none";document.getElementById("Theme03BasicContent").style.display = "none";document.getElementById("Theme04BasicUX").style.display = "none";
document.getElementById("leftcircle-text").style.display = "none";document.getElementById("back-button-rightside").style.display = "none";document.getElementById("button-interface-sequence-1").style.display = "none";document.getElementById("button-interface-sequence-2").style.display = "none";document.getElementById("left-circle-upright").style.display = "none";document.getElementById("secondStageWrapper").style.display = "none";document.getElementById("backbutton-down").style.display = "none";document.getElementById("secondStageWrapper").style.display = "none";document.getElementById("backbutton-down2").style.display = "none";

function aboutMeOpen(){var p = document.getElementById("button-interface-sequence-2");if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";}
 var a = document.getElementById("about-me");if (a.style.display === "none") {
    a.style.display = "block";
  } else {
    a.style.display = "none";}var b = document.getElementById("backbutton-down");if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";}var y = document.getElementById("back-button-rightside");if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";}var s = document.getElementById("button-interface-sequence-1");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}
document.getElementById("left-circle-upright").style.display = "none";document.getElementById("first-stage").style.display = "none"; window.scrollBy(0, 1200);}

function portfolioOpen(){var p = document.getElementById("button-interface-sequence-2");if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";}var c = document.getElementById("button-interface-sequence-1");if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";}var b = document.getElementById("portfolio");if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";}var y = document.getElementById("back-button-rightside");if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";}document.getElementById("first-stage").style.display = "none";document.getElementById("left-circle-upright").style.display = "none";}

function back(){var p = document.getElementById("button-interface-sequence-2");if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";}var b = document.getElementById("backbutton-down");if (b.style.display === "none") {
    b.style.display = "block";
  } else {
    b.style.display = "none";}var bi = document.getElementById("left-circle-upright");if (bi.style.display === "none") {
    bi.style.display = "block";
  } else {
   bi.style.display = "none";}var c = document.getElementById("button-interface-sequence-1");if (c.style.display === "none") {
    c.style.display = "block";
  } else {
    c.style.display = "none";}var s = document.getElementById("portfolio");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}document.getElementById("about-me").style.display = "none";document.getElementById("portfolio").style.display = "none";document.getElementById("Theme01BasicWeb").style.display = "none";document.getElementById("Theme02BasicAnimation").style.display = "none";document.getElementById("Theme03BasicContent").style.display = "none";document.getElementById("Theme04BasicUX").style.display = "none";
document.getElementById("leftcircle-text").style.display = "none";document.getElementById("back-button-rightside").style.display = "none";window.scrollBy(0, -1200000);}

function openThemeone(){var s = document.getElementById("Theme01BasicWeb");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}var t = document.getElementById("backbutton-down");if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";}document.getElementById("portfolio").style.display = "none";window.scrollBy(0, 1200);}

function openThemetwo(){var s = document.getElementById("Theme02BasicAnimation");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}var t = document.getElementById("backbutton-down");if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";}document.getElementById("portfolio").style.display = "none";window.scrollBy(0, 1200);}

function openThemethree(){var s = document.getElementById("Theme03BasicContent");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}var t = document.getElementById("backbutton-down");if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";}document.getElementById("portfolio").style.display = "none";window.scrollBy(0, 1200);}

function openThemefour(){var s = document.getElementById("Theme04BasicUX");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}var t = document.getElementById("backbutton-down");if (t.style.display === "none") {
    t.style.display = "block";
  } else {
    t.style.display = "none";}document.getElementById("portfolio").style.display = "none";window.scrollBy(0, 1200);}

function firstStageAnimation() {var s = document.getElementById("button-interface-sequence-1");if (s.style.display === "none") {
    s.style.display = "block";
  } else {
    s.style.display = "none";}document.getElementById("first-stage-wrapper").setAttribute("class", "first-stage-animation");document.getElementById("secondStageWrapper").setAttribute("class", "show");document.getElementById("leftcircle-text").setAttribute("class", "show");document.getElementById("line").setAttribute("class", "first-stage-animation2");document.getElementById("line-2").setAttribute("class", "show");document.getElementById("welcome-text").style.display = "none";}

function addbackbuttonanimation() {document.getElementById("secondStageWrapper").setAttribute("class","backbuttonanimation");}// JavaScript Document