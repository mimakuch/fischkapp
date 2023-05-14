import { createState } from "./data/createState.js";
// import { createCardComponent } from "./ui/card.js";
// import { addCard } from "./data/actions.js";
import {createHeaderComponent} from "./ui/header.js";
import {createAddCardComponent} from "./ui/addCard.js";

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

  const newCard = createAddCardComponent({
    newCardClass: 'card',
    frontSideClass: 'card__front',
    inputClass: 'card__input',
    lineClass: 'card__line',
    wrapperClass: 'card__buttons',
    backSideClass: 'card__back',
    deleteWrapperClass: 'card__delete',
    inputValueClass: 'card__delete--input',
    deleteIconClass: 'card__delete--icon',
  });

  const app = document.getElementById("app") as HTMLDivElement;

  app.appendChild(header.render());
  app.appendChild(newCard.render());

  console.log(`You have ${appState.flashcards.length} card/s.`);
});
