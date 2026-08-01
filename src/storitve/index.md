---
layout: base
title: Storitve
templateEngineOverride: liquid
---

<section class="section">
  <div class="text-center max-w-2xl mx-auto mb-12">
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Programi po meri</h1>
    <p class="text-base-content/70 text-base sm:text-lg">Ponujam prilagojene programe, ki podpirajo vas in vašega otroka.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
    {% assign sorted_services = collections.services | sortByOrder %}
    {% for s in sorted_services %}
      {% if s.data.featured %}
        <div class="card bg-primary text-primary-content shadow-lg lg:scale-105 h-full">
          <div class="card-body">
            {% if s.data.badge %}<div class="badge badge-neutral">{{ s.data.badge }}</div>{% endif %}
            <h2 class="card-title font-display text-2xl">{{ s.data.title }}</h2>
            {% if s.data.duration %}
              <div class="flex items-center gap-2 text-sm opacity-90">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>
                {{ s.data.duration }}
              </div>
            {% endif %}
            <div class="font-display text-2xl mt-1">{% if s.data.price %}{{ s.data.price }}{% else %}<span class="text-base font-sans opacity-80">Cena na povpraševanje</span>{% endif %}</div>
            <p class="text-sm opacity-90 mt-1">{{ s.data.summary }}</p>
            {% if s.data.features %}
              <ul class="space-y-2 mt-4 text-sm">
                {% for f in s.data.features %}
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span>{{ f }}</span>
                  </li>
                {% endfor %}
              </ul>
            {% endif %}
            <div class="card-actions mt-6">
              <a href="/kontakt" class="btn btn-sm btn-neutral btn-block">Rezerviraj →</a>
            </div>
          </div>
        </div>
      {% else %}
        <div class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow h-full">
          <div class="card-body">
            {% if s.data.badge %}<div class="badge badge-accent">{{ s.data.badge }}</div>{% endif %}
            <h2 class="card-title font-display text-2xl">{{ s.data.title }}</h2>
            {% if s.data.duration %}
              <div class="flex items-center gap-2 text-sm text-base-content/60">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 2"/></svg>
                {{ s.data.duration }}
              </div>
            {% endif %}
            <div class="font-display text-2xl mt-1">{% if s.data.price %}{{ s.data.price }}{% else %}<span class="text-base font-sans text-base-content/60">Cena na povpraševanje</span>{% endif %}</div>
            <p class="text-sm text-base-content/70 mt-1">{{ s.data.summary }}</p>
            {% if s.data.features %}
              <ul class="space-y-2 mt-4 text-sm">
                {% for f in s.data.features %}
                  <li class="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 shrink-0 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                    <span class="text-base-content/80">{{ f }}</span>
                  </li>
                {% endfor %}
              </ul>
            {% endif %}
            <div class="card-actions mt-6">
              <a href="/kontakt" class="btn btn-sm btn-primary btn-block">Rezerviraj →</a>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <div class="text-center max-w-2xl mx-auto mt-16 mb-10">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Pot do mirnejših noči</h2>
  </div>
  <ol class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
    <li>
      <div class="font-display text-4xl text-primary/50">1</div>
      <div class="font-semibold mt-2">Uvodni pogovor</div>
      <div class="text-sm text-base-content/70 mt-1">Brezplačen kratek klic za spoznavanje</div>
    </li>
    <li>
      <div class="font-display text-4xl text-primary/50">2</div>
      <div class="font-semibold mt-2">Analiza</div>
      <div class="text-sm text-base-content/70 mt-1">Pregled rutine, vprašalnik in spanca</div>
    </li>
    <li>
      <div class="font-display text-4xl text-primary/50">3</div>
      <div class="font-semibold mt-2">Načrt po meri</div>
      <div class="text-sm text-base-content/70 mt-1">Konkretni koraki za vašo družino</div>
    </li>
    <li>
      <div class="font-display text-4xl text-primary/50">4</div>
      <div class="font-semibold mt-2">Podpora</div>
      <div class="text-sm text-base-content/70 mt-1">Spremljanje med izvajanjem sprememb</div>
    </li>
  </ol>

  <div class="alert bg-secondary/30 border border-secondary/40 mt-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
    <div>
      <h3 class="font-semibold">Darilni boni</h3>
      <p class="text-sm">Darilni boni so na voljo. Kontaktirajte me za podrobnosti.</p>
    </div>
  </div>
</section>
