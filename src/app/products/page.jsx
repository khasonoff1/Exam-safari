import React from "react";
import Products from "@/components/products";

const AllProductsPage = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const products = await res.json();

    return (
        <div className="max-w-7xl mt-10 mx-auto">
            <section className="flex flex-col space-y-12 my-20">
                <h1 className="text-xl text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae gravida cursus
                    adipiscing viverra at tortor, egestas odio parturient. Morbi ut lorem in erat.
                    Et et molestie diam diam ultricies. Scelerisque duis diam ac cras dictum
                    adipiscing. Venenatis at sit proin ut vitae adipiscing id facilisis.
                </h1>
            </section>
            <div className="min-h-screen grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <Products key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default AllProductsPage;
