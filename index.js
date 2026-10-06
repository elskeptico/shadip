// 3. Define your Fragment Shader string
        const fragmentShaderSource = `
            #ifdef GL_ES
            precision mediump float;
            #endif

            // Default uniforms provided by GlslCanvas automatically
            uniform vec2 u_resolution;
            uniform float u_time;

            // Custom uniforms passed from JavaScript
            uniform vec3 u_color1;
            uniform vec3 u_color2;
            uniform float u_speed;

            void main() {
                // Normalize pixel coordinates
                vec2 st = gl_FragCoord.xy / u_resolution.xy;

                // Create a moving wave pattern using our custom speed uniform
                float wave = sin(st.x * 10.0 + u_time * u_speed) * 0.5 + 0.5;

                // Mix our two custom colors based on the wave pattern
                vec3 finalColor = mix(u_color1, u_color2, wave);

                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;

        // 4. Initialize GlslCanvas on your canvas element
        const canvas = document.getElementById('my-shader');
        const sandbox = new GlslCanvas(canvas);

        // 5. Load the fragment shader string into the canvas
        sandbox.load(fragmentShaderSource);

        // 6. Set your custom uniforms from JS variables
        // Format: sandbox.setUniform('uniformName', value);
        const mySpeedValue = 2.5;
        
        sandbox.setUniform('u_speed', mySpeedValue);          // Pass a single float
        sandbox.setUniform('u_color1', 1.0, 0.4, 0.0);       // Pass vec3 (RGB: Orange)
        sandbox.setUniform('u_color2', 0.0, 0.8, 1.0);       // Pass vec3 (RGB: Blue)

        // You can update uniforms dynamically at any time (e.g., inside an event)
        window.addEventListener('click', () => {
            // Randomize color 2 on click
            sandbox.setUniform('u_color2', Math.random(), Math.random(), Math.random());
        });
