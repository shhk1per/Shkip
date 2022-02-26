var object = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyecolor: "blue",
    languages: ["kaz", "rus", "eng"]
};
var numerberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numerberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // usage of selectors methods and events
        this.style.color = "white"; // reacting to the mouse clicking
        var audio = new Audio('sounds/choice.mp3'); // playing at least one sound using JS
        audio.play();
    });
};


       
