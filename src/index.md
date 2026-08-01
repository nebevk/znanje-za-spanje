---
layout: base
title: Domov
templateEngineOverride: liquid
---

<section class="hero relative min-h-[75vh] md:min-h-[85vh] bg-cover bg-center bg-no-repeat" style="background-image: url('{{ home.hero_image | default: '/assets/images/tomoko-uji-kxvn1ogpTtE-unsplash.jpg' }}');">
  <div class="absolute inset-0 bg-gradient-to-b from-base-200/30 via-base-200/55 to-base-200/85"></div>
  <div class="hero-content relative z-10 text-center px-4 py-16 md:py-20">
    <div class="max-w-3xl space-y-6">
      <div class="badge badge-secondary badge-lg gap-2 shadow-sm">
        <span class="w-2 h-2 rounded-full bg-secondary-content/50"></span>
        Svetovanje za spanje
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-base-content">{{ home.hero_title }}</h1>
      <p class="text-base sm:text-lg text-base-content/85 max-w-2xl mx-auto">{{ home.hero_subtitle }}</p>
      <div class="flex flex-col sm:flex-row justify-center sm:items-center gap-3 sm:gap-4 pt-2">
        <a href="/kontakt" class="btn btn-primary btn-lg w-full sm:w-auto shadow-md">Rezerviraj posvet</a>
        <a href="/storitve" class="btn btn-ghost btn-lg w-full sm:w-auto bg-base-100/60 hover:bg-base-100/80 backdrop-blur-sm">Poglej storitve →</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="card bg-base-100 shadow-sm">
    <div class="card-body">
      <h2 class="card-title font-display text-xl sm:text-2xl">Komu pomagam</h2>
      <p class="text-base-content/80 text-base sm:text-lg">{{ home.komu }}</p>
    </div>
  </div>

  <div class="text-center max-w-2xl mx-auto mt-14 mb-10">
    <div class="badge badge-secondary mb-4">Pri čem pomagam</div>
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Se prepoznate v čem od tega?</h2>
    <p class="text-base-content/70 mt-2">Najpogostejše težave, s katerimi me obiščejo družine.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "moon", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Težko uspavanje</h3>
        <p class="text-sm text-base-content/70">Uspavanje traja dolgo in zahteva zibanje, vožnjo ali dojenje do spanca.</p>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "refresh-cw", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Pogosta nočna prebujanja</h3>
        <p class="text-sm text-base-content/70">Otrok se ponoči večkrat zbudi in težko zaspi nazaj brez vaše pomoči.</p>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "timer", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Kratki dnevni spanci</h3>
        <p class="text-sm text-base-content/70">Spanci trajajo le 30–45 minut, otrok je čez dan utrujen in siten.</p>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "sunrise", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Zgodnje jutranje bujenje</h3>
        <p class="text-sm text-base-content/70">Dan se začne ob petih zjutraj, čeprav gre otrok dovolj zgodaj spat.</p>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "hand-helping", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Odvisnost od pomoči</h3>
        <p class="text-sm text-base-content/70">Otrok zaspi le ob določenem pogoju – prsih, dudi ali v naročju.</p>
      </div>
    </div>
    <div class="card bg-base-100 shadow-sm hover:shadow-md transition-shadow">
      <div class="card-body">
        <div class="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-2">{% icon "route", "w-6 h-6" %}</div>
        <h3 class="card-title font-display text-lg">Prehodi in mejniki</h3>
        <p class="text-sm text-base-content/70">Selitev v posteljico, opuščanje spancev, zobje ali razvojni skoki.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="text-center mb-10">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Kako poteka</h2>
    <p class="text-base-content/70 mt-2">Štirje preprosti koraki do mirnejših noči.</p>
  </div>
  <ul class="steps steps-vertical lg:steps-horizontal w-full">
    <li class="step step-primary">
      <div class="mt-3 max-w-[12rem]">
        <div class="font-semibold">Uvodni pogovor</div>
        <div class="text-sm text-base-content/70">Kratek klic za spoznavanje</div>
      </div>
    </li>
    <li class="step step-primary">
      <div class="mt-3 max-w-[12rem]">
        <div class="font-semibold">Analiza</div>
        <div class="text-sm text-base-content/70">Pregled rutine in spanca</div>
      </div>
    </li>
    <li class="step step-primary">
      <div class="mt-3 max-w-[12rem]">
        <div class="font-semibold">Načrt po meri</div>
        <div class="text-sm text-base-content/70">Konkretni koraki za vašo družino</div>
      </div>
    </li>
    <li class="step step-primary">
      <div class="mt-3 max-w-[12rem]">
        <div class="font-semibold">Mirnejše noči</div>
        <div class="text-sm text-base-content/70">Podpora med izvajanjem</div>
      </div>
    </li>
  </ul>
