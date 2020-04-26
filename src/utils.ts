export function getSelectionHTML() {
    let text = '';

    if (window.getSelection) {
        text = window.getSelection().toString();
    // @ts-ignore
    } else if (document.selection && document.selection.type !== 'Control') {
        // @ts-ignore
        text = document.selection.createRange().text;
    }

    return text;
}

export default {
    getSelectionHTML
}
