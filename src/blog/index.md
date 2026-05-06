---
layout: base
title: Blog / Nasveti
---

<section class="section">
  <div class="text-center max-w-2xl mx-auto mb-12">
    <div class="badge badge-secondary mb-4">Blog</div>
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Nasveti za mirnejši spanec</h1>
    <p class="text-base-content/70 text-base sm:text-lg">Praktični članki o spanju dojenčkov in malčkov.</p>
  </div>

  {% if collections.posts.size > 0 %}
    <div class="grid md:grid-cols-2 gap-6">
      {% assign sorted = collections.posts | reverse %}
      {% for post in sorted %}
        <a href="{{ post.url }}" class="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all">
          <div class="card-body">
            <div class="text-xs text-base-content/50 uppercase tracking-wider">{{ post.data.date | readableDate }}</div>
            <h2 class="card-title font-display">{{ post.data.title }}</h2>
            <div class="card-actions justify-end mt-2">
              <span class="text-primary font-semibold text-sm">Preberi članek →</span>
            </div>
          </div>
        </a>
      {% endfor %}
    </div>
  {% else %}
    <div class="alert bg-base-100 shadow-sm">
      <span>Kmalu prvi članki — spremljajte. ✨</span>
    </div>
  {% endif %}
</section>
