#ifdef GL_ES
precision mediump float;
#endif
varying highp vec2 uv;

uniform sampler2D colorTextureSampler;
uniform float var_1;
uniform float array_2;
uniform float var_3;
void main() {
  gl_FragColor = texture2D(colorTextureSampler, uv);
}
