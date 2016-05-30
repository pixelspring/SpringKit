---
layout: post
title:  "Button Groups"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_buttongroups.scss
---

<div class="row column">
    <p class="lead-text">Button groups are a group of buttons used for related actions. They are of the same six types as regular buttons:</p>
    <ul>
        <li>Standard (outline)</li>
        <li>Primary (solid primary color background)</li>
        <li>Success (solid success color background)</li>
        <li>Warning (solid warning color background)</li>
        <li>Danger (solid danger color background)</li>
        <li>Info (solid info color background)</li>
    </ul>
</div>

<div class="row column">
    <h4>Standard:</h4>
    <div class="button-group" role="group">
        <a class="button">One</a>
        <a class="button">Two</a>
        <a class="button">Three</a>
    </div>
</div>

<div class="row column">
    <h4>Info:</h4>
    <div class="button-group" role="group">
        <a class="button button-info">One</a>
        <a class="button button-info">Two</a>
        <a class="button button-info">Three</a>
    </div>
</div>



<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Outline (Standard) Buttons: -->
<div class="button-group" role="group">
    <a class="button">One</a>
    <a class="button">Two</a>
    <a class="button">Three</a>
</div>

<!-- info Buttons: -->
<div class="button-group" role="group">
    <a class="button button-info">One</a>
    <a class="button button-info">Two</a>
    <a class="button button-info">Three</a>
</div>
{% endhighlight %}
</div>