
/*======================================================
WHO DO YOU CALL SAVIOR
Bradley Hobbs

main.js
======================================================*/


/*======================================================
HEADER
======================================================*/

const header=document.querySelector(".site-header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


/*======================================================
MOBILE MENU
======================================================*/

const menuButton=document.querySelector(".menu-toggle");

const mobileMenu=document.querySelector(".mobile-menu");

const overlay=document.querySelector(".menu-overlay");

if(menuButton){

menuButton.addEventListener("click",()=>{

menuButton.classList.toggle("active");

mobileMenu.classList.toggle("active");

overlay.classList.toggle("active");

document.body.classList.toggle("menu-open");

});

}


overlay?.addEventListener("click",closeMenu);

document.querySelectorAll(".mobile-menu a").forEach(link=>{

link.addEventListener("click",closeMenu);

});


function closeMenu(){

menuButton?.classList.remove("active");

mobileMenu?.classList.remove("active");

overlay?.classList.remove("active");

document.body.classList.remove("menu-open");

}


/*======================================================
ACTIVE NAVIGATION
======================================================*/

const current=location.pathname;

document.querySelectorAll(".nav-links a").forEach(link=>{

if(link.getAttribute("href")){

const href=link.getAttribute("href");

if(current.endsWith(href) || current===href){

link.classList.add("active");

}

}

});


/*======================================================
SMOOTH SCROLL
======================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});


/*======================================================
FADE IN
======================================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{

threshold:.15

});


document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-up");

observer.observe(section);

});


/*======================================================
BOOK COVER
======================================================*/

const covers=document.querySelectorAll(".preview-image img");

covers.forEach(book=>{

book.addEventListener("mouseenter",()=>{

book.style.transform="translateY(-10px) scale(1.02)";

});

book.addEventListener("mouseleave",()=>{

book.style.transform="translateY(0) scale(1)";

});

});


/*======================================================
SCROLL TO TOP
======================================================*/

window.addEventListener("beforeunload",()=>{

window.scrollTo(0,0);

});
