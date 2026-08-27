/*
  MASTER PRODUCT FILE
  -------------------
  This is the ONLY file you normally need to edit when adding products.

  1. Add a category inside STORE_CATEGORIES.
  2. Add products inside PRODUCTS.
  3. Push the changes to Git.
*/

const STORE_CATEGORIES = [
  // {
  //   id: "men",
  //   name: "Men",
  //   image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80"
  // },
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
    description: "A versatile everyday overshirt with a clean contemporary fit."
  },
  {
    id: "KIDS-002",
    name: "Kids Casual's ( Pack of 5 )",
    category: "kids",
    price: 1935,
    salePrice: 1625,
    badge: "NEW",
    image: "/uploads/pd2.jpeg",
    description: "A versatile everyday overshirt with a clean contemporary fit."
  },
  {
    id: "Rud-001",
    name: "Rudraksha Mala",
    category: "rudraksha",
    price: 999,
    salePrice: 399,
    badge: "BESTSELLER",
    image: "/uploads/Rud001.png",
    description: "A beautiful Rudraksha mala perfect for meditation and spiritual practices."
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
