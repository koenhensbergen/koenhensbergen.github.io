const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('nav ul');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Burger animatie
        burger.classList.toggle('toggle');

    });

    console.log(nav);
}

navSlide();

var imageSlider = ['reclame1.png', 'reclame2.png', 'reclame3.png', 'reclame4.png'];
var i = 0;
//
//function slider() {
//    
//}
imageSlider.push(imageSlider.shift());
console.log(imageSlider);


//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_sticky
//link voor scrollbar fixed

//Werkt niet goed met image verpest navbar
//window.onscroll = function() {scroll()};
//
//const navbar = document.querySelector('nav');
//const sticky = navbar.offsetTop;
//
//function scroll() {
//    if (window.pageYOffset >= sticky) {
//        navbar.classList.add('sticky');
//    } else {
//        navbar.classList.remove('sticky');
//    }
//}


//
//console.log(navbar);
console.log(scroll);
