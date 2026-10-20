import { db } from "./firebaseConfig.js";
import { ref, push, onValue, update, remove, } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const input = document.getElementById("input");
const submit = document.getElementById("submit")
const list = document.getElementById("list")

