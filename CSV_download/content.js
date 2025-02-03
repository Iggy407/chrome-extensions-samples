(function() {
  function clickDownloadButton() {
    const buttonSelector = 'button.sc-edmcci.cKvyOD.sc-dubKuk.ksfWT';
    const button = document.querySelector(buttonSelector);

    if (button) {
      console.log('Inspected button found. Triggering click.');
      button.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else {
      console.error('Inspected button not found. Retrying...');
      setTimeout(clickDownloadButton, 500);
    }
  }

  function initiateDownload() {
    const downloadAreaSelector = '.sc-gQkENW.hyybuT';
    const downloadArea = document.querySelector(downloadAreaSelector);

    if (downloadArea) {
      console.log('Download area found. Triggering click.');
      downloadArea.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
    } else {
      console.error('Download area not found. Retrying...');
      setTimeout(initiateDownload, 500);
    }
  }

  // Check if the page is fully loaded
  if (document.readyState === 'complete') {
    clickDownloadButton();
    setTimeout(initiateDownload, 500);
  } else {
    window.addEventListener('load', () => {
      clickDownloadButton();
      setTimeout(initiateDownload, 500);
    });
  }
})();