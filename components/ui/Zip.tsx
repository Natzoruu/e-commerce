import Image from "next/image"

export default function Zip(){
    return(
        <>
            <div className="w-full bg-blue-50 flex flex-row justify-center items-center gap-x-3 h-17">
                <Image
                src="/ziplogo.svg"
                width={77}
                height={27}
                alt=""
                />
                <Image
                src="/divider.png"
                width={2}
                height={25}
                alt=""
                />
                <div className="flex items-center">
                <p className="text-blue-950 font-semibold text-[18px]">Own&nbsp;</p>
                <p className="text-blue-950 font-regular text-[18px]">it now, up to 6 months interest free&nbsp;</p>
                <a className="text-blue-950 font-regular text-[14px] underline underline-offset-2">learn more</a>
                </div>
            </div>
        </>
    )
}