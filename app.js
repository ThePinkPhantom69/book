// Firebase Configuration and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARBYmY_LP2fZShbCl_NvTsr5ypDM6JbaE",
    authDomain: "my-log-book-9c011.firebaseapp.com",
    databaseURL: "https://my-log-book-9c011-default-rtdb.firebaseio.com",
    projectId: "my-log-book-9c011",
    storageBucket: "my-log-book-9c011.firebasestorage.app",
    messagingSenderId: "384626859494",
    appId: "1:384626859494:web:2507f6643e9856d0138a27",
    measurementId: "G-GV7XCJ4J30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Menu Toggle Function
const hamburgerIcon = document.getElementById("hamburger-icon");
const menu = document.getElementById("menu");

hamburgerIcon.addEventListener("click", () => {
    if (menu.style.left === "0px") {
        menu.style.left = "-250px";
    } else {
        menu.style.left = "0px";
    }
});

// Form Handling - Save Client Information to Firebase
const clientForm = document.getElementById("clientForm");
const saveClientBtn = document.getElementById("saveClientBtn");

clientForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const idNumber = document.getElementById("idNumber").value;
    const email = document.getElementById("email").value;
    const contactNumber = document.getElementById("contactNumber").value;

    const medicalAidSold = document.getElementById("medicalAidSold").value;
    const medicalAidProvider = document.getElementById("medicalAidProvider").value;
    const medicalAidNumber = document.getElementById("medicalAidNumber").value;

    const gapCoverSold = document.getElementById("gapCoverSold").value;
    const gapCoverProvider = document.getElementById("gapCoverProvider").value;
    const gapCoverPolicyNumber = document.getElementById("gapCoverPolicyNumber").value;

    const otherProductsSold = document.getElementById("otherProductsSold").value;
    const otherProducts = document.getElementById("otherProducts").value;

    const comments = document.getElementById("comments").value;
    const reminderSwitch = document.getElementById("reminderSwitch").checked;
    const reminderDate = document.getElementById("reminderDate").value;
    const reminderTime = document.getElementById("reminderTime").value;

    const clientData = {
        name,
        surname,
        idNumber,
        email,
        contactNumber,
        medicalAidSold,
        medicalAidProvider,
        medicalAidNumber,
        gapCoverSold,
        gapCoverProvider,
        gapCoverPolicyNumber,
        otherProductsSold,
        otherProducts,
        comments,
        reminderSwitch,
        reminderDate,
        reminderTime
    };

    const clientRef = ref(db, 'clients/' + idNumber);
    set(clientRef, clientData)
        .then(() => {
            alert("Client information saved successfully!");
            clientForm.reset(); // Reset the form
        })
        .catch((error) => {
            console.error("Error saving data: ", error);
        });
});

// Notification Bell Logic
const notificationBell = document.getElementById("notificationBell");
const notificationDot = document.getElementById("notificationDot");
const notificationsModal = document.getElementById("notificationsModal");

notificationBell.addEventListener("click", () => {
    notificationsModal.style.display = (notificationsModal.style.display === "block") ? "none" : "block";
});

// Simulated Notifications
setInterval(() => {
    const newNotification = document.createElement("li");
    newNotification.textContent = "You have a new reminder for a client's birthday!";
    document.getElementById("notificationsList").appendChild(newNotification);

    notificationDot.style.display = "block"; // Show red dot
}, 10000); // New reminder every 10 seconds (for demo purposes)
