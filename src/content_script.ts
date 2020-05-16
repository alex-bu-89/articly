import config from './config';
import { getSelectionHTML } from './utils';

function getTranslation(selection: string, callback: (payload: any) => void) {
    chrome.runtime.sendMessage(
        { type: 'getTranslation', payload: { selection } },
        (response) => {
            console.log('------ lol', response);
            callback && callback(response.payload)
        }
    );
}

/**
 * Init hightlight text event
 */
document.addEventListener('mouseup', (event) => {
    const selection = getSelectionHTML();

    if (selection.length < 1) return;

    console.log('------ selection', selection);

    getTranslation(selection, (payload) => {
        console.log('------ response', payload);
    });

}, false);
