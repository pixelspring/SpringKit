---
layout: post
title:  "Dropdowns"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_dropdowns.scss
---

<div class="row column">
    <p class="lead-text">Dropdowns are contextual toggle menus that drop down from their anchor link. They use dropdown.js for js functionality.</p>
</div>

<div class="row column">
    <div class="dropdown">

        <a id="dropdownMenu" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>

        <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
            <li><a role="menuitem" href="#">Link 1</a></li>
            <li><a role="menuitem" href="#">Link 2</a></li>
            <li><a role="menuitem" href="#">Link 3</a></li>
            <li><a role="menuitem" href="#">Link 4</a></li>
        </ul>

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
                <td>$dropdown-menu-min-width</td>
                <td>Number</td>
                <td><code>160px</code></td>
                <td>Set min-width of dropdown</td>
            </tr>
            <tr>
                <td>$dropdown-menu-bg</td>
                <td>Color</td>
                <td><code>White</code></td>
                <td>Set background color of dropdown</td>
            </tr>
            <tr>
                <td>$dropdown-menu-link-padding</td>
                <td>Number</td>
                <td><code>8px</code></td>
                <td>Set padding on active dropdown links</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h3>Example Code:</h3>
{% highlight html %}
<!-- Basic Dropdown menu -->
<div class="dropdown">

    <a id="dropdownMenu" href="#" role="button" class="dropdown-toggle" data-toggle="dropdown">Dropdown</a>

    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
        <li><a role="menuitem" href="#">Link 1</a></li>
        <li><a role="menuitem" href="#">Link 2</a></li>
        <li><a role="menuitem" href="#">Link 3</a></li>
        <li><a role="menuitem" href="#">Link 4</a></li>
    </ul>

</div>
{% endhighlight %}
</div>