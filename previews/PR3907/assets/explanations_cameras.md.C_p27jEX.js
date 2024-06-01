import{_ as s,c as i,o as e,a6 as a}from"./chunks/framework.BVrzPbkj.js";const y=JSON.parse('{"title":"Cameras","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/cameras.md","filePath":"explanations/cameras.md","lastUpdated":null}'),t={name:"explanations/cameras.md"},n=a(`<h1 id="Cameras" tabindex="-1">Cameras <a class="header-anchor" href="#Cameras" aria-label="Permalink to &quot;Cameras {#Cameras}&quot;">​</a></h1><p>A <code>Camera</code> is simply a viewport through which the Scene is visualized. <code>Makie</code> offers 2D and 3D projections, and 2D plots can be projected in 3D!</p><p>To specify the camera you want to use for your Scene, you can set the <code>camera</code> attribute. Currently, we offer the following cameras/constructors</p><p><a href="/previews/PR3907/api#Makie.campixel!-Tuple{Scene}"><code>campixel!</code></a> <a href="/previews/PR3907/api#Makie.cam_relative!-Tuple{Scene}"><code>cam_relative!</code></a> <a href="/previews/PR3907/api#Makie.cam2d!-Tuple{Union{AbstractScene, MakieCore.ScenePlot}}"><code>cam2d!</code></a> <a href="/previews/PR3907/explanations/cameras#Makie.Camera3D"><code>Camera3D</code></a> <a href="/previews/PR3907/api#Makie.cam3d!-Tuple{Any}"><code>cam3d!</code></a> <a href="/previews/PR3907/api#Makie.cam3d_cad!-Tuple{Any}"><code>cam3d_cad!</code></a></p><p>which will mutate the camera of the Scene into the specified type.</p><h2 id="Pixel-Camera" tabindex="-1">Pixel Camera <a class="header-anchor" href="#Pixel-Camera" aria-label="Permalink to &quot;Pixel Camera {#Pixel-Camera}&quot;">​</a></h2><p>The pixel camera (<a href="/previews/PR3907/api#Makie.campixel!-Tuple{Scene}"><code>campixel!</code></a>) projects the scene in pixel space, i.e. each integer step in the displayed data will correspond to one pixel. There are no controls for this camera. The clipping limits are set to <code>(-10_000, 10_000)</code>.</p><h2 id="Relative-Camera" tabindex="-1">Relative Camera <a class="header-anchor" href="#Relative-Camera" aria-label="Permalink to &quot;Relative Camera {#Relative-Camera}&quot;">​</a></h2><p>The relative camera (<a href="/previews/PR3907/api#Makie.cam_relative!-Tuple{Scene}"><code>cam_relative!</code></a>) projects the scene into a 0..1 by 0..1 space. There are no controls for this camera. The clipping limits are set to <code>(-10_000, 10_000)</code>.</p><h2 id="2D-Camera" tabindex="-1">2D Camera <a class="header-anchor" href="#2D-Camera" aria-label="Permalink to &quot;2D Camera {#2D-Camera}&quot;">​</a></h2><p>The 2D camera (<a href="/previews/PR3907/api#Makie.cam2d!-Tuple{Union{AbstractScene, MakieCore.ScenePlot}}"><code>cam2d!</code></a>) uses an orthographic projection with a fixed rotation and aspect ratio. You can set the following attributes via keyword arguments in <code>cam2d!</code> or by accessing the camera struct <code>cam = cameracontrols(scene)</code>:</p><ul><li><p><code>zoomspeed = 0.10f0</code> sets the speed of mouse wheel zooms.</p></li><li><p><code>zoombutton = nothing</code> sets an additional key that needs to be pressed in order to zoom. Defaults to no key.</p></li><li><p><code>panbutton = Mouse.right</code> sets the mouse button that needs to be pressed to translate the view.</p></li><li><p><code>selectionbutton = (Keyboard.space, Mouse.left)</code> sets a set of buttons that need to be pressed to perform rectangle zooms.</p></li></ul><p>Note that this camera is not used by <code>Axis</code>. It is used, by default, for 2D <code>LScene</code>s and <code>Scene</code>s.</p><h2 id="3D-Camera" tabindex="-1">3D Camera <a class="header-anchor" href="#3D-Camera" aria-label="Permalink to &quot;3D Camera {#3D-Camera}&quot;">​</a></h2><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.Camera3D" href="#Makie.Camera3D">#</a> <b><u>Makie.Camera3D</u></b> — <i>Type</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Camera3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene[; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>Sets up a 3D camera with mouse and keyboard controls.</p><p>The behavior of the camera can be adjusted via keyword arguments or the fields <code>settings</code> and <code>controls</code>.</p><p><strong>Settings</strong></p><p>Settings include anything that isn&#39;t a mouse or keyboard button.</p><ul><li><p><code>projectiontype = Perspective</code> sets the type of the projection. Can be <code>Orthographic</code> or <code>Perspective</code>.</p></li><li><p><code>rotation_center = :lookat</code> sets the default center for camera rotations. Currently allows <code>:lookat</code> or <code>:eyeposition</code>.</p></li><li><p><code>fixed_axis = true</code>: If true panning uses the (world/plot) z-axis instead of the camera up direction.</p></li><li><p><code>zoom_shift_lookat = true</code>: If true keeps the data under the cursor when zooming.</p></li><li><p><code>cad = false</code>: If true rotates the view around <code>lookat</code> when zooming off-center.</p></li><li><p><code>clipping_mode = :adaptive</code>: Controls how <code>near</code> and <code>far</code> get processed. Options:</p><ul><li><p><code>:static</code> passes <code>near</code> and <code>far</code> as is</p></li><li><p><code>:adaptive</code> scales <code>near</code> by <code>norm(eyeposition - lookat)</code> and passes <code>far</code> as is</p></li><li><p><code>:view_relative</code> scales <code>near</code> and <code>far</code> by <code>norm(eyeposition - lookat)</code></p></li><li><p><code>:bbox_relative</code> scales <code>near</code> and <code>far</code> to the scene bounding box as passed to the camera with <code>update_cam!(..., bbox)</code>. (More specifically <code>far = 1</code> is scaled to the furthest point of a bounding sphere and <code>near</code> is generally overwritten to be the closest point.)</p></li></ul></li><li><p><code>center = true</code>: Controls whether the camera placement gets reset when calling <code>center!(scene)</code>, which is called when a new plot is added.</p></li><li><p><code>keyboard_rotationspeed = 1f0</code> sets the speed of keyboard based rotations.</p></li><li><p><code>keyboard_translationspeed = 0.5f0</code> sets the speed of keyboard based translations.</p></li><li><p><code>keyboard_zoomspeed = 1f0</code> sets the speed of keyboard based zooms.</p></li><li><p><code>mouse_rotationspeed = 1f0</code> sets the speed of mouse rotations.</p></li><li><p><code>mouse_translationspeed = 0.5f0</code> sets the speed of mouse translations.</p></li><li><p><code>mouse_zoomspeed = 1f0</code> sets the speed of mouse zooming (mousewheel).</p></li><li><p><code>update_rate = 1/30</code> sets the rate at which keyboard based camera updates are evaluated.</p></li><li><p><code>circular_rotation = (true, true, true)</code> enables circular rotations for (fixed x, fixed y, fixed z) rotation axis. (This means drawing a circle with your mouse around the center of the scene will result in a continuous rotation.)</p></li></ul><p><strong>Controls</strong></p><p>Controls include any kind of hotkey setting.</p><ul><li><p><code>up_key = Keyboard.r</code> sets the key for translations towards the top of the screen.</p></li><li><p><code>down_key = Keyboard.f</code> sets the key for translations towards the bottom of the screen.</p></li><li><p><code>left_key = Keyboard.a</code> sets the key for translations towards the left of the screen.</p></li><li><p><code>right_key = Keyboard.d</code> sets the key for translations towards the right of the screen.</p></li><li><p><code>forward_key = Keyboard.w</code> sets the key for translations into the screen.</p></li><li><p><code>backward_key = Keyboard.s</code> sets the key for translations out of the screen.</p></li><li><p><code>zoom_in_key = Keyboard.u</code> sets the key for zooming into the scene (translate eyeposition towards lookat).</p></li><li><p><code>zoom_out_key = Keyboard.o</code> sets the key for zooming out of the scene (translate eyeposition away from lookat).</p></li><li><p><code>increase_fov_key = Keyboard.b</code> sets the key for increasing the fov.</p></li><li><p><code>decrease_fov_key = Keyboard.n</code> sets the key for decreasing the fov.</p></li><li><p><code>pan_left_key = Keyboard.j</code> sets the key for rotations around the screens vertical axis.</p></li><li><p><code>pan_right_key = Keyboard.l</code> sets the key for rotations around the screens vertical axis.</p></li><li><p><code>tilt_up_key = Keyboard.i</code> sets the key for rotations around the screens horizontal axis.</p></li><li><p><code>tilt_down_key = Keyboard.k</code> sets the key for rotations around the screens horizontal axis.</p></li><li><p><code>roll_clockwise_key = Keyboard.e</code> sets the key for rotations of the screen.</p></li><li><p><code>roll_counterclockwise_key = Keyboard.q</code> sets the key for rotations of the screen.</p></li><li><p><code>fix_x_key = Keyboard.x</code> sets the key for fixing translations and rotations to the (world/plot) x-axis.</p></li><li><p><code>fix_y_key = Keyboard.y</code> sets the key for fixing translations and rotations to the (world/plot) y-axis.</p></li><li><p><code>fix_z_key = Keyboard.z</code> sets the key for fixing translations and rotations to the (world/plot) z-axis.</p></li><li><p><code>reset = Keyboard.left_control &amp; Mouse.left</code> sets the key for resetting the camera. This equivalent to calling <code>center!(scene)</code>.</p></li><li><p><code>reposition_button = Keyboard.left_alt &amp; Mouse.left</code> sets the key for focusing the camera on a plot object.</p></li><li><p><code>translation_button = Mouse.right</code> sets the mouse button for drag-translations. (up/down/left/right)</p></li><li><p><code>scroll_mod = true</code> sets an additional modifier button for scroll-based zoom. (true being neutral)</p></li><li><p><code>rotation_button = Mouse.left</code> sets the mouse button for drag-rotations. (pan, tilt)</p></li></ul><p><strong>Other kwargs</strong></p><p>Some keyword arguments are used to initialize fields. These include</p><ul><li><p><code>eyeposition = Vec3f(3)</code>: The position of the camera.</p></li><li><p><code>lookat = Vec3f(0)</code>: The point the camera is focused on.</p></li><li><p><code>upvector = Vec3f(0, 0, 1)</code>: The world direction corresponding to the up direction of the screen.</p></li><li><p><code>fov = 45.0</code> is the field of view. This is irrelevant if the camera uses an orthographic projection.</p></li><li><p><code>near = automatic</code> sets the position of the near clip plane. Anything between the camera and the near clip plane is hidden. Must be greater 0. Usage depends on <code>clipping_mode</code>.</p></li><li><p><code>far = automatic</code> sets the position of the far clip plane. Anything further away than the far clip plane is hidden. Usage depends on <code>clipping_mode</code>. Defaults to <code>1</code> for <code>clipping_mode = :bbox_relative</code>, <code>2</code> for <code>:view_relative</code> or a value derived from limits for <code>:static</code>.</p></li></ul><p>Note that updating these observables in an active camera requires a call to <code>update_cam(scene)</code> for them to be applied. For updating <code>eyeposition</code>, <code>lookat</code> and/or upvector <code>update_cam!(scene, eyeposition, lookat, upvector = Vec3f(0,0,1))</code> is preferred.</p><p>The camera position and orientation can also be adjusted via the functions</p><ul><li><p><code>translate_cam!(scene, v)</code> will translate the camera by the given world/plot space vector <code>v</code>.</p></li><li><p><code>rotate_cam!(scene, angles)</code> will rotate the camera around its axes with the corresponding angles. The first angle will rotate around the cameras &quot;right&quot; that is the screens horizontal axis, the second around the up vector/vertical axis or <code>Vec3f(0, 0, +-1)</code> if <code>fixed_axis = true</code>, and the third will rotate around the view direction i.e. the axis out of the screen. The rotation respects the current <code>rotation_center</code> of the camera.</p></li><li><p><code>zoom!(scene, zoom_step)</code> will change the zoom level of the scene without translating or rotating the scene. <code>zoom_step</code> applies multiplicatively to <code>cam.zoom_mult</code> which is used as a multiplier to the fov (perspective projection) or width and height (orthographic projection).</p></li></ul><p><a href="https://github.com/MakieOrg/Makie.jl/blob/07b02d495fc5cd4857d0bba823f41ad45ef2d001/src/camera/camera3d.jl#L26-L115" target="_blank" rel="noreferrer">source</a></p></div><br><p><code>cam3d!</code> and <code>cam3d_cad!</code> but create a <code>Camera3D</code> with some specific options.</p><h2 id="Example-Visualizing-the-cameras-view-box" tabindex="-1">Example - Visualizing the cameras view box <a class="header-anchor" href="#Example-Visualizing-the-cameras-view-box" aria-label="Permalink to &quot;Example - Visualizing the cameras view box {#Example-Visualizing-the-cameras-view-box}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GeometryBasics, LinearAlgebra</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frustum_snapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cam)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Rect3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vec3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    rect_ps </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> coordinates</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(r) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.|&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Point3f</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    insert!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rect_ps, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># fix bad line</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    inv_pv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> inv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cam</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">projectionview[])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rect_ps) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> inv_pv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> to_ndim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Point4f, p, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vec</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> p[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    end</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ey </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ez </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LScene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Camera3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene, projectiontype </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Perspective)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linesegments!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Rect3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vec3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)), color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linesegments!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ex, ex, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ey, ey, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ez, ez],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cam </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">camera</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eyeposition </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">eyeposition</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lookat </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lookat</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">frustum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(pv </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> frustum_snapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cam), cam</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">projectionview)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LScene</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fig[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_cc </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Camera3D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">scene, projectiontype </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Makie</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Orthographic)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">lines!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, frustum, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, linestyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :dot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, eyeposition, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">scatter!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, lookat, color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linesegments!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ex, ex, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ey, ey, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ez, ez],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:green</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:blue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">linesegments!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(scene, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Rect3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Point3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Vec3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)), color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :black</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fig</span></span></code></pre></div><h2 id="General-Remarks" tabindex="-1">General Remarks <a class="header-anchor" href="#General-Remarks" aria-label="Permalink to &quot;General Remarks {#General-Remarks}&quot;">​</a></h2><p>To force a plot to be visualized in 3D, you can set the limits to have a nonzero (z)-axis interval, or ensure that a 3D camera type is used. For example, you could pass the keyword argument <code>limits = Rect([0,0,0],[1,1,1])</code>, or <code>camera = cam3d!</code>.</p><p>Often, when modifying the Scene, the camera can get &quot;out of sync&quot; with the Scene. To fix this, you can call the <a href="/previews/PR3907/explanations/scenes#Makie.update_cam!"><code>update_cam!</code></a> function on the Scene.</p><p>Buttons passed to the 2D and 3D camera are forwarded to <code>ispressed</code>. As such you can pass <code>false</code> to disable an interaction, <code>true</code> to ignore a modifier, any button, collection of buttons or even logical expressions of buttons. See the events documentation for more details.</p>`,23),h=[n];function l(p,k,o,r,d,c){return e(),i("div",null,h)}const g=s(t,[["render",l]]);export{y as __pageData,g as default};
