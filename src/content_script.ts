import config from './config';
import { getSelectionHTML } from './utils';

function translateSelection(selection: string, callback: (payload: any) => void) {
    chrome.runtime.sendMessage(
        { type: 'translateSelection', payload: { selection } },
        (response) => {
            console.log(response.payload);
            callback ?? callback(response.payload)
        }
    );
}

/**
 * Init ondblclick event
 */
document.addEventListener('mouseup', (event) => {
    const selection = getSelectionHTML();
    console.log('------, test', selection);

    translateSelection(selection, (payload) => {
        console.log('------ response', payload);
    });

}, false);

// document.body.addEventListener('')

// chrome.eve
