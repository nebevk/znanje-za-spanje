---
layout: base
title: Blog / Nasveti
templateEngineOverride: liquid
---

<section class="section">
  <div class="text-center max-w-2xl mx-auto mb-12">
    <div class="badge badge-secondary mb-4">Blog</div>
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Nasveti za mirnejši spanec</h1>
    <p class="text-base-content/70 text-base sm:text-lg">Praktični članki o spanju dojenčkov in malčkov.</p>
  </div>

  {% assign sorted = collections.posts | reverse %}
  {% if sorted.size > 0 %}

    {% for post in sorted limit: 1 %}
      <a href="{{ post.url }}" class="card lg:card-side bg-base-100 shadow-md hover:shadow-xl transition-all overflow-hidden mb-12 group">
        <figure class="lg:w-2/5 aspect-video lg:aspect-auto bg-gradient-to-br from-accent via-base-200 to-secondary/40 relative">
          <div class="absolute top-4 left-4 badge badge-primary shadow-sm">Najnovejše</div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-7xl opacity-25 group-hover:scale-110 transition-transform duration-300">🌙</span>
          </div>
        </figure>
        <div class="card-body lg:w-3/5 lg:p-10">
          <div class="flex flex-wrap items-center gap-2 text-xs text-base-content/50 uppercase tracking-wider mb-2">
            <time>{{ post.data.date | readableDate }}</time>
            <span>·</span>
            <span>{{ post.templateContent | readingTime }}</span>
          </div>
          <h2 class="card-title font-display text-2xl sm:text-3xl leading-tight group-hover:text-primary transition-colors">{{ post.data.title }}</h2>
          <p class="text-base-content/70 mt-3 leading-relaxed">{{ post.templateContent | strip_html | truncate: 200 }}</p>
          <div class="card-actions mt-4">
            <span class="btn btn-primary btn-sm">Preberi članek →</span>
          </div>
        </div>
      </a>
    {% endfor %}

    {% if sorted.size > 1 %}
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {% for post in sorted offset: 1 %}
          <a href="{{ post.url }}" class="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden group">
            <div class="card-body">
              <div class="flex flex-wrap items-center gap-2 text-xs text-base-content/50 uppercase tracking-wider mb-2">
                <time>{{ post.data.date | readableDate }}</time>
                <span>·</span>
                <span>{{ post.templateContent | readingTime }}</span>
              </div>
              <h2 class="card-title font-display text-lg leading-tight group-hover:text-primary transition-colors">{{ post.data.title }}</h2>
              <p class="text-sm text-base-content/70 line-clamp-3 mt-2">{{ post.templateContent | strip_html | truncate: 130 }}</p>
              <div class="mt-auto pt-4 flex items-center text-primary font-semibold text-sm gap-1">
                Preberi članek
                <span class="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </a>
        {% endfor %}
      </div>
    {% endif %}

  {% else %}
    <div class="alert bg-base-100 shadow-sm max-w-2xl mx-auto">
      <span>Kmalu prvi članki. Spremljajte. ✨</span>
    </div>
  {% endif %}
</section>
