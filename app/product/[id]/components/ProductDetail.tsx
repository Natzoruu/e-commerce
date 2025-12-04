"use client"
import {} from "lucide-react"
import { FaPaypal } from "react-icons/fa";
import { DetailsSections } from "./data/SeccionDetails";
import Image from "next/image";
import Zip from "@/components/ui/Zip";
import CatalogBread from "@/features/catalog/pages/components/CatalogBreadcrumb";
import { useState } from "react";

interface specsProps {
    cpu : string;
    gpu : string;
    ram : string;
    storage : string;
}

interface cardProps {
    name : string;
    price : number;
    description : string;
    sku : string;
    image : string;
    weight : string;
    condition : "New" | "Refurbished";
    color : string;
    material : string;
    specs : specsProps;

}

export default function ProductDetail(card : cardProps){
    const [view, setView] = useState<string>("About Product");
    return(
        <>
            <div className="w-full h-25 flex flex-row justify-between items-center border-t border-b border-gray-400">
                <div className="max-w-[1400px] flex w-full justify-between mx-auto">
                    <div className="flex items-center space-x-6">
                        {DetailsSections.map((itm , idx ) => (
                            <div key={idx}>
                                <button onClick={()=>setView(itm.title)} className="font-semibold cursor-pointer">{itm.title}</button>
                                {}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center space-x-6">
                        <p>On Sale from <span className="font-bold">${card.price}</span></p>
                        <button className="bluebtn">Add to cart</button>
                        <button className="bluebtn"><FaPaypal/>Paypal</button>
                    </div>
                </div>
            </div>
            <div className="w-full bg-blue-50 text-[#111827]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
                    <div className="px-6 md:px-12 lg:px-20 py-10 flex flex-col justify-center space-y-6">
                        <CatalogBread/>
                        <h1 className="text-2xl md:text-3xl font-semibold">
                            {card.name}
                        </h1>
                        {view === "About Product" && (
                        <div>
                            <p className="text-sm md:text-base text-black leading-relaxed max-w-xl">
                                {card.description}
                            </p>
                        </div>
                        ) }
                        {view === "Details" && (
                            <div >
                                {Object.entries(card.specs).map(([key , value])=>(
                                    <li className="list-item list-disc" key={key}>
                                        <span className="text-sm md:text-base text-black leading-relaxed max-w-xl">{value}</span>
                                    </li>
                                ))}
                            </div>
                        ) }
                        {view === "Specs" && (
                        <div className="border border-gray-300 rounded-md w-full max-w-3xl">
                            <div className="grid grid-cols-3 px-4 py-3 border-b bg-white">
                                <span className="font-medium col-span-1">Weight</span>
                                <span className="text-gray-500">{card.weight}</span>
                            </div>
                            <div className="grid grid-cols-3 px-4 py-3 border-b ">
                                <span className="font-medium">Condition</span>
                                <span className="text-gray-500">{card.condition}</span>
                            </div>
                            <div className="grid grid-cols-3 px-4 py-3 border-b bg-white">
                                <span className="font-medium">Color</span>
                                <span className="text-gray-500">{card.color}</span>
                            </div>
                            <div className="grid grid-cols-3 px-4 py-3 border-b">
                                <span className="font-medium">Material</span>
                                <span className="text-gray-500">{card.material}</span>
                            </div>
                        </div>
                        ) }
                        <div className="text-sm text-gray-400 flex justify-between">
                            <div>
                                <span>Have a question? </span>
                                <button className="text-blue-500 underline">
                                Contact us
                                </button>
                            </div>
                            <div>
                                <span className="text-black">{card.sku}</span>
                            </div>
                        </div>
                    </div>
                        <div className="relative flex items-center justify-center bg-white">
                        <div className="relative w-[260px] h-[360px] md:w-[320px] md:h-[440px]">
                            <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            className="object-contain"
                            />
                        </div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 w-full">
                            <Zip/>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}