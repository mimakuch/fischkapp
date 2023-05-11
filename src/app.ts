import { createState } from "./data/createState.js";
// import { createCardComponent } from "./ui/card.js";
// import { addCard } from "./data/actions.js";
import {createHeaderComponent} from "./ui/header.js";

document.addEventListener("DOMContentLoaded", () => {
  // Example of how we can create app state responsible for holding data
  let appState = createState();

  const header = createHeaderComponent({
    headerClass: 'header',
    titleClass: 'header__title',
    titleText: 'Fischkapp',
    spanClass: 'header__counter',
    counterValue: 0,
    iconPath: './img/icon-add-new.svg',
    buttonClass: 'header__button',
  });

  const app = document.getElementById("app") as HTMLDivElement;

  app.appendChild(header.render());

  console.log(`You have ${appState.flashcards.length} card/s.`);
});
