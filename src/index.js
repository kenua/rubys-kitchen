import breakfast from "./images/breakfast.jpg";
import lunch from "./images/lunch.jpg";
import drinks from "./images/drinks.jpg";
import "./sass/styles.scss";

console.log("hello");

/* OLD CODE
//import pageLoaded from './modules/load-content.js';
import tabs from './modules/tabs-module';
import intro from './modules/intro-module';
import menu from './modules/menu-module';
import description from './modules/description-module';
import './styles/resets.css';
import './styles/styles.css';

document.addEventListener('DOMContentLoaded', e => {
   tabs();

   let printedSection = intro();
   let currentSection = 'intro';
   let tabsButtonList = document.querySelector('#tabs-button-list');
   let tabsButtons = document.querySelectorAll('.tabs__button ');
   let switchTab = (e) => {
      let target = e.target;
   
      if (target.dataset.section) {
         let section = target.dataset.section;

         if (section === currentSection) return;

         printedSection.remove();
         [...tabsButtons].forEach(button => button.className = 'tabs__button');
         target.classList.add('tabs__button--active');

         switch (section) {
            case 'intro':
               printedSection = intro();
               currentSection = 'intro';
               break;
            case 'menu':
               printedSection = menu();
               currentSection = 'menu';
               break;
            case 'desc':
               printedSection = description();
               currentSection = 'desc';
               break;
         }
      }
   }

   tabsButtonList.addEventListener('click', switchTab);
});
*/
