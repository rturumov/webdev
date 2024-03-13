export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  img2: string;
  img3: string;
  url: string;
  rating: number;
  likes: number;
  category: string;
}

export const products = [
  {
    category: 'Phones',
    likes: 0,
    id: 1,
    name: 'IPhone 15',
    price: 899,
    description: 'The best phone',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
    rating: 3,
  },
  {
    category: 'Phones',
    likes: 0,
    id: 2,
    name: 'IPhone 15 Pro',
    price: 999,
    description: 'The best phone',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h7c/83559620804638.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h54/haa/83559620870174.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
    rating: 5,
  },
  {
    category: 'Phones',
    likes: 0,
    id: 3,
    name: 'IPhone 15 Pro Max',
    price: 1099,
    description: 'The best phone',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/hce/83559848640542.png?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hab/hed/83559848706078.png?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
    rating: 4,
  },
  {
    category: 'Phones',
    likes: 0,
    id: 4,
    name: 'Samsung Galaxy S24 Ultra',
    price: 1299,
    description: 'This is not an iPhone',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hce/h74/84963707191326.png?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/had/hd9/84963583393822.png?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h3c/84963583426590.png?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-chernyi-116044354/?c=750000000',
    rating: 2,
  },
  {
    category: 'Phones',
    likes: 0,
    id: 5,
    name: 'Samsung Galaxy Z Fold5',
    price: 1599,
    description: 'This is not an iPhone',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h1f/83101150117918.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h7e/83101509648414.png?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h34/83101509779486.png?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold5-5g-12-gb-256-gb-chernyi-112801543/?c=750000000',
    rating: 3,
  },
  {
    category: 'Headphones',
    likes: 0,
    id: 6,
    name: 'Apple AirPods 2nd generation',
    price: 199,
    description: 'The best headphones',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h52/84594232819742.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h83/84594232885278.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
    rating: 4,
  },
  {
    category: 'Headphones',
    likes: 0,
    id: 7,
    name: 'Apple AirPods 3',
    price: 299,
    description: 'The best headphones',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    rating: 5,
  },
  {
    category: 'Headphones',
    likes: 0,
    id: 8,
    name: 'Apple AirPods Pro 2nd generation',
    price: 399,
    description: 'The best headphones',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
    rating: 3,
  },
  {
    category: 'Headphones',
    likes: 0,
    id: 9,
    name: 'Apple AirPods Max',
    price: 899,
    description: 'The best headphones',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h64/hfe/64217007554590.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h71/64217010241566.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h56/he7/64217014632478.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000',
    rating: 2,
  },
  {
    category: 'Headphones',
    likes: 0,
    id: 10,
    name: 'Marshall Major IV',
    price: 299,
    description: 'The best headphones',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h21/64344048762910.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h18/hae/64344053186590.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h8e/h8a/64344057544734.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/marshall-major-iv-chernyi-102138144/?c=750000000',
    rating: 5,
  },
  {
    category: 'Laptops',
    likes: 0,
    id: 11,
    name: 'Apple MacBook Air 15',
    price: 1399,
    description: 'The best laptop',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h60/81547557306398.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd3/81547557371934.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000',
    rating: 5,
  },
  {
    category: 'Laptops',
    likes: 0,
    id: 12,
    name: 'Apple MacBook Pro 16',
    price: 1699,
    description: 'The best laptop',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=750000000',
    rating: 4,
  },
  {
    category: 'Laptops',
    likes: 0,
    id: 13,
    name: 'Acer Nitro 16',
    price: 999,
    description: 'The best gaming laptop',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h55/hf7/84437587427358.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h84/hdd/84437587492894.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h1d/84437587689502.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/acer-nitro-16-an16-41-r6l1-nh-qller-001-chernyi-114310448/?c=750000000',
    rating: 3,
  },
  {
    category: 'Laptops',
    likes: 0,
    id: 14,
    name: 'Lenovo Legion Slim 5 ',
    price: 1799,
    description: 'The best gaming laptop',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h53/ha2/83315313541150.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h7a/h6a/83315319144478.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/h0a/83315456901150.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/lenovo-legion-slim-5-16aph8-82y9001jrk-seryi-112916915/?c=750000000',
    rating: 4,
  },
  {
    category: 'Laptops',
    likes: 0,
    id: 15,
    name: 'ASUS ROG Strix G16',
    price: 1699,
    description: 'The best gaming laptop',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h14/hc1/70303437488158.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/hdc/70303438536734.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hfc/hac/70303439585310.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/asus-rog-strix-g16-g614jv-n4071-90nr0c61-m005r0-seryi-109460263/?c=750000000',
    rating: 4,
  },
  {
    category: 'Tablets',
    likes: 0,
    id: 16,
    name: 'Apple iPad Air',
    price: 799,
    description: 'The best tablet',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h81/64382011146270.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h25/64382014128158.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/h3f/64382016389150.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-seryi-104235453/?c=750000000',
    rating: 5,
  },
  {
    category: 'Tablets',
    likes: 0,
    id: 17,
    name: 'Apple iPad mini',
    price: 599,
    description: 'The best tablet',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h26/63991942381598.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7c/63991945035806.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hfd/63991948574750.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-ipad-mini-2021-wi-fi-8-3-djuim-4-gb-64-gb-serebristyi-102301519/?c=750000000',
    rating: 4,
  },
  {
    category: 'Tablets',
    likes: 0,
    id: 18,
    name: 'Apple iPad Pro 2022',
    price: 1999,
    description: 'The best tablet',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h2e/h14/84644054794270.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hb8/84644054827038.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h5b/84644054859806.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/apple-ipad-pro-2022-11-wi-fi-11-djuim-16-gb-2048-gb-serebristyi-115114426/?c=750000000',
    rating: 3,
  },
  {
    category: 'Tablets',
    likes: 0,
    id: 19,
    name: 'Microsoft Surface Pro 9',
    price: 1099,
    description: 'The best tablet',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h87/hb8/67992621613086.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/haf/hde/67992622137374.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h80/67992622661662.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/microsoft-surface-pro-9-13-djuim-8-gb-256-gb-serebristyi-108487849/?c=750000000',
    rating: 2,
  },
  {
    category: 'Tablets',
    likes: 0,
    id: 20,
    name: 'Samsung Galaxy Tab S8 Ultra',
    price: 999,
    description: 'The best tablet',
    img: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/ha4/64299997102110.jpg?format=gallery-medium',
    img2: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h7c/64299999526942.jpg?format=gallery-medium',
    img3: 'https://resources.cdn-kaspi.kz/img/m/p/h5f/h78/64300008898590.jpg?format=gallery-medium',
    url: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s8-ultra-sm-x906-14-6-djuim-12-gb-256-gb-seryi-103700021/?c=750000000',
    rating: 3,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/