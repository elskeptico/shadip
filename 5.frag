#ifdef GL_ES
precision mediump float;
#endif
uniform highp vec2 resolution;
uniform float var_1;
uniform float array_2;
uniform float var_3;
void main() {
  highp vec2 tilingResolution = vec2(var_1, var_2);
  highp vec2 coordinates = gl_FragCoord.xy / resolution;

  highp vec2 blockCenter = vec2(0.5, 0.5);
  highp vec2 blockCoordinates = fract(coordinates * tilingResolution);

  highp float distanceFromCenter = distance(blockCenter, blockCoordinates);
  highp float centerFactor = 1.0 - distanceFromCenter;

  highp float fragmentColor = pow(centerFactor, 3.0);
  gl_FragColor = vec4(vec3(fragmentColor), 1.0);
}