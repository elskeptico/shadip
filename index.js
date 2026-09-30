async function getip() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        console.log("ip address:" + data.ip)
        return data.ip;
    } catch {
        
    }
}