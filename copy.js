// https://bytewebster.com/
// https://bytewebster.com/
// https://bytewebster.com/

var swiper = new Swiper(".swiper", {
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
    spaceBetween: 60,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  //toggle icon navbar
  
  //scroll sections
  let sections = document.querySelectorAll("section");
  let navlinks = document.querySelectorAll("header nav a");
  
  window.onscroll = () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");
  
      if (top >= offset && top < offset + height) {
        // active navbar links
        navlinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*= " + id + "]")
            .classList.add("active");
        });
      }
    });
  
    // sticky header
    let header = document.querySelector("header");
  
    header.classList.toggle("sticky", window.scrollY > 100);
  };
  