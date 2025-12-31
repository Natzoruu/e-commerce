
import Image from "next/image";

interface cpuSpec {
    cpu? : string,
    gpu? : string,
    ram? : string,
    storage? : string,
}

interface aboutCardProps {
    specs : cpuSpec,
    productType : string,
    title : string,
    text : string,
    imgSrc : string,
    bgColor : "black" | "blue",
}
export const CPU_IMAGES: Record<string, string> = {
  'ryzen-3': "/specs/cpus/ryzen3.png",
  'ryzen-5': "/specs/cpus/ryzen5.png",
  'ryzen-7': "/specs/cpus/ryzen7.png",
  'ryzen-9': "/specs/cpus/ryzen9.png",
  'i3': "/specs/cpus/i3.png",
  'i5': "/specs/cpus/i5.png",
  'i7': "/specs/cpus/i7.jpg",
  'i9': "/specs/cpus/i9.png",
};
export default function CpuSpec (card : aboutCardProps) {
    const cpuNormalize = card.specs.cpu?.toLowerCase();
    const match = cpuNormalize?.match(/(ryzen|i)[\s-]?(\d)/);
    let cpuImage = "";
    if (match) {
        const brand = match[1];
        const number = match[2];
        let cpuImageKey = ""
            if (brand === "ryzen") {
                cpuImageKey = `ryzen-${number}`;
            } else {
                cpuImageKey = `i${number}`;
            }
        cpuImage = CPU_IMAGES[cpuImageKey];
    } 
    return(
        <div className="w-full h-170 flex bg-black text-white mx-auto">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2">
                <div className="flex flex-col justify-center pl-40 pr-20">
                    <h1 className="text-5xl font-medium mb-4">{card.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: card.text }} />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <></>
                    {card.productType === "Computers" ? (
                        <Image
                        src={cpuImage}
                        alt=""
                        fill
                        className="object-cover object-[70%_50%] scale-110"
                        />
                    ) : (
                        <Image
                        src={card.imgSrc}
                        alt=""
                        fill
                        className="object-cover object-[70%_50%] scale-110"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}