import{_ as e,c as a,o as t,a6 as o}from"./chunks/framework.B0Na_W2Z.js";const i="/v0.21/assets/zeybalj.D2FS60RS.png",f=JSON.parse('{"title":"qqplot","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/qqplot.md","filePath":"reference/plots/qqplot.md","lastUpdated":null}'),s={name:"reference/plots/qqplot.md"},l=o(`<h1 id="qqplot" tabindex="-1">qqplot <a class="header-anchor" href="#qqplot" aria-label="Permalink to &quot;qqplot {#qqplot}&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.qqplot-reference-plots-qqplot" href="#Makie.qqplot-reference-plots-qqplot">#</a> <b><u>Makie.qqplot</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qqplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y; kwargs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Draw a Q-Q plot, comparing quantiles of two distributions. <code>y</code> must be a list of samples, i.e., <code>AbstractVector{&lt;:Real}</code>, whereas <code>x</code> can be</p><ul><li><p>a list of samples,</p></li><li><p>an abstract distribution, e.g. <code>Normal(0, 1)</code>,</p></li><li><p>a distribution type, e.g. <code>Normal</code>.</p></li></ul><p>In the last case, the distribution type is fitted to the data <code>y</code>.</p><p>The attribute <code>qqline</code> (defaults to <code>:none</code>) determines how to compute a fit line for the Q-Q plot. Possible values are the following.</p><ul><li><p><code>:identity</code> draws the identity line.</p></li><li><p><code>:fit</code> computes a least squares line fit of the quantile pairs.</p></li><li><p><code>:fitrobust</code> computes the line that passes through the first and third quartiles of the distributions.</p></li><li><p><code>:none</code> omits drawing the line.</p></li></ul><p>Broadly speaking, <code>qqline = :identity</code> is useful to see if <code>x</code> and <code>y</code> follow the same distribution, whereas <code>qqline = :fit</code> and <code>qqline = :fitrobust</code> are useful to see if the distribution of <code>y</code> can be obtained from the distribution of <code>x</code> via an affine transformation.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>qqplot</code> function is <code>QQPlot</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/7e3714e33f405d122f7bf048f5597854d3f1c7c1/MakieCore/src/recipes.jl#L453-L522" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Examples" tabindex="-1">Examples <a class="header-anchor" href="#Examples" aria-label="Permalink to &quot;Examples {#Examples}&quot;">​</a></h2><p>Test if <code>xs</code> and <code>ys</code> follow the same distribution.</p><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ys </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> randn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">qqplot</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(xs, ys, qqline </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> :identity</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><img src="`+i+'" alt=""></p><h2 id="Attributes" tabindex="-1">Attributes <a class="header-anchor" href="#Attributes" aria-label="Permalink to &quot;Attributes {#Attributes}&quot;">​</a></h2><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color {#color}&quot;">​</a></h3><p>Defaults to <code>@inherit linecolor</code></p><p>Control color of both line and markers (if <code>markercolor</code> is not specified).</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle {#cycle}&quot;">​</a></h3><p>Defaults to <code>[:color]</code></p><p>No docs available.</p><h3 id="depth_shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth_shift" aria-label="Permalink to &quot;depth_shift {#depth_shift}&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa {#fxaa}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable {#inspectable}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector_clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector_clear" aria-label="Permalink to &quot;inspector_clear {#inspector_clear}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector_hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector_hover" aria-label="Permalink to &quot;inspector_hover {#inspector_hover}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector_label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector_label" aria-label="Permalink to &quot;inspector_label {#inspector_label}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle {#linestyle}&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>No docs available.</p><h3 id="linewidth" tabindex="-1">linewidth <a class="header-anchor" href="#linewidth" aria-label="Permalink to &quot;linewidth {#linewidth}&quot;">​</a></h3><p>Defaults to <code>@inherit linewidth</code></p><p>No docs available.</p><h3 id="marker" tabindex="-1">marker <a class="header-anchor" href="#marker" aria-label="Permalink to &quot;marker {#marker}&quot;">​</a></h3><p>Defaults to <code>@inherit marker</code></p><p>No docs available.</p><h3 id="markercolor" tabindex="-1">markercolor <a class="header-anchor" href="#markercolor" aria-label="Permalink to &quot;markercolor {#markercolor}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="markersize" tabindex="-1">markersize <a class="header-anchor" href="#markersize" aria-label="Permalink to &quot;markersize {#markersize}&quot;">​</a></h3><p>Defaults to <code>@inherit markersize</code></p><p>No docs available.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model {#model}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw {#overdraw}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space {#space}&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao {#ssao}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor {#strokecolor}&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokecolor</code></p><p>No docs available.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth {#strokewidth}&quot;">​</a></h3><p>Defaults to <code>@inherit markerstrokewidth</code></p><p>No docs available.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation {#transformation}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency {#transparency}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible {#visible}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p>',74),r=[l];function n(d,c,p,h,u,k){return t(),a("div",null,r)}const m=e(s,[["render",n]]);export{f as __pageData,m as default};
