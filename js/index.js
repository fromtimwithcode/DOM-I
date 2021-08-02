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
let services = document.querySelector('nav a');
services.innerHTML = 'Services';

let product = document.querySelector('nav a:nth-of-type(2)');
product.innerHTML = 'Product';

let vision = document.querySelector('nav a:nth-of-type(3)');
vision.innerHTML = 'Vision';

let features = document.querySelector('nav a:nth-of-type(4)');
features.innerHTML = 'Features';

let about = document.querySelector('nav a:nth-of-type(5)');
about.innerHTML = 'About';

let contact = document.querySelector('nav a:nth-of-type(6)');
contact.innerHTML = 'Contact';

// Title
let title = document.querySelector('h1');
title.innerHTML = 'DOM<br>IS<br>AWESOME';

// Main image
let ctaImage = document.querySelector('#cta-img');
ctaImage.src = 'img/header-img.png';

// CTA button
let ctaButton = document.querySelector('.cta button');
ctaButton.innerHTML = 'Get Started';

// Main content titles
let contentTitles = document.querySelectorAll('h4');
contentTitles[0].innerHTML = 'Features';
contentTitles[1].innerHTML = 'About';
contentTitles[2].innerHTML = 'Services';
contentTitles[3].innerHTML = 'Product';
contentTitles[4].innerHTML = 'Vision';

// Main content paragraphs
let contentParagraphs = document.querySelectorAll('p');
contentParagraphs[0].innerHTML = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentParagraphs[1].innerHTML = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentParagraphs[2].innerHTML = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentParagraphs[3].innerHTML = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
contentParagraphs[4].innerHTML = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// Main content image
let mainImage = document.querySelector('#middle-img');
mainImage.src = 'img/mid-page-accent.jpg';

// Footer
contentTitles[5].innerHTML = 'Contact';
contentParagraphs[5].innerHTML = '123 Way 456 Street<br>Somewhere, USA';
contentParagraphs[6].innerHTML = '1 (888) 888-8888';
contentParagraphs[7].innerHTML = 'sales@greatidea.io';

// Copyright
contentParagraphs[8].innerHTML = 'Copyright Great Idea! 2018';