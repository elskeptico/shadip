#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution
uniform float u_time;

uniform vec3 u_color1;
uniform vec3 u_color2;
uniform float u_speed;

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    float wave = sin(st.x * 10.0 + u_time * u_speed) * 0.5 + 0.5
    vec3 finalColor = mix(u_color1, u_color1, wave);
    gl_FragColor = vec4(finalColor, 1.0);
}