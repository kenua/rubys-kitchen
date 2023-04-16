import menuMarkup from '../html/menu.html';

export default function appendMenu() {
   let div = document.createElement('div');

   div.innerHTML = menuMarkup;
   document.getElementById('content').append(div);
   return div;
}