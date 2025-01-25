chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked.'); // Log when the icon is clicked

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      func: detectExcelFiles
    },
    (results) => {
      if (chrome.runtime.lastError) {
        console.error('Error executing script:', chrome.runtime.lastError.message);
      } else {
        console.log('Script executed successfully.', results);
      }
    }
  );
});

function detectExcelFiles() {
  console.log('Detecting Excel files on the page...'); // Log the function call

  const links = document.querySelectorAll('a[href], path');  // Include paths for SVGs and other elements
  let found = false;

  links.forEach((link) => {
    let href = link.getAttribute('href');
    
    // Handle missing href for SVG <path> elements
    if (!href && link instanceof SVGPathElement) {
      href = link.closest('a')?.getAttribute('href'); // Try to find a parent <a>
    }

    console.log('Element href or related URL:', href);  // Log each link being processed

    if (href && href.match(/\.(xls|xlsx|xlsm)$/i)) {
      const fileName = href.split('/').pop();
      alert(`There is an Excel file here called '${fileName}'`);
      found = true;
    }
  });

  if (!found) {
    alert('No Excel files detected on this page.');
  }
}
