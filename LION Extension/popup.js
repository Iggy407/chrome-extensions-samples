chrome.storage.local.get(["xlsFilename"], (result) => {
    const messageDiv = document.getElementById("message");
    if (result.xlsFilename) {
      messageDiv.textContent = `Here is an XLS file named: ${result.xlsFilename}`;
    } else {
      messageDiv.textContent = "No XLS file detected.";
    }
  });