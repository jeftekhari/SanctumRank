document.addEventListener('DOMContentLoaded', () => {
  if (chrome && chrome.storage && chrome.storage.sync) {
    loadWallets();

    document.getElementById('check-wallet').addEventListener('click', async () => {
      const walletAddress = document.getElementById('wallet-address').value.trim();
      if (!walletAddress) {
        alert('Please select or enter a wallet address.');
        return;
      }

      saveWalletAddress(walletAddress);

      try {
        const data = await fetchDataFromAPI(walletAddress);
        const previousRank = await getPreviousRank(walletAddress);

        updateDOMWithUserData(data, previousRank);
        saveCurrentRank(walletAddress, data.globalRank);
        updateDOMWithPets(data.pets);
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        alert('Failed to fetch wallet data. Please try again.');
      }
    });
  } else {
    console.error('chrome.storage.sync is not available');
  }
});