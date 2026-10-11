#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float var_1;
uniform float array_2;
uniform float var_3;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    
    vec2 mouse = u_mouse.xy / u_resolution.xy;

    vec2 toMouse = mouse - st;
    float dist = length(toMouse);

    float wave = sin(dist * var_3 - u_time * 5.0) * var_1 + var_3;

    vec3 color = vec3(st.x * wave, st.y * (1.0 - wave), wave + mouse.x);

    gl_FragColor = vec4(color, 1.0);
}
