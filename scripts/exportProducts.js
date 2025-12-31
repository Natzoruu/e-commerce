import fs from "fs";
import path from "path";
import { TemporaryDataProducts } from "../types/TemporaryDataProducts"
// 👆 Ajusta la ruta a donde tengas tu array

// Campos que Supabase espera
const headers = [
  "name",
  "price",
  "description",
  "image_url",
  "sku",
  "category",
  "sub_category",
  "brand",
  "is_available",
  "stock_quantity",
  "stock_status",
  "offer_price",
  "discount",
  "color",
  "weight",
  "material",
  "condition",
  "warranty_months",
  "featured",
  "specs",
  "details_section",
  "tags",
];

// Convertir productos
const rows = TemporaryDataProducts.map((p) => {
  return {
    name: p.name,
    price: p.price,
    description: p.description,
    image_url: p.image,
    sku: p.sku,
    category: p.category,
    sub_category: p.subCategory,
    brand: p.brand,
    is_available: p.isAvailable,
    stock_quantity: p.stockQuantity,
    stock_status: p.stockStatus,
    offer_price: p.offerPrice,
    discount: p.discount,
    color: p.color,
    weight: p.weight,
    material: p.material,
    condition: p.condition,
    warranty_months: p.warrantyMonths,
    featured: p.featured,
    specs: JSON.stringify(p.specs),
    details_section: JSON.stringify(p.detailsSection),
    tags: JSON.stringify(p.tags),
  };
});

// Convertir a CSV
function toCSV(objArray) {
  const csvRows = [];

  // Header
  csvRows.push(headers.join(","));

  // Rows
  for (const row of objArray) {
    const values = headers.map((h) => {
      const value = row[h];

      // Si es JSON → escaparlo
      if (typeof value === "object" || (h === "specs" || h === "details_section" || h === "tags")) {
        return `"${String(value).replace(/"/g, '""')}"`;
      }

      // Si es texto normal → escaparlo si tiene comas
      if (typeof value === "string") {
        return `"${value.replace(/"/g, '""')}"`;
      }

      return value ?? "";
    });

    csvRows.push(values.join(","));
  }

  return csvRows.join("\n");
}

const csv = toCSV(rows);

// Guardar archivo
const outputPath = path.join(process.cwd(), "products_export.csv");
fs.writeFileSync(outputPath, csv);

console.log("✅ Exportación completada");
console.log("Archivo creado en:", outputPath);
