import { db } from "../firebaseConfig.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

export function addItem(text) {
    const text = text.trim();
    if (!text) return;
    return push(ref(db, "items"), {text: text});
};