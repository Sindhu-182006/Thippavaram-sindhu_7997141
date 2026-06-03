
// =====================================
// COMMUNITY EVENT PORTAL JAVASCRIPT
// =====================================



// =====================================
// TASK 1 — JAVASCRIPT BASICS & SETUP
// =====================================

console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Community Portal Loaded Successfully!");

};



// =====================================
// TASK 2 — DATA TYPES & OPERATORS
// =====================================

const eventName = "Music Festival";

const eventDate = "2026-08-15";

let availableSeats = 50;

console.log(
    `Event: ${eventName} | Date: ${eventDate} | Seats: ${availableSeats}`
);

// Registration reduces seat count

availableSeats--;

console.log(
    `Seats Remaining After Registration: ${availableSeats}`
);



// =====================================
// TASK 3 — CONDITIONALS, LOOPS,
// ERROR HANDLING
// =====================================

const events = [

    {
        name: "Music Festival",
        date: "2026-08-15",
        seats: 20
    },

    {
        name: "Food Carnival",
        date: "2024-01-10",
        seats: 0
    },

    {
        name: "Sports Meet",
        date: "2026-10-01",
        seats: 15
    }

];

events.forEach(function(event) {

    let today = new Date();

    let eventDateObj = new Date(event.date);

    // Show only future events with seats

    if (eventDateObj > today && event.seats > 0) {

        console.log(
            `${event.name} is available with ${event.seats} seats`
        );

    }

    else {

        console.log(
            `${event.name} is unavailable or full`
        );

    }

});



// Error Handling

function registerForEvent(eventName) {

    try {

        if (!eventName) {

            throw "Event name is missing!";

        }

        console.log(
            `Successfully registered for ${eventName}`
        );

    }

    catch(error) {

        console.log("Registration Error:", error);

    }

}

registerForEvent("Music Festival");

registerForEvent("");



// =====================================
// TASK 4 — FUNCTIONS, SCOPE,
// CLOSURES, HIGHER-ORDER FUNCTIONS
// =====================================

// Add Event Function

function addEvent(name, category) {

    console.log(
        `New Event Added: ${name} (${category})`
    );

}



// Register User Function

function registerUser(userName, eventName) {

    console.log(
        `${userName} registered for ${eventName}`
    );

}



// Filter Events by Category

function filterEventsByCategory(events, category) {

    return events.filter(function(event) {

        return event.name.includes(category);

    });

}



// Closure Example

function registrationTracker(category) {

    let totalRegistrations = 0;

    return function() {

        totalRegistrations++;

        console.log(
            `${category} Registrations: ${totalRegistrations}`
        );

    };

}

const musicRegistration =
    registrationTracker("Music");

musicRegistration();

musicRegistration();



// Higher-Order Function with Callback

function searchEvents(events, callback) {

    callback(events);

}

searchEvents(events, function(eventList) {

    console.log("Dynamic Search Results:");

    eventList.forEach(function(event) {

        console.log(event.name);

    });

});



// =====================================
// TASK 5 — OBJECTS AND PROTOTYPES
// =====================================

// Event Class

class EventPortal {

    constructor(name, category, seats) {

        this.name = name;

        this.category = category;

        this.seats = seats;

    }

}



// Prototype Method

EventPortal.prototype.checkAvailability =
function () {

    if (this.seats > 0) {

        return `${this.name} has ${this.seats} seats available`;

    }

    else {

        return `${this.name} is full`;

    }

};



// Create Event Objects

const event1 =
new EventPortal("Music Festival", "Music", 25);

const event2 =
new EventPortal("Art Exhibition", "Art", 0);



// Display Availability

console.log(event1.checkAvailability());

console.log(event2.checkAvailability());



// Object.entries()

console.log("Event Object Details:");

Object.entries(event1).forEach(function([key, value]) {

    console.log(`${key}: ${value}`);

});



// =====================================
// TASK 6 — ARRAYS AND METHODS
// =====================================

const communityEvents = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Carnival",
        category: "Food"
    },

    {
        name: "Sports Meet",
        category: "Sports"
    }

];



// Add New Event using push()

communityEvents.push({

    name: "Workshop on Baking",

    category: "Food"

});

console.log("New Event Added");

console.log(communityEvents);



