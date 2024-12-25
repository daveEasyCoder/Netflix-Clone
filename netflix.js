/* Hero section Data*/

 heroTrailers = [{
    id: 1,
    title:'Money Heist',
    trailer:'x-mens.mp4',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus sed ad vitae aliquid labore dolorem distinctio eaque iure sit mollitia corrupti earum, totam nostrum nihil magni esse provident. totam nostrum nihil magni esse provident',
    background:'money-Heist-thumb.jpg',
    rating:{
        star:5,
        time:'2h 21min'
    },
    starring:'Robert Downey Jr,Chris Evants,Mark Ruffalo',
    generes:'Action',
    tag:'Action,Adventure,Horror'
 },{
    id: 2,
    title:'Spider Man',
    trailer:'x-mens.mp4',
    description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus sed ad vitae aliquid labore dolorem distinctio eaque iure sit mollitia corrupti earum, totam nostrum nihil magni esse provident. totam nostrum nihil magni esse provident',
    background:'f5.jpg',
    rating:{
        star:4,
        time:'3h 11min'
    },
    starring:'Robert Downey Jr,Chris Evants,Mark Ruffalo',
    generes:'Action',
    tag:'Action,Adventure'
 },{
   id: 3,
   title:'X-Men',
   trailer:'x-mens.mp4',
   description:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus sed ad vitae aliquid labore dolorem distinctio eaque iure sit mollitia corrupti earum, totam nostrum nihil magni esse provident. totam nostrum nihil magni esse provident',
   background:'x-mens.jpg',
   rating:{
       star:4,
       time:'3h 11min'
   },
   starring:'Robert Downey Jr,Chris Evants,Mark Ruffalo',
   generes:'Action',
   tag:'Action,Adventure'
}]


const Popular = [{
   id:'p1',
   video:'moneyHeist.mp4',
   image:'money-heist.jpg',
   title:'Money Heist',
   time:'12+ 2hr 24min'
},{
   id:'p2',
   video:'squid-Game.mp4',
   image:'squid-game.png',
   title:'Squid Game',
   time:'12+ 2hr 24min'
},{
   id:'p3',
   video:'squid-Game.mp4',
   image:'spider-man.webp',
   title:'Avengers',
   time:'12+ 2hr 24min'
},{
   id:'p4',
   video:'fighter.mp4',
   image:'fighter.jpg',
   title:'Fighter',
   time:'12+ 2hr 24min'
},{
   id:'p5',
   video:'squid-Game.mp4',
   image:'image43.jpeg',
   title:'Avengers man',
   time:'12+ 2hr 24min'
},{
   id:'p6',
   video:'squid-Game.mp4',
   image:'day-shift.jpg',
   title:'Day Shift',
   time:'12+ 2hr 24min'
},{
   id:'p7',
   video:'squid-Game.mp4',
   image:'venom.jfif',
   title:'Venom',
   time:'12+ 2hr 24min'
},{
   id:'p8',
   video:'squid-Game.mp4',
   image:'captaine-america.jfif',
   title:'Avengers',
   time:'12+ 2hr 24min'
}]

const UpcomingVideo = [{
   id:'up1',
   title:'Avengers',
   time:'12hr+ 2hr 24min',
   image:'h6.jpg'
},{
   id:'up2',
   title:'Extraction 2',
   time:'12hr+ 2hr 24min',
   image:'Extraction.webp'
},{
   id:'up3',
   title:'Miller-Girls',
   time:'11hr+ 1hr 14min',
   image:'Miller-girls.jpg'
},{
   id:'up4',
   title:'Kate',
   time:'14hr+ 2hr 44min',
   image:'Kate.webp'
},{
   id:'up5',
   title:'Rebel Moon',
   time:'10hr+ 1hr 20min',
   image:'n6.jpeg'
},{
   id:'up6',
   title:'The Union(2024)',
   time:'12hr+ 2hr 9min',
   image:'the-union.jpg'
}]


