console.log("JS Loaded")

// Example 1

let dropdownSection = document.getElementById("dropdown-section");
let toggleButton = document.getElementById("hide-div");

dropdownSection.classList.add("open");

const onClick = () => {
  setTimeout(() => {
    if (this.innerText === "Hide") {
      this.innerText = "Show";
    } else {
      this.innerText = "Hide";
    }
    dropdownSection.classList.toggle("close");
    console.log("Time is up");
  }, 500);
};

toggleButton.addEventListener("click", onClick);

/* console.log("Some button has been clicked");
setTimeout(() => {
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  // Doing a lot of crazy thing before time is up ....
  console.log("Time is up");
}, 1000);
console.log("Timer is running"); */


// Example 2

"use strict";
console.log("JS finished loading in istructors code");

let dropdownSection = document.getElementById("dropdown-section");

dropdownSection.classList.add("open");

let toggleButton = document.getElementById("hide-div");


function onButtonClick(){
  // Please notice this code is not "debounced" so it should not be used in production. (debouncing is to prevent repetitive user input from crashing the appllication)
  // It's just a teaching example
  console.log("Button has been clicked")
  setTimeout(
    ()=>{
      console.log("Effects are being executed")
      dropdownSection.classList.toggle("close");
    },
    1500
  )
}

toggleButton.addEventListener("click", onButtonClick)


const timeId1 = setTimeout(()=>console.log("I HAVE BEEN RUN IN THE FUTURE BY 1000ms!"), 1000)
console.log("timeId1: ", timeId1)

const timeId2 = setTimeout(()=>console.log("I HAVE BEEN RUN IN THE FUTURE BY 300ms!"), 300);
console.log("timeId2: ", timeId2)

const timeId3 = setTimeout(()=> console.log("I'll run first"), 100)
console.log("timeId3: ", timeId3)

// ---- SetInterval -----

let counter = 0;

function updateCounter(){
  counter++
  console.log("counter: ", counter)
  if(counter >= 5 ) clearInterval(intervalId1)
}

const intervalId1 = setInterval(updateCounter, 1000)


// Example 3
const h1Tag = document.getElementsByTagName("h1")[0]

/*
setTimeout(
    ()=>{
        console.log("I am a pizza")
        h1Tag.innerText += "I like pizza"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds
)

setTimeout(
    ()=>{
        console.log("I am polpetta al ragu")
        h1Tag.innerText += " and I also like polpette"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds
)


setTimeout(
    ()=>{
        console.log("I like steak")
        h1Tag.innerText += " and I also like steak"
    },
    (Math.random() * 5 * 1000) // this is real-time in milliseconds
)
*/

function onButton1Click(){
    console.log("Button 1 clicked")
    setTimeout(
        ()=>h1Tag.innerText += " and I also like steak",
        Math.random() * 5 * 1000
        )
    
}

function onButton2Click(){
    console.log("Button 2 clicked")
    setTimeout(
        ()=>h1Tag.innerText += " and I also like polpette",
        Math.random() * 5 * 1000
        )
    
}

function onButton3Click(){
    console.log("Butotn 3 clicked")
    setTimeout(
        ()=>h1Tag.innerText += "I like pizza",
        Math.random() * 5 * 1000
        )
}

// ------------ timer -------

const counter = document.getElementById("counter")

const myInterval = setInterval(
    ()=> counter.innerText = parseInt(counter.innerText) + 1,
    1 * 1000
)
// ----------- stop the clock  ---------

const stopCounter = ()=> clearInterval(myInterval)