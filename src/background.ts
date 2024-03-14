function checkAndCloseTab(tab: chrome.tabs.Tab): void {
  if (
    tab?.pendingUrl?.indexOf("http://localhost:8020") !== -1 ||
    tab?.pendingUrl?.indexOf("http://127.0.0.1:8020") !== -1
  ) {
      chrome.tabs
        .remove(tab.id ? tab.id : -1)
        .catch((error) => console.error(error))
        .then(() => {
          console.log(`tab closed with title ${tab?.title} url ${tab?.url}`);
        });
  } else {
    console.log(`tab not closed, url ${tab.url}, pendingUrl ${tab.pendingUrl}`);
  }
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status !== "complete") {
    return;
  }
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
