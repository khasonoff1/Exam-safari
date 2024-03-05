// pages/empty-cart.js

import Link from 'next/link';

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Shopping Cart is Empty</h1>
      <p className="text-lg mb-8">Looks like you haven`t added anything to your cart yet.</p>
      <Link href="/">
        <a className="text-blue-500 hover:underline">Continue Shopping</a>
      </Link>
    </div>
  );
};

export default EmptyCart;
