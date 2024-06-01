import{_ as e,c as t,o,a6 as i}from"./chunks/framework.DRYuAuBD.js";const m=JSON.parse('{"title":"GridLayouts","description":"","frontmatter":{},"headers":[],"relativePath":"explanations/layouting.md","filePath":"explanations/layouting.md","lastUpdated":null}'),a={name:"explanations/layouting.md"},n=i('<h1 id="GridLayouts" tabindex="-1">GridLayouts <a class="header-anchor" href="#GridLayouts" aria-label="Permalink to &quot;GridLayouts {#GridLayouts}&quot;">​</a></h1><p>The goal is that all elements placed in a scene fit into the window, fill the available space, and are nicely aligned relative to each other. This works by using <code>GridLayout</code> objects that determine how wide their rows and columns should be given their content elements.</p><p>Content elements have inner widths and heights, as well as four protrusions, that tell how far supporting content (like axis decorations) sticks out from the main part. The protrusions are meant to stick into the gaps between grid cells, and not every element has meaningful protrusions. They are mostly meant to allow for alignment of axes along their spines.</p><p>Each element in a layout should have a couple of observables that support the layout computations.</p><ul><li><p>Suggested bounding box</p></li><li><p>Computed bounding box</p></li><li><p>Auto-determined width and height</p></li><li><p>Computed width and height</p></li><li><p>Protrusions</p></li><li><p>Size attributes</p></li><li><p>Alignment attributes</p></li></ul><h3 id="Suggested-bounding-box" tabindex="-1">Suggested bounding box <a class="header-anchor" href="#Suggested-bounding-box" aria-label="Permalink to &quot;Suggested bounding box {#Suggested-bounding-box}&quot;">​</a></h3><p>This is the bounding box that is suggested to the element. Depending on the settings of the element, it can choose to align perfectly with this bounding box or, if its actual dimensions differ, how it should align inside that rectangle. A small <code>Label</code> can for example be aligned top-left inside a big available suggested bounding box.</p><h3 id="Computed-bounding-box" tabindex="-1">Computed bounding box <a class="header-anchor" href="#Computed-bounding-box" aria-label="Permalink to &quot;Computed bounding box {#Computed-bounding-box}&quot;">​</a></h3><p>This is the bounding box of the element after it has received a suggested bounding box and applied its own layout logic. This is the bounding box in which the elements main area will be in the scene.</p><h3 id="Auto-determined-width-and-height" tabindex="-1">Auto-determined width and height <a class="header-anchor" href="#Auto-determined-width-and-height" aria-label="Permalink to &quot;Auto-determined width and height {#Auto-determined-width-and-height}&quot;">​</a></h3><p>Some elements can compute their own size, depending on their settings. <code>Label</code>, for example, can compute the bounding box of its text. If an object has no specific content, like an <code>Axis</code>, the auto-determined width or height will be <code>nothing</code>.</p><h3 id="Computed-width-and-height" tabindex="-1">Computed width and height <a class="header-anchor" href="#Computed-width-and-height" aria-label="Permalink to &quot;Computed width and height {#Computed-width-and-height}&quot;">​</a></h3><p>The computed width and height is the size that the element reports to a <code>GridLayout</code> that it is a content element of. This can be different from the auto-size if the object doesn&#39;t want its parent layout to know its auto-size. This is useful if you don&#39;t want a column to shrink to the size of a <code>Label</code>, for example.</p><h3 id="Protrusions" tabindex="-1">Protrusions <a class="header-anchor" href="#Protrusions" aria-label="Permalink to &quot;Protrusions {#Protrusions}&quot;">​</a></h3><p>These are four values that tell the <code>GridLayout</code> how much gap space is needed by the element outside of the main element area. With an <code>Axis</code> that would be the title at the top, y axis at the left side and x axis at the bottom in standard configuration.</p><h3 id="Size-attributes" tabindex="-1">Size attributes <a class="header-anchor" href="#Size-attributes" aria-label="Permalink to &quot;Size attributes {#Size-attributes}&quot;">​</a></h3><p>The user can specify height and width of an element in different ways, which interact with the suggested bounding box and the auto-determined size to compute the final size of the object and also control how the layout responds to the element&#39;s size (used here for either width or height, respectively).</p><ul><li><p><code>Fixed</code> or <code>Real</code>: The size is always fixed, no matter what the layout suggests. A <code>GridLayout</code> can auto-adjust column sizes to this size.</p></li><li><p><code>Relative</code>: The size is a fraction of the suggested size. A <code>GridLayout</code> can not auto-adjust column sizes to this size.</p></li><li><p><code>Auto</code>: The size is equal to the auto-determined size if it&#39;s not <code>nothing</code>. A <code>GridLayout</code> can auto-adjust to this size if it&#39;s not <code>nothing</code>.</p></li><li><p><code>nothing</code>: The size is equal to the suggested size. A <code>GridLayout</code> can not auto-adjust column sizes to this size.</p></li></ul><p>For all sizes that a <code>GridLayout</code> can auto-adjust to, you can prohibit that by setting <code>tellheight</code> or <code>tellwidth</code> of the element to <code>false</code>.</p><h3 id="Alignment-attributes" tabindex="-1">Alignment attributes <a class="header-anchor" href="#Alignment-attributes" aria-label="Permalink to &quot;Alignment attributes {#Alignment-attributes}&quot;">​</a></h3><p>The user can specify how an element should be aligned relative to its suggested bounding box if it&#39;s not of the same size (in which case the alignment just has no effect on placement). Currently, these values can be <code>:left</code>, <code>:right</code> or <code>:center</code> for horizontal alignment and <code>:top</code>, <code>:bottom</code> and <code>:center</code> for vertical alignment.</p>',21),d=[n];function s(h,l,r,u,c,p){return o(),t("div",null,d)}const b=e(a,[["render",s]]);export{m as __pageData,b as default};
