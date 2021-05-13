const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu');



const btnOpenVideo = document.querySelectorAll(".islands__video-content");
const islandsPopup = document.getElementById('popup');

function popUp() {
    islandsPopup.classList.add('show-popup');
}

btnOpenVideo.forEach(btn => btn.addEventListener('click', popUp));

const btnCloseVideo = document.getElementById('popup-close');

btnCloseVideo.addEventListener("click", () => {
    islandsPopup.classList.remove('show-popup');
})


// Swiper

const galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 0,
    slidesPerView: 0,
})

const galleryTop = new Swiper(".gallery-top", {
    thumbs: {
      swiper: swiper,
    }
})




