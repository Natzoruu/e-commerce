"use client"
import { useEffect, useState } from "react"
import { TemporaryDataProducts as ProductData } from "@/types/TemporaryDataProducts"

export function useProducts (){
    const [products, setProducts] = useState<typeof ProductData>([])
    const [loading, setLoading] = useState<boolean>(true);

    useEffect (()=>{
        const timer = setTimeout (()=> {
            setProducts(ProductData);
            setLoading(false);
        }, 500);
        return () => clearTimeout (timer);
    }, []);
    return {products , loading};
}