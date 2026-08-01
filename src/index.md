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
  <div class="absolute inset-0 bg-gradient-to-t from-neutral/85 via-neutral/45 to-neutral/25"></div>
  <div class="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 pt-28 pb-16 md:py-24 text-neutral-content">
    <p class="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight animate-rise-in">
      {{ site.brand | default: "Teta Luna" }}
    </p>
    <h1 class="mt-5 max-w-2xl text-xl sm:text-2xl md:text-3xl font-display font-medium leading-snug text-neutral-content/95 animate-rise-in" style="animation-delay: 120ms">
      {{ home.hero_title }}
    </h1>
    <p class="mt-4 max-w-xl text-base sm:text-lg text-neutral-content/80 animate-rise-in" style="animation-delay: 220ms">
      {{ home.hero_subtitle }}
    </p>
    <div class="mt-8 flex flex-col sm:flex-row gap-3 animate-rise-in" style="animation-delay: 320ms">
      <a href="/kontakt" class="btn btn-primary btn-lg">Rezerviraj posvet</a>
      <a href="/storitve" class="btn btn-ghost btn-lg text-neutral-content border-neutral-content/35 hover:bg-neutral-content/10 hover:border-neutral-content/55">Poglej storitve</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="max-w-3xl">
    <h2 class="section-title">Komu pomagam</h2>
    <p class="section-lead">{{ home.komu }}</p>
  </div>

  <div class="mt-14 max-w-3xl">
    <h2 class="section-title">Se prepoznate?</h2>
    <p class="section-lead">Najpogostejše težave, s katerimi me obiščejo družine.</p>
  </div>

  <ul class="mt-10 max-w-3xl divide-y divide-base-300 border-y border-base-300">
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">01</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Težko uspavanje</h3>
        <p class="text-base-content/70 mt-1">Uspavanje traja dolgo in zahteva zibanje, vožnjo ali dojenje do spanca.</p>
      </div>
    </li>
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">02</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Pogosta nočna prebujanja</h3>
        <p class="text-base-content/70 mt-1">Otrok se ponoči večkrat zbudi in težko zaspi nazaj brez vaše pomoči.</p>
      </div>
    </li>
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">03</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Kratki dnevni spanci</h3>
        <p class="text-base-content/70 mt-1">Spanci trajajo le 30–45 minut, otrok je čez dan utrujen in siten.</p>
      </div>
    </li>
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">04</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Zgodnje jutranje bujenje</h3>
        <p class="text-base-content/70 mt-1">Dan se začne ob petih zjutraj, čeprav gre otrok dovolj zgodaj spat.</p>
      </div>
    </li>
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">05</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Odvisnost od pomoči</h3>
        <p class="text-base-content/70 mt-1">Otrok zaspi le ob določenem pogoju – prsih, dudi ali v naročju.</p>
      </div>
    </li>
    <li class="py-5 sm:py-6 flex gap-4 sm:gap-6">
      <span class="font-display text-2xl text-primary/70 w-8 shrink-0">06</span>
      <div>
        <h3 class="font-display text-xl sm:text-2xl">Prehodi in mejniki</h3>
        <p class="text-base-content/70 mt-1">Selitev v posteljico, opuščanje spancev, zobje ali razvojni skoki.</p>
      </div>
    </li>
  </ul>
</section>

<section class="bg-base-100/70 border-y border-base-300">
  <div class="section">
    <h2 class="section-title">Kako poteka</h2>
    <p class="section-lead">Štirje koraki do mirnejših noči.</p>

    <ol class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
      <li>
        <div class="font-display text-4xl text-primary/50">1</div>
        <h3 class="font-display text-xl mt-2">Uvodni pogovor</h3>
        <p class="text-sm text-base-content/70 mt-1">Kratek klic za spoznavanje</p>
      </li>
      <li>
        <div class="font-display text-4xl text-primary/50">2</div>
        <h3 class="font-display text-xl mt-2">Analiza</h3>
        <p class="text-sm text-base-content/70 mt-1">Pregled rutine in spanca</p>
      </li>
      <li>
        <div class="font-display text-4xl text-primary/50">3</div>
        <h3 class="font-display text-xl mt-2">Načrt po meri</h3>
        <p class="text-sm text-base-content/70 mt-1">Konkretni koraki za vašo družino</p>
      </li>
      <li>
        <div class="font-display text-4xl text-primary/50">4</div>
        <h3 class="font-display text-xl mt-2">Mirnejše noči</h3>
        <p class="text-sm text-base-content/70 mt-1">Podpora med izvajanjem</p>
      </li>
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
          src="/assets/images/eva_silhouete.png"
          alt="Eva"
          loading="lazy"
          class="w-full max-w-md mx-auto lg:mx-0 aspect-[4/5] object-cover object-top"
        />
      </div>
      <div class="lg:col-span-7 space-y-5">
        <h2 class="section-title">Eva</h2>
        <p class="text-lg text-base-content/80">Fizioterapevtka in svetovalka za spanje. Mame me obiščejo, ko so utrujene in želijo nežne, a učinkovite rešitve.</p>
        <a href="/o-meni" class="btn btn-secondary">Preberi več o meni</a>
      </div>
    </div>
  </div>
</section>

{% assign latest_posts = collections.posts | reverse %}
{% if latest_posts.size > 0 %}
<section class="section">
  <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
    <div>
      <h2 class="section-title">Najnovejši nasveti</h2>
      <p class="section-lead">Praktični članki o spanju dojenčkov in malčkov.</p>
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
    <h2 class="font-display text-3xl sm:text-4xl md:text-5xl">Pripravljeni na mirnejše noči?</h2>
    <p class="mt-3 text-base sm:text-lg opacity-85">Začnimo z brezplačnim uvodnim pogovorom.</p>
    <a href="/kontakt" class="btn btn-primary btn-lg mt-8">Rezerviraj posvet</a>
  </div>
</section>
