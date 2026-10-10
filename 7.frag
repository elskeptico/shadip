#ifdef GL_ES
precision mediump float;
#endif

varying highp vec2 uv;
uniform float var_1;
uniform float array_2;
uniform float var_3;
uniform highp float time;
uniform sampler2D colorTextureSampler;

highp float getColorShiftFactor(highp vec3 color) {
  return clamp(ceil(3.0 - (color.r + color.g + color.b)), 0.0, 1.0);
}

void main() {
  highp float colorShift = cos(time / var_3 * 200);
  highp vec4 textureColor = texture2D(colorTextureSampler, uv);
  highp float finalColorShift = getColorShiftFactor(textureColor.rgb) * colorShift;
  gl_FragColor = vec4(clamp(textureColor.rgb - finalColorShift, 0.0, 1.0), textureColor.a);
}