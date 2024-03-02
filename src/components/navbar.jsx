"use client"

import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/assets/Logo.svg'

const Navbar = () => {
    return (
        <header
            className={
                location.pathname === "/"
                    ? "absolute top-[25px]  left-0 w-full z-10"
                    : "sticky top-0  left-0"
            }
        >
            <nav
                className={
                    location.pathname === "/"
                        ? "bg-white w-full py-[15px]"
                        : "bg-[#F5F5F5] w-full py-[15px]"
                }
            >
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-[24px]">
                        <Link
                            className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
                            href="/clothes"
                        >
                            Clothes
                        </Link>
                        <Link
                            className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
                            href="/shoes"
                        >
                            Shoes
                        </Link>
                        <Link
                            className="font-semibold text-[14px] loading-[18px] tracking-[0.2px] px-2 py-[10px]"
                            href="/accessories"
                        >
                            Accessories
                        </Link>
                    </div>
                    <Link href="/">
                        <Image src={Logo} alt="Logo" className="w-[70px] h-[40px]" />
                    </Link>
                    <div className="flex items-center gap-5">
                        <form>
                            <label className="flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border-b-2 px-2 py-1 focus:outline-none bg-transparent"
                                />
                                <span className="text-black text-xl block pt-1 cursor-pointer">
                                    <ion-icon name="search"></ion-icon>
                                </span>
                            </label>
                        </form>
                        <Link className="text-[18px] block  pt-1 icons" href="login">
                            <ion-icon name="person"></ion-icon>
                        </Link>
                        <Link className="text-[18px] block  pt-1 icons" href="addtocart">
                            <ion-icon name="cart"></ion-icon>
                        </Link>
                        <Link className="text-[18px] block  pt-1 icons" href="likes">
                            <ion-icon name="heart"></ion-icon>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;




// const Navbar = () => {
//     return (
//         <div className="flex justify-between items-center px-4 py-3">
//             <div className="flex items-center gap-5">
//                 <Link href="/shoes">Shoes</Link>
//                 <Link href="/clothes">Clothes</Link>
//                 <Link href="/accessories">Accessories</Link>
//             </div>
//             <Link href="">
//                 <Image src={Logo} alt="img" />
//             </Link>
//             <div className="flex items-center gap-6">
//                 <input type="text" placeholder="Search..." className="py-2 px-3 border-b-2 border-slate-600 outline-white" />
//                 <Image src={Login} alt="login" />
//                 <Image src={Order} alt="order" />
//                 <Image src={Favorites} alt="favorites" />
//             </div>
//         </div>
//     )
// }

// export default Navbar