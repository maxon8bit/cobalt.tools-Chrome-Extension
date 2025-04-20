document.addEventListener('DOMContentLoaded', () => {
  const openCobaltButton = document.getElementById('openCobaltButton');

  openCobaltButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url.includes("youtube.com")) {
        chrome.scripting.executeScript({
          target: { tabId: currentTab.id },
          function: () => {
            const currentUrl = window.location.href;
            navigator.clipboard.writeText(currentUrl).then(() => {
              window.open('https://cobalt.tools/');
            }).catch(err => {
              console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
            });
          }
        });
      } else {
        window.open('https://cobalt.tools/');
      }
    });
  });
});