export interface specs{
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
}

export interface highlightBlockTypes{
  title : string;
  text : string;
}

export interface features{
  icon : string;
  description : string;
}

export interface descContent{
  longDescription : string;
  highlightBlock : highlightBlockTypes;
  features : features[];
}

export interface TemporaryProducts {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isAvailable: boolean;
  rating: number;
  category?: string;
  subCategory?: string;
  brand?: string;
  tags?: string[];
  sku: string;
  stockQuantity?: number;
  stockStatus?: "In Stock" | "Out of Stock" | "Limited Stock";
  offerPrice?: number;
  discount?: number;
  color: string;
  weight: string;
  material: string;
  condition: "New" | "Refurbished";
  warrantyMonths?: number;
  createdAt?: string;
  updatedAt?: string;
  featured?: boolean;
  specs : specs;
  detailsSection : descContent;
}

// export const TemporaryDataProducts: TemporaryProducts[] = [
//   // Gaming laptops
//   {
//     id: 1,
//     name: "ASUS ROG Strix G16",
//     price: 1399,
//     offerPrice: 1299,
//     discount: 100,
//     image: "/images/TemporaryProducts/Product1.jpg",
//     description:
//       "Compact 16-inch gaming laptop built to compete at high settings, with an Intel Core i7 processor, RTX 4060 graphics, and advanced cooling that keeps frame rates stable during long gaming sessions.",
//     isAvailable: true,
//     stockQuantity: 12,
//     stockStatus: "In Stock",
//     rating: 4.2,
//     category: "Computers",
//     subCategory: "Gaming Laptops - RTX 40 Series",
//     brand: "ASUS",
//     tags: ["gaming", "16GB RAM", "RTX 4060", "High-end", "Portable"],
//     sku: "ASUS-G16-4060",
//     color: "Black",
//     weight: "2.3kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-01",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-13650HX (14 cores, up to 4.9 GHz)",
//       gpu: "NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR5 4800MHz",
//       storage: "512GB NVMe M.2 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The ASUS ROG Strix G16 is a next-generation gaming laptop built for players who demand high frame rates, fast response, and reliable multitasking. Its compact chassis packs powerful hardware with advanced cooling, making it ideal for competitive shooters, AAA titles, and on-the-go content creation.",
//       highlightBlock: {
//         title: "Power to Dominate Every Match",
//         text:
//           "Harness the strength of the latest Intel Core i7 processor paired with RTX 40-series graphics to accelerate both gaming and productivity. Enjoy fast load times, smooth gameplay, and the responsiveness needed to stream, chat, and play at the same time without breaking a sweat.",
//       },
//       features: [
//         { icon: "/specs/display-icon.png", description: "16-inch display with high refresh rate for ultra-smooth gameplay" },
//         { icon: "/specs/rtx.png", description: "NVIDIA GeForce RTX 4060 graphics with ray tracing and DLSS support" },
//         { icon: "/specs/cooling-icon.png", description: "Advanced cooling with multiple heat pipes and optimized airflow" },
//         { icon: "/specs/keyboard-icon.png", description: "Customizable RGB keyboard lighting and gamer-focused design" },
//       ],
//     },
//   },
//   {
//     id: 2,
//     name: "MSI Katana 15",
//     price: 1599,
//     offerPrice: 1499,
//     discount: 100,
//     image: "/images/TemporaryProducts/Product2.jpg",
//     description:
//       "15-inch gaming laptop focused on smooth performance and clean aesthetics, combining an Intel Core i9 processor, RTX 4070 graphics, and tuned thermals for long sessions with stable high refresh gameplay.",
//     isAvailable: true,
//     stockQuantity: 8,
//     stockStatus: "In Stock",
//     rating: 3.5,
//     category: "Computers",
//     subCategory: "Gaming Laptops - RTX 40 Series",
//     brand: "MSI",
//     tags: ["gaming", "16GB RAM", "RTX 4070", "High-end"],
//     sku: "MSI-KAT15-4070",
//     color: "Gray",
//     weight: "2.4kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-28",
//     updatedAt: "2025-11-08",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i9-13900H (14 cores, up to 5.4 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR5 4800MHz",
//       storage: "1TB NVMe PCIe Gen4 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The MSI Katana 15 targets gamers who want to jump into the RTX 40 series without sacrificing thermals or style. Its clean chassis, 144Hz panel, and tuned cooling let you enjoy long gaming sessions with stable performance and fluid visuals.",
//       highlightBlock: {
//         title: "Slice Through Any Game",
//         text:
//           "With a 13th Gen Intel Core i9 processor and GeForce RTX 4070 graphics, the Katana 15 cuts through demanding titles with high FPS. Fast DDR5 memory and PCIe Gen4 storage keep load times short and your overall experience snappy.",
//       },
//       features: [
//         { icon: "/specs/display-icon.svg", description: "15.6\" FHD 144Hz IPS display for competitive gaming" },
//         { icon: "/specs/rtx.png", description: "NVIDIA RTX 4070 GPU with ray tracing and DLSS 3" },
//         { icon: "cooling-icon.svg", description: "Dual-fan cooling with multiple heat pipes" },
//         { icon: "keyboard-icon.svg", description: "Backlit keyboard with a subtle gaming design" },
//       ],
//     },
//   },
//   {
//     id: 3,
//     name: "Alienware M18",
//     price: 2499,
//     image: "/images/TemporaryProducts/Product3.jpg",
//     description:
//       "Massive 18-inch gaming laptop designed as a true desktop replacement, with an Intel Core i9 CPU, RTX 4080 graphics, and a bold Alienware chassis for extreme performance and immersive big-screen play.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 1.9,
//     category: "Computers",
//     subCategory: "Gaming Laptops - 18 inch",
//     brand: "Alienware",
//     tags: ["gaming", "18inch", "RTX 4080", "High-end"],
//     sku: "ALIEN-M18-4080",
//     color: "Black",
//     weight: "3.2kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-09-20",
//     updatedAt: "2025-11-05",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i9-13980HX (24 cores, up to 5.6 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6",
//       ram: "32GB DDR5 4800MHz",
//       storage: "1TB NVMe M.2 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Alienware M18 is a true desktop replacement with a massive 18-inch display that fully immerses you in every battle. Its robust chassis and iconic Alienware design make it the perfect machine for extreme gaming and advanced content creation.",
//       highlightBlock: {
//         title: "Built Like a Desktop Beast",
//         text:
//           "Armed with a high-end Intel Core i9 processor and RTX 4080 graphics, the M18 delivers desktop-like power in a portable form factor. Alienware Cryo-Tech cooling keeps thermals in check under heavy loads so you can focus on winning.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "18-inch high refresh rate display for full immersion" },
//         { icon: "graphics-icon.svg", description: "NVIDIA RTX 4080 graphics ideal for 1440p and 4K" },
//         { icon: "keyboard-icon.svg", description: "Full-size keyboard with per-key RGB lighting" },
//         { icon: "ports-icon.svg", description: "Plenty of ports and fast NVMe storage for large game libraries" },
//       ],
//     },
//   },
//   {
//     id: 4,
//     name: "ASUS TUF Gaming F15",
//     price: 1099,
//     image: "/images/TemporaryProducts/Product4.jpg",
//     description:
//       "Durable 15-inch gaming laptop built for everyday play, pairing an Intel Core i5 processor with RTX 3060 graphics and robust cooling to deliver consistent 1080p performance on a reasonable budget.",
//     isAvailable: true,
//     stockQuantity: 15,
//     stockStatus: "In Stock",
//     rating: 4.3,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Entry Level",
//     brand: "ASUS",
//     tags: ["gaming", "RTX 3060", "Durable"],
//     sku: "ASUS-TUF-F15-3060",
//     color: "Black",
//     weight: "2.5kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-10",
//     updatedAt: "2025-11-07",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i5-12500H (12 cores, up to 4.5 GHz)",
//       gpu: "NVIDIA GeForce RTX 3060 Laptop GPU 6GB GDDR6",
//       ram: "16GB DDR4 3200MHz",
//       storage: "512GB NVMe M.2 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The ASUS TUF Gaming F15 combines military-grade durability with hardware tuned for everyday gaming. It is ideal for players entering the PC gaming space who want ray tracing at 1080p and good thermals on a reasonable budget.",
//       highlightBlock: {
//         title: "Tough Outside, Fierce Inside",
//         text:
//           "A 12th Gen Intel Core i5 and RTX 3060 work together to deliver solid FPS in competitive and AAA games. TUF Cooling keeps performance consistent during long gaming marathons with minimal throttling.",
//       },
//       features: [
//         { icon: "durability-icon.svg", description: "Military-grade durability for long-term reliability" },
//         { icon: "graphics-icon.svg", description: "RTX 3060 GPU ready for 1080p gaming with ray tracing" },
//         { icon: "display-icon.svg", description: "High-refresh display tailored for eSports" },
//         { icon: "upgrade-icon.svg", description: "Easy access to RAM and storage for future upgrades" },
//       ],
//     },
//   },
//   {
//     id: 5,
//     name: "Razer Blade 16",
//     price: 2799,
//     offerPrice: 2699,
//     discount: 100,
//     image: "/images/TemporaryProducts/Product5.jpg",
//     description:
//       "Premium 16-inch gaming and creator laptop with a sleek aluminum chassis, RTX 4080 graphics, and a smooth Mini LED display for high-refresh gaming and color-accurate content work.",
//     isAvailable: true,
//     stockQuantity: 5,
//     stockStatus: "Limited Stock",
//     rating: 3.8,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Creator Focus",
//     brand: "Razer",
//     tags: ["gaming", "16inch", "Mini LED", "High-end"],
//     sku: "RAZER-BLADE16",
//     color: "Black",
//     weight: "2.1kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-03",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-13950HX (24 cores, up to 5.5 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6",
//       ram: "32GB DDR5 5600MHz",
//       storage: "1TB PCIe Gen4 NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Razer Blade 16 combines a minimalist aluminum design with a stunning Mini LED panel, perfect for both competitive gamers and creators. Its compact footprint and powerful internals make it a mobile workstation for playing, editing, and rendering anywhere.",
//       highlightBlock: {
//         title: "Precision for Play and Creation",
//         text:
//           "A high-performance Intel Core i9 CPU and RTX 4080 GPU unlock 4K gaming, video editing, and 3D work on a single machine. The Mini LED display delivers vibrant colors and deep blacks while still offering a high refresh rate.",
//       },
//       features: [
//         { icon: "chassis-icon.svg", description: "Premium unibody aluminum chassis" },
//         { icon: "display-icon.svg", description: "Mini LED display with high resolution and refresh rate" },
//         { icon: "graphics-icon.svg", description: "RTX 4080 graphics for both creators and pro gamers" },
//         { icon: "keyboard-icon.svg", description: "Per-key RGB keyboard and subtle chassis lighting" },
//       ],
//     },
//   },
//   {
//     id: 6,
//     name: "HP Omen 17",
//     price: 2399,
//     image: "/images/TemporaryProducts/Product6.jpg",
//     description:
//       "Large 17-inch gaming laptop tuned for competitive play, combining an Intel Core i9 processor, RTX 4080 graphics, and advanced cooling to keep performance stable during intense matches.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 2.6,
//     category: "Computers",
//     subCategory: "Gaming Laptops - 17 inch",
//     brand: "HP",
//     tags: ["gaming", "RTX 4080", "17inch", "High-end"],
//     sku: "HP-OMEN17-4080",
//     color: "Black",
//     weight: "3kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-09-30",
//     updatedAt: "2025-11-05",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i9-13900HX (24 cores, up to 5.4 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6",
//       ram: "32GB DDR5 5200MHz",
//       storage: "1TB NVMe M.2 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The HP Omen 17 is built for long competitive sessions where every frame counts. Its large 17-inch display and advanced cooling system make it an excellent choice for players who value immersion and thermal performance.",
//       highlightBlock: {
//         title: "Stay Cool Under Pressure",
//         text:
//           "A 13th Gen Intel Core i9 and RTX 4080 provide enough power for demanding games and heavy multitasking. Omen Tempest Cooling helps maintain stable temperatures even when the system is pushed to its limits.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "Large 17-inch display tailored for competitive play" },
//         { icon: "graphics-icon.svg", description: "RTX 4080 GPU for high-resolution gaming" },
//         { icon: "cooling-icon.svg", description: "Multi-fan cooling with wide exhaust vents" },
//         { icon: "software-icon.svg", description: "Omen software for performance monitoring and tuning" },
//       ],
//     },
//   },
//   {
//     id: 7,
//     name: "Lenovo Legion 7i",
//     price: 1999,
//     image: "/images/TemporaryProducts/Product7.jpg",
//     description:
//       "High-end 16-inch gaming laptop with a sleek aluminum body, RTX 4080 graphics, and Legion Coldfront cooling engineered for demanding games and creative workloads.",
//     isAvailable: true,
//     stockQuantity: 10,
//     stockStatus: "In Stock",
//     rating: 2.4,
//     category: "Computers",
//     subCategory: "Gaming Laptops - RGB",
//     brand: "Lenovo",
//     tags: ["gaming", "RGB", "Aluminum", "High-end"],
//     sku: "LENOVO-L7I",
//     color: "Silver",
//     weight: "2.6kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-15",
//     updatedAt: "2025-11-06",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i7-13700HX (16 cores, up to 5.0 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6",
//       ram: "32GB DDR5 5600MHz",
//       storage: "1TB NVMe PCIe 4.0 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Lenovo Legion 7i blends a sleek aluminum chassis with immersive RGB lighting. It is designed for users who need a versatile machine for high-end gaming and demanding creative workloads.",
//       highlightBlock: {
//         title: "Coldfront, Hot Performance",
//         text:
//           "Legion Coldfront 4.0 keeps the powerful Intel Core i7 and RTX 4080 under control, enabling intense sessions with minimal throttling. High-speed DDR5 memory and PCIe 4.0 storage make the whole system feel instant and responsive.",
//       },
//       features: [
//         { icon: "chassis-icon.svg", description: "Premium aluminum chassis with full-edge RGB lighting" },
//         { icon: "graphics-icon.svg", description: "RTX 4080 graphics tuned for high FPS at QHD" },
//         { icon: "cooling-icon.svg", description: "Legion Coldfront 4.0 cooling system" },
//         { icon: "keyboard-icon.svg", description: "Comfortable keyboard with per-key RGB lighting" },
//       ],
//     },
//   },
//   {
//     id: 8,
//     name: "Acer Predator Helios 300",
//     price: 1499,
//     image: "/images/TemporaryProducts/Product8.jpg",
//     description:
//       "Balanced 15-inch gaming laptop that mixes strong RTX 3070 performance, a fast 144Hz display, and aggressive Predator styling for players who want smooth 1080p gameplay.",
//     isAvailable: true,
//     stockQuantity: 8,
//     stockStatus: "In Stock",
//     rating: 5,
//     category: "Computers",
//     subCategory: "Gaming Laptops - 144Hz",
//     brand: "Acer",
//     tags: ["gaming", "RTX 3070", "144Hz", "High-end"],
//     sku: "ACER-PRED-300",
//     color: "Black",
//     weight: "2.4kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-25",
//     updatedAt: "2025-11-09",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-12700H (14 cores, up to 4.8 GHz)",
//       gpu: "NVIDIA GeForce RTX 3070 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR4 3200MHz",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Acer Predator Helios 300 is a classic gaming laptop known for its strong balance of price, performance, and aggressive design. Its 144Hz display and RTX 3070 GPU make it ideal for competitive shooters and modern AAA games at 1080p.",
//       highlightBlock: {
//         title: "Strike Fast, Cool, and True",
//         text:
//           "A 12th Gen Intel Core i7 and RTX 3070 deliver consistently high FPS in a wide range of titles. Custom AeroBlade 3D fans keep airflow optimized so performance stays high during long sessions.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "144Hz display ideal for fast-paced games" },
//         { icon: "graphics-icon.svg", description: "RTX 3070 GPU capable of 1080p ultra with ray tracing" },
//         { icon: "cooling-icon.svg", description: "Custom AeroBlade 3D cooling system" },
//         { icon: "keyboard-icon.svg", description: "RGB keyboard with a bold gamer aesthetic" },
//       ],
//     },
//   },
//   {
//     id: 9,
//     name: "Dell G15",
//     price: 1199,
//     image: "/images/TemporaryProducts/Product9.jpg",
//     description:
//       "Mid-range 15-inch gaming laptop that pairs 12th Gen Intel processors with RTX graphics, delivering solid 1080p performance in a more understated chassis for mixed work and play.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 4.2,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Mid Range",
//     brand: "Dell",
//     tags: ["gaming", "Intel 12th Gen", "RTX", "High-end"],
//     sku: "DELL-G15",
//     color: "Gray",
//     weight: "2.5kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-09-25",
//     updatedAt: "2025-11-05",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i7-12700H (14 cores, up to 4.7 GHz)",
//       gpu: "NVIDIA GeForce RTX 3050 Ti Laptop GPU 4GB GDDR6",
//       ram: "16GB DDR5 4800MHz",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Dell G15 is a mid-range gaming laptop built to offer strong performance at a reasonable price. It suits players who want a capable 1080p machine with a more understated design and enough power for multitasking.",
//       highlightBlock: {
//         title: "Mid-Range, Full Experience",
//         text:
//           "Powered by a 12th Gen Intel Core processor and RTX graphics, the G15 delivers stable FPS in today’s most popular games. DDR5 memory and NVMe storage keep apps responsive and greatly reduce loading times.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "Clean design that works for both gaming and work" },
//         { icon: "graphics-icon.svg", description: "RTX graphics with basic ray tracing support" },
//         { icon: "keyboard-icon.svg", description: "Comfortable backlit keyboard" },
//         { icon: "battery-icon.svg", description: "Good battery life for mixed use scenarios" },
//       ],
//     },
//   },
//   {
//     id: 10,
//     name: "Gigabyte AORUS 17",
//     price: 1899,
//     image: "/images/TemporaryProducts/Product10.jpg",
//     description:
//       "17-inch eSports-oriented gaming laptop featuring RTX 4070 graphics, a high-refresh QHD display, and a sturdy metal chassis tailored for competitive players who want speed and clarity.",
//     isAvailable: true,
//     stockQuantity: 6,
//     stockStatus: "In Stock",
//     rating: 4.7,
//     category: "Computers",
//     subCategory: "Gaming Laptops - eSports",
//     brand: "Gigabyte",
//     tags: ["gaming", "QHD", "240Hz", "17inch", "High-end"],
//     sku: "GIGABYTE-A17",
//     color: "Black",
//     weight: "2.9kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-05",
//     updatedAt: "2025-11-07",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-13700H (14 cores, up to 5.0 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR5 4800MHz",
//       storage: "1TB NVMe PCIe Gen4 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Gigabyte AORUS 17 is aimed at eSports players who demand a large, ultra-fast display. Paired with modern hardware, it lets you fully leverage high refresh rates in competitive shooters and MOBAs.",
//       highlightBlock: {
//         title: "Built for the Arena",
//         text:
//           "With an Intel Core i7 and RTX 4070, the AORUS 17 delivers the speed required to compete at a high level. Its high-refresh panel helps you react faster and track every movement with precision.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "Large 17-inch high refresh rate display for eSports" },
//         { icon: "graphics-icon.svg", description: "RTX 4070 GPU ideal for high-FPS 1440p gaming" },
//         { icon: "chassis-icon.svg", description: "Sturdy metal chassis with a premium gamer look" },
//         { icon: "keyboard-icon.svg", description: "RGB keyboard with satisfying key travel" },
//       ],
//     },
//   },