/* Header js */

const leftSearchIcon = document.querySelector('.left-image1');
const inputContainer = document.querySelector('.input-container');

leftSearchIcon.addEventListener('click',()=>{
      inputContainer.classList.toggle("input-container-visibility");
})


const notification = document.querySelector('.js-notification');
const leftImage = document.querySelector('.left-image3');

leftImage.addEventListener('click',()=>{
   notification.classList.toggle('notification-Visibility')
})


/* Hero section Generating */

const heroContainer = document.querySelector('.hero-container');
let heroHtml = '';
heroTrailers.forEach((hero)=>{
    heroHtml += `
            <div class="hero js-hero" style=" background-image:linear-gradient(to right,rgba(0,0,0,0.9),rgba(0,0,0,0.0)), url('Netflix Image/hero/${hero.background}');">
            <div class="title">
            <div class="logo-2-cont js-secondry-logo">
                <img class="logo-2" src="Netflix Icon/logo.png">
            </div>
                <div class="hero-movie-container">
                    <h1 class="js-movie-name">${hero.title}</h1>
                    <div class="rating-container">
                        <img src="Netflix Icon/rating.png">
                        <span>7.3(mdby)</span>
                        <button>16+</button>
                        <span>${hero.rating.time}</span>
                    </div>
                    <p class="story">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis necessitatibus sed ad vitae aliquid labore dolorem distinctio eaque iure sit mollitia corrupti earum, totam nostrum nihil magni esse provident.  totam nostrum nihil magni esse provident.</p>
                    <p class="writer"><span>Starring:</span>${hero.starring}</p>
                    <p class="generes"><span>Generes:</span>${hero.generes}</p>
                    <p class="tag"><span>Tag:</span>${hero.tag}</p>
                </div>
                <div class="red-button-container">
                        <button class="play-now-btn" onclick="playNow(${hero.id})">
                        <img src="Netflix Icon/play.png">
                        <span>PLAY NOW</span>
                        </button>
                        <button class="more-detail-btn">
                        More details
                        </button>
                </div>
            </div>
            <div class="watch-trailer">
                 <button class="play-trailer" onclick="playNow(${hero.id})"><i class="fa-solid fa-play"></i></button>
                <div>Watch Trailer</div>
            </div>
        </div>
     `;
})

heroContainer.innerHTML = heroHtml;

const videocontainer = document.querySelector('.video-container');
const video = document.querySelector('.video');
const close = document.querySelector('.hero-video-close');



const playNow = id => {

  const tralierObj = heroTrailers.find(trailer => trailer.id === id);
  videocontainer.classList.remove('active');
  video.src = `Netflix-trailers/${tralierObj.trailer}`;
  video.play();
  
}

close.addEventListener('click',()=>{
   videocontainer.classList.add('active');
   video.pause();
   video.currentTime = 0;
})


/* Animate hero section */

  const hero = document.querySelector('.js-hero-container');
  const secondryLogo = document.querySelectorAll('.js-secondry-logo');
  const heroNextBtn = document.querySelector('.js-hero-next');
  const heroprevBtn = document.querySelector('.js-hero-prev');
  const movieTitle = document.querySelectorAll('.js-movie-name');
  
  let i = 0;
  heroNextBtn.addEventListener('click',(event)=>{ 
       
       hero.style.scrollBehavior = "smooth"; 
       hero.scrollLeft +=  hero.offsetWidth;
       /*  next(); */
        
  })
  heroprevBtn.addEventListener('click',()=>{
   hero.style.scrollBehavior = "smooth"; 
   hero.scrollLeft -=  hero.offsetWidth;
     /* previous(); */
  })

   const popularContainer = document.querySelector('.js-top');
   let PopularHTML = '';
   Popular.forEach((props)=>{
      PopularHTML += `
         <div class="item js-popular-item">
            <img class="top-pic-thumb" src="Netflix Image/popular/${props.image}">
             <div class="item-title">
               <div class="left-title">
                     <p class="left-title-top">${props.title}</p>
                     <p class="left-title-bottom">${props.time}</p>
                     <button><span><img src="Netflix Icon/play.png"><span>Play Now</span></span></button>
               </div>
                  <div class="right-title-image">
                     <div><img src="Netflix Icon/heart.png"></div>
                     <div><img src="Netflix Icon/heart.png"></div>
                     <div class ="plus-icon">+</div>
                  </div>
               </div>
          </div>
      `;
   })
   popularContainer.innerHTML = PopularHTML;
   



