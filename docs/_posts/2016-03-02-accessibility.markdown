---
layout: post
title:  "Accessibility"
date:   2016-03-02 15:31:56 +0000
categories: base
sassbase: base/_accessibility.scss
---

<div class="row column">
    <p class="lead-text">Accessibility classes</p>
</div>

<div class="row column">
<code>.sr-only</code><br>
Visually hides content but remains accessible to screen reader users
<hr>
<code>.show-on-focus</code><br>
Visually hides content until focussed. For elements other than anchors &amp; form elements, use in conjunction with tabindex, to allow them to recieve keyboard focus
</div>



<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- "Skip Navigation" Link, only visible to screen readers -->
<a class="sr-only" href="#maincontent">Skip to main content</a>

<!-- Visually hides content until focussed -->
<div class="show-me-when-focused" tabindex="0">
  <p>This content is visible on focus</p>
</div>
{% endhighlight %}
</div>