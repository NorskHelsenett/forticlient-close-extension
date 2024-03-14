function checkAndCloseTab(tab: chrome.tabs.Tab): void {
  if (
    tab?.pendingUrl?.indexOf("http://localhost:8020") !== -1 ||
    tab?.pendingUrl?.indexOf("http://127.0.0.1:8020") !== -1
  ) {
    setTimeout(() => {
      chrome.tabs
        .remove(tab.id ? tab.id : -1)
        .then(() => {
          console.log(`tab closed with title ${tab?.title} url ${tab?.url}`);
        });
    }, 1000);
  } else {
    console.log(`tab not closed, url ${tab.url}, pendingUrl ${tab.pendingUrl}`);
  }
}

chrome.tabs.onCreated.addListener((tab) => {
  if (
    tab.url?.startsWith("chrome://") ||
    tab.url?.startsWith("chrome-extension://")
  ) {
    return undefined;
  }
  checkAndCloseTab(tab);
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  chrome.tabs.query(
    {
      url: ["http://localhost:8020/*", "http://127.0.0.1:8020/*"],
    },
    (tabs) => {
      tabs.forEach((tab) => {
        checkAndCloseTab(tab);
      });
    }
  );
});
