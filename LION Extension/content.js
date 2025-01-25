// Find all links on the page
const links = document.querySelectorAll('a[href]');
let excelFiles = [];

// Check if any link points to an Excel file
links.forEach(link => {
  const href = link.href;
  if (href.endsWith('.xls') || href.endsWith('.xlsx')) {
    excelFiles.push(href);
  }
});

// Notify if Excel files are found
if (excelFiles.length > 0) {
  console.log('Excel files detected:', excelFiles);

  // Optionally send a message to the extension's popup or background script
  chrome.runtime.sendMessage({ type: 'excelFilesDetected', files: excelFiles });
}
