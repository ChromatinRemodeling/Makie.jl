import{_ as e,c as a,o,a6 as t}from"./chunks/framework.B_jN3r58.js";const i="/dev/assets/itxftow.RnsOJCbo.png",f=JSON.parse('{"title":"hspan","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/hspan.md","filePath":"reference/plots/hspan.md","lastUpdated":null}'),s={name:"reference/plots/hspan.md"},l=t(`<h1 id="hspan" tabindex="-1">hspan <a class="header-anchor" href="#hspan" aria-label="Permalink to &quot;hspan {#hspan}&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="Makie.hspan-reference-plots-hspan" href="#Makie.hspan-reference-plots-hspan">#</a> <b><u>Makie.hspan</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ys_low, ys_high; xmin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xmax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ys_lowhigh; xmin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xmax </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, attrs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>Create horizontal bands spanning across a <code>Scene</code> with 2D projection. The bands will be placed from <code>ys_low</code> to <code>ys_high</code> in data coordinates and <code>xmin</code> to <code>xmax</code> in scene coordinates (0 to 1). All four of these can have single or multiple values because they are broadcast to calculate the final spans. Both bounds can be passed together as an interval <code>ys_lowhigh</code>.</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>hspan</code> function is <code>HSpan</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/7e3714e33f405d122f7bf048f5597854d3f1c7c1/MakieCore/src/recipes.jl#L453-L536" target="_blank" rel="noreferrer">source</a></p></div><br><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">hspan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p><img src="`+i+'" alt=""></p><h2 id="Attributes" tabindex="-1">Attributes <a class="header-anchor" href="#Attributes" aria-label="Permalink to &quot;Attributes {#Attributes}&quot;">​</a></h2><h3 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-label="Permalink to &quot;alpha {#alpha}&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>The alpha value of the colormap or color attribute. Multiple alphas like in <code>plot(alpha=0.2, color=(:red, 0.5)</code>, will get multiplied.</p><h3 id="color" tabindex="-1">color <a class="header-anchor" href="#color" aria-label="Permalink to &quot;color {#color}&quot;">​</a></h3><p>Defaults to <code>@inherit patchcolor</code></p><p>Sets the color of the poly. Can be a <code>Vector{&lt;:Colorant}</code> for per vertex colors or a single <code>Colorant</code>. A <code>Matrix{&lt;:Colorant}</code> can be used to color the mesh with a texture, which requires the mesh to contain texture coordinates. Vector or Matrices of numbers can be used as well, which will use the colormap arguments to map the numbers to colors. One can also use <code>Makie.LinePattern</code>, to cover the poly with a regular stroke pattern.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap {#colormap}&quot;">​</a></h3><p>Defaults to <code>@inherit colormap :viridis</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s. <code>PlotUtils.cgrad(...)</code>, <code>Makie.Reverse(any_colormap)</code> can be used as well, or any symbol from ColorBrewer or PlotUtils. To see all available color gradients, you can call <code>Makie.available_gradients()</code>.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange {#colorrange}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The values representing the start and end points of <code>colormap</code>.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale {#colorscale}&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>The color transform function. Can be any function, but only works well together with <code>Colorbar</code> for <code>identity</code>, <code>log</code>, <code>log2</code>, <code>log10</code>, <code>sqrt</code>, <code>logit</code>, <code>Makie.pseudolog10</code> and <code>Makie.Symlog10</code>.</p><h3 id="cycle" tabindex="-1">cycle <a class="header-anchor" href="#cycle" aria-label="Permalink to &quot;cycle {#cycle}&quot;">​</a></h3><p>Defaults to <code>[:color =&gt; :patchcolor]</code></p><p>No docs available.</p><h3 id="depth_shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth_shift" aria-label="Permalink to &quot;depth_shift {#depth_shift}&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa {#fxaa}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="highclip" tabindex="-1">highclip <a class="header-anchor" href="#highclip" aria-label="Permalink to &quot;highclip {#highclip}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value above the colorrange.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable {#inspectable}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector_clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector_clear" aria-label="Permalink to &quot;inspector_clear {#inspector_clear}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector_hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector_hover" aria-label="Permalink to &quot;inspector_hover {#inspector_hover}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector_label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector_label" aria-label="Permalink to &quot;inspector_label {#inspector_label}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="joinstyle" tabindex="-1">joinstyle <a class="header-anchor" href="#joinstyle" aria-label="Permalink to &quot;joinstyle {#joinstyle}&quot;">​</a></h3><p>Defaults to <code>@inherit joinstyle</code></p><p>No docs available.</p><h3 id="linecap" tabindex="-1">linecap <a class="header-anchor" href="#linecap" aria-label="Permalink to &quot;linecap {#linecap}&quot;">​</a></h3><p>Defaults to <code>@inherit linecap</code></p><p>No docs available.</p><h3 id="linestyle" tabindex="-1">linestyle <a class="header-anchor" href="#linestyle" aria-label="Permalink to &quot;linestyle {#linestyle}&quot;">​</a></h3><p>Defaults to <code>nothing</code></p><p>Sets the pattern of the line (e.g. <code>:solid</code>, <code>:dot</code>, <code>:dashdot</code>)</p><h3 id="lowclip" tabindex="-1">lowclip <a class="header-anchor" href="#lowclip" aria-label="Permalink to &quot;lowclip {#lowclip}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value below the colorrange.</p><h3 id="miter_limit" tabindex="-1">miter_limit <a class="header-anchor" href="#miter_limit" aria-label="Permalink to &quot;miter_limit {#miter_limit}&quot;">​</a></h3><p>Defaults to <code>@inherit miter_limit</code></p><p>No docs available.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model {#model}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="nan_color" tabindex="-1">nan_color <a class="header-anchor" href="#nan_color" aria-label="Permalink to &quot;nan_color {#nan_color}&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color for NaN values.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw {#overdraw}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="shading" tabindex="-1">shading <a class="header-anchor" href="#shading" aria-label="Permalink to &quot;shading {#shading}&quot;">​</a></h3><p>Defaults to <code>NoShading</code></p><p>No docs available.</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space {#space}&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao {#ssao}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="strokecolor" tabindex="-1">strokecolor <a class="header-anchor" href="#strokecolor" aria-label="Permalink to &quot;strokecolor {#strokecolor}&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokecolor</code></p><p>Sets the color of the outline around a marker.</p><h3 id="strokecolormap" tabindex="-1">strokecolormap <a class="header-anchor" href="#strokecolormap" aria-label="Permalink to &quot;strokecolormap {#strokecolormap}&quot;">​</a></h3><p>Defaults to <code>@inherit colormap</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s.</p><h3 id="strokewidth" tabindex="-1">strokewidth <a class="header-anchor" href="#strokewidth" aria-label="Permalink to &quot;strokewidth {#strokewidth}&quot;">​</a></h3><p>Defaults to <code>@inherit patchstrokewidth</code></p><p>Sets the width of the outline.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation {#transformation}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency {#transparency}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible {#visible}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p><h3 id="xmax" tabindex="-1">xmax <a class="header-anchor" href="#xmax" aria-label="Permalink to &quot;xmax {#xmax}&quot;">​</a></h3><p>Defaults to <code>1</code></p><p>The end of the bands in relative axis units (0 to 1) along the x dimension.</p><h3 id="xmin" tabindex="-1">xmin <a class="header-anchor" href="#xmin" aria-label="Permalink to &quot;xmin {#xmin}&quot;">​</a></h3><p>Defaults to <code>0</code></p><p>The start of the bands in relative axis units (0 to 1) along the x dimension.</p>',102),r=[l];function n(c,h,d,p,u,k){return o(),a("div",null,r)}const m=e(s,[["render",n]]);export{f as __pageData,m as default};
