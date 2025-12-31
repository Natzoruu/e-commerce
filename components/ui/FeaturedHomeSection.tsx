import { Database } from "@/types/supabase";
import Image from "next/image";
import CardThumbnail from "./CardThumbnail";
type dataProducts = Database["public"]["Tables"]["products"]["Row"];

interface FeaturedSectionElements{
    title : string;
    imgSource : string;
    productArray : dataProducts[];
    link : string;
}
export default function FeaturedSection ({
    title,
    imgSource,
    productArray,
    link
}: FeaturedSectionElements){
    return(
        <>
            <div className="grid grid-cols-6 w-full my">
                <div className="col-span-1">
                    <div className="w-58 h-86 flex flex-col bg-blue-50 relative">
                        <Image
                        src={imgSource}
                        fill
                        className="object-cover"
                        alt=""
                        />
                        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-semibold text-2xl text-center">{title}</h1>
                        <a href={link} className="absolute left-1/2 bottom-4 -translate-x-1/2 -translate-y-1/2 text-white cursor-pointer underline underline-offset-2">See all products</a>
                    </div>
                </div>
                <div className="col-span-5 gap-4 grid grid-cols-5">
                {productArray.slice(0,5).map((product)=>(
                    <CardThumbnail key={product.id} product={product}/>
                ))}
                </div>
            </div>
        </>
    )
}