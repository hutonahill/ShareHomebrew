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

// Function to check if the buttons exist in the current tab's HTML
function buttonsExistInHTML(callback) {
  // Query information about the currently active tab in the current window
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // Check if the tabs array is not empty, if the first tab has an ID, and if it has a valid URL
    if (tabs && tabs[0] && tabs[0].id && tabs[0].url && tabs[0].url.startsWith('http')) {
      // Execute a script in the context of the active tab
      chrome.scripting.executeScript({
        // Specify the target tab using its ID
        target: { tabId: tabs[0].id },
        // Define the script to be executed
        func: function () {
          // Check if the buttons exist in the HTML of the active tab
          var readButton = document.getElementById('readButton');
          var writeButton = document.getElementById('writeButton');
          
          // Return whether both buttons exist
          return readButton !== null && writeButton !== null;
        }
      }, function (result) {
        // Pass the result of the script execution to the callback function
        callback(result);
      });
    } else {
      // If there is no active tab or it has no ID or URL, or if the URL is not valid, indicate that buttons don't exist
      callback(false);
    }
  });
}

function attemptInjection(tab) {
  if (tab && tab.url) {
    // Check if the URL is a valid homebrew URL
    if (isHomebrewURL(tab.url)) {
      // Inject 'injection.js' into the active tab
      injectScript(tab.id);
    } else {
      console.log("Not a valid homebrew URL:", tab.url);
    }
  } else {
    console.log("Tab or tab.url does not exist.");
  }
}

// Event listener for the extension icon click
chrome.action.onClicked.addListener((tab) => {
  console.log('Icon Clicked. Tab:', tab);
  attemptInjection(tab);
});

// Event listener for tab updates (including page reloads)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, updatedTab) => {
  if (changeInfo.status === "complete" && updatedTab) {
    attemptInjection(updatedTab);
  } else {
    console.log("Waiting for tab completion.");
  }
});

// Event listener for web navigation completed (including page reloads)
chrome.webNavigation.onCompleted.addListener((details) => {
  console.log('Web Navigation Completed. Tab ID:', details.tabId);
  chrome.tabs.get(details.tabId, (tab) => {
    if (tab) {
      attemptInjection(tab);
    } else {
      console.log("Tab not found.");
    }
  });
}, { url: [{ urlContains: 'https://www.dndbeyond.com/homebrew' }] });
