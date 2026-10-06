const canvas = document.querySelector(".glsl-canvas");
const sandbox = new GlslCanvas(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



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


function getrandomnumbers() {
    let num;
    for (let i=0; i<=10; i++) {
        let newnum = Math.floor(Math.random() * 10).toString;
        num += newnum;
    }
}

const ip = getip();

const fragfile = ip[1].toString + '.frag'
const vertfile = ip[2].toString + '.vert'

fetch('2.frag')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Failed to load shader: ${response.statusText}`);
        }
        return response.text();
    })
    .then(shaderCode => {
        // Load the shader code into GlslCanvas
        sandbox.load(shaderCode);

        // Define your custom JS variables
        const array = [ip[4], ip[5], ip[6]]

        // Set your custom uniforms
        sandbox.setUniform('var_1', ip[3]);
        sandbox.setUniform('color_2', array); 
        sandbox.setUniform('var_3', ip[7]);
    })
    .catch(error => {
        console.error("Error loading the shader file:", error);
    });

sandbox.load(shader);