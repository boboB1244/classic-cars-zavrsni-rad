let menuBtn = document.getElementById('menuBtn'),
aboutUs= document.getElementById('aboutUs'),
gallery= document.getElementById('gallery'),
contact= document.getElementById('contact'),
homePage= document.getElementById('homePage'),
menu= document.getElementById('menu'),
homeNav= document.getElementById('homeNav'),
aboutNav= document.getElementById('aboutNav'),
galleryNav= document.getElementById('galleryNav'),
contactNav= document.getElementById('contactNav'),
year= document.getElementById('year');

displayHomePage()

menuBtn.addEventListener('click', function(){
  menu.classList.toggle("display-none")
})

homeNav.addEventListener('click', displayHomePage)
aboutNav.addEventListener('click', displayAboutUS)
galleryNav.addEventListener('click', displayGallery)
contactNav.addEventListener('click', displayContact)

function displayHomePage(){
  homePage.classList.remove("display-none");
  aboutUs.classList.add("display-none");
  gallery.classList.add("display-none");
  contact.classList.add("display-none");
}

function displayAboutUS(){
  aboutUs.classList.remove("display-none")
  homePage.classList.add("display-none")
  gallery.classList.add("display-none")
  contact.classList.add("display-none")
}

function displayGallery(){
  aboutUs.classList.add("display-none")
  homePage.classList.add("display-none")
  gallery.classList.remove("display-none")
  contact.classList.add("display-none")
}

function displayContact(){
  aboutUs.classList.add("display-none")
  homePage.classList.add("display-none")
  gallery.classList.add("display-none")
  contact.classList.remove("display-none")
}
year.innerText = new Date().getFullYear()