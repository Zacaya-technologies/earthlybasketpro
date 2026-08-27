/* ==========================================================
   Earthly Basket — shared product catalogue
   Used by: index.html (featured), shop.html (full grid + filters),
   product.html (detail lookup by slug)
   ========================================================== */
const PRODUCTS = [
  {
    slug: "millet-mix",
    name: "Millet Mix",
    cat: "Breakfast Mix",
    desc: "A whole-grain millet blend for a wholesome start to the day.",
    long: "Our signature Millet Mix combines five traditional millets — foxtail, little, kodo, barnyard and finger millet — roasted and stone-ground the way it's been done for generations. High in fibre and naturally gluten-free, it turns into a warm, filling porridge or dosa batter in minutes, no soaking required.",
    weight: "500g",
    price: 249,
    mrp: 279,
    img: "p1",
    tags: ["millet","breakfast","gluten-free"]
  },
  {
    slug: "malt-powder",
    name: "Malt Powder",
    cat: "Nutrition",
    desc: "Traditional roasted malt, ready to mix with warm milk.",
    long: "A slow-roasted blend of ragi, wheat and a touch of jaggery, ground fine for a smooth, comforting drink. Just two spoons in warm milk gives you calcium, iron and steady energy — the same recipe households have trusted for decades, without any added preservatives.",
    weight: "400g",
    price: 299,
    mrp: 329,
    img: "p2",
    tags: ["nutrition","kids","calcium"]
  },
  {
    slug: "pongal-mix",
    name: "Pongal Mix",
    cat: "Traditional Meal",
    desc: "Classic pongal, ready in minutes without losing the flavour.",
    long: "Rice, moong dal, cracked pepper, cumin and curry leaves — pre-measured and lightly roasted so all that's left is a single pot and ten minutes. Tastes like it simmered all morning, without the soaking or the grinding.",
    weight: "250g",
    price: 179,
    mrp: 199,
    img: "p3",
    tags: ["traditional","lunch","south-indian"]
  },
  {
    slug: "kesaribath-mix",
    name: "Kesaribath Mix",
    cat: "Traditional Meal",
    desc: "A festive semolina classic, simplified for any morning.",
    long: "Roasted semolina, cardamom, saffron strands and cashew pieces bundled together for the classic Karnataka favourite. Add water, ghee and sugar to taste — ready in under eight minutes, festival-ready any day of the week.",
    weight: "250g",
    price: 189,
    mrp: 209,
    img: "p4",
    tags: ["traditional","dessert","festive"]
  },
  {
    slug: "upma-mix",
    name: "Upma Mix",
    cat: "Breakfast Mix",
    desc: "Savoury, quick, and true to the original recipe.",
    long: "Coarse semolina roasted with mustard seed, curry leaf, chana dal and dried vegetables. A splash of hot water and a few minutes on the stove brings back the upma your grandmother made — minus the chopping and tempering.",
    weight: "250g",
    price: 169,
    mrp: 189,
    img: "p5",
    tags: ["breakfast","savoury","quick"]
  },
  {
    slug: "bisibele-bath-mix",
    name: "Bisibele Bath Mix",
    cat: "Traditional Meal",
    desc: "A rich, spiced rice-and-lentil favourite from Karnataka.",
    long: "A house-ground bisibelebath masala with rice, toor dal, tamarind and a deep roast of coriander, chana dal and dry red chillies. Simmer with your favourite vegetables for a one-pot meal that tastes like it took all afternoon.",
    weight: "250g",
    price: 199,
    mrp: 219,
    img: "p6",
    tags: ["traditional","lunch","karnataka"]
  },
  {
    slug: "veg-bath-mix",
    name: "Veg Bath Mix",
    cat: "Traditional Meal",
    desc: "Vegetable rice, prepared the traditional way, minus the wait.",
    long: "A fragrant blend of whole spices, curry leaf and coconut, calibrated for cooked rice and whatever vegetables you have on hand. Toss together in one pan for a lunchbox-ready meal in under fifteen minutes.",
    weight: "250g",
    price: 189,
    mrp: 209,
    img: "p7",
    tags: ["traditional","lunch","quick"]
  },
  {
    slug: "nuts-millet-blend",
    name: "Nuts & Millet Blend",
    cat: "Everyday Nutrition",
    desc: "Organic nuts and millets for a naturally energising snack.",
    long: "Roasted almonds, cashews and puffed millets tossed with a whisper of jaggery — no refined sugar, no palm oil. A pocket-sized snack that holds up through a long workday or a school bag, straight out of the pack.",
    weight: "200g",
    price: 349,
    mrp: 399,
    img: "assets/img/products/nuts-millet-blend/main.jpg",
    gallery: [
      "assets/img/products/nuts-millet-blend/main.jpg",
      "assets/img/products/nuts-millet-blend/bowl-mix.jpg",
      "assets/img/products/nuts-millet-blend/platter.jpg",
      "assets/img/products/nuts-millet-blend/flying-mix.jpg"
    ],
    tags: ["snack","nuts","energy"]
  },
  {
    slug: "premium-mixed-nuts",
    name: "Premium Mixed Nuts",
    cat: "Everyday Nutrition",
    desc: "A hand-sorted mix of almonds, cashews, walnuts, pecans, hazelnuts and pistachios.",
    long: "Six nuts, roasted separately to their own perfect point and then blended — almonds for crunch, cashews for creaminess, walnuts and pecans for depth, hazelnuts and pistachios for character. No added oil, no added salt, just the nuts themselves.",
    weight: "250g",
    price: 449,
    mrp: 499,
    img: "assets/img/products/premium-mixed-nuts/main.jpg",
    gallery: [
      "assets/img/products/premium-mixed-nuts/main.jpg",
      "assets/img/products/premium-mixed-nuts/close-up.jpg",
      "assets/img/products/premium-mixed-nuts/wide.jpg",
      "assets/img/products/premium-mixed-nuts/bowl.jpg"
    ],
    tags: ["snack","nuts","gift"]
  },
  {
    slug: "roasted-almonds",
    name: "Roasted Almonds",
    cat: "Everyday Nutrition",
    desc: "Whole California almonds, dry-roasted for a deep, nutty crunch.",
    long: "Sourced whole and dry-roasted in small batches — no oil, no added salt. A steady source of protein, fibre and vitamin E that holds up in a desk drawer or a lunchbox for weeks without going soft.",
    weight: "250g",
    price: 379,
    mrp: 429,
    img: "assets/img/products/roasted-almonds/main.jpg",
    gallery: [
      "assets/img/products/roasted-almonds/main.jpg",
      "assets/img/products/roasted-almonds/tray.jpg"
    ],
    tags: ["snack","nuts","protein"]
  },
  {
    slug: "roasted-pistachios",
    name: "Roasted Pistachios",
    cat: "Everyday Nutrition",
    desc: "In-shell pistachios, lightly roasted and salted the traditional way.",
    long: "Slow-roasted in small batches with a light hand of salt, so the pistachio's own flavour still leads. High in protein and healthy fats, and satisfying enough that a small handful goes a long way.",
    weight: "200g",
    price: 499,
    mrp: 559,
    img: "assets/img/products/roasted-pistachios/main.jpg",
    gallery: [
      "assets/img/products/roasted-pistachios/main.jpg",
      "assets/img/products/roasted-pistachios/bowl.jpg"
    ],
    tags: ["snack","nuts","protein"]
  },
  {
    slug: "dried-apricots",
    name: "Dried Apricots",
    cat: "Everyday Nutrition",
    desc: "Sun-dried apricots, naturally sweet with no added sugar.",
    long: "Whole apricots, pitted and sun-dried until they turn soft and deeply sweet — no sulphur bleaching, no added sugar. A good source of iron and fibre, and an easy swap for a sugary snack mid-afternoon.",
    weight: "200g",
    price: 329,
    mrp: 369,
    img: "assets/img/products/dried-apricots/main.jpg",
    tags: ["snack","dried-fruit","iron"]
  },
  {
    slug: "roasted-pumpkin-seeds",
    name: "Roasted Pumpkin Seeds",
    cat: "Everyday Nutrition",
    desc: "Hulled pumpkin seeds, lightly roasted for a light, crunchy snack.",
    long: "Hulled and lightly roasted with nothing added, pumpkin seeds bring magnesium, zinc and plant protein in a snack light enough to eat by the handful — good on their own, or scattered over a millet porridge.",
    weight: "150g",
    price: 249,
    mrp: 279,
    img: "assets/img/products/roasted-pumpkin-seeds/main.jpg",
    tags: ["snack","seeds","protein"]
  },
  {
    slug: "dry-fruit-gift-tray",
    name: "Dry Fruit Gift Tray",
    cat: "Everyday Nutrition",
    desc: "A generous assortment of nuts and dried fruit, ready to gift.",
    long: "Our most generous offering — almonds, cashews, walnuts, pistachios and dried fruit arranged in a reusable wooden tray. Sized for festivals, housewarmings, or anyone who deserves a proper gift, not just a card.",
    weight: "500g",
    price: 899,
    mrp: 999,
    img: "assets/img/products/dry-fruit-gift-tray/main.jpg",
    gallery: [
      "assets/img/products/dry-fruit-gift-tray/main.jpg",
      "assets/img/products/dry-fruit-gift-tray/platter.jpg",
      "assets/img/products/dry-fruit-gift-tray/wide.jpg"
    ],
    tags: ["gift","nuts","combo"]
  }
];

function formatINR(n){
  return "₹" + n.toLocaleString("en-IN");
}

function getProductBySlug(slug){
  return PRODUCTS.find(p => p.slug === slug);
}

/* Resolve a product thumbnail: a real file path (contains "/") is used
   as-is; a bare key (e.g. "p1") is looked up in the shared SITE_IMAGES
   base64 dictionary. */
function resolveProductImage(p){
  return p.img.indexOf('/') !== -1 ? p.img : SITE_IMAGES[p.img];
}
