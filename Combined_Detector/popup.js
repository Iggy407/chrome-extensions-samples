chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: () => {
        // Try to find the CSV element
        let csvElement = document.querySelector('p.sc-gQaihK.sc-bwmSDE.bwaGMg.eYOaSs');
        console.log("CSV Element:", csvElement);
  
        // Try to find the Excel element
        let excelElement = document.querySelector('span.name');
        console.log("Excel Element:", excelElement);
  
        let filename = null;
        let fileType = null;
  
        if (csvElement) {
          filename = csvElement.textContent;
          console.log("CSV Filename (textContent):", filename);
          fileType = 'CSV';
        } else if (excelElement) {
          filename = excelElement.textContent || excelElement.getAttribute('title');
          console.log("Excel Filename (textContent or title):", filename);
          fileType = 'Excel';
        }
  
        if (filename && fileType) {
          chrome.runtime.sendMessage({ filename: filename, fileType: fileType });
        } else {
          chrome.runtime.sendMessage({ filename: "Filename element not found." });
        }
      },
    });
  });
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.filename && request.fileType) {
      document.getElementById('filename').textContent = `${request.fileType} Filename: ${request.filename}`;
    } else {
      document.getElementById('filename').textContent = request.filename;
    }
  });