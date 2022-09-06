import home from "../html/home.html";

function insertHome() {
   const div = document.createElement("div");

   div.innerHTML = home;
   document.getElementById("content").appendChild(div);
   return div;
}

export default insertHome;
