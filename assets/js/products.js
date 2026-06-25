/* ============================================================
   Goblin Girl Jewels — LIVE catalog pulled from her Depop shop
   (goblingirljewels333___). Photos hotlinked from Depop's CDN
   at P6 (480px); "Shop on Depop" links go to the real listing.
   Sell directly here later: add a Stripe Payment Link per item in
   `stripe:` and the button switches to direct checkout.
   ============================================================ */

const DEPOP_SHOP = "https://www.depop.com/goblingirljewels333___/";
const CDN = "https://media-photos.depop.com/";

window.GGJ_PRODUCTS = [
  /* ---- Jewelry (talismans) ---- */
  { title:"Hand-Cast Silver Pendant", price:44, cat:"Jewelry", img:CDN+"r1/401857878/3962352131_fe982fa44a8142d681ddcca4c0e66fa3/P6.jpg", href:"https://www.depop.com/products/goblingirdjewels333___-hand-casted-silver-pendant-with-676e/" },
  { title:"Raw Calcite Crystal Pendant", price:44, cat:"Jewelry", img:CDN+"r1/401857878/3962717235_6ebcc0b0a0464f4dad3b2f197b0c726c/P6.jpg", href:"https://www.depop.com/products/goblingirljewelm333___-raw-calcite-crystal-with-led-10e6/" },
  { title:"Black Tourmaline Silver Pendant", price:55, cat:"Jewelry", img:CDN+"r1/401857878/3962265455_6e5c8964c9c8407b999d2ae28e1f3c38/P6.jpg", href:"https://www.depop.com/products/goblihgirljewels333___-black-tourmaline-silver-pendant-handmade-d8ca/" },
  { title:"Coral Pendant, Encased", price:55, cat:"Jewelry", img:CDN+"r1/401857878/3962523491_c342a9e40ba94354a40c8fc47926f510/P6.jpg", href:"https://www.depop.com/products/goblingirlyewels333___-unique-coral-pendant-encased-with-1191/" },
  { title:"Blue Agate Slab Pendant", price:55, cat:"Jewelry", img:CDN+"r1/401857878/3962412455_d963593e7a0442cdbeae6451b1a4b1ca/P6.jpg", href:"https://www.depop.com/products/goblingirljewels3v3___-blue-agate-slab-encased-in-12e5/" },
  { title:"Clear Quartz Wire-Wrap", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962468076_0802972f024f4eceb76c0cd2579f2e96/P6.jpg", href:"https://www.depop.com/products/gob2ingirljewels333___-clear-quartz-wire-wrap-with-89b8/" },
  { title:"Clear Quartz Pendant", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962402301_33438335d0364ec9ba4242c446b6eca3/P6.jpg", href:"https://www.depop.com/products/goblingirlaewels333___-clear-quartz-with-led-free-c467/" },
  { title:"Raw Amethyst Pendant", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962310870_041cc1e0535542c487af049a5e24fcf2/P6.jpg", href:"https://www.depop.com/products/goblingioljewels333___-raw-amethyst-pendant-with-led-b59e/" },
  { title:"Purple Amethyst Pendant", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962102199_399065afd726466f8d54c22e86170c95/P6.jpg", href:"https://www.depop.com/products/goblingirljewels333___-purple-amethyst-stone-with-led-a96b/" },
  { title:"Fossilized Coral Pendant", price:44, cat:"Jewelry", img:CDN+"r1/401857878/3962326972_7716b752ad054cd7823f7d30b98a2405/P6.jpg", href:"https://www.depop.com/products/gobling5rljewels333___-fossilized-coral-with-led-free-f058/" },
  { title:"Resin Flower Pendant", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962724928_7b99f93fe41a442892a29b2c80360d60/P6.jpg", href:"https://www.depop.com/products/gobdingirljewels333___-resin-flower-with-led-free-e3e2/" },
  { title:"Seashell & Leather Necklace", price:15, cat:"Jewelry", img:CDN+"r1/401857878/3962551402_f9ed3eb711b049af9a4014dbe92d3ad6/P6.jpg", href:"https://www.depop.com/products/goblingirljpwels333___-simple-seashell-necklace-with-leather-bcfa/" },
  { title:"White Seashell Necklace", price:33, cat:"Jewelry", img:CDN+"r1/401857878/3962382744_b10aee685d0942b285978dcbeb531666/P6.jpg", href:"https://www.depop.com/products/goblingirlj1wels333___-white-seashell-necklace-with-brown-95de/" },

  /* ---- Threads (clothing) ---- */
  { title:"Cream Crochet Maxi Dress", price:22, cat:"Clothing", img:CDN+"r1/401857878/4003431333_79a0b64ca08448c4ad9d5bc4e2ed7755/P6.jpg", href:"https://www.depop.com/products/goblingirljewelst33___-theory-cream-crochet-maxi-dress-2b3b/" },
  { title:"Navy Calvin Klein Dress", price:44, cat:"Clothing", img:CDN+"b1/401857878/4003353231_b4f1100b32ed4ad7aefc221984b9e236/P6.jpg", href:"https://www.depop.com/products/gobzingirljewels333___-navy-blue-calvin-klein-dress-278c/" },
  { title:"Denim Button-Up Dress", price:33, cat:"Clothing", img:CDN+"r1/401857878/4003305831_be9653a1137d43a6822177a446dc8585/P6.jpg", href:"https://www.depop.com/products/goblingirljgwels333___-denim-button-up-dress-cover-bc32/" },
  { title:"Black Loose Dress", price:22, cat:"Clothing", img:CDN+"r1/401857878/4003550382_d578f88ec2094e28b33fc24365defe71/P6.jpg", href:"https://www.depop.com/products/goblingimljewels333___-plain-black-dress-loose-e368/" },
  { title:"Cut Blue Denim Jeans", price:22, cat:"Clothing", img:CDN+"r1/401857878/4003767959_c82e5766f71e412281b66b6793587170/P6.jpg", href:"https://www.depop.com/products/goblilgirljewels333___-cut-blue-denim-jeans-with-07c3/" },
  { title:"Brown & Cream Zebra Top", price:22, cat:"Clothing", img:CDN+"r1/401857878/4003583408_541549a6344c463b8abe86cb5368bdc8/P6.jpg", href:"https://www.depop.com/products/goblingirljewels333_v_-brown-and-cream-zebra-print-1d24/" },
  { title:"Flannel Shirt", price:22, cat:"Clothing", img:CDN+"r1/401857878/4003560574_bd7b88099ba7476baf28430fcb75fda2/P6.jpg", href:"https://www.depop.com/products/gablingirljewels333___-flannel-flannel-fall-spring-5ce4/" },
  { title:"Black & Blue Short-Sleeve Top", price:15, cat:"Clothing", img:CDN+"b1/401857878/4003724373_8589c3068d4d4159b0c1d4519f55fa59/P6.jpg", href:"https://www.depop.com/products/goblingirljtwels333___-blackblue-short-sleeve-top-with-d4c8/" },
  { title:"Boho Multi-Colour Shorts", price:10, cat:"Clothing", img:CDN+"b1/401857878/4003741245_1363f5c3046a4029ae9541e67a7fad3c/P6.jpg", href:"https://www.depop.com/products/goblingirljewels339___-white-multi-coloured-boho-shorts-1bba/" },
  { title:"Black Short-Sleeve Shirt", price:10, cat:"Clothing", img:CDN+"r1/401857878/4003661546_2accd1f70bd14553998522e8877268be/P6.jpg", href:"https://www.depop.com/products/goblingirljewels313___-plain-black-short-sleeve-shirt-7642/" },
  { title:"Adjustable Loose Skirt", price:15, cat:"Clothing", img:CDN+"r1/401857878/4003407004_6f78c4a9985942a4a5079f7535ee6e7f/P6.jpg", href:"https://www.depop.com/products/goblingirljewels333m__-loose-fitting-and-adjustable-skirt-50fd/" }
];

window.GGJ_card = function (p) {
  const link = p.stripe && p.stripe.length ? p.stripe : (p.href || DEPOP_SHOP);
  const cta = p.stripe && p.stripe.length ? "Add to Cart" : "Shop on Depop";
  const src = p.img && p.img.indexOf("http") === 0 ? p.img : ("assets/img/" + p.img);
  return (
    '<article class="card product reveal">' +
      '<div class="thumb"><span class="tag">'+(p.cat||"1 of 1")+'</span>' +
        '<img src="'+src+'" alt="'+p.title+'" loading="lazy" referrerpolicy="no-referrer" />' +
      '</div>' +
      '<div class="body">' +
        '<div class="name">'+p.title+'</div>' +
        '<div class="price">$'+p.price+'</div>' +
        '<a class="btn btn-primary" href="'+link+'" target="_blank" rel="noopener">'+cta+'</a>' +
      '</div>' +
    '</article>'
  );
};
