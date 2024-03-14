export {};
function closeTab(tab: any): void {
  console.log("start closeTab");
  if (
    tab.url.indexOf("http://localhost:8020") !== -1 ||
    tab.url.indexOf("http://127.0.0.1:8020") !== -1
  ) {
    console.log("about to close tab");
    setTimeout(() => {
      chrome.tabs
        .remove(tab.id)
        .catch((error) => {
          console.error(error);
        })
        .then(() => {
          console.log("tab closed");
        });
    }, 1000);
  }
}

async function run() {
  const tabs = await chrome.tabs.query({
    url: ["http://localhost:8020/*", "http://127.0.0.1:8020/*"],
  });
  console.log(tabs);
  tabs.forEach((tab) => {
    closeTab(tab);
  });
}

run();
