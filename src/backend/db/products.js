import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    name: "Colorful WMN 01",
    img: "https://live.staticflickr.com/65535/52900844018_4f5fccef4a_h.jpg",
    price: 100,
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "colorful",
    rating: 4.5,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Colorful WMN 02",
    img: "https://live.staticflickr.com/65535/52900399316_13fba57253_h.jpg",
    price: 110,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "colorful",
    rating: 3.8,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Colorful WMN 03",
    img: "https://live.staticflickr.com/65535/52900558849_421edca50a_h.jpg",
    price: 120,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "colorful",
    rating: 3.5,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Funky WMN 01",
    img: "https://live.staticflickr.com/65535/52900399261_c9338cf89f_h.jpg",
    price: 130,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "funky",
    rating: 2.9,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Funky WMN 02",
    img: "https://live.staticflickr.com/65535/52900789825_6478c2f4f7_h.jpg",
    price: 140,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "funky",
    rating: 4.2,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Funky WMN 03",
    img: "https://live.staticflickr.com/65535/52899825407_0e5137a8d5_h.jpg",
    price: 150,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "funky",
    rating: 4.8,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Fashiony WMN 01",
    img: "https://live.staticflickr.com/65535/52900558829_461e4b18a3_h.jpg",
    price: 165,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "fashiony",
    rating: 3.1,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Fashiony WMN 02",
    img: "https://live.staticflickr.com/65535/52900558799_34e339f9d3_h.jpg",
    price: 192,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "fashiony",
    rating: 2.9,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Fashiony WMN 03",
    img: "https://live.staticflickr.com/65535/52899825457_7f3d1085b8_h.jpg",
    price: 173,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "fashiony",
    rating: 4.1,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Modern WMN 01",
    img: "https://live.staticflickr.com/65535/52900843898_d56eb36a18_h.jpg",
    price: 212,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "modern",
    rating: 4.2,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Modern WMN 02",
    img: "https://live.staticflickr.com/65535/52900843883_6df9f27b1c_h.jpg",
    price: 195,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "modern",
    rating: 3.6,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Modern MN 01",
    img: "https://live.staticflickr.com/65535/52900399221_c2554d0910_h.jpg",
    price: 210,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "modern",
    rating: 2.5,
    gender: "men",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 01",
    img: "https://live.staticflickr.com/65535/52900399186_100a054554_h.jpg",
    price: 224,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 4.3,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 02",
    img: "https://live.staticflickr.com/65535/52900789755_1fd5fda240_h.jpg",
    price: 238,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 4.4,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 03",
    img: "https://live.staticflickr.com/65535/52899825292_41f241b481_h.jpg",
    price: 243,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 3.7,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 04",
    img: "https://live.staticflickr.com/65535/52900399106_91c476dae5_h.jpg",
    price: 257,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 4.1,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 05",
    img: "https://live.staticflickr.com/65535/52900843743_a8d7fa86dd_h.jpg",
    price: 261,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 2.8,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Retro WMN 06",
    img: "https://live.staticflickr.com/65535/52900399031_b44cd719da_h.jpg",
    price: 264,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "retro",
    rating: 4.8,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Sleek MN 01",
    img: "https://live.staticflickr.com/65535/52900558534_13c5f11d40_h.jpg",
    price: 211,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "sleek",
    rating: 4.5,
    gender: "men",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Sleek WMN 01",
    img: "https://live.staticflickr.com/65535/52900789550_1ccf1e4b80_h.jpg",
    price: 234,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "sleek",
    rating: 3.7,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Sleek WMN 02",
    img: "https://live.staticflickr.com/65535/52900789505_e1d1ccc79d_h.jpg",
    price: 283,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "sleek",
    rating: 5,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Stylish WMN 01",
    img: "https://live.staticflickr.com/65535/52900558959_f5c9f7b073_h.jpg",
    price: 290,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "stylish",
    rating: 5,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Stylish WMN 02",
    img: "https://live.staticflickr.com/65535/52899825112_aca8e59935_h.jpg",
    price: 194,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "stylish",
    rating: 4.3,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Stylish MN 01",
    img: "https://live.staticflickr.com/65535/52899825157_16f11db435_h.jpg",
    price: 278,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "stylish",
    rating: 2.9,
    gender: "men",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Trendy WMN 01",
    img: "https://live.staticflickr.com/65535/52899825532_a6a59737fa_h.jpg",
    price: 284,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "trendy",
    rating: 3.9,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Trendy WMN 02",
    img: "https://live.staticflickr.com/65535/52900844088_c9df9610e9_h.jpg",
    price: 199,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "trendy",
    rating: 3.2,
    gender: "women",
    quantity: 1
  },
  {
    id: uuid(),
    name: "Trendy MN 01",
    img: "https://live.staticflickr.com/65535/52900398966_ea7e52ba2e_h.jpg",
    price: 202,
    details:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    category: "trendy",
    rating: 2.9,
    gender: "men",
    quantity: 1
  },
];
