import { db } from "../firebaseConfig.js";
import { ref, update } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

export function updateItem(id, text) {
    const newText = text.trim();
    if (!newText) return;
    return update(ref(db, `items/${id}`), { text: newText });
};