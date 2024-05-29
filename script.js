var typed = new Typed("#dynamic-txt",{
    strings: ["Game", "Web"],
    typeSpeed: 250,
    backSpeed: 200,
    loop: true,
    backDelay: 1000,
  })

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.links-buttons');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 400;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Find the corresponding navigation link based on the section's ID
      let correspondingNavLink = document.querySelector(`#navbar a[href="#${id}"]`);
      if (correspondingNavLink) {
        correspondingNavLink.classList.add('active');
      }
    }
  });
};


function showDiv(sectionId, divId, buttonId) {
  var section = document.getElementById(sectionId);

  // Hide all divs within the specified section
  var divs = section.querySelectorAll('.bottom-skill-div');
  divs.forEach(div => {
    div.classList.add('hidden');
  });

  // Show the div with the specified ID
  var targetDiv = section.querySelector(`#${divId}`);
  if (targetDiv) {
    targetDiv.classList.remove('hidden');
    targetDiv.scrollTop = 0;
  }

  var buttons = section.querySelectorAll('.buttons-skill');
  buttons.forEach(button => {
    button.classList.remove('activeButton');
  });

  var targetButton = section.querySelector(`#${buttonId}`);
  if (targetButton) {
    targetButton.classList.add('activeButton');
  }
}

(function() {
  "use strict";

  var carousel = document.getElementsByClassName('carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
      nextBtn = carousel.getElementsByClassName('carousel__next')[0];
  
  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 4000;
  
  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
  }
  
  function resize() {
      width = Math.max(window.innerWidth * .25, 275),
      height = window.innerHeight * .5,
      totalWidth = width * items.length;
    
      slider.style.width = totalWidth + "px";
    
      for(var i = 0; i < items.length; i++) {
          let item = items[i];
          item.style.width = (width - (margin * 2)) + "px";
          item.style.height = height + "px";
      }
  }
  
  function move(index) {
    
      if(index < 1) index = items.length;
      if(index > items.length) index = 1;
      currIndex = index;
    
      for(var i = 0; i < items.length; i++) {
          let item = items[i],
              box = item.getElementsByClassName('item__3d-frame')[0];
          if(i == (index - 1)) {
              item.classList.add('carousel__slider__item--active');
              box.style.transform = "perspective(1200px)"; 
          } else {
            item.classList.remove('carousel__slider__item--active');
              box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          }
      }
    
      slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
  }
  
  
  function prev() {
    move(--currIndex);
  }
  
  function next() {
    move(++currIndex);    
  }
  
  
  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });    
  }




  
  init();
  
})();