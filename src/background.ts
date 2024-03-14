function checkAndCloseTab(tab: chrome.tabs.Tab): void {
  console.log("start closeTab");
  console.log("tab", tab);
  
  if (
    tab?.pendingUrl?.indexOf("http://localhost:8020") !== -1 ||
    tab?.pendingUrl?.indexOf("http://127.0.0.1:8020") !== -1
  ) {
    console.log("about to close tab");
    setTimeout(() => {
      chrome.tabs
        .remove(tab.id ? tab.id : -1)
        .catch((error) => {
          console.error(error);
        })
        .then(() => {
          console.log("tab closed");
        });
    }, 1000);
  } else {
    console.log("tab not closed, url", tab.pendingUrl)
  }
}

chrome.tabs.onCreated.addListener((tab) => {
  console.log("onCreated tab");
  if (
    tab.url?.startsWith("chrome://") ||
    tab.url?.startsWith("chrome-extension://")
  ) {
    return undefined;
  }
  checkAndCloseTab(tab);
});
