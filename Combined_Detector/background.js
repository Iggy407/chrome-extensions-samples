// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.filename) {
      console.log(`Received filename: ${request.filename}`);
    }
  });