//   // Creator / work laptops
//   {
//     id: 11,
//     name: "ASUS Zephyrus G14",
//     price: 1799,
//     image: "/images/TemporaryProducts/Product11.jpg",
//     description:
//       "Ultra-portable 14-inch gaming laptop with a Ryzen 9 processor and RTX 4060 graphics, ideal for users who need strong performance and good battery life while moving between class, work, and play.",
//     isAvailable: true,
//     stockQuantity: 9,
//     stockStatus: "In Stock",
//     rating: 2.8,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Portable",
//     brand: "ASUS",
//     tags: ["gaming", "Ryzen 9", "14inch", "Portable"],
//     sku: "ASUS-ZG14",
//     color: "Gray",
//     weight: "1.6kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-12",
//     updatedAt: "2025-11-08",
//     featured: false,
//     specs: {
//       cpu: "AMD Ryzen 9 7940HS (8 cores, up to 5.2 GHz)",
//       gpu: "NVIDIA GeForce RTX 4060 Laptop GPU 8GB GDDR6",
//       ram: "16GB LPDDR5 4800MHz",
//       storage: "1TB NVMe M.2 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The ASUS Zephyrus G14 is one of the most portable gaming laptops available, ideal for users who move between class, work, and play. Its lightweight design and solid battery life make it an excellent companion for productivity and entertainment.",
//       highlightBlock: {
//         title: "Power in a 14-inch Shell",
//         text:
//           "A modern Ryzen 9 CPU and RTX 4060 GPU let you enjoy current titles and handle creative workloads in a compact footprint. The high-refresh display keeps both games and everyday navigation feeling smooth.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "Lightweight 14-inch design focused on mobility" },
//         { icon: "cpu-icon.svg", description: "Ryzen 9 processor ready for heavy multitasking" },
//         { icon: "graphics-icon.svg", description: "RTX 4060 graphics for modern gaming" },
//         { icon: "battery-icon.svg", description: "Strong battery life with fast USB-C charging" },
//       ],
//     },
//   },
//   {
//     id: 12,
//     name: "MSI Raider GE78 HX",
//     price: 2599,
//     image: "/images/TemporaryProducts/Product12.jpg",
//     description:
//       "Extreme 17-inch gaming laptop with a desktop-class Intel Core i9, RTX 4080 graphics, and bold panoramic RGB lighting for users who want flagship performance and a showpiece in their setup.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 3.9,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Extreme",
//     brand: "MSI",
//     tags: ["gaming", "Intel i9", "RTX 4080", "17inch", "High-end"],
//     sku: "MSI-RGE78-HX",
//     color: "Black",
//     weight: "3.1kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-01",
//     updatedAt: "2025-11-06",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-13980HX (24 cores, up to 5.6 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 Laptop GPU 12GB GDDR6",
//       ram: "32GB DDR5 5600MHz",
//       storage: "2TB NVMe PCIe Gen4 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The MSI Raider GE78 HX pushes the idea of an extreme gaming laptop to the next level, built for users who want top-tier performance and bold RGB. Its lighting bar and flagship components make it the centerpiece of any gaming setup.",
//       highlightBlock: {
//         title: "Outshine and Outperform",
//         text:
//           "A desktop-class Intel Core i9 HX and RTX 4080 GPU deliver near-desktop performance even at high resolutions. MSI’s advanced cooling keeps this power under control while panoramic RGB lighting synchronizes with the rest of your rig.",
//       },
//       features: [
//         { icon: "lighting-icon.svg", description: "Panoramic RGB bar across the front of the chassis" },
//         { icon: "cpu-icon.svg", description: "Extreme hardware with Intel Core i9 HX and RTX 4080" },
//         { icon: "display-icon.svg", description: "Large 17-inch panel for full immersion" },
//         { icon: "ports-icon.svg", description: "Plenty of ports and internal upgrade options" },
//       ],
//     },
//   },
//   {
//     id: 13,
//     name: "Apple MacBook Pro 14\"",
//     price: 2499,
//     image: "/images/TemporaryProducts/Product13.jpg",
//     description:
//       "Professional 14-inch laptop powered by the Apple M2 Pro chip, offering strong performance, long battery life, and a high-quality Liquid Retina XDR display for demanding creative workflows.",
//     isAvailable: true,
//     stockQuantity: 7,
//     stockStatus: "In Stock",
//     rating: 4.9,
//     category: "Computers",
//     subCategory: "Creator Laptops - macOS",
//     brand: "Apple",
//     tags: ["M2 Pro", "16GB RAM", "14inch", "Liquid Retina", "Portable"],
//     sku: "APPLE-MBP14-M2P",
//     color: "Silver",
//     weight: "1.6kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-01",
//     updatedAt: "2025-11-11",
//     featured: true,
//     specs: {
//       cpu: "Apple M2 Pro (10-core CPU, 16-core GPU)",
//       ram: "16GB unified memory",
//       storage: "512GB NVMe SSD",
//       gpu: "Apple 16-core integrated GPU",
//     },
//     detailsSection: {
//       longDescription:
//         "The 14-inch MacBook Pro with M2 Pro is aimed at professionals who need sustained performance, long battery life, and a reference-quality display. It excels at video editing, photography, development, and other creative workloads on macOS.",
//       highlightBlock: {
//         title: "Pro Power, All Day",
//         text:
//           "The M2 Pro chip combines a high-performance CPU and GPU with excellent efficiency, letting you tackle heavy projects away from the outlet. The Liquid Retina XDR display offers outstanding brightness and color accuracy for creative workflows.",
//       },
//       features: [
//         { icon: "cpu-icon.svg", description: "Apple M2 Pro SoC with powerful CPU and GPU" },
//         { icon: "display-icon.svg", description: "Liquid Retina XDR display with wide dynamic range" },
//         { icon: "battery-icon.svg", description: "All-day battery life for serious mobile work" },
//         { icon: "audio-icon.svg", description: "Six-speaker sound system with studio-quality microphones" },
//       ],
//     },
//   },
//   {
//     id: 14,
//     name: "Dell XPS 15",
//     price: 2199,
//     image: "/images/TemporaryProducts/Product14.jpg",
//     description:
//       "Elegant 15-inch creator laptop with an Intel Core i9 processor, RTX 4070 graphics, and a sharp 4K OLED display tailored for video editing, photography, and high-end design work.",
//     isAvailable: true,
//     stockQuantity: 5,
//     stockStatus: "Limited Stock",
//     rating: 4.5,
//     category: "Computers",
//     subCategory: "Creator Laptops - Windows",
//     brand: "Dell",
//     tags: ["Intel i9", "4K OLED", "15inch", "Creator", "Portable"],
//     sku: "DELL-XPS15-4K",
//     color: "Silver",
//     weight: "2kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-20",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-13900H (14 cores, up to 5.4 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR5 5200MHz",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Dell XPS 15 is a creator-focused laptop that blends elegance with strong performance. Its 4K OLED display and high-end internals make it an excellent tool for video editing, photography, and design.",
//       highlightBlock: {
//         title: "Create in 4K Clarity",
//         text:
//           "An Intel Core i9 CPU and RTX 4070 GPU handle heavy timelines and complex previews with ease. The 4K OLED panel delivers deep blacks and vivid colors, making it ideal for color-critical work.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "Premium design with ultra-thin bezels" },
//         { icon: "display-icon.svg", description: "4K OLED display ideal for visual work" },
//         { icon: "graphics-icon.svg", description: "RTX 4070 graphics ready for rendering and gaming" },
//         { icon: "portability-icon.svg", description: "Great balance between portability and power" },
//       ],
//     },
//   },
//   {
//     id: 15,
//     name: "HP Spectre x360",
//     price: 1599,
//     image: "/images/TemporaryProducts/Product15.jpg",
//     description:
//       "Premium 2-in-1 convertible with a 13-inch touchscreen, Intel Core i7 processor, 16GB RAM, and stylus support, ideal for users who switch between typing, drawing, and media consumption.",
//     isAvailable: true,
//     stockQuantity: 6,
//     stockStatus: "In Stock",
//     rating: 4.2,
//     category: "Computers",
//     subCategory: "2-in-1 Convertibles - Premium",
//     brand: "HP",
//     tags: ["Convertible", "Touchscreen", "Stylus", "Intel i7", "Portable"],
//     sku: "HP-SPECTRE-X360",
//     color: "Black",
//     weight: "1.4kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-25",
//     updatedAt: "2025-11-09",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i7-1365U (10 cores, up to 5.2 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "16GB LPDDR5",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The HP Spectre x360 is a premium convertible that blends elegant design with a very flexible 2-in-1 form factor. It is perfect for users who switch between typing, media consumption, and stylus note-taking.",
//       highlightBlock: {
//         title: "Flip, Create, Inspire",
//         text:
//           "The 13th Gen Intel Core i7 delivers enough performance for productivity and light creative work while keeping battery life strong. The touchscreen with stylus support lets you sketch, annotate, and present content more naturally.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "360-degree convertible design with multiple usage modes" },
//         { icon: "touchscreen-icon.svg", description: "Touchscreen with active stylus support" },
//         { icon: "chassis-icon.svg", description: "Slim and premium aluminum chassis" },
//         { icon: "battery-icon.svg", description: "Long-lasting battery suited for mobile workers" },
//       ],
//     },
//   },
//   {
//     id: 16,
//     name: "Lenovo ThinkPad X1 Carbon Gen 11",
//     price: 1899,
//     image: "/images/TemporaryProducts/Product16.jpg",
//     description:
//       "Lightweight 14-inch business ultrabook with a carbon fiber chassis, Intel Core i7 CPU, 16GB RAM, and strong security features, ideal for professionals who travel frequently.",
//     isAvailable: true,
//     stockQuantity: 10,
//     stockStatus: "In Stock",
//     rating: 4.7,
//     category: "Computers",
//     subCategory: "Business Ultrabooks",
//     brand: "Lenovo",
//     tags: ["Business", "Carbon Fiber", "Lightweight", "Intel i7", "Portable"],
//     sku: "LENOVO-X1C-11",
//     color: "Black",
//     weight: "1.1kg",
//     material: "Carbon Fiber",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-30",
//     updatedAt: "2025-11-08",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-1365U (10 cores, up to 5.2 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "16GB LPDDR5",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The ThinkPad X1 Carbon Gen 11 is an iconic business ultrabook made for professionals who travel frequently. Its carbon fiber chassis offers excellent lightness and durability, complemented by the classic ThinkPad keyboard.",
//       highlightBlock: {
//         title: "Business Class Anywhere",
//         text:
//           "A 13th Gen Intel Core i7 and fast SSD handle heavy spreadsheets, video calls, and many apps at once. Long battery life and integrated security features make it a reliable choice for mission-critical work.",
//       },
//       features: [
//         { icon: "chassis-icon.svg", description: "Ultra-light carbon fiber chassis" },
//         { icon: "keyboard-icon.svg", description: "Legendary ThinkPad keyboard with backlighting" },
//         { icon: "security-icon.svg", description: "Robust enterprise security features" },
//         { icon: "display-icon.svg", description: "Anti-glare display suitable for mobile work" },
//       ],
//     },
//   },
//   {
//     id: 17,
//     name: "Razer Blade 14",
//     price: 2299,
//     image: "/images/TemporaryProducts/Product17.jpg",
//     description:
//       "Compact 14-inch gaming laptop that combines a Ryzen 9 CPU, RTX 4070 graphics, and a high-refresh display, delivering a premium RGB experience in a small aluminum chassis.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 4.0,
//     category: "Computers",
//     subCategory: "Gaming Laptops - Compact",
//     brand: "Razer",
//     tags: ["Gaming", "RTX 4070", "14inch", "RGB Keyboard"],
//     sku: "RAZER-BLADE14-R9",
//     color: "Black",
//     weight: "1.8kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-18",
//     updatedAt: "2025-11-05",
//     featured: false,
//     specs: {
//       cpu: "AMD Ryzen 9 7940HS (8 cores, up to 5.2 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
//       ram: "16GB DDR5 5200MHz",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Razer Blade 14 is a compact gaming laptop that does not compromise on power. Its reduced size and refined design make it perfect for gamers who travel often or have limited desk space.",
//       highlightBlock: {
//         title: "Small Size, Big Frames",
//         text:
//           "The Ryzen 9 CPU and RTX 4070 GPU push high FPS in demanding titles inside a 14-inch chassis. A high-refresh display and RGB keyboard help deliver a premium gaming experience in a small form factor.",
//       },
//       features: [
//         { icon: "chassis-icon.svg", description: "Compact 14-inch aluminum chassis" },
//         { icon: "graphics-icon.svg", description: "RTX 4070 graphics with ray tracing support" },
//         { icon: "display-icon.svg", description: "High-refresh display ideal for competitive play" },
//         { icon: "keyboard-icon.svg", description: "RGB keyboard with precise switches" },
//       ],
//     },
//   },
//   {
//     id: 18,
//     name: "Acer Swift 3",
//     price: 899,
//     image: "/images/TemporaryProducts/Product18.jpg",
//     description:
//       "Slim 14-inch ultrabook with a Ryzen 7 processor, 8GB RAM, and 512GB SSD, aimed at students and professionals who need a lightweight laptop for everyday productivity.",
//     isAvailable: true,
//     stockQuantity: 12,
//     stockStatus: "In Stock",
//     rating: 4.1,
//     category: "Computers",
//     subCategory: "Ultrabooks - Budget",
//     brand: "Acer",
//     tags: ["Ultrabook", "Lightweight", "Ryzen 7", "14inch", "Portable"],
//     sku: "ACER-SWIFT3",
//     color: "Silver",
//     weight: "1.2kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-01",
//     updatedAt: "2025-11-11",
//     featured: false,
//     specs: {
//       cpu: "AMD Ryzen 7 7730U (8 cores, up to 4.5 GHz)",
//       gpu: "AMD Radeon integrated graphics",
//       ram: "8GB LPDDR4X",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Acer Swift 3 is a lightweight ultrabook built for students and professionals who need solid day-to-day performance without a high price tag. Its slim body and decent battery life make it ideal for class, office, or coffee shop work.",
//       highlightBlock: {
//         title: "Everyday Speed, Everywhere",
//         text:
//           "The Ryzen 7 processor provides enough power for office tasks, heavy browsing, and light editing. NVMe storage and fast memory keep the system responsive during multitasking.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "Thin and light design easy to carry" },
//         { icon: "performance-icon.svg", description: "Good performance for everyday productivity" },
//         { icon: "battery-icon.svg", description: "Strong battery life for study or work days" },
//         { icon: "keyboard-icon.svg", description: "Comfortable keyboard and spacious touchpad" },
//       ],
//     },
//   },
//   {
//     id: 19,
//     name: "Microsoft Surface Laptop 5",
//     price: 1399,
//     image: "/images/TemporaryProducts/Product19.jpg",
//     description:
//       "Premium 13-inch touchscreen laptop with an Intel Core i7 processor, 16GB RAM, and 512GB SSD, designed for smooth Office workflows, video calls, and light creative tasks with pen and touch.",
//     isAvailable: true,
//     stockQuantity: 7,
//     stockStatus: "In Stock",
//     rating: 4.4,
//     category: "Computers",
//     subCategory: "Touchscreen Ultrabooks",
//     brand: "Microsoft",
//     tags: ["Touchscreen", "Intel i7", "13inch", "Portable"],
//     sku: "MS-SURFACE-L5",
//     color: "Platinum",
//     weight: "1.3kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-22",
//     updatedAt: "2025-11-09",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-1255U (10 cores, up to 4.7 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "16GB LPDDR5",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Surface Laptop 5 is a premium touchscreen notebook centered on productivity and clean design. It is great for office work, video calls, and light creative tasks that benefit from pen and touch.",
//       highlightBlock: {
//         title: "Touch Productivity Refined",
//         text:
//           "A 12th Gen Intel Core i7 combines with fast NVMe storage to keep everyday workflows smooth. The PixelSense touch display makes note‑taking, drawing, and navigation feel natural and intuitive.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "High-resolution PixelSense touchscreen" },
//         { icon: "design-icon.svg", description: "Slim, premium chassis that looks great anywhere" },
//         { icon: "keyboard-icon.svg", description: "Comfortable keyboard with precise key feel" },
//         { icon: "integration-icon.svg", description: "Deep integration with Windows and Microsoft 365" },
//       ],
//     },
//   },
//   {
//     id: 20,
//     name: "Gigabyte Aero 17",
//     price: 2199,
//     image: "/images/TemporaryProducts/Product20.jpg",
//     description:
//       "Creator-focused 17-inch laptop with an Intel Core i9, RTX 4070 graphics, and a large color-accurate display, ideal for video editing, VFX, and high-resolution design work.",
//     isAvailable: true,
//     stockQuantity: 5,
//     stockStatus: "Limited Stock",
//     rating: 4.6,
//     category: "Computers",
//     subCategory: "Creator Laptops - 17 inch",
//     brand: "Gigabyte",
//     tags: ["Creator", "4K OLED", "Intel i9", "RTX 4070"],
//     sku: "GIGABYTE-AERO17",
//     color: "Black",
//     weight: "2.7kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-28",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-13900H (14 cores, up to 5.4 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 Laptop GPU 8GB GDDR6",
//       ram: "32GB DDR5 5200MHz",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Gigabyte Aero 17 is built for creators who need a large, color-accurate screen. It is ideal for video editing, VFX, and design, with enough power to handle real-time previews and high-resolution timelines.",
//       highlightBlock: {
//         title: "Create on a Bigger Canvas",
//         text:
//           "An Intel Core i9 and RTX 4070 work together to accelerate renders and 3D workflows. Its high-resolution, color-accurate display lets you trust what you see when working on professional projects.",
//       },
//       features: [
//         { icon: "display-icon.svg", description: "Large, color-accurate display ideal for creative work" },
//         { icon: "graphics-icon.svg", description: "RTX 4070 GPU optimized for creative applications" },
//         { icon: "chassis-icon.svg", description: "Robust chassis with plenty of ports" },
//         { icon: "keyboard-icon.svg", description: "Comfortable keyboard for long editing sessions" }
//       ],
//     },
//   },
//   {
//     id: 21,
//     name: "Alienware X17 R2",
//     price: 2999,
//     image: "/images/TemporaryProducts/Product21.jpg",
//     description:
//       "Top-tier 17-inch gaming laptop with an Intel Core i9 processor, RTX 4090 graphics, and advanced Cryo-Tech cooling, built for 4K gaming, VR, and enthusiast-level content creation.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 4.8,
//     category: "Computers",
//     subCategory: "Gaming Laptops - RTX 4090",
//     brand: "Alienware",
//     tags: ["Extreme Gaming", "RTX 4090", "Mechanical Keyboard", "17inch"],
//     sku: "ALIEN-X17-R2",
//     color: "Black",
//     weight: "3.3kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-15",
//     updatedAt: "2025-11-06",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-13980HX (24 cores, up to 5.6 GHz)",
//       gpu: "NVIDIA GeForce RTX 4090 Laptop GPU 16GB GDDR6",
//       ram: "32GB DDR5 5600MHz",
//       storage: "2TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Alienware X17 R2 is an extreme gaming laptop built for those who want the best mobile experience possible. Its enthusiast‑grade hardware and signature Alienware design put it at the top of the RTX 4090 segment.",
//       highlightBlock: {
//         title: "Overkill Performance On the Go",
//         text:
//           "With an Intel Core i9 HX processor and RTX 4090 GPU, the X17 R2 is ready for 4K gaming, VR, and professional content creation. Advanced Cryo‑Tech cooling keeps this power in check even under sustained loads.",
//       },
//       features: [
//         { icon: "graphics-icon.svg", description: "RTX 4090 graphics for 4K gaming and heavy workloads" },
//         { icon: "display-icon.svg", description: "Large 17-inch high-refresh display" },
//         { icon: "design-icon.svg", description: "Iconic Alienware design with customizable lighting" },
//         { icon: "keyboard-icon.svg", description: "Mechanical-like keyboard with precise feedback" },
//       ],
//     },
//   },
//   {
//     id: 22,
//     name: "HP Envy 13",
//     price: 1099,
//     image: "/images/TemporaryProducts/Product22.jpg",
//     description:
//       "Compact 13-inch ultrabook with an Intel Core i5 processor, 8GB RAM, and 256GB SSD, designed for everyday office work, study, and light entertainment in a portable form factor.",
//     isAvailable: true,
//     stockQuantity: 10,
//     stockStatus: "In Stock",
//     rating: 3.9,
//     category: "Computers",
//     subCategory: "Ultrabooks - Everyday",
//     brand: "HP",
//     tags: ["Ultrabook", "Portable", "Intel i5", "13inch"],
//     sku: "HP-ENVY13",
//     color: "Silver",
//     weight: "1.2kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-02",
//     updatedAt: "2025-11-11",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i5-1335U (10 cores, up to 4.6 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "8GB LPDDR4X",
//       storage: "256GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The HP Envy 13 is an ultrabook aimed at everyday office, study, and light entertainment tasks. Its compact size and low weight make it very convenient for users who are always on the move.",
//       highlightBlock: {
//         title: "Everyday Elegance",
//         text:
//           "A modern Intel Core i5 processor keeps office apps, video calls, and web browsing feeling smooth. The fast SSD helps Windows and your applications start quickly and stay responsive.",
//       },
//       features: [
//         { icon: "chassis-icon.svg", description: "Compact, lightweight aluminum chassis" },
//         { icon: "performance-icon.svg", description: "Solid performance for productivity tasks" },
//         { icon: "keyboard-icon.svg", description: "Comfortable keyboard and crisp display" },
//         { icon: "battery-icon.svg", description: "Battery life well suited to daily use" },
//       ],
//     },
//   },
//   {
//     id: 23,
//     name: "Lenovo Yoga 9i",
//     price: 1599,
//     image: "/images/TemporaryProducts/Product23.jpg",
//     description:
//       "Premium 2-in-1 convertible with a 14-inch touchscreen, Intel Core i7 processor, 16GB RAM, and stylus support, ideal for creative users who switch between laptop, tablet, and presentation modes.",
//     isAvailable: true,
//     stockQuantity: 6,
//     stockStatus: "In Stock",
//     rating: 4.3,
//     category: "Computers",
//     subCategory: "2-in-1 Convertibles - Premium",
//     brand: "Lenovo",
//     tags: ["Convertible", "Stylus", "Intel i7", "2-in-1", "Portable"],
//     sku: "LENOVO-YOGA9I",
//     color: "Gray",
//     weight: "1.5kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-26",
//     updatedAt: "2025-11-09",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i7-1360P (12 cores, up to 5.0 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "16GB LPDDR5",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Lenovo Yoga 9i is a premium 2‑in‑1 with stylus support aimed at creative users and professionals. Its rotating hinge and solid build allow easy switching between laptop, tablet, and presentation modes.",
//       highlightBlock: {
//         title: "Flexibility Meets Finesse",
//         text:
//           "A 13th Gen Intel Core i7 delivers enough performance for multitasking, light editing, and digital sketching. The touchscreen with active pen support lets you capture ideas and notes in a natural way.",
//       },
//       features: [
//         { icon: "convertible-icon.svg", description: "2-in-1 convertible form factor with multiple modes" },
//         { icon: "stylus-icon.svg", description: "Stylus support ideal for drawing and note-taking" },
//         { icon: "display-icon.svg", description: "High-quality display and audio for media" },
//         { icon: "design-icon.svg", description: "Premium finishes and elegant design" },
//       ],
//     },
//   },
//   {
//     id: 24,
//     name: "Razer Book 13",
//     price: 1399,
//     image: "/images/TemporaryProducts/Product24.jpg",
//     description:
//       "Thin and light 13-inch productivity ultrabook with an Intel Core i7 processor, 16GB RAM, and 512GB SSD, tailored for meetings, travel, and heavy multitasking in office apps.",
//     isAvailable: true,
//     stockQuantity: 8,
//     stockStatus: "In Stock",
//     rating: 4.0,
//     category: "Computers",
//     subCategory: "Ultrabooks - Productivity",
//     brand: "Razer",
//     tags: ["Ultrabook", "Intel i7", "13inch", "Portable"],
//     sku: "RAZER-BOOK13",
//     color: "Black",
//     weight: "1.3kg",
//     material: "Aluminum",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-29",
//     updatedAt: "2025-11-10",
//     featured: false,
//     specs: {
//       cpu: "Intel Core i7-1355U (10 cores, up to 5.0 GHz)",
//       gpu: "Intel Iris Xe integrated graphics",
//       ram: "16GB LPDDR5",
//       storage: "512GB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Razer Book 13 is a professional ultrabook focused on productivity, with a clean and compact design. It is ideal for users who need a serious machine for meetings, travel, and heavy Office work.",
//       highlightBlock: {
//         title: "Productivity in a Compact Frame",
//         text:
//           "A 13th Gen Intel Core i7 and fast SSD make handling many tabs, documents, and video calls effortless. The aluminum chassis and well-built keyboard provide a premium feel during daily use.",
//       },
//       features: [
//         { icon: "design-icon.svg", description: "Slim, professional 13-inch design" },
//         { icon: "performance-icon.svg", description: "Strong performance for intensive productivity" },
//         { icon: "keyboard-icon.svg", description: "Backlit, comfortable keyboard" },
//         { icon: "chassis-icon.svg", description: "Solid aluminum construction" },
//       ],
//     },
//   },

