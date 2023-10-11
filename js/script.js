// ================= Navbar Links ====================
var navItemHome = document.getElementById("nav-item-home");
var navItemAbout = document.getElementById("nav-item-about");
var navItemDiscover = document.getElementById("nav-item-discover");
var navItemPlaces = document.getElementById("nav-item-places");
var navItemBooking = document.getElementById("nav-item-booking");

// console.log(navListColor);

navItemHome.addEventListener("click" , function(){
    navItemHome.classList.add("nav-item-home");
    navItemAbout.classList.remove("nav-item-About");
    navItemDiscover.classList.remove("nav-item-discover");
    navItemPlaces.classList.remove("nav-item-places");
    navItemBooking.classList.remove("nav-item-booking");
});

navItemAbout.addEventListener("click" , function(){
    navItemAbout.classList.add("nav-item-About");
    navItemHome.classList.remove("nav-item-home");
    navItemDiscover.classList.remove("nav-item-discover");
    navItemPlaces.classList.remove("nav-item-places");
    navItemBooking.classList.remove("nav-item-booking");
});

navItemDiscover.addEventListener("click" , function(){
    navItemDiscover.classList.add("nav-item-discover");
    navItemAbout.classList.remove("nav-item-About");
    navItemHome.classList.remove("nav-item-home");
    navItemPlaces.classList.remove("nav-item-places");
    navItemBooking.classList.remove("nav-item-booking");
});

navItemPlaces.addEventListener("click" , function(){
    navItemPlaces.classList.add("nav-item-places");
    navItemDiscover.classList.remove("nav-item-discover");
    navItemAbout.classList.remove("nav-item-About");
    navItemHome.classList.remove("nav-item-home");
    navItemBooking.classList.remove("nav-item-booking");
});

navItemBooking.addEventListener("click" , function(){
    navItemBooking.classList.add("nav-item-booking");
    navItemPlaces.classList.remove("nav-item-places");
    navItemDiscover.classList.remove("nav-item-discover");
    navItemAbout.classList.remove("nav-item-About");
    navItemHome.classList.remove("nav-item-home");
});
// ================================== Nav Menu ===============================
var sliderIcon  = document.getElementById("slider-icon");
var navMenu  = document.getElementById("nav-menu") ;
var closeIcon = document.getElementById("close-icon");
//   console.log(closeIcon);
if (sliderIcon) {
    sliderIcon.addEventListener('click', function(){
                 navMenu.classList.add('show-menu')
 });
}
if (closeIcon) {
    closeIcon.addEventListener('click', function(){
                 navMenu.classList.remove('show-menu')
 });
}
//    =============     Booking    ================

var oneWay = document.getElementById("oneWay");
var roundTrip = document.getElementById("roundTrip");
var multiTrip = document.getElementById("multiTrip");
var flightBookingOneTwo = document.getElementById("flight-booking-one-two");
var flightBookingMulti = document.getElementById("flight-booking-multi");
var flightsToDate = document.getElementById("flightsToDate");
var lcc = document.getElementById("lcc");
var gds = document.getElementById("gds");
var flightForm = document.getElementById("flight-form");
var hotelForm = document.getElementById("hotel-form");
var busForm = document.getElementById("bus-form");
var hotelBookingForm = document.getElementById("hotel-booking-form");
var flightBookingForm = document.getElementById("flight-booking-form");
var busBookingForm = document.getElementById("bus-booking-form");


oneWay.addEventListener("click" , function(){
   flightsToDate.classList.add("d-none");
   lcc.classList.add("d-none");
   gds.classList.add("d-none");
   flightBookingMulti.classList.add('d-none');
    flightBookingOneTwo.classList.remove('d-none');
});

roundTrip.addEventListener("click" , function(){
    flightsToDate.classList.remove("d-none");
    lcc.classList.remove("d-none");
    gds.classList.remove("d-none");
    flightBookingMulti.classList.add('d-none');
    flightBookingOneTwo.classList.remove('d-none');
 });
 multiTrip.addEventListener("click" , function(){
    flightBookingOneTwo.classList.add('d-none');
    flightBookingMulti.classList.remove('d-none');
 });

 hotelForm.addEventListener("click" , function(){
    hotelBookingForm.classList.remove("d-none");
    flightBookingForm.classList.add("d-none");
    busBookingForm.classList.add("d-none");
 });

 flightForm.addEventListener("click" , function(){
    hotelBookingForm.classList.add("d-none");
    flightBookingForm.classList.remove("d-none");
    busBookingForm.classList.add("d-none");
 });

 busForm.addEventListener("click" , function(){
    busBookingForm.classList.remove("d-none");
    hotelBookingForm.classList.add("d-none");
    flightBookingForm.classList.add("d-none");

 });

var addMoreFields = document.querySelector('#add-more-fields');
var moreOptionsCrossButton = document.querySelector('.more-options-cross-button');
var moreOptionsContainer = document.querySelector('.more-options-container');

addMoreFields.addEventListener('click', function (e) {
    e.preventDefault();
    var moreOptionField = document.createElement('div');
    moreOptionField.innerHTML = `
    <div>
    <div class=" d-flex px-4 py-2" id="multi">
                     <input id="flightDepartFrom" class="form-control me-2" type="search" placeholder="Depart From" aria-label="Search">
                     <input id="flightGoingTo" class="form-control me-2" type="search" placeholder="Going To" aria-label="Search">
                      <input type="date" class="form-control" id="flightsToDate" />  
                      <span class="more-options-cross-button"><i class="fa-solid fa-xmark fs-4 mt-2 ps-1"></i></span>  
                 </div>
    </div>` ;
    moreOptionsContainer.appendChild(moreOptionField);

    var close = document.querySelectorAll('.more-options-cross-button');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', function() {
            close[i].parentElement.parentElement.classList.add('d-none');
        })
    }
})
//  =========================== Dark Mode Toggle ==============================

var darkBtn = document.getElementById("darkBtn");
var lightBtn = document.getElementById("lightBtn");
// console.log(darkBtn);


darkBtn.addEventListener("click" ,  function(){
   document.body.style.backgroundColor = "#363636";
//    document.body.style.color = "#FFF";
lightBtn.classList.remove("d-none");
    darkBtn.classList.add("d-none");

});

lightBtn.addEventListener("click" , function(){
    document.body.style.backgroundColor = "#FFF";
    lightBtn.classList.add("d-none");
    darkBtn.classList.remove("d-none"); 

});

//  ========================= Scroll Up ===============================
// console.log(scrollUp);
var scrollUp = document.getElementById("scrollUp");

function scrollUpFun(){
    if (this.scrollY >= 200) {
        scrollUp.classList.remove("d-none");
    }
    else
    {
        scrollUp.classList.add("d-none");
    }
}

window.addEventListener("scroll" , scrollUpFun);





