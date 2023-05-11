
interface HeaderParams {
    headerClass: string;
    titleClass: string;
    spanClass: string;
    counterValue: number;
    titleText: string;
    iconPath: string;
    buttonClass: string;
}

export const createHeaderComponent = (params: HeaderParams): {render: () => HTMLElement} => {
    const header = document.createElement('header');
    const titleWrapper = document.createElement('div');
    const title = document.createElement('h2');
    const span = document.createElement('span');
    const button = document.createElement('button');
    const icon = document.createElement('img');

    header.classList.add(params.headerClass);
    title.classList.add(params.titleClass);
    span.classList.add(params.spanClass);

    icon.src = params.iconPath;
    button.classList.add(params.buttonClass);

    title.innerText = params.titleText;
    span.textContent = params.counterValue.toString();

    titleWrapper.appendChild(title);
    titleWrapper.appendChild(span);
    button.appendChild(icon);
    header.appendChild(titleWrapper);
    header.appendChild(button);

    titleWrapper.style.display = 'flex';
    titleWrapper.style.alignItems = 'center';

    const render = () => {
        return header;
    };

    return {
        render,
    };
};