//   // Gaming desktops
//   {
//     id: 25,
//     name: "NZXT Valkyrie RTX 4070",
//     price: 1899,
//     offerPrice: 1799,
//     discount: 100,
//     image: "/images/TemporaryProducts/Product25.jpg",
//     description:
//       "Mid-tower gaming desktop with a Ryzen 7 CPU, RTX 4070 graphics, 32GB DDR5 RAM, and a tempered glass RGB case, ready for high-FPS 1440p gaming right out of the box.",
//     isAvailable: true,
//     stockQuantity: 6,
//     stockStatus: "In Stock",
//     rating: 4.6,
//     category: "Desktops",
//     subCategory: "Gaming Desktops - Mid Tower",
//     brand: "NZXT",
//     tags: ["gaming desktop", "RTX 4070", "Ryzen 7", "RGB", "Water Cooling"],
//     sku: "NZXT-VALK-4070",
//     color: "White",
//     weight: "10.5kg",
//     material: "Steel & Tempered Glass",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-11-05",
//     updatedAt: "2025-11-12",
//     featured: true,
//     specs: {
//       cpu: "AMD Ryzen 7 7800X (8 cores, up to 5.0 GHz)",
//       gpu: "NVIDIA GeForce RTX 4070 12GB GDDR6",
//       ram: "32GB DDR5 6000MHz",
//       storage: "1TB NVMe PCIe 4.0 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The NZXT Valkyrie RTX 4070 is a prebuilt gaming tower made for players who want to power on and play with no hassle. Its tempered glass case, RGB accents, and modern hardware make it a great centerpiece for any gaming setup.",
//       highlightBlock: {
//         title: "Outplay the Lobby",
//         text:
//           "Featuring a latest‑gen Ryzen 7 CPU and RTX 4070 GPU, this desktop is ready for high‑FPS 1440p gaming and GPU‑accelerated creator workloads. Fast DDR5 memory and NVMe storage keep everything feeling instant.",
//       },
//       features: [
//         { icon: "case-icon.svg", description: "NZXT mid-tower case with tempered glass side panel" },
//         { icon: "cooling-icon.svg", description: "RGB liquid CPU cooler for style and thermals" },
//         { icon: "graphics-icon.svg", description: "RTX 4070 graphics ideal for 1440p gaming" },
//         { icon: "upgrade-icon.svg", description: "Room for future storage and RAM upgrades" },
//       ],
//     },
//   },
//   {
//     id: 26,
//     name: "Corsair Vengeance i8200 RTX 4080",
//     price: 2599,
//     image: "/images/TemporaryProducts/Product26.jpg",
//     description:
//       "High-end prebuilt gaming PC with an Intel Core i9 processor, RTX 4080 graphics, 32GB DDR5 RAM, and liquid cooling, ideal for 4K gaming and heavy creator workloads.",
//     isAvailable: true,
//     stockQuantity: 3,
//     stockStatus: "Limited Stock",
//     rating: 4.9,
//     category: "Desktops",
//     subCategory: "Gaming Desktops - High End",
//     brand: "Corsair",
//     tags: ["gaming desktop", "RTX 4080", "Intel i9", "DDR5", "ARGB"],
//     sku: "CORSAIR-VENI8200",
//     color: "Black",
//     weight: "12.3kg",
//     material: "Steel & Tempered Glass",
//     condition: "New",
//     warrantyMonths: 36,
//     createdAt: "2025-11-03",
//     updatedAt: "2025-11-12",
//     featured: true,
//     specs: {
//       cpu: "Intel Core i9-14900K (24 cores, up to 6.0 GHz)",
//       gpu: "NVIDIA GeForce RTX 4080 16GB GDDR6X",
//       ram: "32GB DDR5 6000MHz",
//       storage: "2TB NVMe PCIe 4.0 SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Corsair Vengeance i8200 RTX 4080 is a high-end gaming PC for users who want to forget about limits. With liquid cooling, tidy cabling, and top-tier components, it is ideal for 4K gaming and professional creative work.",
//       highlightBlock: {
//         title: "Unleash Flagship Performance",
//         text:
//           "A 14th Gen Intel Core i9 and RTX 4080 deliver extremely high frame rates and fast render times. High-speed DDR5 memory and a 2TB NVMe SSD provide both space and responsiveness for huge game libraries and projects.",
//       },
//       features: [
//         { icon: "case-icon.svg", description: "Corsair chassis with strong airflow and ARGB lighting" },
//         { icon: "liquid-cooling-icon.svg", description: "Factory-installed liquid CPU cooling" },
//         { icon: "graphics-icon.svg", description: "RTX 4080 for 4K gaming and content creation" },
//         { icon: "storage-icon.svg", description: "2TB of ultra-fast NVMe storage for games and assets" },
//       ],
//     },
//   },
//   {
//     id: 27,
//     name: "Lenovo Legion Tower 7",
//     price: 1599,
//     image: "/images/TemporaryProducts/Product27.jpg",
//     description:
//       "Mainstream gaming desktop combining a Ryzen 5 CPU, RTX 3060 Ti graphics, 16GB DDR5 RAM, and 1TB SSD for smooth 1080p and 1440p gaming in an understated RGB case.",
//     isAvailable: false,
//     stockQuantity: 0,
//     stockStatus: "Out of Stock",
//     rating: 4.1,
//     category: "Desktops",
//     subCategory: "Gaming Desktops - Mainstream",
//     brand: "Lenovo",
//     tags: ["gaming desktop", "RTX 3060 Ti", "Ryzen 5"],
//     sku: "LENOVO-LEG-T7",
//     color: "Black",
//     weight: "9.8kg",
//     material: "Plastic & Steel",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-10-20",
//     updatedAt: "2025-11-10",
//     featured: false,
//     specs: {
//       cpu: "AMD Ryzen 5 7600 (6 cores, up to 5.1 GHz)",
//       gpu: "NVIDIA GeForce RTX 3060 Ti 8GB GDDR6",
//       ram: "16GB DDR5 5200MHz",
//       storage: "1TB NVMe SSD",
//     },
//     detailsSection: {
//       longDescription:
//         "The Lenovo Legion Tower 7 is built for players who want a strong 1080p and 1440p experience without going to the extreme high end. Its understated case with RGB accents fits nicely in both gaming and work environments.",
//       highlightBlock: {
//         title: "Mainstream Power, Legion Style",
//         text:
//           "The combination of a Ryzen 5 CPU and RTX 3060 Ti GPU offers great performance in most modern titles at high settings. DDR5 memory and a 1TB SSD keep the system responsive and provide enough room for several big games.",
//       },
//       features: [
//         { icon: "case-icon.svg", description: "Side window with RGB fans for a clean look" },
//         { icon: "graphics-icon.svg", description: "RTX 3060 Ti ideal for 1080p/1440p gaming" },
//         { icon: "upgrade-icon.svg", description: "Balanced configuration for gaming and general use" },
//         { icon: "storage-icon.svg", description: "Good internal upgrade options for the future" },
//       ],
//     },
//   },

