---
layout: post
title:  "Autonumber"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_autonumber.scss
---

<div class="row column">
    <p class="lead-text">Autonumber is a component that automatically adds a counter to elements</p>
</div>

<div class="row">
    <div class="small-6 columns">

        <div class="sk-numbered-div ">
            <div class="content">
                <h3>Title</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
            </div>
        </div>

        <div class="sk-numbered-div ">
            <div class="content">
                <h3>Title</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
            </div>
        </div>

        <div class="sk-numbered-div ">
            <div class="content">
                <h3>Title</h3>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>
            </div>
        </div>
      
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
                <td>$autonumber-pre-num</td>
                <td>String</td>
                <td><code>""</code></td>
                <td>Set a character before the number</td>
            </tr>
            <tr>
                <td>$autonumber-post-num</td>
                <td>String</td>
                <td><code>""</code></td>
                <td>Set a character after the number</td>
            </tr>

            <tr>
                <td>$autonumber-numberstyle</td>
                <td>String</td>
                <td><code>#eee</code></td>
                <td>Set the counter style</td>
            </tr>
            <tr>
                <td>$autonumber-number-bg</td>
                <td>Color</td>
                <td><code>""</code></td>
                <td>Set the number section background</td>
            </tr>
            <tr>
                <td>$autonumber-content-bg</td>
                <td>Color</td>
                <td><code>#ddd</code></td>
                <td>Set the content section background</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<div class="row">
    <div class="small-6 columns">

        <div class="sk-numbered-div ">
            <div class="content">
                <!-- Content -->
            </div>
        </div>

        <div class="sk-numbered-div ">
            <div class="content">
                <!-- Content -->
            </div>
        </div>

        <div class="sk-numbered-div ">
            <div class="content">
                <!-- Content -->
            </div>
        </div>
      
    </div>
</div>
{% endhighlight %}
</div>