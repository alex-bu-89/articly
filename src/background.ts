import config from './config';
import { handleErrors } from './utils';

function translateSelection(selection: string, lang: string = 'en-ru'): any {
    const apiUrl = `${config.TRANSLATION_API.HOST}?key=${config.TRANSLATION_API.API_KEY}&lang=${lang}&flags=4&text=${selection}`;

    return fetch(apiUrl)
        .then(handleErrors)
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            throw err;
        });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.type) {
        case 'getTranslation':
            const { selection } = request.payload;

            translateSelection(selection, 'de-ru').then((result: any) => {
                sendResponse({
                    payload: result,
                });
            });

            return true;
        default:
            console.warn('[Articly] - unknown request');
            return;
    }
});
