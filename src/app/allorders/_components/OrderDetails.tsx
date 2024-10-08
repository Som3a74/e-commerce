"use client"
import { useLayoutEffect, useState } from "react";
import { TOrdersUser } from "../../../types/TOrders";
import OrederItems from './OrederItems';
import SpinnerLoading from './../../../components/component/SpinnerLoading';

type props = {
    deCodedToken: {
        id: string;
        name: string;
        role: string;
        iat: number;
        exp: number;
    }
}

export default function OrderDetails({ deCodedToken }: props) {

    const [brandsData, setbrandsData] = useState<TOrdersUser[] | []>([])
    console.log(brandsData)

    async function getOrderHandel() {
        try {
            let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/orders/user/${deCodedToken.id}`);

            if (!request.ok) {
                let error = await request.json()
                console.log(error.message)
                throw new Error('Failed to fetch brands')
            }
            else {
                let response: TOrdersUser[] = await request.json()
                setbrandsData(response)
            }
        } catch (error) {
            console.log(error)
        }
    }


    useLayoutEffect(() => {
        getOrderHandel()
    }, [])


    return brandsData.length !== 0 ? (
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mt-1 text-DarkBeLight">Customer order details</h2>
            <p className="text-GrayBeLight"> Customer Name : <span className="text-DarkBeLight font-semibold">{deCodedToken?.name}</span></p>
            <p className="text-GrayBeLight">Total Orders :  <span className="text-DarkBeLight font-semibold">{brandsData?.length}</span></p>
            <p className="text-sm max-w-[600px] tracking-wide text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iste nostrum voluptate, accusantium cum officia aliquid? Laboriosam dolores neque est? </p>


            {brandsData.map((item, index) =>
                <OrederItems index={index} order={item} />
            )}
        </div>
    )
    :( <SpinnerLoading />)
}