</section>

<section class="section">
  <div class="text-center mb-10">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Mnenja mamic</h2>
  </div>
  <div class="grid md:grid-cols-2 gap-6">
    {% assign sorted_testimonials = collections.testimonials | sortByOrder %}
    {% for t in sorted_testimonials %}
      <div class="card bg-base-100 shadow-sm">
        <div class="card-body">
          <div class="text-secondary text-5xl font-display leading-none -mb-2">"</div>
          <p class="italic text-base-content/90">{{ t.data.quote }}</p>
          <div class="flex items-center gap-3 mt-4">
            <div class="avatar placeholder">
              <div class="bg-accent text-accent-content rounded-full w-10">
                <span>{{ t.data.author | slice: 0, 1 }}</span>
              </div>
            </div>
            <div>
              <div class="font-semibold text-sm">{{ t.data.author }}</div>
              <div class="text-xs text-base-content/60">{{ t.data.role }}</div>
            </div>
          </div>
        </div>
      </div>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="card lg:card-side bg-base-100 shadow-md overflow-hidden">
    <figure class="lg:w-1/3 bg-accent">
      <img src="/assets/images/eva_silhouete.png" alt="Eva" loading="lazy" class="w-full h-48 sm:h-64 lg:h-full object-cover" />
    </figure>
    <div class="card-body lg:w-2/3">
      <h3 class="card-title font-display text-xl sm:text-2xl">Eva, fizioterapevtka in svetovalka za spanje</h3>
      <p class="text-base-content/80">Mame me obiščejo, ko so utrujene in želijo nežne, a učinkovite rešitve.</p>
      <div class="card-actions mt-2">
        <a href="/o-meni" class="btn btn-secondary btn-sm">Preberi več o meni</a>
      </div>
    </div>
  </div>
</section>

{% assign latest_posts = collections.posts | reverse %}
{% if latest_posts.size > 0 %}
<section class="section">
  <div class="flex flex-wrap items-end justify-between gap-4 mb-10">
    <div>
      <div class="badge badge-secondary mb-3">Blog</div>
      <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Najnovejši nasveti</h2>
      <p class="text-base-content/70 mt-2">Praktični članki o spanju dojenčkov in malčkov.</p>
    </div>
    <a href="/blog" class="btn btn-ghost btn-sm rounded-full">Vsi članki →</a>
  </div>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {% for post in latest_posts limit: 3 %}
      <a href="{{ post.url }}" class="card bg-base-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden group">
        <div class="card-body">
          <div class="flex flex-wrap items-center gap-2 text-xs text-base-content/50 uppercase tracking-wider mb-2">
            <time>{{ post.data.date | readableDate }}</time>
            <span>·</span>
            <span>{{ post.templateContent | readingTime }}</span>
          </div>
          <h3 class="card-title font-display text-lg leading-tight group-hover:text-primary transition-colors">{{ post.data.title }}</h3>
          <p class="text-sm text-base-content/70 line-clamp-3 mt-2">{{ post.templateContent | strip_html | truncate: 130 }}</p>
          <div class="mt-auto pt-4 flex items-center text-primary font-semibold text-sm gap-1">
            Preberi članek
            <span class="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </a>
    {% endfor %}
  </div>
</section>
{% endif %}

<section class="section">
  <div class="card bg-secondary text-secondary-content shadow-lg">
    <div class="card-body items-center text-center py-10 md:py-12">
      <h2 class="card-title font-display text-2xl sm:text-3xl md:text-4xl">Pripravljeni na mirnejše noči?</h2>
      <p class="text-base sm:text-lg opacity-90">Začnimo z brezplačnim uvodnim pogovorom.</p>
      <div class="card-actions mt-4 w-full sm:w-auto">
        <a href="/kontakt" class="btn btn-neutral btn-lg w-full sm:w-auto">Rezerviraj posvet</a>
      </div>
    </div>
  </div>
</section>
