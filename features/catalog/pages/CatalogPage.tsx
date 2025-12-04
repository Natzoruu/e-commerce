"use client"
import ProductCardWide from "../components/ProductCardWide"
import CatalogBreadcrumb from "./components/CatalogBreadcrumb"
import Image from "next/image"
import Link from "next/link"
import { useProducts } from "../hooks/useProduct"
import { Circle } from "lucide-react"
import { useState } from "react"
import { colorGroups } from "../components/colorGroup"
import { LogoBrandList } from "@/app/home/data/BrandLogoArr"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export default function CatalogPageUi (){
    const { products , loading } = useProducts();

    interface filterTypes {
        category : string,
        brand : string,
        color : string,
    }

    const [filters , setFilters] = useState<filterTypes>({
        category : "All",
        brand : "All",
        color : "All",
    });

    const categories = products.map(products => products.category);
    const uniqueCategories = Array.from(new Set(categories.filter((cat) : cat is string => typeof cat === "string")));
    const colors = products.map(products => products.color);
    const rawColors = Array.from(new Set(colors.filter((col) : col is string => typeof col === "string")))
    const normalizedColors  = rawColors.map(normalizeColor)
    const uniqueColors = Array.from(new Set(normalizedColors))

    function normalizeColor(color: string) {
    if (!color) return "";
    const clean = color.toLowerCase().replace(/\s+/g, "");
    return colorGroups[clean] || color;
    }

    const filteredProducts = products.filter((p) => {

        const productColor = p.color?.toLowerCase();
        const filterColor = filters.color?.toLowerCase();
        const productBrand = p.brand?.toLowerCase();
        const filterBrand = filters.brand?.toLowerCase();

        if (filters.category !== "All" && p.category !== filters.category) return false
        if (filterColor !== "all" && productColor !== filterColor) return false;
        if (filterBrand !== "all" && productBrand !== filterBrand) return false;
        return true
    })
    
   function productTotalPreview (productList : any[], category : string) {
        return productList.filter( p => p.category === category).length;
    }


    const [currentPage , setCurrentPage] = useState<number>(1)
    const itemsPerPage = 5;
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
    const start = (currentPage - 1) * itemsPerPage
    const end = start + itemsPerPage
    const paginatedProducts = filteredProducts.slice(start, end)
    
    return (
        <div className="space-y-4">
            <div className="relative w-full h-[104px]">
                <Image
                src="/images/Banner2.png"
                fill
                alt=""
                />
            </div>
            <CatalogBreadcrumb/>
            <h1 className="font-bold text-lg">{filters.category}</h1>
                <div className="grid grid-cols-6">
                    <div className="col-span-1 space-y-2">
                        <div className="bg-blue-50 flex flex-col space-y-4 px-4 py-2">
                            <div className="py-2 gap-y-2 flex flex-col justify-center items-center">
                                <p className="font-bold text-md">Filters</p>
                                <button className="bluebtn" onClick={()=> setFilters({
                                    category : "All", brand : "All", color : "All"
                                })}>Clear filter</button>
                            </div>
                            <div className="flex flex-col gap-y-3">
                                <p className="font-bold text-md">Category</p>
                                <div className="flex flex-col gap-y-1">
                                    {uniqueCategories.map((item , idx) =>(
                                        <div key={idx} className="flex flex-row justify-between">
                                            <button className="text-left cursor-pointer"  onClick={()=> setFilters(prev => ({...prev, category : item}))}
                                                >{item}</button>
                                            <p>{productTotalPreview(products , item)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <p className="font-bold text-md">Color</p>
                                <div className="flex flex-row justify-between items-center">
                                {uniqueColors.map((itm , idx ) =>(
                                    <Circle
                                        key={idx}
                                        size={25}
                                        style={{ color : itm , fill : itm }}
                                        className="cursor-pointer"
                                        onClick={()=>{ setFilters(prev => ({...prev, color : itm}))}}
                                    />
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 flex flex-col space-y-4 px-4 py-2">
                            <div className="py-2 gap-y-2 flex flex-col justify-center items-center">
                                <p className="font-bold text-md">Brands</p>
                                <button className="bluebtn" onClick={()=> setFilters(prev =>({...prev, brand : "All"}))}>All brands</button>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                {LogoBrandList.map((item , idx) =>(
                                    <div key={idx} className="relative cursor-pointer hover:scale-110 transition-all duration-200 ease-in-out w-full h-16 flex items-center justify-center rounded-md"
                                    onClick={()=>setFilters(prev =>({...prev, brand : item.brand}))}
                                    >
                                        <Image
                                        className="object-contain max-h-full"
                                        src={item.BrandLogoImgSrc}
                                        width={200}
                                        height={350}
                                        alt={item.alt}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-auto bg-blue-50">
                            <Image
                            src="/images/Bannerfilter.png"
                            width={233}
                            height={370}
                            alt=""
                            className=""
                            />
                        </div>
                    </div>
                    <div className="col-span-5 transition-all duration-200 ease-in-out">
                        {paginatedProducts.map((item , idx) =>(
                            <ProductCardWide key={idx} name={item.name} price={item.price} image={item.image} description={item.description} isAvailable={item.isAvailable} rating={item.rating}/>
                        ))}
                        <div className="my-4">
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious onClick={()=>setCurrentPage(currentPage-1)} />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink onClick={()=>setCurrentPage(1)}>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink onClick={()=>setCurrentPage(currentPage)}>{currentPage}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink onClick={()=>setCurrentPage(totalPages)}>{totalPages}</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem className="cursor-pointer">
                                        <PaginationNext onClick={()=>setCurrentPage(currentPage+1)}/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                    </div>
                </div>
        </div>
    )
}