// Filter Only Music Events

const musicEvents =
communityEvents.filter(function(event) {

    return event.category === "Music";

});

console.log("Music Events:");

console.log(musicEvents);



// Format Event Cards using map()

const formattedEvents =
communityEvents.map(function(event) {

    return `Community Event: ${event.name}`;

});

console.log("Formatted Events:");

console.log(formattedEvents);



// =====================================
// TASK 7 — DOM MANIPULATION
// =====================================

// Access Section using querySelector()

const eventSection =
document.querySelector("#events");



// Create Dynamic Event Cards

communityEvents.forEach(function(event) {

    // Create Card

    const card = document.createElement("div");

    card.classList.add("dynamicEventCard");



    // Add Event Name

    const title = document.createElement("h3");

    title.textContent = event.name;



    // Add Event Category

    const category = document.createElement("p");

    category.textContent =
        `Category: ${event.category}`;



    // Create Register Button

    const registerBtn =
        document.createElement("button");

    registerBtn.textContent = "Register";



    // Register Button Event

    registerBtn.onclick = function () {

        alert(`Registered for ${event.name}`);

        card.style.backgroundColor = "#d4edda";

    };



    // Create Cancel Button

    const cancelBtn =
        document.createElement("button");

    cancelBtn.textContent = "Cancel";



    // Cancel Button Event

    cancelBtn.onclick = function () {

        alert(`Cancelled ${event.name}`);

        card.style.backgroundColor = "#f8d7da";

    };



    // Append Elements

    card.appendChild(title);

    card.appendChild(category);

    card.appendChild(registerBtn);

    card.appendChild(cancelBtn);



    // Add Card to Events Section

    eventSection.appendChild(card);

});

// =====================================
// TASK 8 — EVENT HANDLING
// =====================================

// Event Container

const eventContainer =
document.querySelector("#eventContainer");



// Event Data

const allEvents = [

    {
        name: "Music Festival",
        category: "Music"
    },

    {
        name: "Food Carnival",
        category: "Food"
    },

    {
        name: "Sports Meet",
        category: "Sports"
    },

    {
        name: "DJ Night",
        category: "Music"
    }

];



// Function to Display Events

