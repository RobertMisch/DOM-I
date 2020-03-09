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
    "h1": "DOM <br>Is <br>Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "maincontent": {
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

//***************** global/container*************
document.querySelector('.container').style.maxWidth = '800px';

//**************** nav bar *********************************
const navNodeList = document.querySelectorAll('a');
const navArray = Array.from(navNodeList);
// console.log(navArray);
// console.log(navNodeList);
const navContentArray = Object.values(siteContent.nav);
// console.log(navContentArray);
// console.log(siteContent["nav"]["nav-item-1"]);
for (let i=0; i<navNodeList.length; i++){
  navArray[i].textContent = navContentArray[i];
}
// console.log(navArray);

//nav step 3
// const makeNavGreen = document.querySelectorAll('a');
// const makeNavGreenArray = Array.from(makeNavGreen);
// makeNavGreenArray.forEach(item =>{
//   item.style.color= 'green'
// })
// // makeNavGreen.style.color= 'green';
// // document.querySelector('a').style.color = 'green';

// function makeblue(item){
//   item.style.color='blue'
// }

let newNavButton1 = document.createElement('a')
let newNavButton1text = document.createTextNode("Filler")
newNavButton1.appendChild(newNavButton1text)
document.querySelector('nav').appendChild(newNavButton1)

let newNavButton2 = document.createElement('a')
let newNavButton2text = document.createTextNode("MyAction")
newNavButton2.appendChild(newNavButton2text)
document.querySelector('nav').appendChild(newNavButton2)

const makeNavGreen = document.querySelectorAll('a');
const makeNavGreenArray = Array.from(makeNavGreen);
makeNavGreenArray.forEach(item =>{
  item.style.color= 'green'
  item.href='#'
  // let count=0;
  // item.addEventListener("click", function(){item.style.color = 'blue';})
  item.addEventListener("click", function(){item.style.color = 'red'})
})
// makeNavGreen.style.color= 'green';
// document.querySelector('a').style.color = 'green';

//***************** CTA ******************

//h1
document.querySelector('.cta-text h1').innerHTML = siteContent["cta"]["h1"];

// let newElem = document.createElement("BR");

// document.querySelector('.cta-text h1').innerHTML = siteContent["cta"]["h1"];
    
//button
document.querySelector('.cta-text button').textContent = siteContent["cta"]["button"];
//img
let ctaLogo = document.getElementById("cta-img");
ctaLogo.setAttribute('src', siteContent["cta"]["img-src"]);


/******************** Main Content ******************/
const topContentArray = Object.values(siteContent.maincontent);
// console.log(document.querySelectorAll('.main-content h4, .main-content p'))
// const topContentNode = document.querySelectorAll('.main-content h4, .main-content p')
const topContentNodeArray = Array.from(document.querySelectorAll('.main-content h4, .main-content p, .main-content img'))
// console.log(topContentNodeArray)

topContentNodeArray.forEach((item, i) => {
  if(i === 4){
    // const middle_img = document.querySelector('#middle-img');
    item.setAttribute('src', topContentArray[i]);
    item.style.width = '100%';
  }else{
    item.textContent= topContentArray[i];
  }
})

document.querySelector('.text-content').style.padding = '0 2%';
// console.log(topContentArray);
// console.log(siteContent["main-content"][1]); cant do this
//top content

// document.querySelector('.top-content').style.display = 'flex'; 
// document.querySelector('.top-content').style.justifyContent = 'space-around';

// document.querySelector('.top-content .text-content h4').textContent= topContentArray[0];
// document.querySelector('.top-content .text-content p').textContent= topContentArray[1];
// document.querySelector('.top-content .text-content:nth-of-type(2) h4').textContent= topContentArray[2];
// document.querySelector('.top-content .text-content:nth-of-type(2) p').textContent= topContentArray[3];

// //middle img
// const middle_img = document.querySelector('#middle-img');
// middle_img.setAttribute('src', siteContent["maincontent"]["middle-img-src"]);
// middle_img.style.width = '100%';

// //bottom content
// document.querySelector('.bottom-content .text-content h4').textContent= topContentArray[5];
// document.querySelector('.bottom-content .text-content p').textContent= topContentArray[6];
// document.querySelector('.bottom-content .text-content:nth-of-type(2) h4').textContent= topContentArray[7];
// document.querySelector('.bottom-content .text-content:nth-of-type(2) p').textContent= topContentArray[8];
// document.querySelector('.bottom-content .text-content:nth-of-type(3) h4').textContent= topContentArray[9];
// document.querySelector('.bottom-content .text-content:nth-of-type(3) p').textContent= topContentArray[10];


/* contact section */
document.querySelector('.contact').style.width= '25%';

document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];
document.querySelector('.contact p:nth-of-type(1)').textContent = siteContent['contact']['address'];
document.querySelector('.contact p:nth-of-type(2)').textContent = siteContent['contact']['phone'];
document.querySelector('.contact p:nth-of-type(3)').textContent = siteContent['contact']['email'];

//footer
document.querySelector('footer').textContent = siteContent['footer']['copyright'];