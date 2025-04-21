document.addEventListener('DOMContentLoaded', () => {
  const openCobaltButton = document.getElementById('openCobaltPopupButton');

  if (openCobaltButton) {
    openCobaltButton.addEventListener('click', () => {
      console.log('Button wurde geklickt! (popup.js)');

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log('Tabs im Popup:', tabs);
        const currentTab = tabs[0];
        if (currentTab && currentTab.url) {
          navigator.clipboard.writeText(currentTab.url)
            .then(() => {
              console.log('URL im Popup kopiert:', currentTab.url);
              window.open('https://cobalt.tools/');
            })
            .catch(err => {
              console.error('Fehler beim Kopieren im Popup: ', err);
            });
        } else {
          console.log('Kein aktiver Tab oder keine URL im Popup gefunden.');
          window.open('https://cobalt.tools/');
        }
        window.close();
      });
    });
  } else {
    console.error('Button-Element mit der ID "openCobaltPopupButton" nicht gefunden!');
  }
});
