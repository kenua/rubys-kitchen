import aboutMarkup from '../html/about.html';

export default function appendAbout() {
   let div = document.createElement('div');

   div.innerHTML = aboutMarkup;
   document.getElementById('content').append(div);
   return div;
}