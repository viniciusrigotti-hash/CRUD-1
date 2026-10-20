import { db } from "../firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

export function listenItems