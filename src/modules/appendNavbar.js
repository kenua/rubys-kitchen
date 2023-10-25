import navbarMarkup from '../html/navbar.html';

export default function appendNavbar() {
   let div = document.createElement('div');

   div.innerHTML = navbarMarkup;
   document.getElementById('root').prepend(div);
   return div;
}