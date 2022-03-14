import menuMarkup from '../markup/menu.html';

export default function menu() {
   let div = document.createElement('div');

   div.className = 'wrapper';
   div.innerHTML = menuMarkup;
   document.querySelector('#content').append(div);
   return div;
}