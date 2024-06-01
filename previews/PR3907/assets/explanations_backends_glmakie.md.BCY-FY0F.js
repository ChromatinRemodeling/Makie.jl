import{_ as e,c as i,o as a,a6 as s}from"./chunks/framework.BVrzPbkj.js";const k=JSON.parse('{"title":"GLMakie","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/backends/glmakie.md","filePath":"explanations/backends/glmakie.md","lastUpdated":null}'),t={name:"explanations/backends/glmakie.md"},n=s(`<h1 id="GLMakie" tabindex="-1">GLMakie <a class="header-anchor" href="#GLMakie" aria-label="Permalink to &quot;GLMakie {#GLMakie}&quot;">​</a></h1><p><a href="https://github.com/MakieOrg/Makie.jl/tree/master/GLMakie" target="_blank" rel="noreferrer">GLMakie</a> is the native, desktop-based backend, and is the most feature-complete. It requires an OpenGL enabled graphics card with OpenGL version 3.3 or higher.</p><h2 id="Activation-and-screen-config" tabindex="-1">Activation and screen config <a class="header-anchor" href="#Activation-and-screen-config" aria-label="Permalink to &quot;Activation and screen config {#Activation-and-screen-config}&quot;">​</a></h2><p>Activate the backend by calling <code>GLMakie.activate!()</code>:</p><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="GLMakie.activate!" href="#GLMakie.activate!">#</a> <b><u>GLMakie.activate!</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">GLMakie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">activate!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(; screen_config</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Sets GLMakie as the currently active backend and also optionally modifies the screen configuration using <code>screen_config</code> keyword arguments. Note that the <code>screen_config</code> can also be set permanently via <code>Makie.set_theme!(GLMakie=(screen_config...,))</code>.</p><p><strong>Arguments one can pass via <code>screen_config</code>:</strong></p><p><strong>Renderloop</strong></p><ul><li><code>renderloop = GLMakie.renderloop</code>: Sets a function <code>renderloop(::GLMakie.Screen)</code> which starts a renderloop for the screen.</li></ul><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>The keyword arguments below are not effective if <code>renderloop</code> isn&#39;t set to <code>GLMakie.renderloop</code>, unless implemented in a custom renderloop function:</p></div><ul><li><p><code>pause_renderloop = false</code>: If <code>true</code>, creates a screen with a paused renderloop. The renderloop can be started with <code>GLMakie.start_renderloop!(screen)</code> and paused again with <code>GLMakie.pause_renderloop!(screen)</code>.</p></li><li><p><code>vsync = false</code>: Whether to enable vsync for the window.</p></li><li><p><code>render_on_demand = true</code>: If <code>true</code>, the scene will only be rendered if something has changed in it.</p></li><li><p><code>framerate = 30.0</code>: Sets the currently rendered frames per second.</p></li><li><p><code>px_per_unit = automatic</code>: Sets the ratio between the number of rendered pixels and the <code>Makie</code> resolution. It defaults to the value of <code>scalefactor</code> but may be any positive real number.</p></li></ul><p><strong>GLFW window attributes</strong></p><ul><li><p><code>float = false</code>: Whether the window should float above other windows.</p></li><li><p><code>focus_on_show = false</code>: If <code>true</code>, focuses the window when newly opened.</p></li><li><p><code>decorated = true</code>: Whether or not to show window decorations.</p></li><li><p><code>title::String = &quot;Makie&quot;</code>: Sets the window title.</p></li><li><p><code>fullscreen = false</code>: Whether to start the window in fullscreen mode.</p></li><li><p><code>debugging = false</code>: If <code>true</code>, starts the GLFW.Window/OpenGL context with debug output.</p></li><li><p><code>monitor::Union{Nothing, GLFW.Monitor} = nothing</code>: Sets the monitor on which the window should be opened. If set to <code>nothing</code>, GLFW will decide which monitor to use.</p></li><li><p><code>visible = true</code>: Whether or not the window should be visible when first created.</p></li><li><p><code>scalefactor = automatic</code>: Sets the window scaling factor, such as <code>2.0</code> on HiDPI/Retina displays. It is set automatically based on the display, but may be any positive real number.</p></li></ul><p><strong>Rendering constants &amp; Postprocessor</strong></p><ul><li><p><code>oit = false</code>: Whether to enable order independent transparency for the window.</p></li><li><p><code>fxaa = true</code>: Whether to enable fxaa (anti-aliasing) for the window.</p></li><li><p><code>ssao = true</code>: Whether to enable screen space ambient occlusion, which simulates natural shadowing at inner edges and crevices.</p></li><li><p><code>transparency_weight_scale = 1000f0</code>: Adjusts a factor in the rendering shaders for order independent transparency. This should be the same for all of them (within one rendering pipeline) otherwise depth &quot;order&quot; will be broken.</p></li><li><p><code>max_lights = 64</code>: The maximum number of lights with <code>shading = MultiLightShading</code></p></li><li><p><code>max_light_parameters = 5 * N_lights</code>: The maximum number of light parameters that can be uploaded. These include everything other than the light color (i.e. position, direction, attenuation, angles) in terms of scalar floats.</p></li></ul><p><a href="https://github.com/MakieOrg/Makie.jl/blob/07b02d495fc5cd4857d0bba823f41ad45ef2d001/GLMakie/src/screen.jl#L127-L136" target="_blank" rel="noreferrer">source</a></p></div><br><h4 id="Window-Scaling" tabindex="-1">Window Scaling <a class="header-anchor" href="#Window-Scaling" aria-label="Permalink to &quot;Window Scaling {#Window-Scaling}&quot;">​</a></h4><p>The sizes of figures are given in display-independent &quot;logical&quot; dimensions, and the GLMakie backend will scale the size of the displayed window on HiDPI/Retina displays automatically. For example, the default <code>size = (800, 600)</code> will be shown in a 1600 × 1200 window on a HiDPI display which is configured with a 200% scaling factor.</p><p>The scaling factor may be overridden by displaying the figure with a different <code>scalefactor</code> value:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig, scalefactor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>If the scale factor is not changed from its default automatic configuration, the window will be resized to maintain its apparent size when moved across displays with different scaling factors on Windows and OSX. (Independent scaling factors are not supported by X11, and at this time the underlying GLFW library is not compiled with Wayland support.)</p><h4 id="Resolution-Scaling" tabindex="-1">Resolution Scaling <a class="header-anchor" href="#Resolution-Scaling" aria-label="Permalink to &quot;Resolution Scaling {#Resolution-Scaling}&quot;">​</a></h4><p>Related to the window scaling factor, the mapping from figure sizes and positions to pixels can be scaled to achieve HiDPI/Retina resolution renderings. The resolution scaling defaults to the same factor as the window scaling, but it may be independently overridden with the <code>px_per_unit</code> argument when showing a figure:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(size </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ...</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig, px_per_unit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The resolution scale factor may also be changed when saving pngs:</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hires.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fig, px_per_unit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1600 × 1200 px png</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">save</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lores.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, fig, px_per_unit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  400 × 300 px png</span></span></code></pre></div><p>If a script may run in interactive environments where the native screen DPI can vary, you may want to explicitly set <code>px_per_unit = 1</code> when saving figures to ensure consistency of results.</p><h4 id="Multiple-Windows" tabindex="-1">Multiple Windows <a class="header-anchor" href="#Multiple-Windows" aria-label="Permalink to &quot;Multiple Windows {#Multiple-Windows}&quot;">​</a></h4><p>GLMakie has experimental support for displaying multiple independent figures (or scenes). To open a new window, use <code>display(GLMakie.Screen(), figure_or_scene)</code>. To close all windows, use <code>GLMakie.closeall()</code>.</p><h2 id="Forcing-Dedicated-GPU-Use-In-Linux" tabindex="-1">Forcing Dedicated GPU Use In Linux <a class="header-anchor" href="#Forcing-Dedicated-GPU-Use-In-Linux" aria-label="Permalink to &quot;Forcing Dedicated GPU Use In Linux {#Forcing-Dedicated-GPU-Use-In-Linux}&quot;">​</a></h2><p>Normally the dedicated GPU is used for rendering. If instead an integrated GPU is used, one can tell Julia to use the dedicated GPU while launching julia as <code>$ sudo DRI_PRIME=1 julia</code> in the bash terminal. To have it permanently used, add the line <code>export DRI_PRIME=1</code> in your <code>.bashrc</code> or <code>.zshrc</code> file.</p><h2 id="Troubleshooting-OpenGL" tabindex="-1">Troubleshooting OpenGL <a class="header-anchor" href="#Troubleshooting-OpenGL" aria-label="Permalink to &quot;Troubleshooting OpenGL {#Troubleshooting-OpenGL}&quot;">​</a></h2><p>If you get any error loading GLMakie, it likely means you don&#39;t have an OpenGL capable graphics card, or you don&#39;t have an OpenGL 3.3 capable driver installed. Note that most GPUs, even 8 year old integrated ones, support OpenGL 3.3.</p><p>On Linux, you can find out your OpenGL version with: <code>glxinfo | grep &quot;OpenGL version&quot;</code></p><p>If you&#39;re using an AMD or Intel gpu on linux, you may run into <a href="https://github.com/JuliaGL/GLFW.jl/issues/198" target="_blank" rel="noreferrer">GLFW#198</a>.</p><p>If you&#39;re on a headless server, you still need to install x-server and proper graphics drivers.</p><p>You can find a demo on how to set that up in this <a href="https://nextjournal.com/sdanisch/GLMakie-nogpu" target="_blank" rel="noreferrer">nextjournal article</a>.</p><p>GLMakie&#39;s CI has no GPU, so you can also look at <a href="https://github.com/MakieOrg/Makie.jl/blob/master/.github/workflows/glmakie.yaml" target="_blank" rel="noreferrer">.github/workflows/glmakie.yaml</a> for a working setup.</p><p>If none of these work for you, take a look at the other backends, which all work without a GPU.</p><p>If you get an error pointing to <a href="https://github.com/JuliaGL/GLFW.jl" target="_blank" rel="noreferrer">GLFW.jl</a>, please look into the existing <a href="https://github.com/JuliaGL/GLFW.jl/issues" target="_blank" rel="noreferrer">GLFW issues</a>, and also google for those errors. This is then very likely something that needs fixing in the <a href="https://github.com/glfw/glfw" target="_blank" rel="noreferrer">glfw c library</a> or in the GPU drivers.</p><div class="warning custom-block"><p class="custom-block-title">Warning</p><p>GLMakie is not thread-safe! Makie functions to display in GLMakie or updates to <code>Observable</code> displayed in GLMakie windows from other threads may not work as expected or cause a segmentation fault.</p></div><h2 id="WSL-setup-or-X-forwarding" tabindex="-1">WSL setup or X-forwarding <a class="header-anchor" href="#WSL-setup-or-X-forwarding" aria-label="Permalink to &quot;WSL setup or X-forwarding {#WSL-setup-or-X-forwarding}&quot;">​</a></h2><p>From: <a href="https://github.com/Microsoft/WSL/issues/2855#issuecomment-358861903" target="_blank" rel="noreferrer">Microsoft/WSL/issues/2855</a></p><p>WSL runs OpenGL alright, but it is not a supported scenario. From a clean Ubuntu install from the store do:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo apt install ubuntu-desktop mesa-utils</span></span>
<span class="line"><span>export DISPLAY=localhost:0</span></span>
<span class="line"><span>glxgears</span></span></code></pre></div><p>On the Windows side:</p><ol><li><p>install <a href="https://sourceforge.net/projects/vcxsrv/" target="_blank" rel="noreferrer">VcXsrv</a></p></li><li><p>choose multiple windows -&gt; display 0 -&gt; start no client -&gt; disable native opengl</p></li></ol><p>Troubleshooting:</p><p>1.) install: <code>sudo apt-get install -y xorg-dev mesa-utils xvfb libgl1 freeglut3-dev libxrandr-dev libxinerama-dev libxcursor-dev libxi-dev libxext-dev</code></p><p>2.) WSL has some problems with passing through localhost, so one may need to use: <code>export DISPLAY=192.168.178.31:0</code>, with the local ip of the pcs network adapter, which runs VcXsrv</p><p>3.) One may need <code>mv /opt/julia-1.5.2/lib/julia/libstdc++.so.6 /opt/julia-1.5.2/lib/julia/libcpp.backup</code>, another form of <a href="https://github.com/JuliaGL/GLFW.jl/issues/198" target="_blank" rel="noreferrer">GLFW#198</a></p><h2 id="GLMakie-does-not-show-Figure-or-crashes-on-full-screen-mode-on-macOS" tabindex="-1">GLMakie does not show Figure or crashes on full screen mode on macOS <a class="header-anchor" href="#GLMakie-does-not-show-Figure-or-crashes-on-full-screen-mode-on-macOS" aria-label="Permalink to &quot;GLMakie does not show Figure or crashes on full screen mode on macOS {#GLMakie-does-not-show-Figure-or-crashes-on-full-screen-mode-on-macOS}&quot;">​</a></h2><p>MacOS gives a warning if a graphical user interface (GUI) is not started from an AppBundle and this exception can crash the Julia process that initiated the GUI. This warning only occurs if macOS Settings-&gt;Desktop &amp; Dock-&gt;Menu Bar-&gt;Automatically hide and show the menu bar is not set to Never. Therefore make sure this setting is set to <code>Never</code> to enable the use of GLMakie on macOS.</p>`,43),o=[n];function l(r,d,h,p,c,u){return a(),i("div",null,o)}const f=e(t,[["render",l]]);export{k as __pageData,f as default};
