"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { useEffect, useRef, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { TypeCategoriesData } from "@/types/categoriesType"
import Link from 'next/link';

interface props {
    CategoryData: TypeCategoriesData[]
}

export default function SliderCategory({ CategoryData }: props) {
    // console.log(CategoryData)
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="w-full flex items-center justify-center my-5">
            <Carousel className="w-[92%]" plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent className="-ml-1 ">
                    {CategoryData.map((ele) => (
                        <CarouselItem key={ele._id} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 hover:shadow-sm ">
                            <Card className="cursor-pointer hover:border-blue-500 hover:bg-slate-50 hover:text-darkAll">
                                <Link className="flex items-center justify-evenly p-1" href={`/product/productFilters?categoryId=${ele._id}`}>
                                    <Image
                                        src={ele.image}
                                        width={50}
                                        height={50}
                                        alt={ele.name}
                                        className="rounded-full w-12 h-12 object-fill"
                                    />
                                    <span className="text-sm font-semibold">{ele.name}</span>
                                </Link>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
