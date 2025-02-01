chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        // Try to find the element with the specific classes
        let element = document.querySelector('p.sc-gQaihK.sc-bwmSDE.bwaGMg.eYOaSs');
  
        // If not found, try with a more generic selector
        if (!element) {
          element = document.querySelector('p[class*="sc-"]');
        }
  
        if (element) {
          const filename = element.textContent;
          chrome.runtime.sendMessage({ filename: filename });
        } else {
          chrome.runtime.sendMessage({ filename: "CSV filename element not found." });
        }
      },
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.filename) {
      document.getElementById('filename').textContent = request.filename;
    }
  });