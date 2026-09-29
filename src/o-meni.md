---
layout: base
title: O meni
templateEngineOverride: liquid
---

<section class="section">
  <div class="grid lg:grid-cols-5 gap-10 items-start">
    <div class="lg:col-span-2">
      <div class="card bg-base-100 shadow-md overflow-hidden">
        <figure class="aspect-square bg-gradient-to-br from-accent via-base-200 to-secondary/40 p-8">
          <img src="{{ about.photo | default: '/assets/images/eva_silhouete.png' }}" alt="{{ about.photo_alt }}" class="w-full h-full object-contain" />
        </figure>
      </div>
      <div class="stats stats-vertical shadow-sm bg-base-100 mt-6 w-full">
        {% for stat in about.stats %}
          <div class="stat">
            <div class="stat-title">{{ stat.label }}</div>
            <div class="stat-value text-primary text-3xl">{{ stat.value }}</div>
          </div>
        {% endfor %}
      </div>
    </div>
    <div class="lg:col-span-3 space-y-6">
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl">{{ about.name }}</h1>
      {% for paragraph in about.bio %}
        <p class="text-lg text-base-content/80">{{ paragraph }}</p>
      {% endfor %}

      <div class="divider"></div>

      <h2 class="font-display text-2xl">{{ about.trust_title }}</h2>
      <ul class="space-y-3">
        {% for point in about.trust %}
          <li class="flex items-start gap-3">
            <span class="badge badge-primary badge-lg shrink-0">{% icon "check", "w-4 h-4" %}</span>
            <span>{{ point }}</span>
          </li>
        {% endfor %}
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="max-w-3xl">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl mb-4">{{ about.approach_title }}</h2>
    <p class="text-base-content/70">{{ about.approach_lead }}</p>
  </div>

  <ul class="mt-10 max-w-3xl divide-y divide-base-300 border-y border-base-300">
    {% for item in about.approach %}
      <li class="py-6">
        <h3 class="font-display text-xl sm:text-2xl">{{ item.title }}</h3>
        <p class="text-sm text-base-content/70 mt-1">{{ item.text }}</p>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="section">
  <div class="max-w-3xl mb-10">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">{{ about.faq_title }}</h2>
  </div>

  <div class="max-w-3xl mx-auto space-y-3">
    {% for item in about.faq %}
      <div class="collapse collapse-plus bg-base-100 shadow-sm">
        <input type="radio" name="faq-accordion"{% if forloop.first %} checked{% endif %} />
        <div class="collapse-title font-display text-lg font-semibold">{{ item.question }}</div>
        <div class="collapse-content text-base-content/80">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="card bg-secondary text-secondary-content shadow-lg">
    <div class="card-body items-center text-center py-10 md:py-12">
      <h2 class="card-title font-display text-2xl sm:text-3xl md:text-4xl">{{ about.cta_title }}</h2>
      <p class="text-base sm:text-lg opacity-90">{{ about.cta_text }}</p>
      <div class="card-actions mt-4 w-full sm:w-auto">
        <a href="{{ site.nav_cta_href | default: '/kontakt' }}" class="btn btn-neutral btn-lg w-full sm:w-auto">{{ site.nav_cta_label | default: "Rezerviraj posvet" }}</a>
      </div>
    </div>
  </div>
</section>
