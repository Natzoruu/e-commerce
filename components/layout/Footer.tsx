import clsx from "clsx"
import { FooterMenu } from "./data/FooterMenuData"

export default function Footer() {
    return(
        <div className="w-full h-130 flex justify-center items-center">
            <div className="text-white grid grid-cols-2 gap-y-20">
                <div className="flex flex-col gap-y-3">
                    <h1 className="font-medium text-4xl">Sign Up To Our Newsletter.</h1>
                    <p className="font-light text-lg">Be the first to hear about the latest offers.</p>
                </div>
                <div className="flex flex-row justify-end gap-4 px-8 py-2">
                    <input className="border-2 border-white px-4 rounded-md flex-1" placeholder="Your email"></input>
                    <button className="bg-blue-600 px-14 py-3 rounded-4xl font-bold hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition duration-300">Suscribe</button>
                </div>
                    <div className="grid grid-cols-5 w-full col-span-2 text-sm">
                        {FooterMenu.map((item , idx)=>(
                            <div key={idx} className="flex flex-col gap-y-4">
                                <a className={clsx ("col-span-1 text-neutral-500 font-bold", item.url ? "cursor-pointer text-blue-600" : "cursor-auto")}>{item.label}</a>
                                <div className="col-span-1 gap-y-2">{item.submenu?.map((item, idx)=>(
                                    <div key={idx}>
                                        <span>{item.label}</span>
                                    </div>
                                ))}</div>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    )
}