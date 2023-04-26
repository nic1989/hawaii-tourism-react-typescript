export const slug = (inputStr: string) =>
    inputStr.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');


export const convertToTitle = (inputStr: string) => {
    return inputStr.charAt(0).toUpperCase() + inputStr.slice(1).toLowerCase().replace('-', ' ');
}

export const API_URL = 'https://web-dev.dev.kimo.ai';