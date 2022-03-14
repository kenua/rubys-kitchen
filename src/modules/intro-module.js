import introMarkup from '../markup/intro.html';

export default function intro() {
   let div = document.createElement('div');

   div.className = 'wrapper';
   div.innerHTML = introMarkup;
   document.querySelector('#content').append(div);
   return div;
}