chrome.runtime.onInstalled.addListener((details) => {
  const version = details.version;
  console.log(`Extension installed or updated! Version: ${version}`);
});



chrome.action.onClicked.addListener((tab) => {
  console.log('Icon Clicked. Tab:', tab);

  if (tab.url) {
    let address = tab.url;
    openPopup(address);
  } else {
    console.log("tab.url not resent: ", tab);
  }
});

// Function to check if the URL starts with the desired website
function openPopup(url) {
  let popupPath;

  if (url.includes('https://www.dndbeyond.com/homebrew')) {
    // Set the path for the right HTML file
    popupPath = 'html/rightPage/rightPage.html';
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
    width: 400,  // Adjust the width as needed
    height: 300  // Adjust the height as needed
  });
}