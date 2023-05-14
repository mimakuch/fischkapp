interface AddCardParams {
    newCardClass: string;
}

export const createAddCardComponent = (params: AddCardParams): {render: () => HTMLElement} => {

    const newCard = document.createElement('div');
    const frontSide = document.createElement('div');
    const input = document.createElement('input');
    const horizontalLine = document.createElement('hr');
    const cancelButton = document.createElement('button');
    const nextButton = document.createElement('button');
    const backSide = document.createElement('div');



    newCard.classList.add(params.newCardClass);


    const render = () => {
        return newCard;
    };

    return {
        render,
    }
}