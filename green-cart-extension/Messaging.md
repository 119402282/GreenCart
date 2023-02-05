# Send Messages from host to the Extension

```ts

var port = chrome.runtime.connect();

window.addEventListener("message", (event) => {
  // We only accept messages from ourselves
  if (event.source !== window) {
    return;
  }

  if (event.data.type && (event.data.type === "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

```

```ts
document.getElementById("theButton").addEventListener("click", () => {
  window.postMessage(
      {type : "FROM_PAGE", text : "Hello from the webpage!"}, "*");
}, false);
```
