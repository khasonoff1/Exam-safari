import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-4">Oops! The page you are looking for does not exist.</p>
                <Link href="/" className="text-blue-500 hover:text-blue-700">
                    Go back to home page
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
