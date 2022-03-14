import tabsMarkup from '../markup/tabs.html';

export default function tabs() {
   let div = document.createElement('div');

   div.className = 'wrapper';
   div.innerHTML = tabsMarkup;
   document.querySelector('#content').append(div);
   return div;
}