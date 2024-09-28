"use client"
import Image from "next/image"
import { FaCartShopping } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useCart } from "../../../context/Cart";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";
import Link from "next/link";
import { TypeProductsDate } from '../../../types/type';

type props = {
    ProductsData: TypeProductsDate
}

function ProductItem({ ProductsData }: props) {
    const { AddToCartHandel } = useCart()
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async (productId: string) => {
        setIsLoading(true); // Set loading for this specific product
        await AddToCartHandel(productId);
        setIsLoading(false); // Stop loading once request is done
    };


    return (
        <div className="relative w-full max-w-xs overflow-hidden group rounded-lg border-gray-200 border bg-lightUi shadow-md p-1 hover:border-darkUi duration-200 cursor-pointer">
            <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group-hover:scale-105 duration-300" href="#">
                <Image
                    src={ProductsData.imageCover}
                    alt={ProductsData.title}
                    fill
                    className="object-cover p-4"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </Link>

            <div className="mt-4 px-5 pb-5">

                <div>
                    <h3 className="text-sm font-extrabold text-darkUi line-clamp-1 mb-2">{ProductsData.title}</h3>
                    <h5 className="text-md font-bold tracking-tight text-grayUI2 line-clamp-2">{ProductsData.description}</h5>
                </div>

                <div className="mt-2 mb-5 flex items-center justify-between flex-wrap">

                    <p>
                        <span className="text-3xl font-bold text-darkUi">${ProductsData.price}</span>
                        <span className="text-sm text-darkUi line-through">${ProductsData.price + 100}</span>
                    </p>

                    <div className="flex items-center">
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{ProductsData.ratingsAverage}</span>
                    </div>

                </div>

                <button
                    disabled={isLoading}
                    onClick={() => handleAddToCart(ProductsData._id)}
                    className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <FaCartShopping className="me-3 text-xl" />
                    {isLoading ? <ImSpinner2 className='animate-spin mx-14' /> : 'Add to cart'}

                </button>
            </div>

            <div className="absolute top-1 -right-10 flex flex-col h-full group-hover:right-0 duration-300">

                <span className="w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    <CiStar />
                </span>

                <span className="w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    <MdOutlineCompareArrows />
                </span>

                <Link href={`/productDetails/${ProductsData._id}`} className="w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    <FaEye />
                </Link>
            </div>
        </div>
    )
}

export default ProductItem