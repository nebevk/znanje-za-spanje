# Content checklist — kaj je še treba pripraviti

Spletna stran trenutno na več mestih uporablja **generične vzorčne podatke** (besedilo, številke, mnenja), ki sem jih dodal za potrebe predogleda. Ta dokument je seznam vsega, kar bi bilo treba zamenjati ali dodati pred resničnim zagonom.

Razdeljeno po prioritetah:

- **Kritično** — trenutno na strani prikazani lažni ali izmišljeni podatki. Zamenjati pred deljenjem URL-ja.
- **Pomembno** — bi moralo biti pripravljeno pred prvimi strankami.
- **Kasneje** — nice-to-have, postopno.

Kjer piše "*hardcoded v `src/...`*", pomeni, da besedila ni mogoče urejati skozi CMS — uredi ga Nejc neposredno v kodi.

---

## Kritično

### Fotografije

- [ ] **Evina fotografija** za stran O meni in homepage — `assets/images/eva.jpg`
  - Format: kvadrat, vsaj 800×800 px
  - Trenutno: placeholder
- [ ] **Hero fotografija** za naslovno stran — `assets/images/hero-placeholder.jpg`
  - Format: razmerje 4:3, vsaj 1200 px širine
  - Predlog: mama z dojenčkom, mirno spanje, nežna paleta

### Besedilo

- [ ] **Bio na strani O meni** — trenutno popolnoma generičen ("Sem fizioterapevtka, ki se specializira..."). Mora vključevati:
  - Tvoja izobrazba (kje, leto)
  - Specializacije / tečaji za svetovanje za spanje (npr. ime certifikata, ustanove)
  - Profesionalna pot
  - Osebna nota (zakaj točno spanje? lastne izkušnje materinstva?)
  - *Hardcoded v `src/o-meni.md`*
- [ ] **Statistike na O meni** — "100+ družin podprtih", "5 let izkušenj" sem si **izmislil**. Preveri in zamenjaj s pravimi številkami, ali odstrani celotno sekcijo.
  - *Hardcoded v `src/o-meni.md`*
- [ ] **Hero naslov in podnaslov** na naslovni strani — preveri ton:
  - Trenutno: "Pomagam družinam do mirnih noči in spočite mame."
  - CMS → **Domov - vsebina**
- [ ] **"Komu pomagam"** odstavek na naslovni — generičen, dodaj specifične primere (starost otrok, simptomi, situacije)
  - CMS → **Domov - vsebina**
- [ ] **Vsa 4 mnenja mamic so izmišljena** (Maja, Ana, Nina, Klara). Zamenjaj s pravimi:
  - Pridobi pisno dovoljenje vsake stranke za objavo
  - CMS → **Mnenja mamic** (uredi obstoječe ali izbriši in dodaj nove)
- [ ] **Cene storitev** — trenutno **nikjer niso prikazane**. Dodaj v polje *Summary* posamezne storitve, ali povej Nejcu naj doda ločeno polje za ceno.
- [ ] **Trajanje in kaj je vključeno** za vsako storitev — "45 min", "60 min", "14 dni podpore" so moje predpostavke. Preveri vsako:
  - CMS → **Storitve** → odpri vsako (Posvet, Načrt spanja po meri, Spremljanje)

### Funkcionalnost

- [ ] **Calendly link** — sekcija "Neposredna rezervacija" na kontakt strani je samo prazen okvir. Možnosti:
  - Vstavi pravi Calendly embed (Nejcu pošlji embed snippet)
  - Ali pa odstrani celo sekcijo, dokler ni pripravljeno
- [ ] **Email naslov** — preveri `eva@znanjezaspanje.si`
  - CMS → **Splošno (site settings)**
- [ ] **Instagram ročka** — preveri `@znanje_za_spanje` (in da Instagram profil obstaja)
  - CMS → **Splošno (site settings)**

### Pravno (Slovenija / EU)

- [ ] **Politika zasebnosti** — stran **že obstaja** na `/zasebnost` (z linkom v footerju in pod kontaktnim obrazcem). Vsebuje vse obvezne razdelke (upravljavec, nameni, hramba, pravice, pritožba). **Treba je le izpolniti polja v oglatih oklepajih** v `src/zasebnost.md`:
  - `[Ime in priimek oz. naziv dejavnosti]`
  - `[Status, npr. samostojni podjetnik / fizična oseba]`
  - `[Naslov]` in `[Matična / davčna številka, če obstaja]`
  - `[npr. do zaključka komunikacije oziroma največ 12 mesecev]` (čas hrambe)
  - `[mesec in leto]` (datum zadnje posodobitve)
  - Priporočilo: pred objavo naj besedilo pregleda pravni strokovnjak.
- [ ] **Pogoji poslovanja** — kako poteka rezervacija, plačilo, odpoved, vračila
- [ ] **Podatki podjetja v footerju** — pravno zahtevani za poslovne subjekte v SI:
  - Polno ime poslovnega subjekta (s.p. ali d.o.o.)
  - Davčna številka (in DDV ID, če si zavezanec)
  - Naslov sedeža
  - Matična številka

---

## Pomembno

### Vizualno

