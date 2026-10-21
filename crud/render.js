export function createItem(id, text) {
    const li = document.createElement("li");
    li.className = "item";
    li.dataset.id = id;
    li.innerHTML = `
        <div class="itemText"></div>
        <div class="itemButtons">
        <button class="edit">
            <i class="fa-solid fa-pencil"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-eraser"></i>
        </button>
        </div>`;
    li.querySelector(".itemText").textContent = text;
    return li;
}