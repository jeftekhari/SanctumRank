function loadWallets() {
    chrome.storage.sync.get(['wallets'], (data) => {
      const wallets = data.wallets || [];
      const walletsDatalist = document.getElementById('wallets');
  
      wallets.forEach(wallet => {
        const option = document.createElement('option');
        option.value = wallet;
        walletsDatalist.appendChild(option);
      });
    });
  }
  
  function saveWalletAddress(walletAddress) {
    chrome.storage.sync.get('wallets', (data) => {
      const wallets = data.wallets || [];
      if (!wallets.includes(walletAddress)) {
        wallets.push(walletAddress);
        chrome.storage.sync.set({ wallets });
      }
    });
  
    chrome.storage.sync.set({ walletAddress });
  }
  
  function getPreviousRank(walletAddress) {
    return new Promise((resolve) => {
      chrome.storage.sync.get('previousRanks', (result) => {
        const previousRanks = result.previousRanks || {};
        resolve(previousRanks[walletAddress]);
      });
    });
  }
  
  function saveCurrentRank(walletAddress, currentRank) {
    chrome.storage.sync.get('previousRanks', (result) => {
      const previousRanks = result.previousRanks || {};
      previousRanks[walletAddress] = currentRank;
      chrome.storage.sync.set({ previousRanks });
    });
  }