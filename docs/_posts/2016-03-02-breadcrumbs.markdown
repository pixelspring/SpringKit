---
layout: post
title:  "Breadcrumbs"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_breadcrumbs.scss
---

<div class="row column">
    <p class="lead-text">Breadcrumbs are used as a secondary navigation, to reveal the users location on the website, usually when a deeper hierarchical structure is in place.</p>
</div>

<div class="row column">
    <h4>Breadcrumb Example:</h4>
    <ul class="breadcrumb">
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li><a href="#">Item</a></li>
        <li class="active">Current Item</li>
    </ul>
</div>

<div class="row column">
    <h4>Sass Configuration:</h4>
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
                <td>$breadcrumb-padding</td>
                <td>String</td>
                <td><code>8px 15px</code></td>
                <td>Set the padding of the breadcrumb list in the container</td>
            </tr>
            <tr>
                <td>$breadcrumb-size</td>
                <td>Number</td>
                <td><code>$small-size</code></td>
                <td>Set size of breadcrumb elements</td>
            </tr>
            <tr>
                <td>$breadcrumb-radius</td>
                <td>Boolean</td>
                <td><code>$true</code></td>
                <td>Do you want a radius on the breadcrumb background?</td>
            </tr>
            <tr>
                <td>$breadcrumb-bg-colors</td>
                <td>Color</td>
                <td><code>palette(secondary, light)</code></td>
                <td>Define color of breadcrumb background</td>
            </tr>
            <tr>
                <td>$breadcrumb-seperator-color</td>
                <td>Color</td>
                <td><code>#ccc</code></td>
                <td>Define color of breadcrumb seperators</td>
            </tr>
            <tr>
                <td>$breadcrumb-active-color</td>
                <td>Color</td>
                <td><code>#777</code></td>
                <td>Define color of active breadcrumb elements</td>
            </tr>
            <tr>
                <td>$breadcrumb-seperator</td>
                <td>String</td>
                <td><code>">"</code></td>
                <td>Set the breadcrumb seperator character</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Breadcrumb List: -->
<ul class="breadcrumb">
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li><a href="#">Item</a></li>
    <li class="active">Current Item</li>
</ul>
{% endhighlight %}
</div>