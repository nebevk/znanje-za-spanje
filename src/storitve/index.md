---
layout: base
title: Storitve
templateEngineOverride: liquid
---

<section class="section">
  <div class="text-center max-w-2xl mx-auto mb-12">
    <div class="badge badge-secondary mb-4">Storitve</div>
    <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Programi po meri</h1>
    <p class="text-base-content/70 text-base sm:text-lg">Ponujam prilagojene programe, ki podpirajo vas in vašega otroka.</p>
  </div>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
    {% assign sorted_services = collections.services | sortByOrder %}
    {% for s in sorted_services %}
      {% if s.data.featured %}
        <div class="card bg-primary text-primary-content shadow-lg lg:scale-105">
          <div class="card-body">
            {% if s.data.badge %}<div class="badge badge-neutral">{{ s.data.badge }}</div>{% endif %}
            <h2 class="card-title font-display text-2xl">{{ s.data.title }}</h2>
            <p class="text-sm opacity-90">{{ s.data.summary }}</p>
            <div class="card-actions justify-end mt-4">
              <a href="/kontakt" class="btn btn-sm btn-neutral">Rezerviraj →</a>
            </div>
          </div>
        </div>
      {% else %}
        <div class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow">
          <div class="card-body">
            {% if s.data.badge %}<div class="badge badge-accent">{{ s.data.badge }}</div>{% endif %}
            <h2 class="card-title font-display text-2xl">{{ s.data.title }}</h2>
            <p class="text-sm text-base-content/70">{{ s.data.summary }}</p>
            <div class="card-actions justify-end mt-4">
              <a href="/kontakt" class="btn btn-sm btn-ghost">Rezerviraj →</a>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
  </div>

  <div class="alert bg-secondary/30 border border-secondary/40 mt-12">
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 w-6 h-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>
    <div>
      <h3 class="font-semibold">Darilni boni</h3>
      <p class="text-sm">Darilni boni so na voljo. Kontaktirajte me za podrobnosti.</p>
    </div>
  </div>
</section>
