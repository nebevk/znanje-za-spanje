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
          <img src="/assets/images/eva_silhouete.png" alt="Eva, silhueta" class="w-full h-full object-contain" />
        </figure>
      </div>
      <div class="stats stats-vertical shadow-sm bg-base-100 mt-6 w-full">
        <div class="stat">
          <div class="stat-title">Družin podprtih</div>
          <div class="stat-value text-primary text-3xl">100+</div>
        </div>
        <div class="stat">
          <div class="stat-title">Let izkušenj</div>
          <div class="stat-value text-secondary text-3xl">5</div>
        </div>
        <div class="stat">
          <div class="stat-title">Pristop</div>
          <div class="stat-value text-accent-content text-lg">Nežen, brez joka</div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-3 space-y-6">
      <h1 class="font-display text-3xl sm:text-4xl md:text-5xl">Eva</h1>
      <p class="text-lg text-base-content/80">Sem fizioterapevtka, ki se specializira v svetovanju za spanje dojenčkov in malčkov. Združujem znanja iz fizioterapije z nežnimi pristopi za izboljšanje spanja, prilagojenimi vsaki družini.</p>
      <p class="text-base-content/80">Po lastnih izkušnjah materinstva sem spoznala, kako močno pomanjkanje spanja vpliva na celotno družino, in kako pomembno je imeti nekoga, ki vas pelje korak za korakom skozi spremembe, ne da bi obsojal vaše dosedanje odločitve.</p>

      <div class="divider"></div>

      <h2 class="font-display text-2xl">Zakaj mi lahko zaupate</h2>
      <ul class="space-y-3">
        <li class="flex items-start gap-3">
          <span class="badge badge-primary badge-lg shrink-0">{% icon "check", "w-4 h-4" %}</span>
          <span>Izkušnje s sodelovanjem z mladimi družinami</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="badge badge-primary badge-lg shrink-0">{% icon "check", "w-4 h-4" %}</span>
          <span>Pristop, ki spoštuje starševski stil in otrokove potrebe</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="badge badge-primary badge-lg shrink-0">{% icon "check", "w-4 h-4" %}</span>
          <span>Strokovno znanje iz fizioterapije in razvoja dojenčkov</span>
        </li>
        <li class="flex items-start gap-3">
          <span class="badge badge-primary badge-lg shrink-0">{% icon "check", "w-4 h-4" %}</span>
          <span>Podpora po posvetu, ne ostanete sami</span>
        </li>
      </ul>
    </div>
  </div>
</section>

<section class="section">
  <div class="max-w-3xl">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl mb-4">Nežno, postopno, brez stresa</h2>
    <p class="text-base-content/70">Ne verjamem v metode "pusti ga jokati". Verjamem v predvidljivost, jasne meje in v to, da ima vsak otrok svoj tempo.</p>
  </div>

  <ul class="mt-10 max-w-3xl divide-y divide-base-300 border-y border-base-300">
    <li class="py-6">
      <h3 class="font-display text-xl sm:text-2xl">Razumevanje pred ukrepanjem</h3>
      <p class="text-sm text-base-content/70 mt-1">Najprej razumemo, zakaj se nekaj dogaja. Šele nato spreminjamo.</p>
    </li>
    <li class="py-6">
      <h3 class="font-display text-xl sm:text-2xl">Spoštovanje vaših vrednot</h3>
      <p class="text-sm text-base-content/70 mt-1">Načrt prilagodimo temu, kar se vam zdi prav, ne nasprotno.</p>
    </li>
    <li class="py-6">
      <h3 class="font-display text-xl sm:text-2xl">Postopne spremembe</h3>
      <p class="text-sm text-base-content/70 mt-1">Majhni, jasni koraki. Brez šokov za otroka in brez stresa za starše.</p>
    </li>
  </ul>
</section>

<section class="section">
  <div class="max-w-3xl mb-10">
    <h2 class="font-display text-2xl sm:text-3xl md:text-4xl">Pogosta vprašanja</h2>
  </div>

  <div class="max-w-3xl mx-auto space-y-3">
    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" checked />
      <div class="collapse-title font-display text-lg font-semibold">Pri kateri starosti otroka lahko začnemo?</div>
      <div class="collapse-content text-base-content/80">
        <p>Načeloma od 4. meseca dalje, ko se začnejo vzpostavljati zrelejši cikli spanja. Pri mlajših dojenčkih se pogovarjamo predvsem o realnih pričakovanjih, varnem spancu in podpori starša.</p>
      </div>
    </div>

    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-display text-lg font-semibold">Ali delate na daljavo?</div>
      <div class="collapse-content text-base-content/80">
        <p>Da, večina posvetov poteka preko videoklica (Zoom ali Google Meet). To je za večino družin tudi udobnejše. Pogovor lahko opravimo med otrokovim spancem ali zvečer.</p>
      </div>
    </div>

    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-display text-lg font-semibold">Ali zagovarjate metodo "cry it out"?</div>
      <div class="collapse-content text-base-content/80">
        <p>Ne. Moj pristop je nežen in postopen. Otroka nikoli ne pustimo samega v stiski. Cilj je, da se otrok nauči zaspati v varnem okolju, kjer ve, da je mama ali oče v bližini.</p>
      </div>
    </div>

    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-display text-lg font-semibold">Koliko časa traja, da vidimo izboljšave?</div>
      <div class="collapse-content text-base-content/80">
        <p>Večina družin opazi prve spremembe v 7–10 dneh. Stabilnejše rezultate običajno dosežemo v 2–3 tednih, odvisno od izhodišča in doslednosti.</p>
      </div>
    </div>

    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-display text-lg font-semibold">Ali še lahko dojim ponoči?</div>
      <div class="collapse-content text-base-content/80">
        <p>Seveda. Načrt prilagodim vašemu načinu hranjenja: dojenju, stekleničkam ali kombinaciji. Cilj ni odstavitev, ampak boljši spanec znotraj načina, ki vam ustreza.</p>
      </div>
    </div>

    <div class="collapse collapse-plus bg-base-100 shadow-sm">
      <input type="radio" name="faq-accordion" />
      <div class="collapse-title font-display text-lg font-semibold">Kaj če imamo dvojčke ali več otrok?</div>
      <div class="collapse-content text-base-content/80">
        <p>Sodelujem tudi z družinami z dvojčki in več otroki. Načrt v takem primeru upošteva dinamiko vse družine in praktične omejitve, ki jih to prinese.</p>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="card bg-secondary text-secondary-content shadow-lg">
    <div class="card-body items-center text-center py-10 md:py-12">
      <h2 class="card-title font-display text-2xl sm:text-3xl md:text-4xl">Pripravljeni na pogovor?</h2>
      <p class="text-base sm:text-lg opacity-90">Začnimo s kratkim, brezplačnim uvodnim klicem.</p>
      <div class="card-actions mt-4 w-full sm:w-auto">
        <a href="/kontakt" class="btn btn-neutral btn-lg w-full sm:w-auto">Rezerviraj posvet</a>
      </div>
    </div>
  </div>
</section>
