export {}

// the background script will need to be able to check if a user is logged in and sync their local storage with online info.
// it will also need to be involved in the authentication process, so it knows when they log in
// this file will also handle the local storage, so it will need to be able to read and write to it and have correct permissions for same.

// The below is a simple example of the communication back and forth between the background script and the content script. 
// This shall be implemented in the final product, but it is not yet functional.
// We need to build out the API and webserver before progressing further.
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url) {
        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            data: {
                user_id: "1234",
            }
        });
    }
});