const roWrapper = document.querySelectorAll('.row-wrapper');
const nextBtn = document.querySelectorAll('.nextBtn');
const backBtn = document.querySelectorAll('.backBtn');

roWrapper.forEach((wrapper)=>{
   wrapper.addEventListener('wheel',(event)=>{
       wrapper.style.scrollBehavior = "auto";
       event.preventDefault();
       wrapper.scrollLeft += event.deltaY;
})
})

nextBtn.forEach((nextBtn,i)=>{
nextBtn.addEventListener('click',()=>{
         roWrapper[i].style.scrollBehavior = "smooth";
         roWrapper[i].scrollLeft += 250;
   })
})

backBtn.forEach((backBtn,i)=>{
backBtn.addEventListener('click',()=>{
         roWrapper[i].style.scrollBehavior = "smooth";
         roWrapper[i].scrollLeft -= 250;
   })
})




/* Upcoming section Generating by Js */

const columnItemContainer = document.querySelector('.js-column-item-container')


let UpcomingHTML = '';
UpcomingVideo.forEach((video)=>{
   UpcomingHTML += `
       <div class="item upcoming-item" data-item-id = ${video.id}>
           <img class="top-pic-thumb" src="Netflix Image/upcoming/${video.image}">
               <div class="item-title">
                   <div class="left-title">
                       <p class="left-title-top">${video.title}</p>
                       <p class="left-title-bottom">${video.time}</p>
                       <button class="colums-btn"><span><img src="Netflix Icon/play.png"><span>Play Now</span></span></button>
                   </div>
               </div>
         </div>
   `;

})
columnItemContainer.innerHTML = UpcomingHTML;

const item = document.querySelectorAll('.upcoming-item');

const picture = document.querySelector('.upcoming-left-picture');

item.forEach((item)=>{
   item.addEventListener('mouseenter',()=>{
       let dataId = item.dataset.itemId;
       let matchingImage;
       UpcomingVideo.forEach((video)=>{
           if (video.id === dataId) {
               matchingImage = video;
           }
       })
       picture.classList.add("upcoming-left-picture-animate");
       setTimeout(()=>{
           picture.classList.remove("upcoming-left-picture-animate");
       },500)
      picture.style.backgroundImage = `linear-gradient(to right,rgba(0,0,0,0.7),rgba(0,0,0,0)),url("Netflix Image/upcoming/${matchingImage.image}")`;
   })
})

/* mobile menu close and open */
const closeIcon =  document.querySelector('.js-mobile-close');
const openIcon =  document.querySelector('.close-menu');
const img =  document.querySelector('.icons');
const mobileNav =  document.querySelector('.navbar-middle');
const link =  document.querySelectorAll('.navbar-middle-link');
let flag = 0;
closeIcon.addEventListener('click',()=>{
   toggleMenu(); 
})
function toggleMenu() {
   if (flag === 0) {
      /* mobileNav.style.height = "20vh"; */
      mobileNav.style.display = "block";

      openIcon.style.visibility = "visible";
      img.style.visibility = "hidden";
      
      flag = 1
   }else{
      /* mobileNav.style.height = "0px"; */
      mobileNav.style.display = "none";
      openIcon.style.visibility = "hidden";
      img.style.visibility = "visible";
      flag = 0;
   }
}

link.forEach((link)=>{
  link.addEventListener('click',()=>{
   toggleMenu();
  })
})