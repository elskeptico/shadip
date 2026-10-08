const canvas = document.querySelector(".glsl-canvas");
const sandbox = new GlslCanvas(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//gets ip of target user, if unable to then just generates random numbers
async function getip() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        let ip = data.ip;
        ip = ip.replaceAll('.', '');
        let iparray = Array.from(ip, Number);
        console.log("ip address:" + ip);
        return iparray;
    } catch {
        alert("Switching to random numbers because something went wrong:" + error);
        let ip = getrandomnumbers();
        return ip;
    }
}


//makes ten random numbers shoves them together and outputs them
function getrandomnumbers() {
    let num;
    for (let i=0; i<=10; i++) {
        let newnum = Math.floor(Math.random() * 10).toString;
        num += newnum;
    }
}

const ip = getip();

//get fragment and vertex files based on ip
const fragfile = ip[1].toString + '.frag'
const vertfile = ip[2].toString + '.vert'

//tries to get fragment file
fetch(fragfile)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load shader: ${response.statusText}`);
        }
        return response.text();
    })
    .then(shaderCode => {
        sandbox.load(shaderCode);

        const array = [ip[4], ip[5], ip[6]]

        sandbox.setUniform('var_1', ip[3]);
        sandbox.setUniform('color_2', array); 
        sandbox.setUniform('var_3', ip[7]);
    })
    .catch(error => {
        console.error("Error loading the shader file:", error);
    });