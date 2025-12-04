import Image from "next/image";
import { CircleCheck, XCircle, StarIcon } from "lucide-react";
interface TemporaryProducts {
  id?: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isAvailable: boolean;
  rating: number;
}


export default function ProductCardWide ({id , name , price ,image , description , isAvailable , rating} : TemporaryProducts) {
    return(
        <>
            <div className="w-full h-auto grid grid-cols-3 justify-center items-center p-6 hover:shadow-2xl hover:-translate-y-2 hover:z-40 transition-all duration-300 ease-in-out">
                <div key={id} className="flex h-full flex-col col-span-1 justify-center items-center">
                    <Image width={300} height={300} src={image} alt=""/>
                        <div className="flex items-center gap-x-2">
                            {isAvailable ? (
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
                </div>
                <div className="flex flex-col col-span-2 gap-y-4">
                    <h1 className="text-sm font-normal">{name}</h1>
                    <p className="text-sm font-normal">{description}</p>
                    <p className="text-xl font-bold">${price}</p>
                    <div><button className="whitebtn">Add to cart</button></div>
                    <div className="flex my-2">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                size={18}
                                className={
                                i < rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }
                            />
                        ))}
                    </div>
                </div>
                <h1></h1>
            </div>
        </>
    )
}