//   // PC components
//   {
//     id: 28,
//     name: "Intel Core i9-14900K",
//     price: 649,
//     image: "/images/TemporaryProducts/Product28.jpg",
//     description:
//       "Flagship 14th Gen Intel Core i9 desktop processor with 24 cores and high boost clocks, optimized for high-FPS gaming, streaming, and heavy content creation workloads.",
//     isAvailable: true,
//     stockQuantity: 25,
//     stockStatus: "In Stock",
//     rating: 4.8,
//     category: "PC Components",
//     subCategory: "Processors (CPU)",
//     brand: "Intel",
//     tags: ["CPU", "Intel 14th Gen", "Unlocked", "LGA1700"],
//     sku: "INTEL-I9-14900K",
//     color: "Blue",
//     weight: "0.3kg",
//     material: "Silicon",
//     condition: "New",
//     warrantyMonths: 36,
//     createdAt: "2025-09-15",
//     updatedAt: "2025-11-11",
//     featured: true,
//     specs: {
//       cpu: "24-core (8 Performance + 16 Efficient) up to 6.0 GHz",
//       gpu: "Requires discrete GPU",
//       ram: "Supports DDR4/DDR5 memory platforms",
//       storage: "Works with PCIe Gen4/5 NVMe SSDs via motherboard",
//     },
//     detailsSection: {
//       longDescription:
//         "The Intel Core i9‑14900K is a flagship unlocked processor aimed at gaming enthusiasts and heavy creators. Its hybrid mix of Performance and Efficient cores is built to handle games, streams, and rendering simultaneously.",
//       highlightBlock: {
//         title: "Peak Desktop Power",
//         text:
//           "With boost clocks up to 6.0 GHz and 24 cores, the i9‑14900K delivers some of the best single‑threaded and multi‑threaded performance available. It is a perfect foundation for high‑FPS gaming and demanding productivity rigs.",
//       },
//       features: [
//         { icon: "cpu-icon.svg", description: "24-core (8 Performance + 16 Efficient) up to 6.0 GHz" },
//         { icon: "overclock-icon.svg", description: "Unlocked for overclocking on Z790 platforms" },
//         { icon: "memory-support-icon.svg", description: "Support for both DDR4 and DDR5 depending on motherboard" },
//         { icon: "gaming-icon.svg", description: "Excellent for competitive gaming and content creation" },
//       ],
//     },
//   },
//   {
//     id: 29,
//     name: "AMD Ryzen 7 7800X3D",
//     price: 499,
//     image: "/images/TemporaryProducts/Product29.jpg",
//     description:
//       "8-core AMD Ryzen desktop processor with 3D V-Cache technology, built specifically for high-FPS gaming rigs that target top performance at 1080p and 1440p while staying power efficient.",
//     isAvailable: true,
//     stockQuantity: 18,
//     stockStatus: "In Stock",
//     rating: 4.7,
//     category: "PC Components",
//     subCategory: "Processors (CPU)",
//     brand: "AMD",
//     tags: ["CPU", "Ryzen 7000", "AM5", "3D V-Cache"],
//     sku: "AMD-R7-7800X3D",
//     color: "Black",
//     weight: "0.25kg",
//     material: "Silicon",
//     condition: "New",
//     warrantyMonths: 36,
//     createdAt: "2025-08-30",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "8 cores / 16 threads up to 5.0 GHz",
//       gpu: "Requires discrete GPU",
//       ram: "Supports DDR5 memory on AM5",
//       storage: "Works with PCIe Gen4/5 NVMe SSDs via motherboard",
//     },
//     detailsSection: {
//       longDescription:
//         "The Ryzen 7 7800X3D is one of the most popular gaming CPUs thanks to its 3D V‑Cache technology. It is designed for players who want maximum FPS without paying flagship‑tier prices.",
//       highlightBlock: {
//         title: "Built for Pure FPS",
//         text:
//           "Its massive L3 cache lets many games scale extremely well, providing very high frame rates even with powerful GPUs. It is an excellent base for 1440p and 4K gaming builds focused on performance.",
//       },
//       features: [
//         { icon: "cpu-icon.svg", description: "8 cores / 16 threads up to 5.0 GHz" },
//         { icon: "cache-icon.svg", description: "3D V‑Cache technology tuned specifically for gaming" },
//         { icon: "platform-icon.svg", description: "AM5 platform with DDR5 support" },
//         { icon: "efficiency-icon.svg", description: "Great efficiency for a high‑performance CPU" },
//       ],
//     },
//   },
//   {
//     id: 30,
//     name: "NVIDIA GeForce RTX 4070 Ti SUPER",
//     price: 799,
//     image: "/images/TemporaryProducts/Product30.jpg",
//     description:
//       "High-end NVIDIA GeForce RTX 4070 Ti graphics card aimed at 1440p gaming, offering strong ray tracing performance and DLSS support in more compact builds.",
//     isAvailable: true,
//     stockQuantity: 14,
//     stockStatus: "In Stock",
//     rating: 4.9,
//     category: "PC Components",
//     subCategory: "Graphics Cards (GPU)",
//     brand: "NVIDIA",
//     tags: ["GPU", "RTX 40 Series", "DLSS 3", "Ray Tracing"],
//     sku: "NVIDIA-RTX4070TI-S",
//     color: "Black",
//     weight: "1.1kg",
//     material: "Aluminum & Plastic",
//     condition: "New",
//     warrantyMonths: 36,
//     createdAt: "2025-10-10",
//     updatedAt: "2025-11-12",
//     featured: true,
//     specs: {
//       cpu: "Requires compatible CPU",
//       gpu: "RTX 4070 Ti SUPER 16GB GDDR6X",
//       ram: "Works with DDR4/DDR5 system memory",
//       storage: "Uses PCIe 4.0 x16 slot on motherboard",
//     },
//     detailsSection: {
//       longDescription:
//         "The NVIDIA GeForce RTX 4070 Ti SUPER is a graphics card designed for ultra settings at 1440p and even 4K with DLSS 3. It suits gamers who want high‑end performance without jumping to the very top of the stack.",
//       highlightBlock: {
//         title: "SUPERcharged Frames",
//         text:
//           "Next‑gen RT and Tensor cores deliver advanced ray tracing and AI upscaling with DLSS 3. This lets you enjoy richly detailed visuals while maintaining high frame rates.",
//       },
//       features: [
//         { icon: "graphics-icon.svg", description: "16GB of high-speed GDDR6X memory" },
//         { icon: "raytracing-icon.svg", description: "Support for DLSS 3 and Frame Generation" },
//         { icon: "raytracing-icon.svg", description: "Cutting-edge ray tracing in supported games" },
//         { icon: "monitor-icon.svg", description: "Excellent choice for high refresh 1440p monitors" },
//       ],
//     },
//   },
//   {
//     id: 31,
//     name: "Corsair Vengeance RGB 32GB DDR5 6000MHz",
//     price: 189,
//     image: "/images/TemporaryProducts/Product31.jpg",
//     description:
//       "32GB DDR5 memory kit running at 6000MHz, ideal for modern gaming and creator builds that need fast RAM speeds and plenty of headroom for multitasking.",
//     isAvailable: true,
//     stockQuantity: 40,
//     stockStatus: "In Stock",
//     rating: 4.5,
//     category: "PC Components",
//     subCategory: "Memory (RAM)",
//     brand: "Corsair",
//     tags: ["RAM", "DDR5", "32GB", "RGB"],
//     sku: "CORSAIR-VEG-RGB-32-6000",
//     color: "Black",
//     weight: "0.2kg",
//     material: "PCB & Heatsink",
//     condition: "New",
//     warrantyMonths: 60,
//     createdAt: "2025-09-01",
//     updatedAt: "2025-11-09",
//     featured: false,
//     specs: {
//       cpu: "Compatible with Intel 12/13/14th Gen and AMD Ryzen 7000",
//       gpu: "Works with any integrated or discrete GPU",
//       ram: "32GB (2x16GB) DDR5 6000MHz",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The Corsair Vengeance RGB DDR5 32GB kit is built for modern systems that demand both performance and style. Its heatsinks with customizable lighting pair nicely with glass‑side cases.",
//       highlightBlock: {
//         title: "Light Up Faster Memory",
//         text:
//           "Running at 6000MHz, this DDR5 kit boosts overall system responsiveness and can improve FPS in memory‑sensitive titles. The RGB lighting integrates with the most popular motherboard ecosystems.",
//       },
//       features: [
//         { icon: "ram-icon.svg", description: "DDR5 6000MHz speed ready for light overclocking" },
//         { icon: "rgb-icon.svg", description: "Addressable RGB compatible with major lighting software" },
//         { icon: "heatspreader-icon.svg", description: "Aluminum heat spreaders for improved thermals" },
//         { icon: "dualchannel-icon.svg", description: "Dual-channel configuration ideal for gaming and creation" },
//       ],
//     },
//   },

