"use client"

import { useState } from 'react';

import { toast } from 'react-toastify';
import CustomImage from './image';

const Products = ({ product }) => {
    const [loading, setLoading] = useState(true);
    const handleClick = () => {
        const products = JSON.parse(localStorage.getItem('carts')) || [];

        const isExistProduct = products.find(c => c.id === product?.id);

        if (isExistProduct) {
            const updatedData = products.map(c => {
                if (c.id === product?.id) {
                    return {
                        ...c,
                        quantity: c.quantity + 1,
                    };
                }

                return c;
            });

            localStorage.setItem('carts', JSON.stringify(updatedData));
        } else {
            const data = [...products, { ...product, quantity: 1 }];
            localStorage.setItem('carts', JSON.stringify(data));
        }
        toast('Product added to your bag!!');
    };

    return (
        <div className="w-30 h-96 flex flex-col group border-2 rounded-lg p-6 transition-transform ease-out duration-200 hover:scale-105">
            <div className="relative h-72 flex-1">
                <CustomImage fill product={product} />
            </div>
            <h3 className="pt-3 tracking-widest text-xs font-medium title-font line-clamp-1 text-black">{product.title}</h3>
            <p className="pt-3 leading-relaxed text-base text-center font-bold text-black">₦ {product.price}</p>
            <button
                className='button w-full bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black'
                onClick={handleClick}
            >
                Add to bag
            </button>
        </div>
    )
};

export default Products;
