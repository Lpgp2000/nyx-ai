window.addEventListener('load', () => {
  function checkConnection() {
    if (navigator.onLine) {
      console.log('NYX: Online. Reconnecting to system...');
      // Trigger the reconnection to your cloud or services here
    } else {
      console.log('NYX: Offline. Waiting for connection...');
    }
  }

  // Check every 5 seconds
  setInterval(checkConnection, 5000);

  checkConnection(); // Initial check
});
