interface ListParams {
  containerClass: string;
  listClass: string;
  listElementClass: string;
}

export const createCardList = (
  params: ListParams
): { render: () => HTMLElement } => {
  const listContainer = document.createElement('div');
  const cardList = document.createElement('ul');
  const listElement = document.createElement('li');

  listContainer.classList.add(params.containerClass);
  cardList.classList.add(params.listClass);
  listElement.classList.add(params.listElementClass);

  listContainer.appendChild(cardList);
  cardList.appendChild(listElement);

  const render = () => {
    return cardList;
  };

  return {
    render,
  };
};