//   // Networking devices
//   {
//     id: 32,
//     name: "ASUS ROG Rapture GT-AXE11000",
//     price: 449,
//     image: "/images/TemporaryProducts/Product32.jpg",
//     description:
//       "Tri-band Wi-Fi 6E gaming router with blazing AXE11000 speeds, 2.5G WAN/LAN support, and advanced QoS controls, designed to prioritize latency-sensitive online games and high-resolution streaming across busy households.",
//     isAvailable: true,
//     stockQuantity: 9,
//     stockStatus: "In Stock",
//     rating: 4.6,
//     category: "Networking",
//     subCategory: "WiFi Routers - Gaming",
//     brand: "ASUS",
//     tags: ["WiFi 6E", "Gaming Router", "Tri-band", "RGB"],
//     sku: "ASUS-GT-AXE11000",
//     color: "Black",
//     weight: "1.5kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-07-20",
//     updatedAt: "2025-11-08",
//     featured: true,
//     specs: {
//       cpu: "Tri-band router SoC with quad-core 1.8 GHz CPU (approx.)",
//       gpu: "N/A",
//       ram: "1GB internal RAM",
//       storage: "USB ports for external drives",
//     },
//     detailsSection: {
//       longDescription:
//         "The ASUS ROG Rapture GT‑AXE11000 is a tri‑band gaming router built for demanding networks with many devices. WiFi 6E support reduces congestion and improves latency, which is perfect for competitive gamers and streamers.",
//       highlightBlock: {
//         title: "Command Your Network",
//         text:
//           "Its quad‑core CPU and ROG software allow you to prioritize gaming traffic, set bandwidth limits, and manage your network with ease. The 6GHz band helps avoid interference in crowded wireless environments.",
//       },
//       features: [
//         { icon: "wifi-icon.svg", description: "Tri-band WiFi 6E with extremely high throughput" },
//         { icon: "gaming-router-icon.svg", description: "Gaming-focused features like advanced QoS and traffic prioritization" },
//         { icon: "ethernet-icon.svg", description: "Multiple LAN ports for wired PCs and consoles" },
//         { icon: "rgb-icon.svg", description: "ROG-themed interface and lighting for enthusiasts" },
//       ],
//     },
//   },
//   {
//     id: 33,
//     name: "TP-Link Deco XE75 Mesh System (3-Pack)",
//     price: 399,
//     image: "/images/TemporaryProducts/Product33.jpg",
//     description:
//       "Tri-band WiFi 6E mesh system with seamless whole-home coverage, easy setup, and robust parental controls, ideal for homes demanding high-speed wireless connectivity across multiple devices.",
//     isAvailable: true,
//     stockQuantity: 15,
//     stockStatus: "In Stock",
//     rating: 4.4,
//     category: "Networking",
//     subCategory: "Mesh WiFi Systems",
//     brand: "TP-Link",
//     tags: ["Mesh WiFi", "WiFi 6E", "Tri-band"],
//     sku: "TPLINK-DECO-XE75-3",
//     color: "White",
//     weight: "1.8kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-08-10",
//     updatedAt: "2025-11-11",
//     featured: false,
//     specs: {
//       cpu: "Quad-core 1.7 GHz per node (approx.)",
//       gpu: "N/A",
//       ram: "Internal memory dedicated to mesh system operations",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The TP‑Link Deco XE75 mesh system is built for homes that need stable WiFi coverage in every room. With three nodes and WiFi 6E, it helps reduce dead zones and improves streaming and light gaming experiences.",
//       highlightBlock: {
//         title: "Blanket Your Home in WiFi",
//         text:
//           "Each node has dedicated hardware to manage many devices at once, reducing drops and latency. The Deco app lets you set up the system in minutes and manage parental controls or guest networks easily.",
//       },
//       features: [
//         { icon: "mesh-icon.svg", description: "Coverage up to 700 m² with three nodes" },
//         { icon: "wifi-icon.svg", description: "WiFi 6E support for less interference" },
//         { icon: "seamless-roaming-icon.svg", description: "Seamless roaming as you move around the house" },
//         { icon: "app-icon.svg", description: "Simple management from an intuitive mobile app" },
//       ],
//     },
//   },

