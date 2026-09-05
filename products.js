/*
  MASTER PRODUCT FILE
  -------------------
  This is the ONLY file you normally need to edit when adding products.

  1. Add a category inside STORE_CATEGORIES.
  2. Add products inside PRODUCTS.
  3. Push the changes to Git.
*/

const STORE_CATEGORIES = [
  {
    id: "women",
    name: "Women",
    image: "https://i.pinimg.com/736x/57/02/44/5702448155e4ba40356f8305eaee5a29.jpg"
  },
  {
    id: "kids",
    name: "Kids",
    image: "https://i.pinimg.com/736x/59/47/26/5947269149ebced1d0c460d920598798.jpg"
  },
  {
    id: "rudraksha",
    name: "Rudraksha",
    image: "https://i.pinimg.com/1200x/a4/72/1b/a4721bb6bf6c06154b69f8ecbf273fbc.jpg"
  },
  {
    id: "peda",
    name: "Peda",
    image: "https://i.pinimg.com/1200x/b1/93/15/b1931595ca10149d46e49baf85a977d9.jpg"
  }
];

const PRODUCTS = [
  {
    id: "KIDS-001",
    name: "Kids Casual's ( Pack of 5 )",
    category: "kids",
    price: 2085,
    salePrice: 1750,
    badge: "NEW",
    image: "/uploads/pd1.jpeg",
    description: "Pack of 5 casual wear Housery for kids With Size 80 CM Suitable for 1.5 yrs - 2.5 yrs kids."
  },
  {
    id: "KIDS-002",
    name: "Kids Casual's ( Pack of 5 )",
    category: "kids",
    price: 1935,
    salePrice: 1625,
    badge: "NEW",
    image: "/uploads/pd2.jpeg",
    description: "Pack of 5 casual wear Housery for kids With Size 75 CM Suitable for 1 yrs - 2 yrs kids."
  },
  {
    id: "Rud-001",
    name: "Rudraksha Mala",
    category: "rudraksha",
    price: 999,
    salePrice: 399,
    badge: "BESTSELLER",
    image: [
      "/uploads/Rud001.png",
    ],
    description: "A beautiful Rudraksha mala perfect for meditation and spiritual practices."
  },
  {
    id: "Wom-001",
    name: "Roman Combo Pack with 1 Jockey Panty",
    category: "women",
    price: 1999,
    salePrice: 1299,
    badge: "New",
    image: [
      "https://i.pinimg.com/736x/07/1c/b2/071cb26223d7c61733ca12e3269b9ebc.jpg",
    ],
    description: "Elevate your style with this elegant and comfortable women’s wear. Made from high-quality fabric, it offers a flattering fit and all-day comfort. Perfect for casual outings, office wear, and special occasions ,  Avaiable size's M, L, XL, XXL."
  },
  {
    id: "prn-2655",
    name: "Pranjul Daily wear with Pant",
    category: "women",
    price: 1499,
    salePrice: 749,
    badge: "New",
    image: [
      "https://i.pinimg.com/736x/4e/c2/48/4ec2489333c109f52fa3817422b73b19.jpg",
    ],
    description: "Pranjul Daily wear with Pant with size M."
  },
  {
    id: "prn-3542",
    name: "Pranjul Daily wear with Pant",
    category: "women",
    price: 1499,
    salePrice: 749,
    badge: "New",
    image: [
      "https://i.pinimg.com/736x/4c/06/ec/4c06ec3763f2c7e30a09ae58e9997b43.jpg",
    ],
    description: "Pranjul Daily wear with Patiyala with size M."
  },
  {
    id: "prn-3520",
    name: "Pranjul Daily wear with Pant",
    category: "women",
    price: 1499,
    salePrice: 749,
    badge: "New",
    image: [
      "https://i.pinimg.com/736x/d5/9e/13/d59e13ffebbc9c6400ac6d2c547b6f50.jpg",
    ],
    description: "Pranjul Daily wear with Patiyala with size M."
  },
    {
    id: "Wom-002",
    name: "Beautiful Combo Pack with 1 Jockey Panty",
    category: "women",
    price: 1999,
    salePrice: 1299,
    badge: "New",
    image: [
      "https://i.pinimg.com/736x/e7/2e/5b/e72e5b5dab04845e8e18d64b482423af.jpg",
    ],
    description: "Elevate your style with this elegant and comfortable women’s wear. Made from high-quality fabric, it offers a flattering fit and all-day comfort. Perfect for casual outings, office wear, and special occasions ,  Avaiable size's M, L, XL, XXL."
    },
  // {
  //   id: "WOM-001",
  //   name: "Satin Statement Dress",
  //   category: "women",
  //   price: 2499,
  //   salePrice: 1999,
  //   badge: "NEW",
  //   image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80",
  //   description: "Elegant satin finish with a modern silhouette for special occasions."
  // },
  // {
  //   id: "WOM-002",
  //   name: "Everyday Minimal Top",
  //   category: "women",
  //   price: 999,
  //   salePrice: 799,
  //   badge: "",
  //   image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=80",
  //   description: "Minimal, comfortable and easy to pair with your everyday wardrobe."
  // },
  // {
  //   id: "ACC-001",
  //   name: "Minimal Watch",
  //   category: "accessories",
  //   price: 2999,
  //   salePrice: 2299,
  //   badge: "BESTSELLER",
  //   image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80",
  //   description: "A refined minimalist watch with an understated premium look."
  // },
  // {
  //   id: "ACC-002",
  //   name: "Everyday Sunglasses",
  //   category: "accessories",
  //   price: 1499,
  //   salePrice: 1099,
  //   badge: "",
  //   image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  //   description: "Classic everyday frames with a clean modern profile."
  // },
];
