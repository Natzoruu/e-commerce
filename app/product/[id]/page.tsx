import { TemporaryDataProducts } from "@/types/TemporaryDataProducts";
import ProductDetail from "./components/ProductDetail";
import CpuSpec from "@/components/ui/cpuSpecCard";
import ProductDetailFeatures from "./components/ProductDetailFeatures";

export default async function ProductPage({ params , }: {params : Promise<{ id : string }>; }) {
    const { id } = await params;
    const product = TemporaryDataProducts.find((p)=> p.id === Number (id))
    if (!product) return <div>Product Not Found</div>
    return(
        <div className="w-full">
            <ProductDetail 
                name={product.name}
                price={product.price}
                description={product.description}
                sku={product.sku}
                image={product.image}
                specs={product.specs}
                weight={product.weight}
                condition={product.condition}
                color={product.color}
                material={product.material}
            />
            <CpuSpec bgColor="black" title={product.detailsSection.highlightBlock.title} text={product.detailsSection.highlightBlock.text} imgSrc={product.image}/>
            <ProductDetailFeatures longDesc={product.detailsSection.longDescription} features={product.detailsSection.features} />
        </div>
    )
}   