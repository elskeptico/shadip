const canvas = document.querySelector(".glsl-canvas");
const sandbox = new GlslCanvas(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ip = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

fetch('2.frag')
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