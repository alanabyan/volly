import HomeView from "@/views/home";
import Link from "next/link";

export default function Home() {

  return (
  <div> 
    <div className="flex fixed left-[140px] top-16 z-10">
      <h1 className="text-[19px] font-extrabold">Ivonium</h1>
      <div className="relative left-[700px] top-2">
        <ul className="flex font-extrabold text-[14.6px]">
          <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">Home</li>
          <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">About Us</li>
          <li className="px-6 text-white hover:text-[#9B1F53] cursor-pointer transition duration-150 ease-in">Introduction</li>
        </ul>
      </div>
      {/* <div className="w-[1140px] absolute top-14  h-[5px] bg-[#9B1F53] rounded-lg"></div> */}
    </div>
    <div className="h-[100vh]">
      {/* BACKGROUND BULET */}
            <div className="rounded-full blur-[145px] backdrop-blur-sm h-60 w-60 relative right-[102px] bg-[#ED3A85] z-0 "></div>
            <div className="rounded-full blur-[80px] backdrop-blur-sm h-52 w-52 absolute top-[-20px] ml-[720px] bg-[#81039B] z-0 "></div>
            <div className="rounded-full h-4 w-4 relative left-4 bg-[#9B1F53] z-0 "></div>
            <div className="rounded-full h-4 w-4 relative top-[-100px] left-[1280px] bg-[#9B1F53] z-0 "></div>
            <div className="rounded-full h-4 w-4 relative top-[90px] left-[1000px] bg-[#9B1F53] z-0 "></div>

            {/* BAGIAN JUDUL DAN TEKS */}
            <div className="flex flex-col justify-center items-center relative top-[-50px]">
                <h1 className="text-[71.2px] font-bold" data-aos="zoom-in">Welcome To </h1>
                <h1 className="text-[71.2px] font-extrabold mt-[-20px]" data-aos="zoom-in">Ivonium</h1>
                <p className="text-center" data-aos="zoom-in" data-aos-delay="700">Menciptakan generasi muda yang sehat, kuat dengan keterampilan <br /> yang berkualitas.</p>
                <button className="w-32 outline-[#D9D9D9] outline outline-offset-2 outline-2 rounded-[12px] text-[#D9D9D9] relative top-12 hover:text-[#9B1F53] hover:outline-[#9B1F53] transition-all duration-75 ease-in ">Learn More</button>
            </div>

            {/* GARIS DIBAWAH YANG GERAK */}
            <div className="flex items-center justify-center bg-[#3F0B2F] rounded-lg relative top-[40px]">
                <div className="absolute w-[1140px] h-[5px] bg-[#9B1F53] rounded-lg overflow-hidden">
                    <div className="absolute inset-y-0 left-0 bg-[#ED3A85] h-full w-1/3 slide-infinite"></div>
                </div>
            </div>
        {/* <div className="rounded-full h-[168.6px] w-[168.6px] relative bottom-1 left-[100px] bg-[#9B1F53] z-0 "></div> */}
            <div className="rounded-full h-[168.6px] w-[168.6px] absolute top-[600px] right-[1300px] bg-[#9B1F53] z-0 "></div>
        </div>
        <div className="h-[100vh]">
        
        </div>
  </div>
  )
}