import ProductDetail from "./components/ProductDetail";
import CpuSpec from "@/components/ui/cpuSpecCard";
import ProductDetailFeatures from "./components/ProductDetailFeatures";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProductPage({ params , }: {params : Promise<{ id : string }>; }) {
    const supabase = await createClient()
    const { id } = await params;
    const productID = String(id)
    const { data : product , error } = await supabase
    .from("products")
    .select("*")
    .eq("id", productID)
    .single()
    if (error || !product) return notFound()
    return(
        <div className="w-full">
            <ProductDetail 
                name={product.name}
                price={product.price}
                description={product.description}
                sku={product.sku}
                image={product.image_url}
                specs={product.specs}
                weight={product.weight}
                condition={product.condition}
                color={product.color}
                material={product.material}
            />
            <CpuSpec specs={product.specs} productType={product.category} bgColor="black" title={product.details_section.highlightBlock.title} text={product.details_section.highlightBlock.text} imgSrc={product.image_url}/>
            <ProductDetailFeatures longDesc={product.details_section.highlightBlock.longDescription} features={product.details_section.features}/>
        </div>
    )
}   