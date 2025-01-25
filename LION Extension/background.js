chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.type === 'excelFilesDetected') {
      console.log('Excel files detected:', message.files);
    }
  });
  