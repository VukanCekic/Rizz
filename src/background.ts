chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && /^http/.test(tab.url ?? '')) {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ['./popup.js'],
      })
      // eslint-disable-next-line promise/always-return
      .then(() => {
        console.log('INJECTED THE FOREGROUND SCRIPT.');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
