"use client"
import Image from "next/image" 
import { menuItems } from "./data/NavMenuData"
import { Search, ShoppingCart, User } from "lucide-react"
import clsx from "clsx"
import { useState } from "react"
import LoginCard from "@/features/auth/components/LoginCard"
import CardThumbnail from "../ui/CardThumbnail"
import { useProducts } from "@/hooks/useProducts"
import { LogoBrandList } from "@/app/home/data/BrandLogoArr"
import { motion, AnimatePresence } from "framer-motion"



export default function Navbar(){
    const [loginVisible , setLoginVisible] = useState<boolean>(false);
    const [isActive , setIsActive] = useState<string | null>(null);
    const [activeSubItem , setActiveSubItem] = useState<string | null>(null);
    const {products} = useProducts()
    const subProducts = products.filter(p => 
    String(p.sub_category).toLowerCase().trim() === String(activeSubItem).toLowerCase().trim()
    ).map((product, idx) => (
    <CardThumbnail key={idx} product={product}/>
    ))
    return (
        <>
            <div className="w-full bg-black flex justify-center items-center py-2 font-semibold relative z-50">
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
            <div className="w-full bg-white flex justify-center items-center font-semibold h-23 border-b-2 border-gray-300 relative">
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
                                onMouseEnter={()=> setIsActive(item.label)}
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
                <AnimatePresence>
                {isActive !== null && (
                <motion.div initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 , ease: "easeInOut" }} onMouseLeave={()=> setIsActive(null)} className="w-full max-w-[1400px] mx-auto flex flex-col shadow-lg border-gray-300 border bg-white z-40 absolute top-full left-1/2 -translate-x-1/2">
                    <div className="flex flex-row">
                        <div className="w-88 flex flex-col gap-2 items-start font-semibold text-left border-r-2 border-neutral-300">
                            {menuItems.find (item => item.label === isActive)?.submenu?.map((subItem , idx)=>(
                                <motion.button initial={{ opacity: 0}} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 , ease: "easeInOut" }} key={idx} className="flex flex-col w-full px-4 py-2 cursor-pointer hover:bg-blue-50 text-left" onMouseEnter={()=> setActiveSubItem(subItem.label)}>{subItem.label}</motion.button>
                            ))}
                        </div>
                        <div className="grid grid-cols-4 p-4 w-full justify-items-center items-center">
                            {subProducts}
                        </div>
                    </div>
                    <div className="w-full flex flex-row justify-between items-center h-24 border-t-2 border-neutral-300">
                        {LogoBrandList.slice(0 , 7).map((obj , idx)=>(
                            <div key={idx} className="relative w-full h-full hover:bg-blue-50 transition duration-300">
                                <a href={obj.url}>
                                <Image
                                src={obj.BrandLogoImgSrc}
                                fill
                                alt=""
                                className="object-contain py-2 px-8 hover:scale-110 transition duration-300 cursor-pointer"
                                />
                                </a>
                            </div>
                        ))}
                    </div>
                </motion.div>
                )}
                </AnimatePresence>
            </div>
            {loginVisible && <LoginCard onClose={()=> setLoginVisible(false)} />}
        </>
    )
}