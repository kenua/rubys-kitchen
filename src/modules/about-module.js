import about from "../html/about.html";

function insertAbout() {
   const div = document.createElement("div");

   div.innerHTML = about;
   document.getElementById("content").appendChild(div);
   return div;
}

export default insertAbout;
