chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // This listener is not needed here anymore
  });
  
  function checkXLSIcon() {
    const xlsIcon = document.querySelector('g > path');
    if (xlsIcon && xlsIcon.getAttribute('d').startsWith('M485 310h-30c-8 0-15 7-15 15v100c0 8-7 15-15 15H95c-8 0-15-7-15-15V325c0-8-7-15-15-15H35c-8 0-15 7-15 15v135a40 40 0 0040 40h400a40 40 0 0040-40V325c0-8-7-15-15-15zm-235 66c6 6 15 6 21 0l135-135c6-6 6-15 0-21l-21-21c-6-6-15-6-21 0l-56 56c-6 6-17 2-17-7V35c-1-8-9-15-16-15h-30c-8 0-15 7-15 15v212c0 9-11 13-17 7l-56-56c-6-6-15-6-21 0l-21 22c-6 6-6 15 0 21z')) {
      const fileCropElement = document.querySelector('a.slds-file__crop');
      if (fileCropElement) {
        const sibling = fileCropElement.nextElementSibling;
        if (sibling) {
          const fileName = sibling.textContent.trim().replace(sibling.children[0].textContent.trim(), "");
          chrome.runtime.sendMessage({ action: "showPopup", fileName: fileName });
        }
      }
    }
  }
  
  setTimeout(checkXLSIcon, 500);