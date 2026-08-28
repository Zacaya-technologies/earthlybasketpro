/* ==========================================================
   Earthly Basket — shared product catalogue
   Used by: index.html (featured), shop.html (full grid + filters),
   product.html (detail lookup by slug)
   ========================================================== */
const PRODUCTS = [
  {
    slug: "badam-almonds",
    name: "Badam",
    cat: "Nuts & Dry Fruits",
    desc: "Premium farm-fresh almonds, rich in protein and naturally sweet.",
    long: "Whole California-grade almonds, sun-dried and hand-sorted for size and crunch. Rich in protein, fibre and vitamin E, they're as good soaked overnight as they are eaten straight from the pack — no preservatives, no additives, just the nut itself.",
    weight: "250g",
    price: 399,
    mrp: 449,
    img: "assets/img/products/badam-almonds/main.png",
    tags: ["nuts","protein","snack"]
  },
  {
    slug: "farmhouse-blend-mixed-nuts",
    name: "Farmhouse Blend Mixed Nuts",
    cat: "Nuts & Dry Fruits",
    desc: "A sustainably sourced mix of almonds, cashews, walnuts and pistachios.",
    long: "Our farmhouse blend brings together almonds, cashews, walnuts and pistachios in one resealable pack — sourced sustainably and left naturally wholesome, with nothing roasted, salted or added. A generous everyday mix for snacking, gifting, or topping your morning bowl.",
    weight: "400g",
    price: 599,
    mrp: 649,
    img: "assets/img/products/farmhouse-blend-mixed-nuts/main.png",
    tags: ["nuts","mix","gift"]
  },
  {
    slug: "cardamom",
    name: "Cardamom",
    cat: "Seeds & Spices",
    desc: "Premium green cardamom pods and powder, farm-fresh and aromatic.",
    long: "Hand-picked green cardamom pods, sun-dried to lock in their natural oils and fragrance. Available whole for tempering and slow-cooked dishes, or finely ground for chai, desserts and baking — the same warm, floral aroma either way.",
    weight: "100g",
    price: 449,
    mrp: 499,
    img: "assets/img/products/cardamom/main.png",
    tags: ["spice","aromatic","cooking"]
  },
  {
    slug: "jackfruit-seeds",
    name: "Farm-Fresh Jackfruit Seeds",
    cat: "Seeds & Spices",
    desc: "Nutrient-rich, naturally grown jackfruit seeds.",
    long: "Cleaned and sun-dried jackfruit seeds, a traditional favourite roasted, boiled or ground into flour. A good source of protein, fibre and resistant starch, with the same earthy, nutty flavour village kitchens have used for generations.",
    weight: "250g",
    price: 199,
    mrp: 229,
    img: "assets/img/products/jackfruit-seeds/main.png",
    tags: ["seeds","protein","traditional"]
  },
  {
    slug: "premium-peanuts",
    name: "Premium Quality Peanuts",
    cat: "Nuts & Dry Fruits",
    desc: "Farm-fresh, natural peanuts with no added preservatives.",
    long: "In-shell peanuts harvested and dried the traditional way, with nothing added and nothing taken away. A budget-friendly, protein-packed everyday snack that roasts, boils or blends into peanut butter equally well.",
    weight: "500g",
    price: 149,
    mrp: 179,
    img: "assets/img/products/premium-peanuts/main.png",
    tags: ["nuts","protein","everyday"]
  },
  {
    slug: "pistachios",
    name: "Pistachios (Pistha)",
    cat: "Nuts & Dry Fruits",
    desc: "All-natural, farm-fresh pistachios with no preservatives.",
    long: "In-shell pistachios, naturally dried to bring out their signature green colour and rich, buttery flavour. High in protein and healthy fats, they're satisfying by the handful and equally at home in a festive mithai.",
    weight: "250g",
    price: 649,
    mrp: 699,
    img: "assets/img/products/pistachios/main.png",
    tags: ["nuts","protein","snack"]
  },
  {
    slug: "pomegranate-seeds",
    name: "Pomegranate Seeds",
    cat: "Seeds & Spices",
    desc: "Premium farm-fresh pomegranate seeds, pure goodness straight from the farm.",
    long: "Whole pomegranate arils, sun-dried to concentrate their tangy-sweet flavour without any added sugar or colour. Known as anardana, they're a staple souring agent in North Indian cooking and a bright finishing touch for salads and chaats.",
    weight: "200g",
    price: 279,
    mrp: 319,
    img: "assets/img/products/pomegranate-seeds/main.png",
    tags: ["seeds","tangy","cooking"]
  },
  {
    slug: "pumpkin-seeds",
    name: "Premium Pumpkin Seeds",
    cat: "Seeds & Spices",
    desc: "Nutrient-rich, wholesome pumpkin seeds, farm-fresh and hulled.",
    long: "Hulled, sun-dried pumpkin seeds packed with magnesium, zinc and plant protein. Toss them raw into a salad or porridge, or dry-roast them at home for a light, crunchy snack that keeps well for weeks.",
    weight: "200g",
    price: 269,
    mrp: 299,
    img: "assets/img/products/pumpkin-seeds/main.png",
    tags: ["seeds","protein","snack"]
  },
  {
    slug: "sliced-coconut",
    name: "Premium Sliced Coconut",
    cat: "Nuts & Dry Fruits",
    desc: "Farm-fresh, naturally dried sliced coconut.",
    long: "Fresh coconut, sliced thin and naturally dried to a light, chewy bite with no added sugar or sulphites. A quick snack on its own, and an easy way to bring real coconut flavour into desserts, trail mixes and granola.",
    weight: "200g",
    price: 189,
    mrp: 219,
    img: "assets/img/products/sliced-coconut/main.png",
    tags: ["snack","natural","dried"]
  },
  {
    slug: "soy-nuts",
    name: "Soy Nuts",
    cat: "Seeds & Spices",
    desc: "Roasted and lightly salted soy nuts, all natural.",
    long: "Whole soybeans, soaked and roasted until golden and crunchy, finished with a light hand of salt. A high-protein, low-oil snack that holds its crunch for weeks — a simple swap for fried snacks on a busy afternoon.",
    weight: "250g",
    price: 199,
    mrp: 229,
    img: "assets/img/products/soy-nuts/main.png",
    tags: ["snack","protein","roasted"]
  },
  {
    slug: "walnuts",
    name: "Walnuts",
    cat: "Nuts & Dry Fruits",
    desc: "Premium quality, naturally grown walnuts.",
    long: "Whole, naturally grown walnuts cracked to order to protect their delicate oils and flavour. Rich in omega-3s and a favourite for baking, salads or simply eating by the handful for a steady, brain-friendly snack.",
    weight: "250g",
    price: 549,
    mrp: 599,
    img: "assets/img/products/walnuts/main.png",
    tags: ["nuts","omega-3","snack"]
  },
  {
    slug: "watermelon-seeds",
    name: "Premium Watermelon Seeds",
    cat: "Seeds & Spices",
    desc: "Nutrient-dense superfood, farm-fresh and wholesome.",
    long: "Hulled watermelon seeds, naturally dried and packed with magnesium, iron and plant protein. A light, crunchy superfood snack that's equally good scattered over a salad or eaten straight from the bowl.",
    weight: "200g",
    price: 249,
    mrp: 279,
    img: "assets/img/products/watermelon-seeds/main.png",
    tags: ["seeds","superfood","protein"]
  },
  {
    slug: "premium-cashews",
    name: "Premium Cashews",
    cat: "Nuts & Dry Fruits",
    desc: "Farm-fresh, wholesome cashews — natural and unprocessed.",
    long: "Whole, unprocessed cashews sourced straight from the farm and left untouched by oil or salt. Creamy and mildly sweet, they're a favourite for snacking, grinding into gravies, or blending into a dairy-free cashew milk.",
    weight: "250g",
    price: 549,
    mrp: 599,
    img: "assets/img/products/premium-cashews/main.png",
    tags: ["nuts","protein","gift"]
  }
];

function formatINR(n){
  return "₹" + n.toLocaleString("en-IN");
}

function getProductBySlug(slug){
  return PRODUCTS.find(p => p.slug === slug);
}

function resolveProductImage(p){
  return p.img;
}

/* Resolve a decorative/journal image key: a real file path (contains "/")
   is used as-is; a bare key is looked up as a product slug. */
function resolveImageKey(key){
  if(key.indexOf('/') !== -1) return key;
  const p = getProductBySlug(key);
  return p ? resolveProductImage(p) : '';
}
