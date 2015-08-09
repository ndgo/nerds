var open = document.querySelector(".map-btn");
var popup = document.querySelector(".feedback");
var close = popup.querySelector(".feedback-circle-btn");
var cancel = popup.querySelector(".feedback-cancel");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

open.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.add("feedback-show");
    login.focus();
    if (storage) {
        login.value = storage;
    } else {
        login.focus();
    }
});

close.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
});
cancel.addEventListener("click", function (event) {
    event.preventDefault(event);
    popup.classList.remove("feedback-show");
});

form.addEventListener("submit", function (event) {
    localStorage.setItem("login", login.value);
});

window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
        }
    }
});

function initialize() {
    var x = 45.038739;
    var y = 38.973099;
    var mapOptions = {
        zoom: 17,
        center: new google.maps.LatLng(x, y),
        scrollwheel: false,
		disableDefaultUI: true
    }
    var map = new  google.maps.Map(
        document.querySelector(".map-script"),
        mapOptions
    );
    var image = "img/map-marker.png"; 
    var myLatLng = new google.maps.LatLng(x, y);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}
google.maps.event.addDomListener(window, "load", initialize);