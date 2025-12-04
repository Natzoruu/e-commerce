"use client"
import Image from "next/image" 
import { menuItems } from "./data/NavMenuData"
import { Search, ShoppingCart, User } from "lucide-react"
import clsx from "clsx"
import { useState } from "react"
import LoginCard from "@/features/auth/components/LoginCard"
export default function Navbar(){
    const [loginVisible , setLoginVisible] = useState<boolean>(false);
    return (
        <>
            <div className="w-full bg-black flex justify-center items-center py-2 font-semibold">
                <div className="max-w-[1400px] w-full mx-auto flex flex-row justify-between items-center text-[12px]">
                    <p className="text-white">Mon-Thu:  9:00 AM - 5:30 PM</p>
                    <p className="text-white">Visit our showroom in 1234 Street Adress City Address, 1234 <a className="underline underline-offset-4 cursor-pointer"> Contact Us</a></p>
                    <div className="flex flex-row gap-4">
                        <p className="text-white">Call Us: (00) 1234 5678</p>
                        <Image
                            src="/fbLogo.svg"
                            width={16}
                            height={16}
                            alt=""
                        />
                        <Image
                            src="/igLogo.svg"
                            width={20}
                            height={20}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-white flex justify-center items-center
             font-semibold h-23">
                <div className="max-w-[1400px] w-full mx-auto flex flex-row justify-between items-center text-[12px]">
                    <Image
                        src="/NovashopSVG.svg"
                        width={85}
                        height={69}
                        alt=""
                    />
                    <div className="space-x-3">
                        {menuItems.map((item, idx)=>(
                            <a href={item.href} key={idx}>
                                <button 
                                className={clsx
                                    ("cursor-pointer text-black hover:bg-blue-600 px-4 py-2 rounded-4xl hover:text-white text-[14px] transition duration-300", item.label === "Our Deals" && "text-blue-600 border-2 border-blue-600 px-6 py-2 hover:bg-blue-600 hover:text-white")
                                }>
                                    {item.label}
                                </button>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-row space-x-6">
                        <a href="#"><Search className="cursor-pointer hover:scale-110 transition duration-200"/></a>
                        <a href="#"><ShoppingCart className="cursor-pointer hover:scale-110 transition duration-200"/></a>
                        <a href="#" onClick={()=> setLoginVisible(true)}><User className="cursor-pointer hover:scale-110 transition duration-200"/></a>
                    </div>
                </div>
            </div>
            {loginVisible && <LoginCard onClose={()=> setLoginVisible(false)} />}
        </>
    )
}