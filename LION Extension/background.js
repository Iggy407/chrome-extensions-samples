chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPopup") {
      chrome.action.openPopup();
      chrome.runtime.sendMessage({ action: "showPopup", fileName: request.fileName });
    }
  });