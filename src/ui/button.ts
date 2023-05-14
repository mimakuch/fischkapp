
interface ButtonParams {
    buttonText: string;
    buttonClass: string;
}

export const createButtonComponent = (params: ButtonParams): {render: () => HTMLElement} => {

    const button = document.createElement('button');

    button.innerText = params.buttonText;
    params.buttonClass
        .split(' ')
        .forEach(className => button.classList.add(className));

    const render = () => {
        return button;
    };

    return {
        render,
    };
};