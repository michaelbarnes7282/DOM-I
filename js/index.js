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


// nav bar
let links = document.getElementsByTagName('a');
Array.from(links).forEach ( (link, i) => {
  link.textContent = siteContent.nav[`nav-item-${i+1}`];
})

// cta
document.querySelector(".cta-text h1").innerHTML = siteContent.cta.h1.split(" ").join("<br> ");


let button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);


// main-content
let featureHeader = document.querySelector('.main-content .text-content h4');
featureHeader.textContent = siteContent['main-content']['features-h4'];

let featureBody = document.querySelector('.main-content .text-content p');
featureBody.textContent = siteContent['main-content']['features-content'];

let aboutHeader = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutHeader.textContent = siteContent['main-content']['about-h4'];

let aboutBody = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutBody.textContent = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let serviceHead = document.querySelector('.bottom-content .text-content h4');
serviceHead.textContent = siteContent['main-content']['services-h4'];

let serviceBody = document.querySelector('.bottom-content .text-content p');
serviceBody.textContent = siteContent['main-content']['services-content'];

let productHead = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHead.textContent = siteContent['main-content']['product-h4'];

let productBody = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productBody.textContent = siteContent['main-content']['product-content'];

let visionHead = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionHead.textContent = siteContent['main-content']['vision-h4'];

let visionBody = Body = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionBody.textContent = siteContent['main-content']['vision-content'];


// contact
let contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

let address = document.querySelector('.contact p');
address.textContent = siteContent.contact['address'];

let phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent.contact['phone'];

let email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent.contact['email'];

//footer
let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer['copyright']; 

nav = document.querySelector('header nav');
let newA = document.createElement('a');
let newA2 = document.createElement('a');
newA.textContent = "Hello World!";
newA2.textContent = "Hello World!";
nav.append(newA);
nav.prepend(newA2);