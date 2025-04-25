chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openCobalt",
    title: "open cobalt.tools ",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openCobalt" && tab.url.includes("youtube.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
          window.open('https://cobalt.tools/');
        }).catch(err => {
          console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
        });
      }
    });
  }
});