/* ****** Menu ****** */
((d)=>{
    const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

    $btnMenu.addEventListener("click" , e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });
    d.addEventListener("click", e=> {
        if(!e.target.matches(".menu a")) return false;


        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");
    });
})(document);


/* ********** ContactForm ********** */
((d) => {
    const $form = d.querySelector(".contact-form"),
      $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/leonelbenjaminmercau@gmail.com",{
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          location.hash = "#gracias";
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.querySelector(
            "h3"
          ).innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
          $loader.classList.add("none");
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        });
    });
  })(document);


/* ********** Transition ********** */
ScrollReveal().reveal('.logo, .menu , .img-profile', {
  duration: 2000,
  delay:500,
  opacity:0,
});
ScrollReveal().reveal('.hero-image-title , .btn , .hero-image-content ', {
  duration: 2000,
  delay:1500,
  opacity:0,
});
ScrollReveal().reveal('.services, .portfolio, .contact ', {
  duration: 3000,
  delay : 1300,
  distance: '300px',
}); 
ScrollReveal().reveal('.text-lg-right', {
  duration: 2000,
  delay: 1000,
  origin: 'right' ,
  distance: '-300px',
}); 
ScrollReveal().reveal('.text-lg-left', {
  duration: 2000,
  delay: 3000,
  origin: 'right' ,
  distance: '300px',
});


/* ********** Transition ********** */

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});