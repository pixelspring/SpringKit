---
layout: post
title:  "Utilities"
date:   2016-03-02 15:31:56 +0000
categories: base
sassbase: base/_utilityclasses.scss
---

<div class="row column">
    <p class="lead-text">Utilities are small helper classes, available in the following categories:</p>

    <h3>Floats</h3>
    <p>Float element to left or right</p>
    <h3>Rounding</h3>
    <p>Apply radius or rounded for rounded corners</p>
    <h3>Text-Align</h3>
    <p>Align text to left center or right</p>
    <h3>Image Helpers</h3>
    <p>Align images to left, center, right and add border</p>
    <h3>Visibility</h3>
    <p>Hide text or elements</p>
    <h3>Z-Index</h3>
    <p>Apply z-index to element</p>
    <h3>Borders</h3>
    <p>Apply full border or t/r/b/l borders individually</p>

</div>

<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Floats -->
.fleft {
    float: left !important;
}

.fright {
    float: right !important;
}

<!-- Rounding -->
.radius {
    border-radius: $global-radius;
}

.rounded {
    border-radius: $rounded;
}

<!--  Text-Align -->
.text-left {
    text-align: left !important;
}

.text-right {
    text-align: right !important;
}

.text-centered {
    text-align: center !important;
}

.text-justify {
    text-align: justify !important;
}

<!-- Image Helpers -->
.image-left {
    float: left !important;
    margin: 0 $line-height $line-height 0;
}

.image-right {
    float: right !important;
    margin: 0  0 $line-height $line-height;
}

.image-centered {
    text-align: center !important;
}

.image-bordered {
    border: 1px solid $border-color;
}

<!-- Visibility -->
.hidden {
    display: none;
    visibility: hidden !important;
}

.hide-text {
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
}

<!-- Z-Index -->
.z1 { z-index: 1 }
.z2 { z-index: 2 }
.z3 { z-index: 3 }
.z4 { z-index: 4 }
.z5 { z-index: 5 }

<!-- Borders -->
<div class="border">Full Border</div>
<div class="border-top">Border-top</div>
<div class="border-right">Border-right</div>
<div class="border-bottom">Border-bottom</div>
<div class="border-left">Border-left</div>
{% endhighlight %}
</div>