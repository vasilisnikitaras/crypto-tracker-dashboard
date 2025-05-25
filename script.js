async function fetchCryptoPrices() {
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano&vs_currencies=usd");
        const data = await response.json();

        const cryptoTable = document.getElementById("crypto-table");
        cryptoTable.innerHTML = `
            <tr><td>Bitcoin</td><td>$${data.bitcoin.usd}</td></tr>
            <tr><td>Ethereum</td><td>$${data.ethereum.usd}</td></tr>
            <tr><td>Cardano</td><td>$${data.cardano.usd}</td></tr>
        `;
    } catch (error) {
        console.error("Error fetching crypto prices:", error);
    }
}

// Refresh data every 10 seconds
setInterval(fetchCryptoPrices, 10000);
fetchCryptoPrices();
