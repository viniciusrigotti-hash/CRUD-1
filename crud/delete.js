import { db } from "../firebaseConfig.js";
import { ref, remove } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

export function deleteItem(id) {
    return remove(ref(db, `items/${id}`));
;}