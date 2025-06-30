
async function fetchPrices() {
    const container = document.getElementById("prices");
    container.innerHTML = "جاري تحديث الأسعار...";
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,terra-luna,pepe,shiba-inu&vs_currencies=usd");
        const data = await res.json();
        container.innerHTML = `
            <ul>
                <li>Bitcoin (BTC): $${data.bitcoin.usd}</li>
                <li>Ethereum (ETH): $${data.ethereum.usd}</li>
                <li>BNB: $${data.binancecoin.usd}</li>
                <li>LUNC: $${data["terra-luna"].usd}</li>
                <li>PEPE: $${data.pepe.usd}</li>
                <li>SHIBA: $${data["shiba-inu"].usd}</li>
            </ul>
        `;
    } catch (err) {
        container.innerHTML = "حدث خطأ أثناء تحميل الأسعار.";
    }
}
setInterval(fetchPrices, 10000);
fetchPrices();
