import { TestimonialArray } from "@/app/home/data/TestimonialData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export function TestimonialComponent () {
    return(
        <>
        <div className="w-full h-full flex justify-center items-center">
        <div className="w-6xl h-77 bg-blue-50">
          <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          slidesPerView={1}
          >
            {TestimonialArray.map((item ,index) =>(
              <SwiperSlide key={index}>
                <div className="py-18 px-24 gap-y-4 bg-blue-50 h-80 flex flex-col justify-between">
                  <div className="flex items-start gap-4 min-h-40">
                    <Image
                      src="/quote.svg"
                      width={38}
                      height={22}
                      alt=""
                      className="mt-1"
                    />
                    <p className="font-normal text-xl text-black leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <p className="text-right text-sm font-normal">
                    — {item.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
        </>
    )
}
