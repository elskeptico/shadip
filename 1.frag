#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

precision highp float;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform float var_1;
uniform float array_2;
uniform float var_3;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / var_1;

	float color = 0.0;
	color += sin( position.x * cos( time / 15.0 ) * var_3 * 3) + cos( position.y * cos( time / var_1 ) * 10.0 );
	color += sin( position.y * sin( time / 10.0 ) * var_3 ) + cos( position.x * sin( time / 25.0 ) * 40.0 );
	color += sin( position.x * sin( time / 5.0 ) * 10.0 ) + sin( position.y * sin( time / var_3 ) * 80.0 );
	color *= sin( time / 10.0 ) * 0.5;

	gl_FragColor = vec4( vec3( color, color * 6.4, sin( color + time / 3.0 ) * 0.75 ), 1.0 );

}