---
layout: post
title:  "Dropdowns"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_dropdowns.scss
---

<div class="row column">
    <p class="lead-text">Dropdowns are contextual toggle menus that drop down from their anchor link. They can be used as standalone menus or within the navbar component.</p>
</div>

<div class="row column">
    <ul class="dropdown-menu">
        <li class="dropdown-menu-toggle" data-toggle="dropdown">
            <a href="#">DD</a>
            <ul class="dropdown-menu-content">
                <li><a role="menuitem" href="#">Linkylink</a></li>
                <li><a role="menuitem" href="#">Linkylink</a></li>
                <li><a role="menuitem" href="#">Linkylink</a></li>
            </ul>
        </li>
    </ul>
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
                <td>$dropdown-menu-min-width</td>
                <td>Number</td>
                <td><code>160px</code></td>
                <td>Set min-width of dropdown</td>
            </tr>

            <tr>
                <td>$dropdown-link-color</td>
                <td>Color</td>
                <td><code>white</code></td>
                <td>Set text color of dropdown</td>
            </tr>
            <tr>
                <td>$dropdown-menu-bg</td>
                <td>Color</td>
                <td><code>palette(primary, dark)</code></td>
                <td>Set background color of dropdown</td>
            </tr>
            <tr>
                <td>$dropdown-menu-hover-bg</td>
                <td>Color</td>
                <td><code>palette(primary, light)</code></td>
                <td>Set background hover color of dropdown</td>
            </tr>
            <tr>
                <td>$dropdown-menu-link-padding</td>
                <td>Number</td>
                <td><code>$line-height/2</code></td>
                <td>Set padding on active dropdown links</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h3>Example Code:</h3>
{% highlight html %}
<!-- Basic Dropdown menu -->
<ul class="dropdown-menu">
    <li class="dropdown-menu-toggle" data-toggle="dropdown">
        <a href="#">Dropdown Menu</a>
        <ul class="dropdown-menu-content">
            <li><a role="menuitem" href="#">Linkylink</a></li>
            <li><a role="menuitem" href="#">Linkylink</a></li>
            <li><a role="menuitem" href="#">Linkylink</a></li>
        </ul>
    </li>
</ul>
{% endhighlight %}
</div>