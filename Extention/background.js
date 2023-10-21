chrome.action.onClicked.addListener((tab) => {
  console.log('Icon Clicked. Tab:', tab);

  if (tab.url) {
    let address = tab.url;
    openPopup(address, tab.id);
  } else {
    console.log("tab.url not resent: ", tab);
  }
});

function openPopup(url, tabId) {
  let popupPath;

  if (url.includes('https://www.dndbeyond.com/homebrew')) {
    // Set the path for the right HTML file with tabId as a query parameter
    popupPath = `html/rightPage/rightPage.html?tabId=${tabId}`;
    console.log('Opened Right Page Popup');
  } else {
    // Set the path for the wrong HTML file
    popupPath = 'html/wrongPage/wrongPage.html';
    console.log('Opened Wrong Page Popup');
  }

  // Open the specified HTML file as a pop-up
  chrome.windows.create({
    type: 'popup',
    url: chrome.runtime.getURL(popupPath),
    width: 400,
    height: 300
  });
}

