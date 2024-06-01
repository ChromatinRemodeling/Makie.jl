import{_ as a,c as s,o as i,a6 as t}from"./chunks/framework.BVrzPbkj.js";const e="/previews/PR3907/assets/ivjerhg.CCI8OmcK.png",m=JSON.parse('{"title":"Matcap","description":"","frontmatter":{},"headers":[],"relativePath":"reference/scene/matcap.md","filePath":"reference/scene/matcap.md","lastUpdated":null}'),n={name:"reference/scene/matcap.md"},h=t(`<h1 id="Matcap" tabindex="-1">Matcap <a class="header-anchor" href="#Matcap" aria-label="Permalink to &quot;Matcap {#Matcap}&quot;">​</a></h1><p>A matcap (material capture) is a texture which is applied based on the normals of a given mesh. They typically include complex materials and lighting and offer a cheap way to apply those to any mesh. You may pass a matcap via the <code>matcap</code> attribute of a <code>mesh</code>, <code>meshscatter</code> or <code>surface</code> plot. Setting <code>shading = NoShading</code> is suggested. You can find a lot matcaps <a href="https://github.com/nidorx/matcaps" target="_blank" rel="noreferrer">here</a>.</p><h2 id="Example" tabindex="-1">Example <a class="header-anchor" href="#Example" aria-label="Permalink to &quot;Example {#Example}&quot;">​</a></h2><div class="language-julia vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">julia</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GLMakie</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FileIO</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">catmesh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FileIO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">assetpath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cat.obj&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gold </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> FileIO</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">download</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://raw.githubusercontent.com/nidorx/matcaps/master/1024/E6BF3C_5A4719_977726_FCFC82.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mesh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(catmesh, matcap</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gold, shading </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> NoShading)</span></span></code></pre></div><p><img src="`+e+'" alt=""></p>',5),p=[h];function l(k,r,c,d,o,E){return i(),s("div",null,p)}const y=a(n,[["render",l]]);export{m as __pageData,y as default};
