import { addItem } from "./crud/create.js";
import { listenItems } from "./crud/read.js";
import { updateItem } from "./crud/update.js";
import { deleteItem } from "./crud/delete.js";
import { createItem } from "./crud/render.js";

console.log("bab");


const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");

function handleAdd() {
    addItem(input.value);
    input.value = "";
};

submit.addEventListener("click", handleAdd);
input.addEventListener("keydown", (event) => {
    if(event.key === "Enter") handleAdd;
});

listenItems((items) => {
    list.innerHTML = "";
    items.forEach (({ id, text }) => {
        list.appendChild(createItem(id, text));
    });
});

list.addEventListener("click", (event) => {
    const li = event.target.closest(".item");
    if (!li) return;
    const id = li.dataset.id;

    if (event.target.closest(".delete")) {
        deleteItem(id);
    };

    if (event.target.closest(".edit")) {
        const old = li.querySelector(".itemText").textContent;
        const current = prompt("Editar item:", old);
        if (current) updateItem(id, current);
    };
});