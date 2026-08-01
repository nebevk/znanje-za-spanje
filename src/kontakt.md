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
      <p class="text-base-content/70 mb-8 text-base sm:text-lg">Imate vprašanje o spanju vašega otroka? Izpolnite obrazec in oglasila se vam bom v najkrajšem možnem času. Uvodni pogovor je brezplačen in brez obveznosti.</p>

      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/hvala/" class="space-y-3">
            <input type="hidden" name="form-name" value="contact" />
            <p class="hidden">
              <label>Ne izpolnjujte tega polja: <input name="bot-field" /></label>
            </p>
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">Ime</span></div>
              <input type="text" name="name" required autocomplete="name" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">E-pošta</span></div>
              <input type="email" name="email" required autocomplete="email" class="input input-bordered w-full" />
            </label>
            <label class="form-control w-full">
              <div class="label">
                <span class="label-text font-medium">Starost otroka</span>
                <span class="label-text-alt text-base-content/50">neobvezno</span>
              </div>
              <input type="text" name="child_age" class="input input-bordered w-full" placeholder="npr. 8 mesecev" />
            </label>
            <label class="form-control w-full">
              <div class="label"><span class="label-text font-medium">Sporočilo / željen termin</span></div>
              <textarea name="message" rows="5" required class="textarea textarea-bordered w-full" placeholder="Povejte mi nekaj o vaši situaciji: kako poteka spanje, kaj vas najbolj skrbi, kaj ste že poskusili ..."></textarea>
            </label>
            <button type="submit" class="btn btn-primary btn-block mt-2">Pošlji povpraševanje</button>
            <div class="flex items-start gap-2 text-xs text-base-content/60">
              <span class="text-secondary shrink-0 mt-0.5">{% icon "shield-check", "w-4 h-4" %}</span>
              <span>Odgovorim običajno v 24–48 urah. Vaši podatki se uporabijo izključno za odgovor na vaše povpraševanje. Več v <a href="/zasebnost" class="link link-hover">politiki zasebnosti</a>.</span>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <div class="card bg-secondary/15 border border-secondary/30 shadow-sm">
        <div class="card-body">
          <h2 class="card-title font-display">Kako poteka</h2>
          <ul class="space-y-4 mt-2">
            <li class="flex items-start gap-3">
              <span class="badge badge-secondary badge-lg shrink-0 font-semibold">1</span>
              <div>
                <div class="font-semibold">Oddate povpraševanje</div>
                <p class="text-sm text-base-content/70">Izpolnite obrazec ali mi pišite na e-pošto.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-secondary badge-lg shrink-0 font-semibold">2</span>
              <div>
                <div class="font-semibold">Brezplačen uvodni klic</div>
                <p class="text-sm text-base-content/70">Na kratko se spoznava in pogledava, kako vam lahko pomagam.</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="badge badge-secondary badge-lg shrink-0 font-semibold">3</span>
              <div>
                <div class="font-semibold">Načrt po meri</div>
                <p class="text-sm text-base-content/70">Izberemo storitev in začnemo s konkretnimi koraki.</p>
              </div>
            </li>
          </ul>
          <!-- Za neposredno rezervacijo lahko sem vstaviš Calendly embed (glej README). -->
        </div>
      </div>

      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title font-display">Kontaktni podatki</h2>
          <ul class="space-y-4 text-sm">
            <li class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">{% icon "mail", "w-4 h-4" %}</span>
              <a href="mailto:{{ site.email }}" class="link link-hover break-all">{{ site.email }}</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">{% icon "instagram", "w-4 h-4" %}</span>
              <a href="https://instagram.com/{{ site.instagram | replace: '@', '' }}" target="_blank" rel="noopener" class="link link-hover">{{ site.instagram }}</a>
            </li>
            <li class="flex items-center gap-3">
              <span class="w-9 h-9 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">{% icon "video", "w-4 h-4" %}</span>
              <span>Posveti potekajo na daljavo (video klic)</span>
            </li>
          </ul>
          <div class="divider my-2"></div>
          <p class="text-sm text-base-content/70">Odzovem se v 24–48 urah, od ponedeljka do petka.</p>
        </div>
      </div>
    </div>
  </div>
</section>