//   // Printers & scanners
//   {
//     id: 34,
//     name: "HP LaserJet Pro M404dw",
//     price: 279,
//     image: "/images/TemporaryProducts/Product34.jpg",
//     description:
//       "Compact monochrome laser printer with wireless connectivity, fast duplex printing, and high-quality output, well suited for small offices and home workspaces requiring reliable black-and-white prints.",
//     isAvailable: true,
//     stockQuantity: 20,
//     stockStatus: "In Stock",
//     rating: 4.3,
//     category: "Printers & Scanners",
//     subCategory: "Laser Printers",
//     brand: "HP",
//     tags: ["Laser Printer", "WiFi", "Duplex"],
//     sku: "HP-LJ-M404DW",
//     color: "White",
//     weight: "8.5kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 12,
//     createdAt: "2025-06-15",
//     updatedAt: "2025-11-10",
//     featured: false,
//     specs: {
//       cpu: "Internal controller for print queues",
//       gpu: "N/A",
//       ram: "Approx. 128MB internal memory",
//       storage: "Internal memory for jobs and settings",
//     },
//     detailsSection: {
//       longDescription:
//         "The HP LaserJet Pro M404dw is a monochrome laser printer aimed at small offices and home workspaces. It offers fast print speeds, automatic duplexing, and network connectivity for multiple users.",
//       highlightBlock: {
//         title: "Focused on Fast Documents",
//         text:
//           "Its laser engine produces sharp pages at high speed, reducing downtime in busy environments. WiFi and Ethernet connectivity make it easy to share the printer across several PCs.",
//       },
//       features: [
//         { icon: "printer-icon.svg", description: "Fast monochrome laser printing" },
//         { icon: "duplex-icon.svg", description: "Automatic duplex to save paper" },
//         { icon: "wifi-icon.svg", description: "WiFi and Ethernet connectivity options" },
//         { icon: "compact-icon.svg", description: "Compact design suitable for small desks" },
//       ],
//     },
//   },
//   {
//     id: 35,
//     name: "Epson EcoTank L3250",
//     price: 249,
//     image: "/images/TemporaryProducts/Product35.jpg",
//     description:
//       "Compact all-in-one inkjet printer featuring refillable ink tanks, wireless connectivity, and high-volume color printing, perfect for home offices and students needing affordable color prints.",
//     isAvailable: true,
//     stockQuantity: 13,
//     stockStatus: "In Stock",
//     rating: 4.5,
//     category: "Printers & Scanners",
//     subCategory: "Ink Tank Printers",
//     brand: "Epson",
//     tags: ["Multifunction", "Ink Tank", "WiFi"],
//     sku: "EPSON-ET-L3250",
//     color: "Black",
//     weight: "5.4kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 12,
//     createdAt: "2025-07-05",
//     updatedAt: "2025-11-09",
//     featured: true,
//     specs: {
//       cpu: "Internal controller for printing, copying, and scanning",
//       gpu: "N/A",
//       ram: "Onboard memory for print queues and functions",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The Epson EcoTank L3250 is a multifunction printer with refillable tanks built for users who print a lot and want to cut costs. It can print, copy, and scan from a single compact device.",
//       highlightBlock: {
//         title: "Print More, Spend Less",
//         text:
//           "EcoTank reservoirs hold enough ink for thousands of pages with a single set of bottles. Wireless connectivity makes it easy to print from laptops and mobile devices around the home or office.",
//       },
//       features: [
//         { icon: "ink-tank-icon.svg", description: "Very low cost per page thanks to ink tanks" },
//         { icon: "multifunction-icon.svg", description: "All-in-one functions: print, copy, scan" },
//         { icon: "wireless-icon.svg", description: "Wireless printing from multiple devices" },
//         { icon: "compact-icon.svg", description: "Compact design ideal for homes and small offices" },
//       ],
//     },
//   },
//   {
//     id: 36,
//     name: "Canon CanoScan LiDE 400",
//     price: 119,
//     image: "/images/TemporaryProducts/Product36.jpg",
//     description:
//       "Slim desktop scanner offering high-resolution scanning with USB-powered convenience, ideal for digitizing documents, photos, and artwork quickly and efficiently at home or office.",
//     isAvailable: true,
//     stockQuantity: 18,
//     stockStatus: "In Stock",
//     rating: 4.2,
//     category: "Printers & Scanners",
//     subCategory: "Flatbed Scanners",
//     brand: "Canon",
//     tags: ["Scanner", "4800 dpi", "USB"],
//     sku: "CANON-LIDE-400",
//     color: "Black",
//     weight: "1.7kg",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 12,
//     createdAt: "2025-05-30",
//     updatedAt: "2025-11-08",
//     featured: false,
//     specs: {
//       cpu: "Internal scan controller",
//       gpu: "N/A",
//       ram: "Buffer memory for image capture",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The Canon CanoScan LiDE 400 is a slim flatbed scanner ideal for digitizing photos and documents. Its lightweight design fits comfortably on most desks without taking up much space.",
//       highlightBlock: {
//         title: "High-Detail Scans, Low Effort",
//         text:
//           "With resolution up to 4800 dpi, it captures fine details in both text and images. A single USB connection simplifies setup and powers the device.",
//       },
//       features: [
//         { icon: "scanner-icon.svg", description: "Slim, lightweight design for small workspaces" },
//         { icon: "dpi-icon.svg", description: "Up to 4800 dpi optical resolution" },
//         { icon: "usb-icon.svg", description: "Single USB cable for power and data" },
//         { icon: "software-icon.svg", description: "Includes easy-to-use scanning software" },
//       ],
//     },
//   },

