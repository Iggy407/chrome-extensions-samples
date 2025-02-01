chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      const headers = details.responseHeaders;
      const isXLS = headers.some(
        (header) =>
          header.name.toLowerCase() === "content-type" &&
          (header.value.toLowerCase() === "application/vnd.ms-excel" ||
            header.value.toLowerCase() ===
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
      );
  
      if (isXLS) {
        const url = new URL(details.url);
        const filename = url.pathname.split("/").pop();
        chrome.storage.local.set({ xlsFilename: filename });
        chrome.action.openPopup();
      }
    },
    { urls: ["<all_urls>"] },
    ["responseHeaders"]
  );