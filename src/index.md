---
layout: base
title: Domov
templateEngineOverride: liquid
---

<section class="relative min-h-[88vh] flex items-end md:items-center overflow-hidden">
  <img
    src="{{ home.hero_image | default: '/assets/images/tomoko-uji-kxvn1ogpTtE-unsplash.jpg' }}"
    alt=""
    class="absolute inset-0 w-full h-full object-cover animate-fade-in"
    fetchpriority="high"
  />
  <div class="absolute inset-0 bg-neutral/35 md:bg-neutral/20"></div>
  <div class="absolute inset-0 bg-gradient-to-t from-neutral/95 via-neutral/70 to-neutral/45 md:from-neutral/85 md:via-neutral/45 md:to-neutral/25"></div>
  <div class="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16 md:py-24 text-neutral-content">
    <p class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight animate-rise-in drop-shadow-sm">
      {{ site.brand | default: "Teta Luna" }}
    </p>
    <h1 class="mt-5 max-w-2xl text-xl sm:text-2xl md:text-3xl font-display font-medium leading-snug text-neutral-content animate-rise-in" style="animation-delay: 120ms">
      {{ home.hero_title }}
    </h1>
    <p class="mt-4 max-w-xl text-base sm:text-lg text-neutral-content/90 animate-rise-in" style="animation-delay: 220ms">
      {{ home.hero_subtitle }}
    </p>
    <div class="mt-8 flex flex-col sm:flex-row gap-3 animate-rise-in" style="animation-delay: 320ms">
      <a href="{{ site.nav_cta_href | default: '/kontakt' }}" class="btn btn-primary btn-lg w-full sm:w-auto">{{ site.nav_cta_label | default: "Rezerviraj posvet" }}</a>
      <a href="/storitve" class="btn btn-ghost btn-lg w-full sm:w-auto text-neutral-content border-neutral-content/45 hover:bg-neutral-content/10 hover:border-neutral-content/65">Poglej storitve</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="max-w-3xl">
    <h2 class="section-title">{{ home.komu_title | default: "Komu pomagam" }}</h2>
    <p class="section-lead">{{ home.komu }}</p>
  </div>

  <div class="mt-14 max-w-3xl">
    <h2 class="section-title">{{ home.problems_title | default: "Se prepoznate?" }}</h2>
    <p class="section-lead">{{ home.problems_lead }}</p>
  </div>

  <ul class="mt-10 max-w-3xl divide-y divide-base-300 border-y border-base-300">
    {% for item in home.problems %}
      <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
        <span class="font-display text-2xl text-primary/70 w-8 shrink-0">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}</span>
        <div>
          <h3 class="font-display text-xl sm:text-2xl">{{ item.title }}</h3>
          <p class="text-base-content/70 mt-1">{{ item.text }}</p>
        </div>
      </li>
    {% endfor %}
  </ul>
</section>

<section class="bg-base-100/70 border-y border-base-300">
  <div class="section">
    <h2 class="section-title">{{ home.steps_title | default: "Kako poteka" }}</h2>
    <p class="section-lead">{{ home.steps_lead }}</p>

    <ol class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      {% for step in home.steps %}
        <li>
          <div class="font-display text-4xl text-primary/50">{{ forloop.index }}</div>
          <h3 class="font-display text-xl mt-2">{{ step.title }}</h3>
          <p class="text-sm text-base-content/70 mt-1">{{ step.text }}</p>
        </li>
      {% endfor %}
    </ol>
  </div>
</section>

<section class="section">
  <h2 class="section-title">Mnenja mamic</h2>
  <div class="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
    {% assign sorted_testimonials = collections.testimonials | sortByOrder %}
    {% for t in sorted_testimonials %}
      <figure class="space-y-4">
        <div class="quote-mark" aria-hidden="true">"</div>
        <blockquote class="text-lg sm:text-xl font-display leading-relaxed text-base-content/90 -mt-6">
          {{ t.data.quote }}
        </blockquote>
        <figcaption class="text-sm">
          <span class="font-medium">{{ t.data.author }}</span>
          {% if t.data.role %}<span class="text-base-content/55"> · {{ t.data.role }}</span>{% endif %}
        </figcaption>
      </figure>
    {% endfor %}
  </div>
</section>

<section class="border-y border-base-300 bg-base-100/50">
  <div class="section">
    <div class="grid lg:grid-cols-12 gap-10 items-center">
      <div class="lg:col-span-5">
        <img
          src="{{ about.photo | default: '/assets/images/eva_silhouete.png' }}"
          alt="{{ about.photo_alt | default: about.name | default: 'Eva' }}"
          loading="lazy"
          class="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] object-cover object-top"
        />
      </div>
      <div class="lg:col-span-7 space-y-5">
        <h2 class="section-title">{{ home.eva_title | default: about.name | default: "Eva" }}</h2>
        <p class="text-lg text-base-content/80">{{ home.eva_text }}</p>
        <a href="/o-meni" class="btn btn-secondary">{{ home.eva_link_label | default: "Preberi več o meni" }}</a>
      </div>
    </div>
  </div>
</section>

{% assign latest_posts = collections.posts | reverse %}
{% if latest_posts.size > 0 %}
<section class="section">
  <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
    <div>
      <h2 class="section-title">{{ home.posts_title | default: "Najnovejši nasveti" }}</h2>
      <p class="section-lead">{{ home.posts_lead }}</p>
    </div>
    <a href="/blog" class="text-sm font-medium text-primary hover:underline underline-offset-4">Vsi članki →</a>
  </div>
  <ul class="divide-y divide-base-300 border-y border-base-300">
    {% for post in latest_posts limit: 3 %}
      <li>
        <a href="{{ post.url }}" class="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-5 sm:py-6">
          <time class="text-xs uppercase tracking-wider text-base-content/50 sm:w-28 shrink-0">{{ post.data.date | readableDate }}</time>
          <div class="min-w-0">
            <h3 class="font-display text-xl sm:text-2xl group-hover:text-primary transition-colors">{{ post.data.title }}</h3>
            <p class="text-sm text-base-content/65 mt-1 line-clamp-2">{{ post.templateContent | strip_html | truncate: 120 }}</p>
          </div>
        </a>
      </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

<section class="bg-secondary text-secondary-content">
  <div class="max-w-5xl mx-auto px-4 md:px-6 py-16 md:py-20 text-center">
    <h2 class="font-display text-3xl sm:text-4xl md:text-5xl">{{ home.cta_title | default: "Pripravljeni na mirnejše noči?" }}</h2>
    <p class="mt-3 text-base sm:text-lg opacity-85">{{ home.cta_text }}</p>
    <a href="{{ site.nav_cta_href | default: '/kontakt' }}" class="btn btn-primary btn-lg mt-8">{{ site.nav_cta_label | default: "Rezerviraj posvet" }}</a>
  </div>
</section>
