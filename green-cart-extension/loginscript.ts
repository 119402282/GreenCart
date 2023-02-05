export {}

//Boilerplate code for the login script
//This whole script is a work in progress and does not represent the end product in any way

//The script will wait for the server to send the token.
//At the minute this code is non-functioning

let userToken = null;

chrome.runtime.onMessage.addListener(
    // listens for messages...
  function(request, sender, sendResponse) {
    //if the message is a token, set the userToken to the token
    if (request.type === 'token') {
      userToken = request.token;
    }
  });

chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    //if the userToken is not null, set the authorization header to the userToken
    if (userToken) {
      for (var i = 0; i < details.requestHeaders.length; ++i) {
        //adds the info to the requestHeader
        // this is so that my authentication can happen a layer above the app activity .. middleware approach
        if (details.requestHeaders[i].name === 'Authorization') {
          details.requestHeaders[i].value = userToken;
          break;
        }
      }
    }
    return {requestHeaders: details.requestHeaders};
  },
  {urls: ['<all_urls>']}, // works for all urls
  ['blocking', 'requestHeaders'] // blocking is needed to modify the requestHeaders
);