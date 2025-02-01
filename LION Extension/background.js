chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.filename) {
      console.log("CSV Filename:", request.filename);
    }
  });