- [ ] **Logo** — trenutno krog z "ZS" iz teksta. Lahko ostane minimalističen, ali pa naredimo pravi logotip
- [ ] **Favicon** — ikona v zavihku brskalnika; trenutno privzet prazen. Format: 32×32 in 192×192 PNG
- [ ] **Open Graph slika** — slika, ki se pokaže pri deljenju linka na FB / WhatsApp / Slack. Format: 1200×630 px

### Vsebina

- [ ] **FAQ na O meni** — 6 vprašanj/odgovorov, vsi generični. Posebej preveri:
  - "Pri kateri starosti otroka lahko začnemo?"
  - "Ali zagovarjate metodo cry it out?" (pomembno za stranke, ki to specifično iščejo)
  - "Koliko časa traja, da vidimo izboljšave?"
  - *Hardcoded v `src/o-meni.md`*
- [ ] **"Moj pristop"** (3 kartice na O meni) — preveri, ali ujemajo tvojo metodo
  - *Hardcoded v `src/o-meni.md`*
- [ ] **Blog članki** — 4 generične predloge so že tam:
  - "Kako vzpostaviti dnevni ritem za boljši spanec"
  - "Pogosta nočna prebujanja: kaj je normalno in kaj ne"
  - "Prehod z dveh na eno poldansko spanje"
  - "Dobrodošli, nasveti za mirnejši spanec" (welcome)
  
  Preveri strokovno točnost, prilagodi ton, ali zamenjaj s svojimi članki. CMS → **Blog / Nasveti**. Članki so trenutno kratki — **priporočam, da jih razširiš v daljše vodnike** (uvod, koraki, "kdaj poiskati pomoč"), saj blog zdaj deluje kot baza znanja z iskalnikom.
- [ ] **Kategorije člankov** — vsak članek ima polje **Kategorija** (CMS → Blog / Nasveti). Razvrsti vse nove članke v eno od kategorij (Osnove spanja, Nočna prebujanja, Dnevni spanci in ritem, Prehodi, Hranjenje in spanje, Starostna obdobja), da se prikažejo v pravem filtru na strani Baza znanja. Iskalnik samodejno zajame vse članke.

### Računi in integracije

- [ ] **Netlify Identity povabilo** za Evo (glej `README.md`, sekcija "Logging in to the CMS")
- [ ] **Calendly** račun + povezan Google Calendar + embed
- [ ] **Email obvestila** za kontaktni obrazec — privzeto Netlify pošlje na Nejcov mail; treba dodati Evin
  - Netlify → **Forms** → **Form notifications** → dodaj evin email

### Pravno

- [ ] **Cookie banner** — če bo dodan Google Analytics, FB pixel ali podobno
- [ ] **Postopek izstavljanja računa** — kdaj, kako, plačilni instrumenti

---

## Kasneje

- [ ] **Idejnik za blog** — 5–10 tem za naslednje mesece (npr. odhod v vrtec, počitnice in spanje, prehod iz posteljice v posteljo, brat/sestra in spanje)
- [ ] **Unikatne meta description** za vsako stran (boljše rangiranje na Googlu) — trenutno enotno
- [ ] **Sitemap.xml** in **robots.txt** za boljše indeksiranje
- [ ] **Google Analytics ali Plausible** — spremljanje obiskanosti (potrebuje cookie banner)
- [ ] **Newsletter integracija** (Mailchimp, ConvertKit) — če načrtuješ pošiljanje nasvetov
- [ ] **Instagram feed** na strani — avtomatsko prikazovanje zadnjih objav
- [ ] **Sekcija "Resursi" / brezplačni vodniki** — PDF v zameno za email (lead magnet)
- [ ] **Webinarji / delavnice** — če načrtuješ
- [ ] **Strokovne reference** — članki, citiranja, mnenja kolegov

---

## Kam gre kaj — referenčna tabela

| Vsebina | Kje se ureja |
|---|---|
| Fotografije | CMS image picker, ali direktno v `assets/images/` |
| Hero naslov/podnaslov, "Komu pomagam" | CMS → **Domov - vsebina** |
| Brand, email, Instagram | CMS → **Splošno (site settings)** |
| Bio, FAQ, statistike, "Moj pristop" | *Hardcoded v `src/o-meni.md`* — uredi Nejc |
| Storitve (naziv, opis, badge, featured, vrstni red) | CMS → **Storitve** |
| Mnenja mamic | CMS → **Mnenja mamic** |
| Blog članki + kategorija | CMS → **Blog / Nasveti** |
| Politika zasebnosti (besedilo / oglati oklepaji) | `src/zasebnost.md` — uredi Nejc/Eva |
| Pogoji poslovanja, podatki podjetja | Trenutno ne obstajajo — Nejc doda nove strani |
| Calendly embed | `src/kontakt.md` (zamenjava `mockup-window` placeholderja) |
| Footer copyright, Instagram link | `src/_includes/base.njk` |

---

## Predlagani vrstni red

1. **Pred deljenjem URL-ja:** zamenjaj vse iz sekcije **Kritično** (fotografije, mnenja, statistike, GDPR osnove)
2. **Pred prvimi strankami:** uredi sekcijo **Pomembno** (FAQ, Calendly, email obvestila, logo/favicon)
3. **Postopno čez čas:** sekcija **Kasneje**
