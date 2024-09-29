import Navbar from "@/components/base/Navbar";
import HomeMain from "@/components/base/HomeMain";

export default function Home() {
  return (
    <div className="h-full w-screen bg-black flex justify-center relative">
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#4b220e] opacity-100 blur-3xl left-[40%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#452436] opacity-100 blur-3xl left-[30%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#151428] opacity-100 blur-3xl left-[20%] top-[-350px] origin-center z-0"></div>
      <div className="md:w-[60%] z-10 m-5">
        <Navbar />
        <HomeMain />
        {/* <About /> */}
      </div>
    </div>
  );
}
