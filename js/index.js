const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Navigation
const navLinks = document.querySelectorAll('a');

navLinks.forEach((item, index) => item.innerHTML = Object.values(siteContent.nav)[index]);

// Title
let title = document.querySelector('h1');
title.innerHTML = siteContent['cta']['h1'];

// Main image
let ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src']

// CTA button
let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = siteContent['cta']['button'];

// Main content titles
let contentTitles = document.querySelectorAll('h4');
contentTitles[0].innerHTML = siteContent['main-content']['features-h4'];
contentTitles[1].innerHTML = siteContent['main-content']['about-h4'];
contentTitles[2].innerHTML = siteContent['main-content']['services-h4'];
contentTitles[3].innerHTML = siteContent['main-content']['product-h4'];
contentTitles[4].innerHTML = siteContent['main-content']['vision-h4'];

// Main content paragraphs
let contentParagraphs = document.querySelectorAll('p');
contentParagraphs[0].innerHTML = siteContent['main-content']['features-content'];
contentParagraphs[1].innerHTML = siteContent['main-content']['about-content'];
contentParagraphs[2].innerHTML = siteContent['main-content']['services-content'];
contentParagraphs[3].innerHTML = siteContent['main-content']['product-content'];
contentParagraphs[4].innerHTML = siteContent['main-content']['vision-content'];

// Main content image
let mainImage = document.querySelector('#middle-img');
mainImage.src = siteContent['main-content']['middle-img-src'];

// Footer
contentTitles[5].innerHTML = siteContent['contact']['contact-h4'];
contentParagraphs[5].innerHTML = siteContent['contact']['address'];
contentParagraphs[6].innerHTML = siteContent['contact']['phone'];
contentParagraphs[7].innerHTML = siteContent['contact']['email'];

// Copyright
contentParagraphs[8].innerHTML = siteContent['footer']['copyright'];

// Append and prepend
const addNav = document.querySelector('nav');

const appendLink = document.createElement('a');
appendLink.innerHTML = 'Append';
appendLink.href = '#';
addNav.append(appendLink);

const prependLink = document.createElement('a');
prependLink.innerHTML = 'Prepend';
prependLink.href = '#';
addNav.prepend(prependLink);

// Nav links to green
const links = document.querySelectorAll('a');
links.forEach(item => item.style.color = 'green');

// Add button with event listener
const footer = document.querySelector('footer');
const eventButton = document.createElement('button');
eventButton.innerHTML = 'Update';
footer.append(eventButton);
eventButton.style.fontSize = '1.2rem';
eventButton.style.width = '15%';

eventButton.addEventListener('click', event => {
  contentParagraphs[8].innerHTML = 'This button works!';
});