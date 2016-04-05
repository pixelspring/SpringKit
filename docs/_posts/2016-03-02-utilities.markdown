---
layout: post
title:  "Utilities"
date:   2016-03-02 15:31:56 +0000
categories: base
sassbase: base/_utilityclasses.scss
---

<div class="row column">
    <p class="lead-text">Utilities are small helper classes, available in the following categories:</p>
    <ul>
        <li>Floats</li>
        <li>Rounding</li>
        <li>Text-Align</li>
        <li>Visibility</li>
        <li>Z-Index</li>
    </ul>
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
{% endhighlight %}
</div>