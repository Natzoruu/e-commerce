import clsx from "clsx";
import Image from "next/image";


interface aboutCardProps {
    title : string,
    text : string,
    imgSrc : string,
    bgColor : "black" | "blue",
}

export default function CpuSpec (card : aboutCardProps) {
    return(
        <div className="w-full h-170 flex bg-black text-white mx-auto">
            <div className="max-w-[1400px] mx-auto w-full grid grid-cols-2">
                <div className="flex flex-col justify-center pl-40 pr-20">
                    <h1 className="text-5xl font-medium mb-4">{card.title}</h1>
                    <p dangerouslySetInnerHTML={{ __html: card.text }} />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <Image
                    src={card.imgSrc}
                    alt=""
                    fill
                    className="object-cover object-[70%_50%] scale-110"
                    />
                </div>
            </div>
        </div>

    )
}