
---
layout: base
title: Blog / Nasveti
---

<section class="card p-6">
  <h1 class="text-2xl font-semibold">Blog / Nasveti</h1>
  <p class="text-gray-700 mt-2">Članki o spanju dojenčkov in malčkov.</p>
  <ul class="mt-4">
    {% for post in collections.posts %}
      <li class="mt-2">
        <a href="{{ post.url }}" class="font-semibold">{{ post.data.title }}</a>
        <div class="text-sm text-gray-600">{{ post.data.date | date: "%Y-%m-%d" }}</div>
      </li>
    {% endfor %}
  </ul>
</section>
