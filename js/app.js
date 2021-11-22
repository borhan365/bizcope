// Animate items
new WOW().init();


// sticky navbar
var navbar = document.getElementById("MainMenu");
var sticky = navbar.offsetTop;
window.onscroll = () => {
  // const appendLogo = document.getElementById('appendLogo')
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("activeMenu")
    // appendLogo.classList.add("appendLogoActive")
  } else {
    navbar.classList.remove("activeMenu");
    // appendLogo.classList.remove("appendLogoActive")
  }

  // click to top
  const topBtn = document.getElementById("top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.classList.add("active")
  } else {
    topBtn.classList.remove("active")
  }

  topBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
}

// mobile sidebar
const mobileMenuBtn = document.getElementById("mobileMenuBtn"); 
mobileMenuBtn.addEventListener("click", () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
})

const cancelBtn = document.getElementById("cancelBtn"); 
cancelBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
})


// popup modal

// add class
const getPlayBtn = document.getElementById("tvcBtn")
getPlayBtn.addEventListener('click', () => {
  const modal = document.getElementById("modal")
  modal.classList.add("active")
})

// remove class
const getCancelBtn = document.getElementById("tvcCancelBtn")
getCancelBtn.addEventListener('click', () => {
  const modal = document.getElementById("modal")
  modal.classList.remove("active")
})

// tabs => SEO Pricing / Reporting / Accountability
function latestPopularTabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// sidebar menu icon
const sidebarMenuIcon = document.getElementById('sidebarMenuIcon')
sidebarMenuIcon.addEventListener('click', () => {
  const sidebarDropdownItem = document.getElementById('sidebarDropdownItem')
  sidebarDropdownItem.classList.toggle('active')
})