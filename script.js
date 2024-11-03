// Announcements Data (You can replace this with real data from a server)
const announcements = [
    "New school term starts on September 1st.",
    "School sports day on October 15th.",
    "Parent-teacher meeting on November 10th."
];

// Events Data (You can replace this with real data from a server)
const events = [
    { date: "2024-09-15", event: "Back to School Night" },
    { date: "2024-10-05", event: "Science Fair" },
    { date: "2024-12-20", event: "Holiday Concert" }
];

// Function to load announcements
function loadAnnouncements() {
    const announcementList = document.getElementById("announcement-list");
    announcements.forEach((announcement) => {
        const announcementItem = document.createElement("p");
        announcementItem.textContent = announcement;
        announcementList.appendChild(announcementItem);
    });
}

// Function to load events
function loadEvents() {
    const eventsList = document.getElementById("events-list");
    events.forEach((event) => {
        const eventItem = document.createElement("p");
        eventItem.textContent = ${event.date} - ${event.event};
        eventsList.appendChild(eventItem);
    });
}

// Initialize the data on page load
window.onload = function() {
    loadAnnouncements();
    loadEvents();
};
