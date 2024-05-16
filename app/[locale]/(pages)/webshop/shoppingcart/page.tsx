import { Trash } from 'lucide-react'
import React from 'react'

function shoppingCart() {
    return (
        <section className='px-4 lg:px-0 md:max-w-7xl mx-auto mt-20'>
            <h1 className='mb-2 text-lg text-black font-monserrat font-medium'>Order summary</h1>
            <div className='grid md:gap-8  md:grid-cols-2'>
                {/* Left column - Order summary*/}
                <form className='grid col-span-1'>
                    <div className="mt-10 lg:mt-0">
                        <div className=" max-w-sreen border-t border-gray-300">
                            {/* Order summary list */}
                            <ul>
                                <li className="flex px-4 py-6 sm:px-6 border-t border-gray-300">

                                    <div className="flex-shrink-0">
                                        <div className='w-20 bg-red-500'>
                                            <h1>Placeholder Text. Needs to be IMG</h1>
                                        </div>
                                        {/* <img
                                        src="https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg"
                                        alt="ee"
                                        className="w-20 rounded-md"
                                    /> */}
                                    </div>

                                    <div className="ml-6 flex flex-1 flex-col ">

                                        <div className='flex justify-between'>

                                            <div className="min-w-0 ">
                                                <h4 className="font-medium text-gray-700 hover:text-gray-800">
                                                    Product name
                                                </h4>
                                                <p className="mt-1 text-sm text-gray-500">This is quite the long description for a non existing item</p>
                                            </div>

                                            <div className="ml-4 flex-shrink-0">
                                                <button type="button" className="flex p-2.5 items-center justify-centertext-black hover:text-gray-500">
                                                    <span className="sr-only">Remove</span>
                                                    <Trash color='#353535' className='hover:text-white' />
                                                </button>
                                            </div>
                                        </div>

                                        <div className='flex justify-between mt-4'>

                                            <p className=" font-medium text-gray-900">$32.00</p>
                                            <button type="button" className="flex items-center gap-3 px-1 py-1 border rounded-md border-gray-300 ">
                                                <span className='border-r border-gray-300 px-2'>-</span>
                                                <span>2</span>
                                                <span className='border-l border-gray-300 px-2'>+</span>

                                            </button>

                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </div>
                </form>

                {/* Right column - Checkout */}
                <form className='rounded-md bg-white shadow-sm'>
                    <dl className="space-y-6 px-4 py-6 sm:px-6">
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Subtotal</dt>
                            <dd className="text-sm font-medium text-gray-900">€64.00</dd>
                        </div>
                        <div className="flex items-center justify-between">
                            <dt className="text-sm">Shipping</dt>
                            <dd className="text-sm font-medium text-gray-900">€6.00</dd>
                        </div>
                        <div className="flex items-center justify-between border-t border-gray-300 pt-6">
                            <dt className="text-base font-medium">Total</dt>
                            <dd className="text-base font-medium text-gray-900">€70.00</dd>
                        </div>
                    </dl>

                    <div className="border-t border-gray-300 px-4 py-6 sm:px-6">
                        <button type="submit" className="w-full rounded-md border border-transparent bg-black px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-50">Confirm order</button>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default shoppingCart
