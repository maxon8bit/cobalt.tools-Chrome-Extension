(function() {
  console.log('Content-Skript geladen - neben Abonnieren (Flexbox)'); // TEST
  let buttonAdded = false;

  function addButton() {
    if (buttonAdded) {
      return;
    }

    const subscribeContainer = document.querySelector('ytd-subscribe-button-renderer.style-scope.ytd-watch-metadata');

    if (subscribeContainer) {
      const cobaltButton = document.createElement('button');
      cobaltButton.textContent = 'Zu Cobalt';
      cobaltButton.classList.add(
        'yt-spec-button-shape__button',
        'yt-spec-button-shape__button--tonal',
        'yt-spec-button-shape__button--size-m'
      );
      cobaltButton.style.marginLeft = '8px';

      // Layout-Anpassungen für die Platzierung neben dem Button
      subscribeContainer.style.display = 'flex';
      subscribeContainer.style.flexDirection = 'row';
      subscribeContainer.style.alignItems = 'center'; // Vertikale Ausrichtung zentrieren

      cobaltButton.addEventListener('click', () => {
        const currentUrl = window.location.href;
        navigator.clipboard.writeText(currentUrl).then(() => {
          window.open('https://cobalt.tools/');
        }).catch(err => {
          console.error('Fehler beim Kopieren in die Zwischenablage: ', err);
        });
      });

      subscribeContainer.appendChild(cobaltButton);
      buttonAdded = true;
    } else {
      console.log('Abonnieren-Container nicht gefunden (Flexbox).'); // Für Fehlersuche
    }
  }

  addButton();

  const observer = new MutationObserver(addButton);
  observer.observe(document.querySelector('#page-manager'), { subtree: true, childList: true });
})();