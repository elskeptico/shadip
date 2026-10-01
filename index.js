let number;

async function getip() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        let ip = data.ip;
        console.log("ip address:" + data.ip);
        return data.ip;
    } catch {
        alert("Switching to random numbers because something went wrong:" + error);

    }
}

getrandomnumbers() {
    let num;
    for i in (i=0, i<=10, i++) {
        let newnum = Math.floor(Math.random()).toString;
        num += newnum;
    }
}

if (localStorage.getItem("allowed") == "true") {
    number = getip();
} else if (localStorage.getItem("allowed") == "false") {
    number = getrandomnumbers();
} else {
    let allowed = ("This site reads your IP address to generate a shader. Getting your exact address by looking at the shader is nigh impossible, and if you're not showing it to a huge amount of people there's no reason not to allow it. Pressing 'OK' will remember your choice and go forward with the normal logic. Pressing 'cancel' will generate random numbers and use those instead.");
    if (allowed) {
        localStorage.s("allowed", "true")
        number = getip();
    } else {
        localStorage.s("allowed", "false")
        number = getrandomnumbers();
    }
}

