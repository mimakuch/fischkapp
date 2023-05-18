interface CardParams {
  front: string;
  back: string;
  iconPath: string;
  editButtonClass: string;
}

export const createCardComponent = (params: CardParams) => {
  let state = {
    isFront: true,
  };

  const handleToggleCard = (): void => {
    state = { ...state, isFront: !state.isFront };
    card.innerText = state.isFront ? params.front : params.back;
    card.classList.toggle('flipped');
  };

  const card = document.createElement('div');
  const button = document.createElement('button');
  const editIcon = document.createElement('img');

  card.classList.add('card');
  card.addEventListener('click', handleToggleCard);
  card.innerText = params.front;

  editIcon.src = params.iconPath;
  button.classList.add(params.editButtonClass);
  button.appendChild(editIcon);
  card.appendChild(button);

  return card;
};
