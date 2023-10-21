chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed or updated!');
  });
  
  // Listen for changes in the active tab
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      // Check if the URL matches the desired website
      if (isOnDesiredWebsite(changeInfo.url)) {
        // Update the extension's popup HTML to a different file
        chrome.action.setPopup({ popup: 'html/rightPage/rightPage.html' });
      } else {
        // If not on the desired website, revert to the original popup HTML
        chrome.action.setPopup({ popup: 'html/wrongPage/wrongPage.html' });
      }
    }
  });

// Function to check if the URL matches the desired website
function isOnDesiredWebsite(url) {
  // Modify this condition based on the actual website URL
  return url.includes('https://www.dndbeyond.com/homebrew');
}