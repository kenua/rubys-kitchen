import menu from "../html/menu.html";

function insertMenu() {
   const div = document.createElement("div");

   div.innerHTML = menu;
   document.getElementById("content").appendChild(div);
   return div;
}

export default insertMenu;
