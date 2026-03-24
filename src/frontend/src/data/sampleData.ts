import type { Board, Post, Product } from "../backend.d";

export const sampleBoards: Board[] = [
  {
    boardName: "Modern Farmhouse Living",
    boardUrl:
      "https://www.pinterest.com/Homediscoveries2688/modern-farmhouse-living/",
    description:
      "Clean lines, natural textures, and cozy warmth for your living room.",
  },
  {
    boardName: "Cozy Bedroom Ideas",
    boardUrl:
      "https://www.pinterest.com/Homediscoveries2688/cozy-bedroom-ideas/",
    description:
      "Layered bedding, soft lighting, and serene retreats for restful nights.",
  },
  {
    boardName: "Kitchen Styling Tips",
    boardUrl:
      "https://www.pinterest.com/Homediscoveries2688/kitchen-styling-tips/",
    description:
      "Open shelving, ceramic accents, and warm tones to elevate your kitchen.",
  },
  {
    boardName: "Bohemian Decor Vibes",
    boardUrl: "https://www.pinterest.com/Homediscoveries2688/bohemian-decor/",
    description:
      "Rich textures, global patterns, and free-spirited styling for boho lovers.",
  },
];

export const sampleProducts: Product[] = [
  {
    name: "Velvet Throw Pillow Set",
    description:
      "Luxuriously soft velvet pillows in earthy terracotta and cream tones.",
    price: "$34.99",
    affiliateUrl:
      "https://www.amazon.com/s?k=velvet+throw+pillow+set+terracotta&tag=homediscoveries-20",
    imageUrl: "/assets/generated/product-throw-pillows.dim_600x600.jpg",
    category: "Pillows & Textiles",
  },
  {
    name: "Ceramic Vase with Pampas Grass",
    description:
      "Minimalist ceramic vase paired with dried pampas for boho-chic styling.",
    price: "$28.50",
    affiliateUrl:
      "https://www.amazon.com/s?k=ceramic+vase+pampas+grass+decor&tag=homediscoveries-20",
    imageUrl: "/assets/generated/product-ceramic-vase.dim_600x600.jpg",
    category: "Vases & Botanicals",
  },
  {
    name: "Farmhouse Decorative Tray",
    description:
      "Handcrafted wooden tray to style your coffee table with candles and curios.",
    price: "$42.00",
    affiliateUrl:
      "https://www.amazon.com/s?k=farmhouse+wooden+decorative+tray&tag=homediscoveries-20",
    imageUrl: "/assets/generated/product-tray-decor.dim_600x600.jpg",
    category: "Table Decor",
  },
  {
    name: "Boho Macrame Wall Hanging",
    description:
      "Hand-knotted natural cotton macrame — the perfect statement wall piece.",
    price: "$55.00",
    affiliateUrl:
      "https://www.amazon.com/s?k=boho+macrame+wall+hanging+large&tag=homediscoveries-20",
    imageUrl: "/assets/generated/product-macrame.dim_600x600.jpg",
    category: "Wall Decor",
  },
];

export const samplePosts: Post[] = [
  {
    title: "10 Modern Farmhouse Decor Ideas for Your Living Room",
    excerpt:
      "Transform your living room with these effortlessly chic farmhouse styling tips — shiplap, neutral palettes, and natural textures included.",
    body: "",
    date: "March 18, 2026",
    slug: "modern-farmhouse-living-room-ideas",
    imageUrl: "/assets/generated/blog-farmhouse-living.dim_800x500.jpg",
  },
  {
    title: "How to Create a Cozy Bedroom Retreat on a Budget",
    excerpt:
      "You don't need a designer budget to create the bedroom of your dreams. Layered textiles, warm lighting, and these simple hacks will do the trick.",
    body: "",
    date: "March 10, 2026",
    slug: "cozy-bedroom-retreat-budget",
    imageUrl: "/assets/generated/blog-cozy-bedroom.dim_800x500.jpg",
  },
  {
    title: "Kitchen Shelf Styling: The Art of Beautiful Open Shelving",
    excerpt:
      "Open shelving is equal parts practical and gorgeous. Learn how to balance aesthetics and function with our step-by-step styling guide.",
    body: "",
    date: "March 2, 2026",
    slug: "kitchen-open-shelving-styling",
    imageUrl: "/assets/generated/blog-kitchen-styling.dim_800x500.jpg",
  },
];
