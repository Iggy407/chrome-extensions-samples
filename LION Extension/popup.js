chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showPopup" && request.fileName) {
      document.getElementById("fileName").textContent = "File Name: " + request.fileName;
    }
  });