function displayEvents(eventList = allEvents) {

    eventContainer.innerHTML = "";



    eventList.forEach((event) => {

        const card =
        document.createElement("div");

        card.classList.add("dynamicEventCard");



        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>Category: ${event.category}</p>

            <button class="registerBtn">

                Register

            </button>

        `;



        // Register Button Event

        card.querySelector(".registerBtn")
        .onclick = function () {

            alert(`Registered for ${event.name}`);

            card.style.backgroundColor =
                "#d4edda";

        };



        eventContainer.appendChild(card);

    });

}



// Initial Display

displayEvents();



// Filter Events using onchange

document.querySelector("#categoryFilter")
.onchange = function () {

    const selectedCategory =
        this.value;



    if (selectedCategory === "All") {

        displayEvents(allEvents);

    }

    else {

        const filteredEvents =
            allEvents.filter((event) =>

                event.category === selectedCategory
            );

        displayEvents(filteredEvents);

    }

};



// Search Events using keydown

document.querySelector("#searchBox")
.addEventListener("keydown", function () {

    const searchText =
        this.value.toLowerCase();



    const searchedEvents =
        allEvents.filter((event) =>

            event.name.toLowerCase()
            .includes(searchText)

        );



    displayEvents(searchedEvents);

});



// =====================================
// TASK 9 — ASYNC JS, PROMISES,
// ASYNC/AWAIT
// =====================================

// Mock API URL

const apiURL =
"https://jsonplaceholder.typicode.com/posts";



// Loading Spinner

const loading =
document.querySelector("#loading");



// Fetch using then() and catch()

function fetchEvents() {

    loading.style.display = "block";



    fetch(apiURL)

        .then((response) => {

            return response.json();

        })

        .then((data) => {

            console.log("Fetched Events:");

            console.log(data.slice(0, 5));



            loading.style.display = "none";

        })

        .catch((error) => {

            console.log("Fetch Error:", error);

            loading.style.display = "none";

        });

}

fetchEvents();



// Async/Await Version

async function fetchEventsAsync() {

    try {

        loading.style.display = "block";



        const response =
            await fetch(apiURL);

        const data =
            await response.json();



        console.log(
            "Async/Await Events:"
        );

        console.log(data.slice(0, 5));



        loading.style.display = "none";

    }

    catch(error) {

        console.log(
            "Async/Await Error:",
            error
        );

        loading.style.display = "none";

    }

}

fetchEventsAsync();



// =====================================
// TASK 10 — MODERN JAVASCRIPT
// FEATURES
// =====================================

// let and const

let cityName = "Hyderabad";

const portalName =
"Community Event Portal";



// Default Parameters

function welcomeUser(user = "Guest") {

    console.log(
        `Welcome ${user} to ${portalName}`
    );

}

welcomeUser();

welcomeUser("Sindhu");



// Destructuring

const sampleEvent = {

    eventTitle: "Coding Workshop",

    eventCategory: "Education",

    seatsAvailable: 30

};



const {

    eventTitle,

    eventCategory,

    seatsAvailable

} = sampleEvent;



console.log(eventTitle);

console.log(eventCategory);

console.log(seatsAvailable);



// Spread Operator

const clonedEvents = [...allEvents];

console.log("Cloned Events:");

console.log(clonedEvents);


// =====================================
// TASK 11 — WORKING WITH FORMS
// =====================================

const registrationForm =
document.querySelector("#registrationForm");



registrationForm.addEventListener(
    "submit",
    function(event) {

        // Prevent Page Reload

        event.preventDefault();



        console.log("Form Submission Started");



        // Capture Form Elements

        const form =
            event.target;



        const name =
            form.elements["name"].value;

        const email =
            form.elements["email"].value;

        const selectedEvent =
            form.elements["eventSelect"].value;



        // Error Elements

        const nameError =
            document.querySelector("#nameError");

        const emailError =
            document.querySelector("#emailError");

        const eventError =
            document.querySelector("#eventError");



        // Clear Previous Errors

        nameError.textContent = "";

        emailError.textContent = "";

        eventError.textContent = "";



        let isValid = true;



        // Validation

        if (name === "") {

            nameError.textContent =
                "Name is required";

            isValid = false;

        }



        if (email === "") {

            emailError.textContent =
                "Email is required";

            isValid = false;

        }



        if (selectedEvent === "") {

            eventError.textContent =
                "Please select an event";

            isValid = false;

        }



        // Stop if Invalid

        if (!isValid) {

            console.log(
                "Validation Failed"
            );

            return;

        }



        console.log(
            "Validation Successful"
        );



        // =====================================
        // TASK 12 — AJAX & FETCH API
        // =====================================

        const userData = {

            name,

            email,

            selectedEvent

        };



        console.log(
            "Sending Data:",
            userData
        );



        // Simulate Delay

        setTimeout(() => {

            fetch(
                "https://jsonplaceholder.typicode.com/posts",
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                        "application/json"

                    },

                    body: JSON.stringify(userData)

                }
            )

            .then((response) => {

                return response.json();

            })

            .then((data) => {

                console.log(
                    "Server Response:",
                    data
                );



                document.querySelector(
                    "#formMessage"
                ).textContent =

                "Registration Successful!";

            })

            .catch((error) => {

                console.log(
                    "Submission Error:",
                    error
                );



                document.querySelector(
                    "#formMessage"
                ).textContent =

                "Registration Failed";

            });

        }, 2000);

    }
);



// =====================================
// TASK 13 — DEBUGGING & TESTING
// =====================================

console.log("Debugging Enabled");



// You can add breakpoints in browser DevTools

function debugRegistration() {

    console.log(
        "Checking Registration Process"
    );

}

debugRegistration();



// =====================================
// TASK 14 — JQUERY & FRAMEWORKS
// =====================================

// jQuery CDN Check

console.log("jQuery Section Loaded");



// jQuery Click Event

$("#registerBtn").click(function () {

    console.log(
        "Register Button Clicked"
    );

});



// Fade Effects

$(".dynamicEventCard").fadeIn(1000);

$(".dynamicEventCard").fadeOut(500);

$(".dynamicEventCard").fadeIn(1000);



// Framework Benefit

console.log(

    "React/Vue help build fast and reusable UI components."

);


