---
layout: post
title:  "Pagination"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_pagination.scss
---

<div class="row column">
    <p class="lead-text">Pagination is a form of navigation. Example use cases include moving between search results pages or navigating article split into seperate pages.</p>
</div>

<div class="row column">
    <h4>Pagination Example:</h4>
    <ul class="pagination">
        <li><a href="#">&larr;</a></li>
        <li class="current">1</li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&rarr;</a></li>
    </ul>
</div>

<div class="row column">
    <h4>Centered Pagination Example:</h4>
    <ul class="pagination centered">
        <li><a href="#">&larr;</a></li>
        <li class="current">1</li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">&rarr;</a></li>
    </ul>
</div>



<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Pagination: -->
<ul class="pagination">
    <li><a href="#">&larr;</a></li>
    <li class="current">1</li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">&rarr;</a></li>
</ul>

<!-- Centered Pagination: -->
<ul class="pagination centered">
    <li><a href="#">&larr;</a></li>
    <li class="current">1</li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">&rarr;</a></li>
</ul>
{% endhighlight %}
</div>