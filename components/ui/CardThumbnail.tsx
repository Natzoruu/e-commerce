import Image from "next/image";
import { TemporaryProducts } from "@/types/TemporaryDataProducts";
import { CircleCheck, XCircle, StarIcon, ShoppingCart } from "lucide-react";

interface CardProps {
  product: TemporaryProducts;
}

export default function CardThumbnail({ product }: CardProps) {
  return (
    <div
  className="
    w-[220px] flex flex-col px-4 py-3 
    bg-white rounded-xl 
    transition-all duration-300 ease-in-out 
    group relative 
    hover:shadow-2xl hover:-translate-y-2 hover:z-40
  "
>
  <div className="flex items-center gap-x-2 mb-2">
    {product.isAvailable ? (
      <>
        <CircleCheck size={11} className="text-green-600" />
        <p className="text-[10px] text-green-600">In stock</p>
      </>
    ) : (
      <>
        <XCircle size={11} className="text-red-600" />
        <p className="text-[10px] text-red-600">Out of stock</p>
      </>
    )}
  </div>
  <div className="relative w-full aspect-square overflow-hidden rounded-md">
    <Image
      src={product.image}
      fill
      alt=""
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <div className="flex my-2">
    {[...Array(5)].map((_, i) => (
      <StarIcon
        key={i}
        size={18}
        className={
          i < Math.round(product.rating)
            ? "text-yellow-400 fill-yellow-400"
            : "text-gray-300"
        }
      />
    ))}
    <span className="text-gray-400 text-sm ml-1">Reviews (4)</span>
  </div>
  <p className="text-sm text-gray-800 leading-tight mb-1">
    {product.name.slice(0, 40) + "..."}
  </p>
  <div className="pb-10">
    <p className="text-gray-400 line-through text-sm">$999.00</p>
    <p className="font-bold text-lg text-gray-900">${product.price}</p>
  </div>
  <div
    className="
      absolute bottom-0 left-0 w-full 
      py-3 flex items-center justify-center
      opacity-0 group-hover:opacity-100 
      transition-all duration-300
      rounded-b-xl
    "
  >
    <button
      className="
        bg-blue-50 hover:bg-blue-600 hover:text-white 
        text-blue-600 border border-blue-600
        px-4 py-2 rounded-lg flex items-center gap-x-2 text-sm font-medium
        shadow-sm transition-colors duration-200 cursor-pointer
      "
    >
      <ShoppingCart size={16} /> Add To Cart
    </button>
  </div>
</div>

  );
}
