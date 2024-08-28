
export default async function Filters() {
    let request = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: any = await request.json();

    return (
        <section>
            <h2 className='mb-6 font-bold text-3xl'>Filters</h2>
            <h6 className="underline font-semibold text-md mb-5">Select Categories</h6>

            {CategoryData.data.map((ele: any) =>
                <h5 className="font-semibold text-md text-grayUI2 p-1 cursor-pointer hover:underline hover:text-darkUi ease-linear duration-300">{ele.name}</h5>
            )}
        </section>
    )
}