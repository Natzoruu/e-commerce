"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { Database } from "@/types/supabase"

type Product = Database["public"]["Tables"]["products"]["Row"]

export function useProducts (){
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
    let mounted = true
    async function fetchProducts (){
        
        setLoading(true)
        const { data , error } = await supabase.from('products').select('*');
        if (!mounted) return;
        if (error) {
            console.log(error)
            setLoading(false)
            return;
        }
        if (data) {
            setProducts(data ?? [])
            setLoading(false)
            return;
        }
    }
    fetchProducts()
    return () => {
        mounted = false;
    }
   }, [])
   return { products, loading }
}
