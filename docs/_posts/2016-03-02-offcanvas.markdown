---
layout: post
title:  "Offcanvas"
date:   2016-03-02 15:31:56 +0000
categories: navigation
sassbase: components/_offcanvas.scss
---

<div class="row column">
    <p class="lead-text">The offcanvas component provides a slide in menu/panel from the l/h side</p>
</div>

<!--
<div class="row column">

</div>
-->


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
                <td>$offcanvas-width</td>
                <td>Number</td>
                <td><code>260px</code></td>
                <td>Set offcanvas width</td>
            </tr>
            <tr>
                <td>$offcanvas-mask-bg</td>
                <td>Color</td>
                <td><code>rgba(0,0,0,.7)</code></td>
                <td>Set offcanvas mask bg color</td>
            </tr>
            <tr>
                <td>$offcanvas-content-bg</td>
                <td>Color</td>
                <td><code>#efefef</code></td>
                <td>Set offcanvas content bg color</td>
            </tr>
        </tbody>
    </table>
</div>


<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Offcanvas Panel -->
<div id="offCanvas" class="offcanvas">
    <div class="offcanvas-content">
        <a class="button offCanvasToggleButton" data-toggle="offcanvas">Close</a>
        // Off canvas content in here
    </div>
</div>

<!-- Offcanvas Mask -->
<div id="offCanvasMask" class="offcanvas-mask" data-toggle="offcanvas"></div>

<!-- Container for page -->
<div id="container" class="container">
    <!-- Offcanvas toggle -->
    <a class="button offCanvasToggleButton" data-toggle="offcanvas">Close</a>
    // Page content goes in here:
</div>
{% endhighlight %}
</div>