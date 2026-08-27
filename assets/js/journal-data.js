/* ==========================================================
   Earthly Basket — shared journal / blog articles
   Used by: index.html (teaser), journal.html (listing),
   journal-post.html (article detail lookup by slug)
   ========================================================== */
const ARTICLES = [
  {
    slug: "millets-daily-diet",
    title: "5 Ways to Add Millets to Your Daily Diet",
    cat: "Healthy Living",
    img: "p1",
    excerpt: "Millets don't need a special occasion — here's how to fold them into meals you're already eating.",
    author: "Earthly Basket Team",
    date: "2026-03-12",
    readTime: "4 min read",
    tags: ["millets","breakfast","wellness"],
    body: [
      {type:"p", text:"Millets have quietly fed Indian households for thousands of years, long before rice and wheat took over the plate. They're naturally gluten-free, high in fibre, and slow to digest — which means steadier energy and fewer mid-morning crashes. The good news: you don't need to overhaul your kitchen to benefit from them."},
      {type:"h2", text:"1. Start with breakfast"},
      {type:"p", text:"Swap your regular porridge oats for a millet mix once or twice a week. A five-minute stovetop cook gives you the same comfort with a fraction of the glycemic spike."},
      {type:"h2", text:"2. Replace one rice meal"},
      {type:"p", text:"Cooked millet holds up well in place of rice in a simple dal-and-vegetable meal. Little millet and foxtail millet are the easiest substitutes to start with — they cook fast and taste neutral enough to carry any curry."},
      {type:"h2", text:"3. Snack on puffed millet"},
      {type:"p", text:"Puffed millets tossed with roasted nuts and a little jaggery make a genuinely satisfying snack — no deep frying, no refined sugar."},
      {type:"h2", text:"4. Bake with millet flour"},
      {type:"p", text:"Millet flour blends beautifully into rotis and flatbreads. Start with a 30% substitution alongside wheat flour so the texture stays familiar."},
      {type:"h2", text:"5. Keep a ready-mix on hand"},
      {type:"p", text:"The easiest habit to keep is the one that requires no planning. A pre-measured, pre-roasted millet mix in the pantry means there's always a wholesome option that's faster than ordering in."},
      {type:"quote", text:"You don't need to eat millets every day to benefit from them — you just need them to be easier to reach for than the alternative."}
    ]
  },
  {
    slug: "why-traditional-grains-matter",
    title: "Why Traditional Grains Matter",
    cat: "Nutrition",
    img: "story",
    excerpt: "Before polished rice took over the plate, our grandparents ate a wider, more resilient range of grains. Here's why that matters again.",
    author: "Dr. Kavya Iyer, Nutrition Advisor",
    date: "2026-02-24",
    readTime: "5 min read",
    tags: ["nutrition","traditional-grains","health"],
    body: [
      {type:"p", text:"For most of Indian culinary history, the plate was diverse — foxtail millet in one season, kodo in another, sorghum rotis through summer. That diversity wasn't a limitation; it was a form of nutritional insurance, spreading out fibre, minerals and micronutrients across grains rather than relying on one."},
      {type:"h2", text:"The shift to polished staples"},
      {type:"p", text:"As rice and refined wheat became more accessible and easier to cook at scale, traditional grains slipped out of daily rotation. What we gained in convenience, we lost in fibre content, mineral density and the slow-release energy that whole grains provide."},
      {type:"h2", text:"What traditional grains bring back"},
      {type:"p", text:"Millets and other whole grains digest more slowly, keep blood sugar steadier, and carry meaningfully more iron, calcium and magnesium than their polished counterparts. They're also naturally suited to the small-farm agriculture that much of rural India still depends on — needing less water and fewer inputs than rice."},
      {type:"h2", text:"Bringing them back without losing convenience"},
      {type:"p", text:"The barrier was never taste — it was time. Pre-roasted, pre-measured mixes solve exactly that problem, letting a traditional grain make it to a weekday table in the same time as anything processed."}
    ]
  },
  {
    slug: "quick-healthy-breakfast-ideas",
    title: "Quick Healthy Breakfast Ideas",
    cat: "Breakfast",
    img: "p5",
    excerpt: "Ten minutes, one pan, no compromise — breakfast ideas that hold up on your busiest mornings.",
    author: "Earthly Basket Team",
    date: "2026-01-30",
    readTime: "3 min read",
    tags: ["breakfast","quick-meals","millet"],
    body: [
      {type:"p", text:"Breakfast is the meal most likely to get skipped or outsourced to something packaged. It doesn't have to be. Here are a few combinations that take less time than waiting in a coffee queue."},
      {type:"h2", text:"Millet porridge with fruit"},
      {type:"p", text:"A millet mix cooked in milk or water for five minutes, topped with whatever fruit is in season. Naturally sweet, no added sugar needed."},
      {type:"h2", text:"Savoury upma, one pan"},
      {type:"p", text:"A tempered upma mix with whatever vegetables are in the fridge — ready in under ten minutes and filling enough to skip a mid-morning snack."},
      {type:"h2", text:"Malt milk, on the move"},
      {type:"p", text:"When there's genuinely no time to cook, a warm glass of traditional malt powder in milk covers calcium, iron and a bit of sweetness — drinkable on the way out the door."},
      {type:"h2", text:"Batch on Sunday, eat all week"},
      {type:"p", text:"Cook a larger batch of any mix on a slower morning and refrigerate in portions. Reheating takes two minutes and tastes just as fresh."}
    ]
  },
  {
    slug: "millets-diabetes-friendly",
    title: "Are Millets Really Diabetes-Friendly?",
    cat: "Nutrition",
    img: "p3",
    excerpt: "A closer look at why millets are recommended for blood-sugar management, and how to actually eat them that way.",
    author: "Dr. Kavya Iyer, Nutrition Advisor",
    date: "2026-01-09",
    readTime: "5 min read",
    tags: ["diabetes","nutrition","millets"],
    body: [
      {type:"p", text:"Millets show up often in diabetes-friendly diet advice, and for good reason — but the benefit depends on how they're prepared and what they're eaten with, not just the grain itself."},
      {type:"h2", text:"The fibre advantage"},
      {type:"p", text:"Most millets carry significantly more dietary fibre than polished rice. Fibre slows the rate at which glucose enters the bloodstream, softening the post-meal spike that refined grains tend to cause."},
      {type:"h2", text:"Glycemic index isn't the whole story"},
      {type:"p", text:"Individual millets vary in glycemic index, and cooking method changes the picture further — overcooking or pairing with a very high-sugar accompaniment can offset the benefit. Pairing a millet meal with protein or vegetables gives the steadiest results."},
      {type:"h2", text:"A sensible way to start"},
      {type:"p", text:"Replacing one rice or refined-wheat meal a day with a millet-based one is a realistic, sustainable place to begin — not an all-or-nothing switch."},
      {type:"quote", text:"Consult your physician before making significant dietary changes if you're managing diabetes with medication."}
    ]
  },
  {
    slug: "kitchen-to-table-earthly-basket",
    title: "From Kitchen To Table: How We Make Every Mix",
    cat: "Our Story",
    img: "band",
    excerpt: "A behind-the-scenes look at how a family recipe becomes a pack on your shelf.",
    author: "Earthly Basket Team",
    date: "2025-12-18",
    readTime: "4 min read",
    tags: ["behind-the-scenes","our-story","process"],
    body: [
      {type:"p", text:"Every product we sell started as something someone in our extended family used to make on a stovetop, not in a factory. Getting it into a pack without losing what made it good took longer than we expected."},
      {type:"h2", text:"Step one: cook it the old way, first"},
      {type:"p", text:"Before any product is scaled, we cook it the traditional way — full soak times, hand grinding, the works — so we have a benchmark for taste that nothing gets to fall short of."},
      {type:"h2", text:"Step two: source close to harvest"},
      {type:"p", text:"We buy directly from farming communities in Tamil Nadu and Karnataka, timed close to harvest, so the grain hasn't spent months losing nutrition in storage."},
      {type:"h2", text:"Step three: roast, don't preserve"},
      {type:"p", text:"Traditional roasting and drying methods extend shelf life naturally. We'd rather a product have a shorter shelf life than rely on a preservative to stretch it."},
      {type:"h2", text:"Step four: taste-test at home, always"},
      {type:"p", text:"Every batch is tasted by our own families before it ships. If it wouldn't make our own breakfast table, it doesn't make yours."}
    ]
  },
  {
    slug: "five-minute-traditional-meals",
    title: "Five-Minute Versions of Slow-Cooked Classics",
    cat: "Traditional Meal",
    img: "p7",
    excerpt: "Pongal, Bisibele Bath and Veg Bath usually take an hour. Here's how we got them down to five minutes without cutting corners.",
    author: "Earthly Basket Team",
    date: "2025-11-22",
    readTime: "3 min read",
    tags: ["traditional-meal","recipes","quick-cooking"],
    body: [
      {type:"p", text:"Some of the most-loved South Indian dishes take real time — soaking dals, grinding fresh masala, simmering rice to just the right texture. That's exactly why they've fallen out of weekday rotation."},
      {type:"h2", text:"What actually takes the time"},
      {type:"p", text:"It's rarely the cooking itself — it's the prep. Soaking rice and lentils, roasting and grinding spice blends, chopping vegetables to the right size. Pre-measuring and pre-roasting those steps is what collapses an hour down to five minutes."},
      {type:"h2", text:"What we refuse to shortcut"},
      {type:"p", text:"The spice ratios and the grain-to-lentil balance stay exactly as they were in the original family recipe. We only compress the parts that don't affect flavour — not the recipe itself."},
      {type:"h2", text:"Try it yourself"},
      {type:"p", text:"Next time a weeknight feels too short for a proper meal, give one of our traditional meal mixes ten minutes on the stove. It's the same dish — just without the hour you don't have."}
    ]
  }
];

function getArticleBySlug(slug){
  return ARTICLES.find(a => a.slug === slug);
}

function formatArticleDate(iso){
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-IN", {day:"numeric", month:"long", year:"numeric"});
}
