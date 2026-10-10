#ifdef GL_ES
precision mediump float;
#endif
varying highp vec3 color;
uniform float var_1;
uniform float array_2;
uniform float var_3;
uniform highp float time;

void main() {
  highp float colorShift = cos(time / var_1 * 200);
  gl_FragColor = vec4(clamp(color - colorShift, 0.0, 1.0), 1.0);
}