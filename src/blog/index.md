---
layout: base
title: Baza znanja
templateEngineOverride: liquid
---

<section class="section">
  <div class="text-center max-w-2xl mx-auto mb-10">
    <div class="badge badge-secondary mb-4">Baza znanja</div>
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Nasveti za mirnejši spanec</h1>
    <p class="text-base-content/70 text-base sm:text-lg">Praktični članki o spanju dojenčkov in malčkov. Poiščite temo, ki vas zanima.</p>
  </div>

  {% if collections.posts.size > 0 %}

    <div class="max-w-2xl mx-auto mb-6">
      <label class="input input-bordered flex items-center gap-2">
        {% icon "search", "w-5 h-5 opacity-60" %}
        <input id="kb-search" type="search" class="grow" placeholder="Išči po nasvetih ..." aria-label="Iskanje po bazi znanja" autocomplete="off" />
      </label>
    </div>

    <div class="flex flex-wrap justify-center gap-2 mb-10">
      <button type="button" class="kb-chip btn btn-sm rounded-full btn-primary" data-category="all">Vse</button>
      {% for cat in categories %}
        {% assign count = 0 %}
        {% for p in collections.posts %}{% if p.data.category == cat.slug %}{% assign count = count | plus: 1 %}{% endif %}{% endfor %}
        {% if count > 0 %}
          <button type="button" class="kb-chip btn btn-sm rounded-full btn-ghost" data-category="{{ cat.slug }}">{{ cat.label }}</button>
        {% endif %}
      {% endfor %}
    </div>

    <div id="kb-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {% assign sorted = collections.posts | reverse %}
      {% for post in sorted %}
        <a href="{{ post.url }}" data-url="{{ post.url }}" data-category="{{ post.data.category }}" class="card bg-base-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden group">
          <div class="card-body">
            <div class="flex flex-wrap items-center gap-2 text-xs text-base-content/50 uppercase tracking-wider mb-2">
              <time>{{ post.data.date | readableDate }}</time>
              <span>·</span>
              <span>{{ post.templateContent | readingTime }}</span>
            </div>
            {% if post.data.category %}
              <span class="badge badge-secondary badge-sm mb-1">{{ post.data.category | categoryLabel }}</span>
            {% endif %}
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

    <div id="kb-empty" class="alert bg-base-100 shadow-sm max-w-2xl mx-auto mt-8" style="display:none">
      <span>Ni zadetkov. Poskusite z drugo besedo ali izberite drugo kategorijo.</span>
    </div>

  {% else %}
    <div class="alert bg-base-100 shadow-sm max-w-2xl mx-auto">
      <span>Kmalu prvi članki. Spremljajte.</span>
    </div>
  {% endif %}
</section>
