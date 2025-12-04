"use client"
import { useState } from "react"
import { termsData } from "./data/termsData"

export default function Terms(){
    const [activeSection , setActiveSection ]  = useState<string>("")
    return(
        <>
        <div className="max-w-[1400px] w-full mx-auto flex flex-col space-y-4">
            <h1 className="font-semibold text-3xl">Shop Terms & Conditions</h1>
            <div className="w-full grid grid-cols-5 space-y-4">
                <div className="col-span-4 space-y-4">
                    <h2 className="font-semibold text-2xl">GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES</h2>
                    <div className="space-y-4">
                        {termsData.map((itm, idx) =>(
                            <div className="space-y-4" key={idx} id={itm.title.replace(/\s+/g, "")} >
                                <h1 className="font-bold text-lg">{itm.title}</h1>
                                <p className="font-light text-lg" dangerouslySetInnerHTML={{__html : itm.text}} ></p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-1">
                    {termsData.map((itm, idx) =>(
                        <div className="space-y-4 bg-blue-50 px-4 py-1" key={idx}>
                            <button onClick={()=> document.getElementById(itm.title.replace(/\s+/g, ""))?.scrollIntoView({behavior : "smooth"})} className="font-normal text-lg cursor-pointer text-left">{itm.title}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}