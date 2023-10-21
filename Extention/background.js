// chrome.action.onClicked.addListener((tab) => {
//   console.log('Icon Clicked. Tab:', tab);

//   if (tab.url) {
//     let address = tab.url;
//     openPopup(address, tab.id);
//   } else {
//     console.log("tab.url not resent: ", tab);
//   }
// });

// function openPopup(url, tabId) {
//   let popupPath;

//   if (url.includes('https://www.dndbeyond.com/homebrew')) {
//     // Set the path for the right HTML file with tabId as a query parameter
//     popupPath = `html/rightPage/rightPage.html?tabId=${tabId}`;
//     console.log('Opened Right Page Popup');
//   } else {
//     // Set the path for the wrong HTML file
//     popupPath = 'html/wrongPage/wrongPage.html';
//     console.log('Opened Wrong Page Popup');
//   }

//   // Open the specified HTML file as a pop-up
//   chrome.windows.create({
//     type: 'popup',
//     url: chrome.runtime.getURL(popupPath),
//     width: 400,
//     height: 300
//   });
// }

// Function to check if the URL is a valid homebrew URL
function isHomebrewURL(url) {
  return url.startsWith('https://www.dndbeyond.com/homebrew') && url.endsWith('edit');
}

// Function to inject 'injection.js' into the page
function injectScript(tabId) {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: ['injection.js']
  }, function () {
    console.log('injection.js executed in tab:', tabId);
  });
}

function atemptInjection(tab){
  if (tab.url) {
    // Check if the URL is a valid homebrew URL
    if (isHomebrewURL(tab.url)) {
      // Inject 'injection.js' into the active tab
      injectScript(tab.id);
    }
  } else {
    console.log("tab.url not present: ", tab);
  }
}

// Event listener for the extension icon click
chrome.action.onClicked.addListener((tab) => {
  console.log('Icon Clicked. Tab:', tab);

  atemptInjection(tab);
  
});

// Event listener for tab updates (including page reloads)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, updatedTab) => {
  if (changeInfo.status === "complete" && updatedTab) {
    atemptInjection(updatedTab);
  } else {
    console.log("Waiting for tab completion.");
  }
});

chrome.tabs.onActivated.addListener((activeInfo) => {
  chrome.tabs.get(activeInfo.tabId, (tab) => {
    if (tab) {
      console.log("registered tab activation");
      atemptInjection(tab);
    } else {
      console.log("Tab not found.");
    }
  });
});