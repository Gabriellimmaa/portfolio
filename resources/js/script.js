var scroll = document.querySelector('.curve');
window.addEventListener('scroll', function () {
  var value = 1 + window.scrollY / -500;
  scroll.style.transform = `scaleY(${value})`;
});

function fn(el, isEnter) {
  el.className = "";
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.className = isEnter ? "in" : "out";
    });
  });
}

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
});

var swiper = new Swiper(".mySwiperCertificacoes", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  speed: 1000,
  autoplay: {
    enabled: true,
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


function detailSkill(element) {
  let editElement = document.getElementById("detailSkill");
  let itens = ["html", "css", "js", "ts", "python", "php", "postgresql", "mongodb", "mysql"]
  let html = "<b>HTML</b> é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
  let css = "<b>CSS</b> é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
  let js = "<b>JavaScript</b> é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
  let ts = "<b>TypeScript</b> é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.";
  let python = "<b>Python</b> é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.";
  let php = "<b>PHP</b> é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.";
  let postgresql = "<b>PostgreSQL</b> é um sistema gerenciador de banco de dados objeto relacional, desenvolvido como projeto de código aberto.";
  let mongodb = "<b>MongoDB</b> é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++. Classificado como um programa de banco de dados NoSQL, o MongoDB usa documentos semelhantes a JSON com esquemas.";
  let mysql = "O <b>MySQL</b> é um sistema de gerenciamento de banco de dados, que utiliza a linguagem SQL como interface. É atualmente um dos sistemas de gerenciamento de bancos de dados mais populares da Oracle Corporation.";
  itens.forEach(x => {
    if (element.id == x) {
      editElement.innerHTML = eval(x);
    }
  });
};

function detailSkillReset() {
  let editElement = document.getElementById("detailSkill");
  editElement.innerHTML = "*passe o cursor do mouse no card para ler*";
}

const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function (element) {
    if ((windowTop) > element.offsetTop && !element.classList.contains(animationClass)) {
      element.classList.add(animationClass);
      if(element.id == "certificacoes") {
        startCounter();
      }
    }
  })
}

animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 100));
}

// Contador horas curriculo
function startCounter() {
  let elemento = document.querySelectorAll('[data-number]');

  elemento.forEach(function (element) {
    var contador = 0;
    setInterval(() => {
      if (contador <= element.dataset.number) {
        element.innerHTML = contador++;
      }
    }, element.dataset.speed);
  })

}

// Mobile
function menuMobile() {
  let menu = document.getElementById("mobile-menu");
  let list = document.getElementById("mobile-list");
  if(menu.classList.contains('active')) {
    list.classList.remove('active');
    menu.classList.remove('active');
    document.body.style.overflow = "auto";
  }else {
    list.classList.add('active');
    menu.classList.add('active');
    document.body.style.overflow = "hidden";
  }
}

function hiddenMobile() {
  let menu = document.getElementById("mobile-menu");
  menu.classList.remove('active');

  let list = document.getElementById("mobile-list");
  list.classList.remove('active');

  document.body.style.overflow = "auto";
}


// Fundo estrelado com canvas
var canvas = document.getElementById("starfield"),
context = canvas.getContext("2d"),
stars = 200;

for (var i = 0; i < stars; i++) {
  x = Math.random() * canvas.offsetWidth;
  y = Math.random() * canvas.offsetHeight;
 context.fillStyle = "white";
  context.fillRect(x,y,1,1);
}

// Efeito de escrita home
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Desenvolvedor Full-Stack", " HTML | CSS | JS | PHP | Python | MongoDB | SQL", "Desenvolvedor"];
const typingDelay = 150;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});