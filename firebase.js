import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

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

const app = initializeApp(firebaseConfig);