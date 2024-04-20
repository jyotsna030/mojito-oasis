let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  // Assuming you have menu and navbar defined somewhere else in your code
  // let menu = document.getElementById('your-menu-id');
  // let navbar = document.getElementById('your-navbar-id');

  // Remove classes from menu and navbar
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  navLinks.forEach(link => {
    link.classList.remove('active');
  });

  let top = window.scrollY;

  section.forEach(sec => {
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // Add 'active' class to the corresponding navigation link
      let activeLink = document.querySelector(`header .navbar a[href*=${id}]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};


document.querySelector('#search-icon').onclick =() => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick =() => {
    document.querySelector('#search-form').classList.remove('active');

}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
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

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // when window width is <= 499px
      0: {
          slidesPerView: 1,
      },
      // when window width is <= 999px
      640: {
          slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
    },
      1024: {
        slidesPerView: 3,
  },
  },
  });

  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
function FadeOut(){
  setInterval(loader,3000);
}

window.onload = fadeout;