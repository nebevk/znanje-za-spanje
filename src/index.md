---
layout: base
title: Domov
---

<section class="hero min-h-[60vh] md:min-h-[70vh] bg-gradient-to-br from-accent via-base-200 to-secondary/40">
  <div class="hero-content flex-col lg:flex-row gap-8 md:gap-12 max-w-5xl px-4 py-12 md:py-16 w-full">
    <div class="lg:w-1/2 space-y-6 w-full">
      <div class="badge badge-secondary badge-lg gap-2">
        <span class="w-2 h-2 rounded-full bg-secondary-content/50"></span>
        Svetovanje za spanje
      </div>
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-display font-semibold leading-tight">{{ home.hero_title }}</h1>
      <p class="text-base sm:text-lg text-base-content/80">{{ home.hero_subtitle }}</p>
      <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-4">
        <a href="/kontakt" class="btn btn-primary btn-lg w-full sm:w-auto">Rezerviraj posvet</a>
        <a href="/storitve" class="btn btn-ghost btn-lg w-full sm:w-auto">Poglej storitve →</a>
      </div>
    </div>
    <div class="lg:w-1/2 w-full">
      <div class="card bg-base-100 shadow-xl lg:rotate-1 lg:hover:rotate-0 transition-transform overflow-hidden">
        <figure class="aspect-[4/3]">
          <img src="{{ home.hero_image | default: '/assets/images/hero-placeholder.jpg' }}" alt="Mirne noči za vašo družino" class="w-full h-full object-cover" />
        </figure>
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
      <img src="/assets/images/eva.jpg" alt="Eva" class="w-full h-48 sm:h-64 lg:h-full object-cover" />
    </figure>
    <div class="card-body lg:w-2/3">
      <h3 class="card-title font-display text-xl sm:text-2xl">Eva — fizioterapevtka in svetovalka za spanje</h3>
      <p class="text-base-content/80">Mame me obiščejo, ko so utrujene in želijo nežne, a učinkovite rešitve.</p>
      <div class="card-actions mt-2">
        <a href="/o-meni" class="btn btn-secondary btn-sm">Preberi več o meni</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-lg">
    <div class="card-body items-center text-center py-10 md:py-12">
      <h2 class="card-title font-display text-2xl sm:text-3xl md:text-4xl">Pripravljeni na mirnejše noči?</h2>
      <p class="text-base sm:text-lg">Začnimo z brezplačnim uvodnim pogovorom.</p>
      <div class="card-actions mt-4 w-full sm:w-auto">
        <a href="/kontakt" class="btn btn-neutral btn-lg w-full sm:w-auto">Rezerviraj posvet</a>
      </div>
    </div>
  </div>
</section>
