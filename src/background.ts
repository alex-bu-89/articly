chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.type) {
        case 'translateSelection':
            sendResponse({
                payload: {
                    message: 'foobar',
                },
            });
            break;
        default:
            console.warn('[Articly] - unknown request');
            break;
    }
});
