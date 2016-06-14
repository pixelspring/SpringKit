---
layout: post
title:  "Accordions"
date:   2016-03-02 15:31:56 +0000
categories: components
sassbase: components/_accordions.scss
---

<div class="row column">
    <p class="lead-text">Accordions are components that expand and collapse (hide/show) content.</p>
</div>

<div class="row">

    <div class="medium-4 columns">
        <dl class="accordion">
            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 1</dt>
            <dd class="accordion-panel" role="tabpanel">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 2</dt>
            <dd class="accordion-panel" role="tabpanel">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 3</dt>
            <dd class="accordion-panel" role="tabpanel">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</dd>
        </dl>
    </div>

    <div class="medium-4 columns">
        <dl class="accordion">
            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 1</dt>
            <dd class="accordion-panel" role="tabpanel">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 2</dt>
            <dd class="accordion-panel" role="tabpanel">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 3</dt>
            <dd class="accordion-panel" role="tabpanel">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</dd>
        </dl>
    </div>

    <div class="medium-4 columns">
        <dl class="accordion">
            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 1</dt>
            <dd class="accordion-panel" role="tabpanel">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 2</dt>
            <dd class="accordion-panel" role="tabpanel">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</dd>

            <dt class="accordion-panel-toggle" data-toggle="accordion">Section 3</dt>
            <dd class="accordion-panel" role="tabpanel">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</dd>
        </dl>
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
                <td>$accordion-show-content</td>
                <td>String</td>
                <td><code>"+"</code></td>
                <td>Set content of accordion show</td>
            </tr>
            <tr>
                <td>$accordion-hide-content</td>
                <td>String</td>
                <td><code>"-"</code></td>
                <td>Set content of accordion hide</td>
            </tr>
        </tbody>
    </table>
</div>

<div class="row column">
<h4>Example Code:</h4>
{% highlight html %}
<!-- Accordion DL -->
<dl class="accordion">
    <!-- Accordion Toggle -->
    <dt class="accordion-panel-toggle" data-toggle="accordion">Section Title</dt>
    <!-- Accordion Panel -->
    <dd class="accordion-panel" role="tabpanel">Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</dd>
</dl>
{% endhighlight %}
</div>