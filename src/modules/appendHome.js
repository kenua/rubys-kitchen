import homeMarkup from '../html/home.html';

export default function appendHome() {
   let div = document.createElement('div');

   div.innerHTML = homeMarkup;
   document.getElementById('content').append(div);
   return div;
}