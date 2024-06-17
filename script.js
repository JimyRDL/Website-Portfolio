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
    let offset = sec.offsetTop - 540;
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
  var targetDiv = section.querySelector(`.${divId}`);
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

function showAbout(divId) {
  var div = document.querySelector(`#${divId}`)
  var divs = document.querySelectorAll('.about-text-div');
  divs.forEach(div => {
    div.classList.remove('shown');
  });
  div.classList.add('shown');
  
}

function hideAbout() { 
  var divs = document.querySelectorAll('.about-text-div');

  divs.forEach(div => {
    div.classList.remove('shown');
  });
}