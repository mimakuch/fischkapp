import {createButtonComponent} from "./button";

interface AddCardParams {
    newCardClass: string;
    frontSideClass: string;
    inputClass: string;
    lineClass: string;
    wrapperClass: string;
    backSideClass: string;
    deleteWrapperClass: string;
    inputValueClass: string;
    deleteIconClass: string;
}

export const createAddCardComponent = (params: AddCardParams): {render: () => HTMLElement} => {

    const newCard = document.createElement('div');

    // FRONT SIDE OF THE CARD
    const frontSide = document.createElement('div');
    const frontInput = document.createElement('input');
    const frontHorizontalLine = document.createElement('hr');
    const frontButtonsWrapper = document.createElement('div');
    const cancelButton = createButtonComponent({
        buttonText: 'cancel',
        buttonClass: 'card__buttons--cancel',
    });
    const nextButton = createButtonComponent({
        buttonText: 'next',
        buttonClass: 'card__buttons--next',
    });

    // BACK SIDE OF THE CARD
    const backSide = document.createElement('div');
    const deleteWrapper = document.createElement('div');
    const inputValue = document.createElement('span');
    const deleteIcon = document.createElement('img');
    const backInput = document.createElement('input');
    const backHorizontalLine = document.createElement('hr');
    const backButtonsWrapper = document.createElement('div');
    const backButton = createButtonComponent({
        buttonText: 'back',
        buttonClass: 'card__buttons--back',
    });
    const saveButton = createButtonComponent({
        buttonText: 'save',
        buttonClass: 'card__buttons--save',
    });

    // LIST OF CLASSES
    newCard.classList.add(params.newCardClass);
    frontSide.classList.add(params.frontSideClass);
    frontInput.classList.add(params.inputClass);
    frontHorizontalLine.classList.add(params.lineClass);
    frontButtonsWrapper.classList.add(params.wrapperClass);
    backSide.classList.add(params.backSideClass);
    deleteWrapper.classList.add(params.deleteWrapperClass);
    inputValue.classList.add(params.inputValueClass);
    deleteIcon.classList.add(params.deleteIconClass);
    backInput.classList.add(params.inputClass);
    backHorizontalLine.classList.add(params.lineClass);
    backButtonsWrapper.classList.add(params.wrapperClass);

    // CONNECTING PARTS OF THE COMPONENT
    newCard.appendChild(frontSide);
    newCard.appendChild(backSide);
    frontSide.appendChild(frontInput);
    frontSide.appendChild(frontHorizontalLine);
    frontSide.appendChild(frontButtonsWrapper);
    frontButtonsWrapper.appendChild(cancelButton.render());
    frontButtonsWrapper.appendChild(nextButton.render());
    backSide.appendChild(deleteWrapper);
    deleteWrapper.appendChild(inputValue);
    deleteWrapper.appendChild(deleteIcon);
    backSide.appendChild(backInput);
    backSide.appendChild(backHorizontalLine);
    backSide.appendChild(backButtonsWrapper);
    backButtonsWrapper.appendChild(backButton.render());
    backButtonsWrapper.appendChild(saveButton.render());

    const render = () => {
        return newCard;
    };

    return {
        render,
    }
}