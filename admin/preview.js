var CATEGORIES = {
  osnove: "Osnove spanja",
  prebujanja: "Nočna prebujanja",
  ritem: "Dnevni spanci in ritem",
  prehodi: "Prehodi",
  hranjenje: "Hranjenje in spanje",
  starost: "Starostna obdobja",
};

function formatDate(value) {
  if (!value) return "";
  var d = value instanceof Date ? value : new Date(value);
  if (isNaN(d.getTime())) return String(value);
  return d.toLocaleDateString("sl-SI", { day: "numeric", month: "long", year: "numeric" });
}

function listOf(value) {
  if (!value || !value.map) return [];
  return value;
}

var PostPreview = createClass({
  render: function () {
    var data = this.props.entry.get("data");
    var category = data.get("category");
    return h(
      "article",
      { className: "preview-frame" },
      h("p", { className: "preview-kicker" }, category ? CATEGORIES[category] || category : "Nasvet"),
      h("h1", {}, data.get("title") || "Brez naslova"),
      h("p", { className: "preview-meta" }, formatDate(data.get("date"))),
      h("div", { className: "post-body" }, this.props.widgetFor("body"))
    );
  },
});

var ServicePreview = createClass({
  render: function () {
    var data = this.props.entry.get("data");
    var features = [];
    listOf(data.get("features")).forEach(function (item) {
      features.push(item);
    });
    return h(
      "div",
      { className: "preview-frame" },
      h(
        "div",
        { className: "preview-card" },
        data.get("badge") ? h("p", { className: "preview-kicker" }, data.get("badge")) : null,
        h("h1", {}, data.get("title") || "Storitev"),
        data.get("duration") ? h("p", { className: "preview-meta" }, data.get("duration")) : null,
        h("p", { className: "preview-price" }, data.get("price") || "Cena na povpraševanje"),
        h("p", {}, data.get("summary")),
        features.length
          ? h(
              "ul",
              { className: "preview-features" },
              features.map(function (item, i) {
                return h("li", { key: i }, String(item));
              })
            )
          : null
      )
    );
  },
});

var TestimonialPreview = createClass({
  render: function () {
    var data = this.props.entry.get("data");
    return h(
      "figure",
      { className: "preview-frame" },
      h("blockquote", { className: "preview-quote" }, data.get("quote") || ""),
      h(
        "figcaption",
        { className: "preview-by" },
        data.get("author") || "",
        data.get("role") ? h("span", {}, " · " + data.get("role")) : null
      )
    );
  },
});

var SitePreview = createClass({
  render: function () {
    var data = this.props.entry.get("data");
    var primary = data.get("color_primary") || "#1A5C4A";
    var accent = data.get("color_accent") || "#C9B896";
    var secondary = data.get("color_secondary") || "#2C3540";
    var nav = listOf(data.get("nav"));
    var style = {
      "--p": primary,
      "--a": accent,
      "--s": secondary,
    };
    return h(
      "div",
      { style: style },
      h(
        "header",
        { className: "preview-header" },
        h(
          "div",
          { className: "preview-brand" },
          data.get("logo") ? h("img", { src: data.get("logo"), alt: "" }) : null,
          h(
            "div",
            {},
            h("strong", {}, data.get("brand") || "Teta Luna"),
            h("small", {}, data.get("tagline") || "")
          )
        ),
        h(
          "nav",
          { className: "preview-nav" },
          nav.map(function (item, i) {
            return h("a", { key: i, href: item.get("href") }, item.get("label"));
          }),
          h(
            "a",
            { className: "preview-cta", href: data.get("nav_cta_href") || "/kontakt" },
            data.get("nav_cta_label") || "Rezerviraj posvet"
          )
        )
      ),
      h(
        "div",
        { className: "preview-frame" },
        h("h1", {}, data.get("brand") || "Teta Luna"),
        h("p", {}, data.get("footer_text") || ""),
        h(
          "div",
          { className: "preview-swatches" },
          h("div", { className: "preview-swatch" }, h("i", { style: { background: primary } }), h("span", {}, "Primary")),
          h("div", { className: "preview-swatch" }, h("i", { style: { background: accent } }), h("span", {}, "Accent")),
          h("div", { className: "preview-swatch" }, h("i", { style: { background: secondary } }), h("span", {}, "Secondary"))
        )
      )
    );
  },
});

CMS.registerPreviewStyle(
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Figtree:wght@400;500;600;700&display=swap"
);
CMS.registerPreviewStyle("/admin/preview.css");
CMS.registerPreviewTemplate("posts", PostPreview);
CMS.registerPreviewTemplate("services", ServicePreview);
CMS.registerPreviewTemplate("testimonials", TestimonialPreview);
CMS.registerPreviewTemplate("site_settings", SitePreview);