//   // Gaming peripherals
//   {
//     id: 37,
//     name: "Razer BlackWidow V4 Pro",
//     price: 229,
//     image: "/images/TemporaryProducts/Product37.jpg",
//     description:
//       "High-performance mechanical gaming keyboard with Razer Green switches, customizable RGB lighting, and dedicated macro keys, designed for precision and durability in competitive play.",
//     isAvailable: true,
//     stockQuantity: 30,
//     stockStatus: "In Stock",
//     rating: 4.7,
//     category: "Peripherals",
//     subCategory: "Gaming Keyboards",
//     brand: "Razer",
//     tags: ["Mechanical", "RGB", "Wired", "Gaming Keyboard"],
//     sku: "RAZER-BW-V4PRO",
//     color: "Black",
//     weight: "1.1kg",
//     material: "Plastic & Metal",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-09-05",
//     updatedAt: "2025-11-11",
//     featured: true,
//     specs: {
//       cpu: "Onboard controller for macros and RGB",
//       gpu: "N/A",
//       ram: "Memory for profiles and lighting",
//       storage: "Integrated storage for user settings",
//     },
//     detailsSection: {
//       longDescription:
//         "The Razer BlackWidow V4 Pro is a mechanical gaming keyboard built for players who want full control over their setup. Dedicated macro keys, a multi-function wheel, and a magnetic wrist rest create a comfortable and customizable experience.",
//       highlightBlock: {
//         title: "Command Every Keypress",
//         text:
//           "Its onboard controller lets you record macros on the fly and store complete profiles directly on the keyboard. Razer Chroma RGB lighting syncs with games and other peripherals for a cohesive visual experience.",
//       },
//       features: [
//         { icon: "mechanical-switch-icon.svg", description: "Mechanical switches tuned for gaming" },
//         { icon: "macro-keys-icon.svg", description: "Dedicated macro keys and multi-function wheel" },
//         { icon: "wrist-rest-icon.svg", description: "Detachable padded magnetic wrist rest" },
//         { icon: "rgb-icon.svg", description: "Per-key Razer Chroma RGB lighting" },
//       ],
//     },
//   },
//   {
//     id: 38,
//     name: "Logitech G Pro X Superlight 2",
//     price: 159,
//     image: "/images/TemporaryProducts/Product38.jpg",
//     description:"Ultra-lightweight wireless gaming mouse designed for pro-level performance, featuring HERO 25K sensor, 80-hour battery life, and minimal latency for precise and fast movements.",
//     isAvailable: true,
//     stockQuantity: 35,
//     stockStatus: "In Stock",
//     rating: 4.8,
//     category: "Peripherals",
//     subCategory: "Gaming Mice",
//     brand: "Logitech G",
//     tags: ["Wireless", "Lightweight", "Gaming Mouse", "HERO Sensor"],
//     sku: "LOGI-GPRO-SL2",
//     color: "White",
//     weight: "60g",
//     material: "Plastic",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-08-18",
//     updatedAt: "2025-11-10",
//     featured: true,
//     specs: {
//       cpu: "Internal microcontroller for sensor and wireless link",
//       gpu: "N/A",
//       ram: "Memory for DPI steps and profiles",
//       storage: "Onboard memory to store user settings",
//     },
//     detailsSection: {
//       longDescription:
//         "The Logitech G Pro X Superlight 2 is an ultra‑light wireless mouse made for eSports and competitive shooters. Its near‑weightless feel and proven shape have made it a favorite among professional players.",
//       highlightBlock: {
//         title: "Flicks at the Speed of Light",
//         text:
//           "The HERO 2 sensor delivers exceptional tracking accuracy, while low‑latency LIGHTSPEED wireless keeps inputs crisp and responsive. Its long‑lasting battery supports extended practice and tournament sessions.",
//       },
//       features: [
//         { icon: "lightweight-icon.svg", description: "Extremely low weight around 60g" },
//         { icon: "sensor-icon.svg", description: "HERO 2 sensor with precise tracking" },
//         { icon: "wireless-icon.svg", description: "LIGHTSPEED wireless technology with low latency" },
//         { icon: "memory-icon.svg", description: "Onboard memory to save DPI and profiles" },
//       ],
//     },
//   },
//   {
//     id: 39,
//     name: "SteelSeries Arctis Nova Pro Wireless",
//     price: 349,
//     image: "/images/TemporaryProducts/Product39.jpg",
//     description:
//       "High-end wireless gaming headset featuring active noise cancellation, dual swappable batteries for uninterrupted play, and premium audio drivers for immersive sound clarity.",
//     isAvailable: true,
//     stockQuantity: 16,
//     stockStatus: "In Stock",
//     rating: 4.9,
//     category: "Peripherals",
//     subCategory: "Gaming Headsets",
//     brand: "SteelSeries",
//     tags: ["Wireless Headset", "ANC", "Multi-platform"],
//     sku: "SS-ARCTIS-NOVA-PRO",
//     color: "Black",
//     weight: "0.36kg",
//     material: "Plastic & Metal",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-09-25",
//     updatedAt: "2025-11-12",
//     featured: true,
//     specs: {
//       cpu: "Internal chip for audio processing, ANC, and wireless",
//       gpu: "N/A",
//       ram: "Memory for EQ and sound profiles",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The SteelSeries Arctis Nova Pro Wireless is a premium wireless gaming headset designed for both gaming and everyday use. Its swappable battery system and dedicated base station make it comfortable for long sessions.",
//       highlightBlock: {
//         title: "Hear Every Detail, Block the Noise",
//         text:
//           "Active noise cancelling helps isolate you from your surroundings, while the wireless DAC delivers clear, detailed audio. Customizable sound profiles let you tune the headset for games, music, or movies.",
//       },
//       features: [
//         { icon: "anc-icon.svg", description: "Advanced ANC to reduce ambient noise" },
//         { icon: "battery-icon.svg", description: "Hot-swappable battery system for nearly continuous use" },
//         { icon: "base-station-icon.svg", description: "Wireless base station with controls and display" },
//         { icon: "multi-platform-icon.svg", description: "Multi-platform support for PC and consoles" },
//       ],
//     },
//   },
//   {
//     id: 40,
//     name: "Logitech G923 Racing Wheel",
//     price: 399,
//     image: "/images/TemporaryProducts/Product40.jpg",
//     description:
//       "Force feedback racing wheel featuring dual-clutch launch control and a responsive pedal set with realistic brake resistance, ideal for immersive racing simulations.",
//     isAvailable: true,
//     stockQuantity: 7,
//     stockStatus: "In Stock",
//     rating: 4.5,
//     category: "Peripherals",
//     subCategory: "Racing Controllers",
//     brand: "Logitech G",
//     tags: ["Racing Wheel", "Force Feedback", "PC & Console"],
//     sku: "LOGI-G923-PC",
//     color: "Black",
//     weight: "5.2kg",
//     material: "Plastic & Metal",
//     condition: "New",
//     warrantyMonths: 24,
//     createdAt: "2025-07-12",
//     updatedAt: "2025-11-09",
//     featured: false,
//     specs: {
//       cpu: "Internal controller for force feedback and inputs",
//       gpu: "N/A",
//       ram: "Memory for force profiles and settings",
//       storage: "N/A",
//     },
//     detailsSection: {
//       longDescription:
//         "The Logitech G923 is a force feedback racing wheel built for driving simulators on PC and console. Its solid pedal set and detailed wheel feel create an immersive racing experience.",
//       highlightBlock: {
//         title: "Feel Every Corner",
//         text:
//           "TrueForce force feedback translates car behavior and track surface into detailed vibrations through the wheel. Dual‑clutch launch controls and responsive pedals help you nail starts and braking points.",
//       },
//       features: [
//         { icon: "force-feedback-icon.svg", description: "Advanced TrueForce force feedback technology" },
//         { icon: "pedal-set-icon.svg", description: "Included pedal set with throttle, brake, and clutch" },
//         { icon: "compatibility-icon.svg", description: "Compatibility with multiple gaming platforms" },
//         { icon: "construction-icon.svg", description: "Robust construction with metal components" },
//       ],
//     },
//   },
// ];
