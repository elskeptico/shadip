import GlslCanvas from 'glsl-canvas-js';

const canvas = document.querySelector(".glsl-canvas");
const sandbox = new GlslCanvas(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const shader = `
precision mediump float;
uniform vec2 u_resolution;

void main() {
    // Normalize coordinates between 0.0 and 1.0
    vec2 st = gl_FragCoord.xy / u_resolution;
    
    // Output color based on X and Y pixel positions
    gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
}

`;

sandbox.load(shader);