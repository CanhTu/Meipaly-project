/*--------------NAV-FIXED--------------*/
const navFixed = document.querySelector('.nav-fixed');
window.addEventListener('scroll', () => {
    navFixed.classList.toggle("active", window.scrollY > 0);
});


/*----------------THEME-COLOR--------------------*/
const themeBtn = document.querySelector('.theme-tool-toggle');
const themeSection = document.querySelector('.theme-tool');
let root = document.documentElement;
const invitationSection = document.querySelector('.invitation');
let bgInvitation = "http://layerdrops.com/meipaly/demo/images/bg/4_";
let arrColor = ["#FBD3D9", "#F9B24F", "#7BBD46", "#00BCD4", "#8E44AD", "#ACBC44", "#2BD98D", "#F1C30F", "#33AACC", "#E4644B", "#067B82", "#D03672", "#684C97", "#4CA52F", "#FF5EE1"];
const arrButton = document.querySelectorAll(".theme-tool-colors button");
for (let i = 0; i < arrColor.length; i++) {
    arrButton[i].style.background = arrColor[i];
    arrButton[i].addEventListener('click', () => {
        root.style.setProperty('--var-color', arrColor[i]);
        invitationSection.style.setProperty('background-image', `url("${bgInvitation}${i}.jpg")`);
    })
}
themeBtn.addEventListener('click', () => {
    themeSection.classList.toggle('active');
    themeBtn.classList.toggle('active');
})


/*----------------SCROLL-TOP--------------------*/
const onTop = document.querySelector('#onTop');
window.onscroll = () => {
    document.body.scrollTop > 700 || document.documentElement.scrollTop > 700 ? onTop.style.display = "inline-block" : onTop.style.display = "none";
}
onTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

/*----------------OPEN-CLOSE-OVERLAY--------------------*/
const selectElement = element => document.querySelector(element);
const searchOverlay = document.querySelector('.search-overlay');
const popupVideo = document.querySelector('.popup-video');

const fadeIn = (element, target) => selectElement(element).addEventListener('click', () => {
    target.classList.remove('fade-out');
    target.classList.add('fade-in');
    target.style.display = "block";
})
const fadeOut = (element, target) => selectElement(element).addEventListener('click', () => {
    target.classList.remove('fade-in');
    target.classList.add('fade-out');
    target.style.display = "none";
})
fadeIn(".search", searchOverlay);
fadeOut(".search-area", searchOverlay);
fadeIn(".open-video", popupVideo);
fadeOut(".video-button", popupVideo);



/*-----------------SLIDER HEADER----------------------*/
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slider = document.querySelector('.slider');
let slideItem = document.querySelectorAll('.slide-item');
let index = 1;
const getSlides = () => document.querySelectorAll('.slide-item');
let slideWidth = slideItem[index].clientWidth;
const firstClone = slideItem[0].cloneNode(true);
const lastClone = slideItem[slideItem.length - 1].cloneNode(true);
const contentAnimation = document.querySelector('.slide-item-content');
const selectContent = i => contentAnimation.childNodes[i];

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slider.append(firstClone);
slider.prepend(lastClone);

const autoSlider = () => {
    setInterval(() => {
        index++;
        console.log(-slideWidth * index)
        slider.style.transform = `translateX(${-slideWidth*index}px)`;
        slider.style.transition = "0.8s";
    }, 5000);
}

const nextSlide = () => {
    let slideItem = getSlides();
    if (index >= slideItem.length - 1) {
        return;
    }
    index++;
    slider.style.transform = `translateX(${-slideWidth*index}px)`;
    slider.style.transition = "0.8s";
}


const prevSlide = () => {
    if (index <= 0) {
        return;
    }
    index--;
    slider.style.transform = `translateX(${-slideWidth*index}px)`;
    slider.style.transition = "0.8s";
}
slider.addEventListener('transitionend', () => {
    let slideItem = getSlides();
    if (slideItem[index].id == firstClone.id) {
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = `translateX(${-slideWidth*index}px)`;
    }
    if (slideItem[index].id == lastClone.id) {
        slider.style.transition = "none";
        index = slideItem.length - 2;
        slider.style.transform = `translateX(${-slideWidth*index}px)`;
    }
})
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
autoSlider();


/*----------------POP UP--------------------*/
const popupContainer = document.querySelector('.pop-up');
const openPopUp = document.querySelector('.toggle-button');
const closePopUp = document.querySelector('.close-button');
const navPopUp = document.querySelector('.nav-popup');
const navItemPopUp = document.querySelectorAll('.sub-active');
const subPopUp = document.querySelectorAll(".sub-menu-popup");

openPopUp.addEventListener('click', () => {
    popupContainer.classList.add('overlay');
    setTimeout(() => {
        navPopUp.style.transform = "translateY(80%)";
    }, 1000)
})

closePopUp.addEventListener('click', () => popupContainer.classList.remove('overlay'));
navItemPopUp.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.lastElementChild);
        item.parentElement.style.transform = "translateY(350%)";
        item.lastElementChild.style.position = "absolute";
        item.lastElementChild.style.display = "block";
        // console.log(this.childNodes);
    })
});




/*----------------COUNTER--------------------*/
const dataItem = document.querySelectorAll('.data');
const speed = 600;
window.addEventListener('scroll', () => {
    if (window.scrollY > 3910) {
        countProject();
    }
});
const countProject = () => {
    dataItem.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-counter');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 1)
            } else {
                count.innerText = target;
            }
        }
        updateCount();
    });
}



/*---------------EXPERT-SLIDER-CAROUSEL-------------------*/


/*----------------------------CLIENTS-SLIDER-----------------------------------*/


const sliderClient = document.querySelector('.clients-icon');
let isDown = false;
let startX;
let scrollLeft;


sliderClient.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - sliderClient.offsetLeft;
    scrollLeft = sliderClient.scrollLeft;
    console.log(e.pageX);
    console.log(scrollLeft);
});

sliderClient.addEventListener('mouseleave', () => {
    isDown = false;
});

sliderClient.addEventListener('mouseup', () => {
    isDown = false;
});

sliderClient.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderClient.offsetLeft;
    const walk = (x - startX) * 3;
    sliderClient.scrollLeft = scrollLeft - walk;
    console.log({ x, startX, walk });
});