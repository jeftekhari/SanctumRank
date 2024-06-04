function updateDOMWithUserData(data, previousRank = null) {
    const numberFormatter = new Intl.NumberFormat();
  
    document.getElementById('totalExp').textContent = `Total Exp: ${numberFormatter.format(data.totalExp)}`;
    document.getElementById('globalRank').textContent = `Global Rank: ${numberFormatter.format(data.globalRank)}`;
    document.getElementById('referralLevel').textContent = `Referral Level: ${numberFormatter.format(data.referralLevel)}`;
  
    if (previousRank !== null) {
      const rankChange = data.globalRank - previousRank;
      const rankChangeElement = document.createElement('span');
      rankChangeElement.textContent = rankChange > 0 ? ` (+${rankChange})` : ` (${rankChange})`;
      rankChangeElement.style.color = rankChange > 0 ? 'red' : 'green';
      document.getElementById('globalRank').appendChild(rankChangeElement);
    }
  }
  
  function updateDOMWithPets(pets) {
    const petsListContainer = document.getElementById('pets-list');
    petsListContainer.innerHTML = '';
  
    if (pets && pets.length > 0) {
      document.getElementById("pets-listheader").hidden = false;
  
      const petList = document.createElement('ul');
      petList.classList.add('pet-grid');
      pets.forEach(pet => {
        const petName = getPetNameFromMint(pet.mint);
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('pet-container');
        
        const img = document.createElement('img');
        img.src = petName;
        img.alt = petName.split('.')[0];
        imgContainer.appendChild(img);
  
        const levelText = document.createElement('span');
        levelText.classList.add('pet-level');
        levelText.textContent = `${pet.level}`;
        imgContainer.appendChild(levelText);
  
        const listItem = document.createElement('li');
        listItem.appendChild(imgContainer);
        petList.appendChild(listItem);
      });
      petsListContainer.appendChild(petList);
    } else {
      document.getElementById('pets-list').innerHTML = '';
    }
  }
  
  function getPetNameFromMint(mint) {
    const petNames = {
      "5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm": "icons/Infinitie.png",
      "BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs": "icons/Bonksie.png",
      "Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h": "icons/Compie.png",
      "Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ": "icons/Driftie.png",
      "GRJQtWwdJmp5LLpy8JWjPgn5FnLyqSJGNhn5ZnCTFUwM": "icons/Clocksie.png",
      "HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX": "icons/Hubbie.png",
      "LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X": "icons/Lainie.png",
      "LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg": "icons/Lanternie.png",
      "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A": "icons/Helie.png",
      "jucy5XJ76pHVvtPZb5TKRcGQExkwit2P5s4vY8UzmpC": "icons/Jucie.png",
      "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v": "icons/Jupitie.png",
      "pWrSoLAhue6jUxUkbWgmEy5rD9VJzkFmvfTDV5KgNuu": "icons/Powie.png",
      "pathdXw4He1Xk3eX84pDdDZnGKEme3GivBamGCVPZ5a": "icons/Teafsie.png",
      "picobAEvs6w7QEknPce34wAE4gknZA9v5tTonnmHYdX": "icons/Picolo.png",
      "st8QujHLPsX3d6HG9uQg9kJ91jFxUgruwsb1hyYXSNd": "icons/Stakie.png",
      "strng7mqqc1MBJJV6vMzYbEqnwVGvKKGKedeCvtktWA": "icons/Stonkie.png",
      "suPer8CPwxoJPQ7zksGMwFvjBQhjAHwUMmPV4FVatBw": "icons/Superfastie.png",
      "vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7": "icons/Vaultie.png"
    };
    return petNames[mint] || "UnknownPet.png";
  }