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
  fileType = 'CSV'; // Assume it's a CSV file if the element is found
} else if (excelElement) {
  filename = excelElement.textContent || excelElement.getAttribute('title');
  console.log("Excel Filename (textContent or title):", filename);
  fileType = 'Excel'; // Assume it's an Excel file if the element is found
}

if (filename && fileType) {
  console.log(`${fileType} Filename:`, filename);
  chrome.runtime.sendMessage({ filename: filename, fileType: fileType });
} else {
  console.log("Filename element not found.");
  chrome.runtime.sendMessage({ filename: "Filename element not found." });
}