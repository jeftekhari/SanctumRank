async function fetchDataFromAPI(walletAddress) {
    const url = `https://wonderland-api2.ngrok.dev/s1/user/full?pk=${walletAddress}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    return await response.json();
  }