import CatalogBread from "@/features/catalog/pages/components/CatalogBreadcrumb"
import AboutCard from "@/components/ui/aboutCard"
import { aboutDataList } from "@/app/about/data/aboutCardsData";

export default function AboutUs(){
    return(
        <div className="w-full">
            <div className="max-w-[1400px] w-full mx-auto flex flex-col space-y-4">
                <CatalogBread/>
                <h1 className="font-bold text-lg">About us</h1>
            </div>
            <div>
                {aboutDataList.map((itm , idx) =>(
                    <AboutCard 
                        key={idx}
                        bgColor={itm.bgColor}
                        title={itm.title}
                        text={itm.text || ""}
                        imgSrc={itm.imgSrc || ""}
                        icon={itm.icon}
                        direction={itm.direction}
                    />
                ))}
            </div>
        </div>
    )
}