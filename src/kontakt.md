---
layout: base
title: Kontakt
templateEngineOverride: liquid
---

<section class="section">
  <div class="grid lg:grid-cols-2 gap-10">
    <div>
      <div class="badge badge-secondary mb-4">Kontakt</div>
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl mb-4">Pišite mi</h1>
      <p class="text-base-content/70 mb-8 text-base sm:text-lg">Izpolnite obrazec in odgovorila vam bom v najkrajšem možnem času.</p>

      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <form name="contact" method="POST" data-netlify="true" class="space-y-3">
            <input type="hidden" name="form-name" value="contact" />
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">Ime</span></div>
              <input type="text" name="name" required class="input input-bordered w-full" />
            </label>
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">E-pošta</span></div>
              <input type="email" name="email" required class="input input-bordered w-full" />
            </label>
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">Sporočilo / željen termin</span></div>
              <textarea name="message" rows="5" class="textarea textarea-bordered w-full" placeholder="Povejte mi nekaj o vaši situaciji..."></textarea>
            </label>
            <button type="submit" class="btn btn-primary btn-block mt-2">Pošlji povpraševanje</button>
          </form>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title font-display">Neposredna rezervacija</h2>
          <p class="text-sm text-base-content/70">Če želite neposredno rezervirati termin, lahko vstavimo Calendly embed ali povezavo.</p>
          <div class="mockup-window border border-base-300 mt-4">
            <div class="px-6 py-12 text-center bg-base-200">
              <p class="text-sm text-base-content/60">Calendly embed bo prikazan tukaj.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title font-display">Kontaktni podatki</h2>
          <ul class="space-y-3 text-sm">
            <li class="flex items-center gap-3">
              <span class="badge badge-secondary">@</span>
              <a href="mailto:{{ site.email }}" class="link link-hover">{{ site.email }}</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="badge badge-secondary">IG</span>
              <span>{{ site.instagram }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
