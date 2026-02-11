const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");
const changeTextBtn = document.getElementById("changeTextBtn");


let sampleevent=[
{
    Title:"web-dev",
    Date:"4-05-2026",
    Category:"Workshop",
    description:"dshuihs jsfhusd"
},
{
    Title:"web-Dev2",
    Date:"4-06-2026",
    Category: "Conference",
    Description: "Annual tech conference"
}
]

let events = [];

function displayEvents(){

    eventContainer.innerHTML = "";

    if (events.length === 0) {
        eventContainer.innerHTML =
            '<div class="empty-state">No events yet. Add your first event!</div>';
        return;
    }

    events.forEach((event, index) => {

        const card = document.createElement("div");
        card.classList.add("event-card");
        card.setAttribute("data-index", index);
                card.innerHTML = `
            <h3>${event.title}</h3>
            <p><b>Date:</b> ${event.date}</p>
            <p><b>Category:</b> ${event.category}</p>
            <p>${event.description}</p>
            <button class="delete-btn">X</button>
        `;

        eventContainer.appendChild(card);
    });
}

