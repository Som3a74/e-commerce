import { TypeProductsDate } from '../../../types/type';
import ProductItem from './ProductItem';

type props = {
    ProductsData: TypeProductsDate[]
}

export default async function ProductList({ ProductsData }: props) {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {!ProductsData.length ?

                <>
                    <div className=' col-span-4 h-60 flex justify-center items-center font-bold text-3xl'>
                        Not available Now
                    </div>
                </>

                :
                <>
                    {ProductsData.map((ele) =>
                        <ProductItem key={ele._id} ProductsData={ele} />
                    )}
                </>
            }
        </section>
    )
}
