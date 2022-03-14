import intro from '../markup/intro.html';
import menu from '../markup/menu.html';
import description from '../markup/description.html';

function pageLoaded() {
   let wrapper = document.createElement('div');
   let content = intro + menu + description;

   wrapper.className = 'wrapper';
   wrapper.innerHTML = content;
   document.querySelector('#content').append(wrapper);
}

export default pageLoaded;