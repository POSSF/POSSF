---
layout: page
permalink: /speaker/
lang: fa
title: سخنران های جشنواره اوپن سورس فارسی
---

<h2>اسامی سخنران های جشنواره منبع باز فارسی</h2>

<ul class="post-list">
  {% for post in site.speakers %}
    <li>
      {% assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" %}
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
      </h2>
      <span>{{ post.excerpt | markdownify | truncatewords: 30 }}</span>
    </li>
  {% endfor %}
</ul>
