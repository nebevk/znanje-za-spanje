
---
layout: base
title: Kontakt / Rezervacija
---

<section class="card p-6">
  <h1 class="text-2xl font-semibold">Kontakt / Rezervacija</h1>
  <p class="text-gray-700 mt-2">Izpolnite obrazec in Eva vam bo odgovorila.</p>

  <form name="contact" method="POST" data-netlify="true" class="mt-4 grid gap-4">
    <input type="hidden" name="form-name" value="contact" />
    <label class="block">
      <div class="text-sm font-medium">Ime</div>
      <input name="name" required class="mt-1 p-3 w-full card" />
    </label>
    <label class="block">
      <div class="text-sm font-medium">E‑pošta</div>
      <input type="email" name="email" required class="mt-1 p-3 w-full card" />
    </label>
    <label class="block">
      <div class="text-sm font-medium">Sporočilo / Željen termin</div>
      <textarea name="message" rows="4" class="mt-1 p-3 w-full card"></textarea>
    </label>

    <button type="submit" class="cta">Pošlji povpraševanje</button>
  </form>

  <div class="mt-8">
    <h3 class="font-semibold">Neposredna rezervacija</h3>
    <p class="text-sm text-gray-700 mt-2">Če želite neposredno rezervirati termin, lahko vstavimo Calendly embed ali povezavo.</p>
    <!-- Calendly embed placeholder - replace with your Calendly link/script -->
    <div class="mt-4 card p-6">
      <div class="text-sm">Calendly embed will appear here. Replace with your Calendly snippet.</div>
    </div>
  </div>
</section>
