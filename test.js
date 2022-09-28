async function connectWallet() {
    if (typeof window.ethereum != undefined) {
        console.log('connect wallet');
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('connectBtn').innerHTML = 'Connected!';
    } else {
        console.log('please install metamask');
    }
}
