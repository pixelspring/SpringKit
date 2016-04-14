---
layout: post
title:  "Accordions"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_accordions.scss
---

<div class="row column">
    <p class="lead-text">Accordions are components that expand and collapse (hide/show) content. They use <a href="https://github.com/cferdinandi/houdini">Houdini.js</a> for js functionality.</p>
</div>

<div class="row column">

    <!-- SECTION 1 -->
    <a class="collapse-toggle active" data-collapse="#section1" data-group="accordion" href="#">
        Accordion Section 1
        <span class="collapse-text-show"></span>
        <span class="collapse-text-hide"></span>
    </a>
        <div class="collapse active" id="section1">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
        </div>

    <!-- SECTION 2 -->
    <a class="collapse-toggle" data-collapse="#section2" data-group="accordion" href="#">
        Accordion Section 2
        <span class="collapse-text-show"></span>
        <span class="collapse-text-hide"></span>
    </a>
        <div class="collapse" id="section2">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
        </div>

    <!-- SECTION 3 -->
    <a class="collapse-toggle" data-collapse="#section3" data-group="accordion" href="#">
        Accordion Section 3
        <span class="collapse-text-show"></span>
        <span class="collapse-text-hide"></span>
    </a>
        <div class="collapse" id="section3">
            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
        </div>

</div>


<div class="row column">
    <h2>Sass Configuration:</h2>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>$accordion-show-content</td>
                <td>String</td>
                <td><code>"+"</code></td>
                <td>Set content of accordion show</td>
            </tr>
            <tr>
                <td>$accordion-hide-content</td>
                <td>String</td>
                <td><code>"-"</code></td>
                <td>Set content of accordion hide</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Section 1 Toggle -->
<a class="collapse-toggle active" data-collapse="#sec1" data-group="accordion" href="#">
    Accordion Section 1
    <span class="collapse-text-show"></span>
    <span class="collapse-text-hide"></span>
</a>

<!-- Section 1 Content -->
<div class="collapse active" id="sec1">
    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.</p>
</div>
{% endhighlight %}
</div>