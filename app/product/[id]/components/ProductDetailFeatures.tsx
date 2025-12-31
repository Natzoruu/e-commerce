import {} from "lucide-react"
import Image from "next/image";

interface featuresIconsText{
    icon : string;
    description : string;
}

interface FeatureCardProps {
    longDesc : string;
    features : featuresIconsText[];
}

export default function ProductDetailFeatures(card : FeatureCardProps)
{
    return(
        <>
            <div className="w-full bg-zinc-950 text-white">
                <div className="max-w-[1400px] mx-auto h-170 flex flex-col justify-center items-center px-35 space-y-6">
                    <div className="px-50 flex flex-col justify-center items-center space-y-6">
                        <h1 className="font-medium text-5xl">Features</h1>
                        <p className="font-light text-xl text-center">{card.longDesc}</p>
                    </div>
                    <div className="grid grid-cols-4 w-full">
                        {card.features.map((itm , idx) =>(
                            <div className="flex flex-col justify-center items-center space-y-3" key={idx}>
                                <div className="w-50 h-50 rounded-full bg-white flex items-center justify-center">
                                    <Image src={itm.icon}
                                    width={81}
                                    height={81}
                                    alt=""
                                    className="scale-115"
                                    />
                                </div>
                                <div>
                                    <p className="font-light text-md px-12 text-center">
                                        {itm.description}
                                    </p>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}


