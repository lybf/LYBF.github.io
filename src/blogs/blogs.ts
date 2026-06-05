export declare type Blog = {
  title: string,
  date: string,
  description: string,
  content: string
}

const blogs: Blog[] = [{
  title: 'about-mdui-top-app-bar',
  date: '2026-06-04',
  description: 'A top bar component for mdui',
  content: `
<div>
    TopBar顶部工具栏,在设置scroll-behavior="elevate"时，需要额外设置scroll-target="目标元素选择器"才能正确工作,否则会导致页面滚动时顶部工具栏无法正确显示阴影效果。
    这是因为scroll-behavior="elevate"需要知道滚动的目标元素，以便在滚动时正确计算和应用阴影效果。如果没有设置scroll-target，组件将无法确定哪个元素是滚动的目标，从而无法正确显示阴影效果。
    在未设置scroll-target效果如下
<mdui-layout style="height: 40vh; margin-bottom: 16px; border: 1px solid gray; border-radius: 8px; overflow: hidden; display: block;">
  <mdui-top-app-bar
    scroll-behavior="elevate">
    <mdui-button-icon>
      <mdui-icon-menu>/<mdui-icon-menu>
    </mdui-button-icon>
    <mdui-top-app-bar-title>Title</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
    <mdui-button-icon>
      <mdui-icon-more-vert>/<mdui-icon-more-vert>
    </mdui-button-icon>
  </mdui-top-app-bar>
  <div style="height: 260px; overflow: auto;">
    <div style="height: 1000px"></div>
  </div>
</mdui-layout>

<HightlightComponent language="html">
    <pre><code>
&lt;mdui-layout style=&quot;height: 40vh;  border: 1px solid gray; border-radius: 8px; overflow: hidden; display: block;&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;elevate&quot;&gt;
    &lt;mdui-button-icon&gt;
      &lt;mdui-icon-menu&gt;/&lt;mdui-icon-menu&gt;
    &lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
    &lt;mdui-button-icon&gt;
      &lt;mdui-icon-more-vert&gt;/&lt;mdui-icon-more-vert&gt;
    &lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;
  &lt;div style=&quot;height: 260px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/mdui-layout&gt;
    </code></pre>
</HightlightComponent>

<mdui-divider></mdui-divider>

    在设置scroll-target后效果如下
<mdui-layout style="height: 40vh;  border: 1px solid gray; border-radius: 8px; overflow: hidden; display: block;">
  <mdui-top-app-bar
    scroll-behavior="elevate"
    scroll-target=".example-scroll-behavior-elevate"
  >
    <mdui-button-icon>
      <mdui-icon-menu>/<mdui-icon-menu>
    </mdui-button-icon>
    <mdui-top-app-bar-title>Title</mdui-top-app-bar-title>
    <div style="flex-grow: 1"></div>
     <mdui-button-icon>
      <mdui-icon-more-vert>/<mdui-icon-more-vert>
    </mdui-button-icon>
  </mdui-top-app-bar>
  <div class="example-scroll-behavior-elevate" style="height: 260px; overflow: auto;">
    <div style="height: 1000px"></div>
  </div>
</mdui-layout>

<HightlightComponent language="html">
<pre><code>
&lt;mdui-layout style=&quot;height: 40vh; border: 1px solid gray; border-radius: 8px; overflow: hidden; display: block;&quot;&gt;
  &lt;mdui-top-app-bar
    scroll-behavior=&quot;elevate&quot;
    scroll-target=&quot;.example-scroll-behavior-elevate&quot;
  &gt;
    &lt;mdui-button-icon&gt;
      &lt;mdui-icon-menu&gt;/&lt;mdui-icon-menu&gt;
    &lt;/mdui-button-icon&gt;
    &lt;mdui-top-app-bar-title&gt;Title&lt;/mdui-top-app-bar-title&gt;
    &lt;div style=&quot;flex-grow: 1&quot;&gt;&lt;/div&gt;
     &lt;mdui-button-icon&gt;
      &lt;mdui-icon-more-vert&gt;/&lt;mdui-icon-more-vert&gt;
    &lt;/mdui-button-icon&gt;
  &lt;/mdui-top-app-bar&gt;
  &lt;div class=&quot;example-scroll-behavior-elevate&quot; style=&quot;height: 260px;overflow: auto;&quot;&gt;
    &lt;div style=&quot;height: 1000px&quot;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/mdui-layout&gt;
</code></pre>

</HightlightComponent>
原文见

<a href="https://www.mdui.org/zh-cn/docs/2/components/top-app-bar">
  <div style="display:flex;align-items:center;">
    <mdui-icon-link></mdui-icon-link>
    Top App Bar
  </div>
</a>
</div>
    `
}


]



const getBlogByTitle = (title: string) => {
  return blogs.find(blog => blog.title === title)
}

export default {
  getBlogByTitle
}