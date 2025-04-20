document.addEventListener('DOMContentLoaded', () => {
  const openCobaltButton = document.getElementById('openCobaltPopupButton');

  openCobaltButton.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url) {
        navigator.clipboard.writeText(currentTab.url).then(() => {
          window.open('https://cobalt.tools/');
        }).catch(err => {
          console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
        });
      } else {
        window.open('https://cobalt.tools/');
      }
    });
    window.close(); // Schließt das Popup nach dem Klicken
  });
});