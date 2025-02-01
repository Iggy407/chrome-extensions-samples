// content.js

// Try to find the element with the specific classes
let element = document.querySelector('p.sc-gQaihK.sc-bwmSDE.bwaGMg.eYOaSs');

// If not found, try with a more generic selector
if (!element) {
  element = document.querySelector('p[class*="sc-"]');
}

if (element) {
  const filename = element.textContent;
  console.log("CSV Filename:", filename);
  // You can now send this filename to the background script or do something else with it.
} else {
  console.log("CSV filename element not found.");
}