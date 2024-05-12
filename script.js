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