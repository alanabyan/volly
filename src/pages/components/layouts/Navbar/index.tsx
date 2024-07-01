import Link from "next/link";

const Navbar = () => {
    return (
    <div className="flex fixed left-20 top-16">
        <h1 className="text-[19px] font-extrabold">Ivonium</h1>
        <div className="relative left-[800px] top-2">
            <ul className="flex font-extrabold text-[14.6px]">
                <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-300 ease-in">Home</li>
                <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-300 ease-in">About Us</li>
                <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-300 ease-in">Introduction</li>
            </ul>
        </div>
    </div>
    )
}