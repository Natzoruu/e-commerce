import clsx from "clsx";
import Image from "next/image";


interface aboutCardProps {
    bgColor? : "white" | "black" ,
    title? : string,
    text : string,
    imgSrc : string,
    icon? : string,
    direction ? : "normal" | "backwards" ,
}

export default function AboutCard (card : aboutCardProps) {
    return(
        <div className={clsx(
            "w-full h-170 grid grid-cols-2 px-80 gap-x-40",
            card.bgColor === "black" ? "bg-black text-white" : "bg-white text-black",
        )}>
            <div className={clsx("flex flex-col space-y-2 mx-auto h-full justify-center gap-y-3" ,
                card.direction === "normal" ? "order-1" : "order-2"
            )}>
                <div className="flex">
                    <h1 className="text-5xl font-medium">{card.title}</h1>
                </div>
                <p dangerouslySetInnerHTML={{__html: card.text}}/>
            </div>
            <div className={clsx("flex flex-col space-y-2 pr-25 mx-auto h-full justify-center" ,
                card.direction === "normal" ? "order-2" : "order-1"
            )}>
                <Image
                    src={card.imgSrc}
                    alt=""
                    width={470}
                    height={488}
                    className="hover:scale-110 transition-all duration-200 ease-in-out"
                />
            </div>
        </div>
    )
}