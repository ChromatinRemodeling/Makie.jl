import{_ as a,c as s,o as e,a6 as i}from"./chunks/framework.BVrzPbkj.js";const t="/previews/PR3907/assets/aodshlg.BA8lIKSJ.png",u=JSON.parse('{"title":"image","description":"","frontmatter":{},"headers":[],"relativePath":"reference/plots/image.md","filePath":"reference/plots/image.md","lastUpdated":null}'),l={name:"reference/plots/image.md"},n=i(`<h1 id="image" tabindex="-1">image <a class="header-anchor" href="#image" aria-label="Permalink to &quot;image {#image}&quot;">​</a></h1><div style="border-width:1px;border-style:solid;border-color:black;padding:1em;border-radius:25px;"><a id="MakieCore.image-reference-plots-image" href="#MakieCore.image-reference-plots-image">#</a> <b><u>MakieCore.image</u></b> — <i>Function</i>. <div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x, y, image)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(image)</span></span></code></pre></div><p>Plots an image on a rectangle bounded by <code>x</code> and <code>y</code> (defaults to size of image).</p><p><strong>Plot type</strong></p><p>The plot type alias for the <code>image</code> function is <code>Image</code>.</p><p><a href="https://github.com/MakieOrg/Makie.jl/blob/07b02d495fc5cd4857d0bba823f41ad45ef2d001/MakieCore/src/recipes.jl#L453-L510" target="_blank" rel="noreferrer">source</a></p></div><br><h2 id="Examples" tabindex="-1">Examples <a class="header-anchor" href="#Examples" aria-label="Permalink to &quot;Examples {#Examples}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CairoMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FileIO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">img </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">assetpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cow.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Figure</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], img,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], img,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (aspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;DataAspect()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rotr90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(img),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (aspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;rotr90&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], img</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    axis </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (aspect </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> DataAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(), yreversed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;img&#39; and reverse y-axis&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">f</span></span></code></pre></div><p><img src="`+t+'" alt=""></p><h2 id="Attributes" tabindex="-1">Attributes <a class="header-anchor" href="#Attributes" aria-label="Permalink to &quot;Attributes {#Attributes}&quot;">​</a></h2><h3 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-label="Permalink to &quot;alpha {#alpha}&quot;">​</a></h3><p>Defaults to <code>1.0</code></p><p>The alpha value of the colormap or color attribute. Multiple alphas like in <code>plot(alpha=0.2, color=(:red, 0.5)</code>, will get multiplied.</p><h3 id="colormap" tabindex="-1">colormap <a class="header-anchor" href="#colormap" aria-label="Permalink to &quot;colormap {#colormap}&quot;">​</a></h3><p>Defaults to <code>[:black, :white]</code></p><p>Sets the colormap that is sampled for numeric <code>color</code>s. <code>PlotUtils.cgrad(...)</code>, <code>Makie.Reverse(any_colormap)</code> can be used as well, or any symbol from ColorBrewer or PlotUtils. To see all available color gradients, you can call <code>Makie.available_gradients()</code>.</p><h3 id="colorrange" tabindex="-1">colorrange <a class="header-anchor" href="#colorrange" aria-label="Permalink to &quot;colorrange {#colorrange}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The values representing the start and end points of <code>colormap</code>.</p><h3 id="colorscale" tabindex="-1">colorscale <a class="header-anchor" href="#colorscale" aria-label="Permalink to &quot;colorscale {#colorscale}&quot;">​</a></h3><p>Defaults to <code>identity</code></p><p>The color transform function. Can be any function, but only works well together with <code>Colorbar</code> for <code>identity</code>, <code>log</code>, <code>log2</code>, <code>log10</code>, <code>sqrt</code>, <code>logit</code>, <code>Makie.pseudolog10</code> and <code>Makie.Symlog10</code>.</p><h3 id="depth_shift" tabindex="-1">depth_shift <a class="header-anchor" href="#depth_shift" aria-label="Permalink to &quot;depth_shift {#depth_shift}&quot;">​</a></h3><p>Defaults to <code>0.0</code></p><p>adjusts the depth value of a plot after all other transformations, i.e. in clip space, where <code>0 &lt;= depth &lt;= 1</code>. This only applies to GLMakie and WGLMakie and can be used to adjust render order (like a tunable overdraw).</p><h3 id="fxaa" tabindex="-1">fxaa <a class="header-anchor" href="#fxaa" aria-label="Permalink to &quot;fxaa {#fxaa}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>adjusts whether the plot is rendered with fxaa (anti-aliasing, GLMakie only).</p><h3 id="highclip" tabindex="-1">highclip <a class="header-anchor" href="#highclip" aria-label="Permalink to &quot;highclip {#highclip}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value above the colorrange.</p><h3 id="inspectable" tabindex="-1">inspectable <a class="header-anchor" href="#inspectable" aria-label="Permalink to &quot;inspectable {#inspectable}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>sets whether this plot should be seen by <code>DataInspector</code>.</p><h3 id="inspector_clear" tabindex="-1">inspector_clear <a class="header-anchor" href="#inspector_clear" aria-label="Permalink to &quot;inspector_clear {#inspector_clear}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot) -&gt; ...</code> for cleaning up custom indicators in DataInspector.</p><h3 id="inspector_hover" tabindex="-1">inspector_hover <a class="header-anchor" href="#inspector_hover" aria-label="Permalink to &quot;inspector_hover {#inspector_hover}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(inspector, plot, index) -&gt; ...</code> which replaces the default <code>show_data</code> methods.</p><h3 id="inspector_label" tabindex="-1">inspector_label <a class="header-anchor" href="#inspector_label" aria-label="Permalink to &quot;inspector_label {#inspector_label}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a callback function <code>(plot, index, position) -&gt; string</code> which replaces the default label generated by DataInspector.</p><h3 id="interpolate" tabindex="-1">interpolate <a class="header-anchor" href="#interpolate" aria-label="Permalink to &quot;interpolate {#interpolate}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Sets whether colors should be interpolated between pixels.</p><h3 id="lowclip" tabindex="-1">lowclip <a class="header-anchor" href="#lowclip" aria-label="Permalink to &quot;lowclip {#lowclip}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>The color for any value below the colorrange.</p><h3 id="model" tabindex="-1">model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;model {#model}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>Sets a model matrix for the plot. This overrides adjustments made with <code>translate!</code>, <code>rotate!</code> and <code>scale!</code>.</p><h3 id="nan_color" tabindex="-1">nan_color <a class="header-anchor" href="#nan_color" aria-label="Permalink to &quot;nan_color {#nan_color}&quot;">​</a></h3><p>Defaults to <code>:transparent</code></p><p>The color for NaN values.</p><h3 id="overdraw" tabindex="-1">overdraw <a class="header-anchor" href="#overdraw" aria-label="Permalink to &quot;overdraw {#overdraw}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Controls if the plot will draw over other plots. This specifically means ignoring depth checks in GL backends</p><h3 id="space" tabindex="-1">space <a class="header-anchor" href="#space" aria-label="Permalink to &quot;space {#space}&quot;">​</a></h3><p>Defaults to <code>:data</code></p><p>sets the transformation space for box encompassing the plot. See <code>Makie.spaces()</code> for possible inputs.</p><h3 id="ssao" tabindex="-1">ssao <a class="header-anchor" href="#ssao" aria-label="Permalink to &quot;ssao {#ssao}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts whether the plot is rendered with ssao (screen space ambient occlusion). Note that this only makes sense in 3D plots and is only applicable with <code>fxaa = true</code>.</p><h3 id="transformation" tabindex="-1">transformation <a class="header-anchor" href="#transformation" aria-label="Permalink to &quot;transformation {#transformation}&quot;">​</a></h3><p>Defaults to <code>automatic</code></p><p>No docs available.</p><h3 id="transparency" tabindex="-1">transparency <a class="header-anchor" href="#transparency" aria-label="Permalink to &quot;transparency {#transparency}&quot;">​</a></h3><p>Defaults to <code>false</code></p><p>Adjusts how the plot deals with transparency. In GLMakie <code>transparency = true</code> results in using Order Independent Transparency.</p><h3 id="visible" tabindex="-1">visible <a class="header-anchor" href="#visible" aria-label="Permalink to &quot;visible {#visible}&quot;">​</a></h3><p>Defaults to <code>true</code></p><p>Controls whether the plot will be rendered or not.</p>',70),o=[n];function h(p,r,d,c,k,g){return e(),s("div",null,o)}const m=a(l,[["render",h]]);export{u as __pageData,m as default};
