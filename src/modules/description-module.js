import descriptionMarkup from '../markup/description.html';

export default function description() {
   let div = document.createElement('div');

   div.className = 'wrapper';
   div.innerHTML = descriptionMarkup;
   document.querySelector('#content').append(div);
   return div;
}