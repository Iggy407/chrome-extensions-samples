(function() {
    function initiateDownload() {
      const downloadAreaSelector = '.sc-gQkENW.hyybuT';
      const downloadArea = document.querySelector(downloadAreaSelector);
  
      if (downloadArea) {
        console.log('Download area found. Triggering click.');
        downloadArea.click();
      } else {
        console.error('Download area not found.');
      }
    }
  
    // Wait for the page to fully load before trying to find the element
    if (document.readyState === 'complete') {
      initiateDownload();
    } else {
      window.addEventListener('load', initiateDownload);
    }
  })();