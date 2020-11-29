---
layout: page
permalink: /workshop/
lang: fa
title: کارگاه های جشنواره اوپن سورس فارسی
---

<h2>اسامی کارگاه های جشنواره متن باز فارسی</h2>

<ul class="post-list">
  {% for post in site.speakers %}
    <li>
      {% assign date_format = site.cayman-blog.date_format | default: "%b %-d, %Y" %}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}" title="{{ post.title }}">{{ post.title | escape }}</a>
      </h2>
      <span>{{ post.excerpt | markdownify | truncatewords: 30 }}</span>
    </li>
  {% endfor %}
</ul>
