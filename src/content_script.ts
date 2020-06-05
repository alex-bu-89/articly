import './content_script.scss';
import { getSelectionHTML } from './utils';

function getTranslation(selection: string, callback: (payload: any) => void) {
    chrome.runtime.sendMessage(
        { type: 'getTranslation', payload: { selection } },
        (response) => {
            callback && callback(response.payload)
        }
    );
}

function showPopup(event: MouseEvent, translations: any) {
    const html = document.createElement('div');
    html.setAttribute('id', 'articly-trans');
    html.setAttribute('style', `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px`);
    html.innerHTML = `<p></p>`;
    document.body.appendChild(html);
}

/**
 * Init hightlight text event
 */
document.addEventListener('mouseup', (event: MouseEvent) => {
    const selection = getSelectionHTML();

    if (selection.length < 1) return;

    getTranslation(selection, (payload) => {
        console.log('------ translation', selection, payload);
        showPopup(event, payload);
    });

}, false);
