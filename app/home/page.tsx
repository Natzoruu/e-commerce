"use client"
import Image from "next/image"
import CardThumbnail from "@/components/ui/CardThumbnail"
import { TemporaryDataProducts } from "@/types/TemporaryDataProducts"
import FeaturedSection from "@/components/ui/FeaturedHomeSection"
import { LogoBrandList } from "./data/BrandLogoArr"
import { TestimonialComponent } from "@/features/catalog/components/testimonial"
import { Headset } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import Zip from "@/components/ui/Zip"

export default function Homepage() {
  return(
    <div className="max-w-[1400px] w-full mx-auto flex flex-col">
      <div className="space-y-4">
        <div className="w-full h-[328px] relative">
          <Image
          src="/images/Banner1Carousel.png"
          fill
          alt=""
          className=""
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="justify-between flex">
            <h1 className="font-bold text-[22px]">New Products</h1>
            <a className="text-blue-600 underline underline-offset-4 cursor-pointer">See all new products</a>
          </div>
          <div className="grid grid-cols-6 gap-0 overflow-visible">
            {TemporaryDataProducts.map((product)=>(
              <CardThumbnail key={product.id} product={product}/>
            ))}
          </div>
        </div>
        <Zip/>
        <div>
          <FeaturedSection
            title="Custom Builds"
            imgSource="/images/CustomBuild.png"
            productArray={TemporaryDataProducts}
            link="#"
          />
        </div>
        <div>
          <FeaturedSection
            title="MSI Laptops"
            imgSource="/images/LaptopMsi.png"
            productArray={TemporaryDataProducts}
            link="#"
          />
        </div>
        <div>
          <FeaturedSection
            title="Desktops"
            imgSource="/images/Desktops.png"
            productArray={TemporaryDataProducts}
            link="#"
          />
        </div>
        <div>
          <FeaturedSection
            title="Gaming Monitors"
            imgSource="/images/GamingMonitors.png"
            productArray={TemporaryDataProducts}
            link="#"
          />
        </div>
        <div className="w-full grid grid-cols-7 h-37 items-center justify-center">
          {LogoBrandList.map((obj , idx)=>(
            <div key={idx} className="relative w-full h-full hover:bg-blue-50 transition duration-300">
              <a href={obj.url}>
                <Image
                src={obj.BrandLogoImgSrc}
                fill
                alt=""
                className="object-contain py-2 px-8 hover:scale-125 transition duration-300 cursor-pointer"
                />
              </a>
            </div>
          ))}
        </div>
        <div>
          <TestimonialComponent/>
        </div>
        <div className="w-full h-69 flex justify-center items-center">
          <div className="py-18 px-12 grid grid-cols-3">
            <div className="flex flex-col text-center justify-center items-center gap-y-2">
              <div className="h-23   w-23  rounded-full bg-blue-600 flex items-center justify-center"><Headset size={45} color="#fff"/></div>
              <h1 className="font-bold text-xl">Product Support</h1>
              <p className="font-normal text-sm opacity-70 px-20">Up to 3 years on-site warranty available for your peace of mind.</p>
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-y-2">
              <div className="h-23   w-23  rounded-full bg-blue-600 flex items-center justify-center"><Headset size={45} color="#fff"/></div>
              <h1 className="font-bold text-xl">Personal Account</h1>
              <p className="font-normal text-sm opacity-70 px-20">With big discounts, free delivery and a dedicated support specialist.</p>
            </div>
            <div className="flex flex-col text-center justify-center items-center gap-y-2">
              <div className="h-23   w-23  rounded-full bg-blue-600 flex items-center justify-center"><Headset size={45} color="#fff"/></div>
              <h1 className="font-bold text-xl">Amazing Savings</h1>
              <p className="font-normal text-sm opacity-70 px-20">Up to 70% off new Products, you can be sure of the best price.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}