"use client";
import Navbar from "@/components/base/Navbar";

const GuestbookPage = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center relative text-white">
      {/* Background gradients */}
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#4b220e] opacity-100 blur-3xl left-[40%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#452436] opacity-100 blur-3xl left-[30%] top-[-350px] origin-center z-0"></div>
      <div className="absolute inset-0 h-[500px] w-[500px] rounded-full bg-[#151428] opacity-100 blur-3xl left-[20%] top-[-350px] origin-center z-0"></div>

      <div className="md:w-[60%] z-10 m-5 text-white">
        <Navbar />

        <div className="mt-10 w-[95%] mx-auto">
          <h1 className="text-5xl font-bold">Guestbook</h1>
          <p className="mt-4 text-gray-300">
            Thank you for visiting my website.
          </p>
          {/* Pinned message */}
          <div className="w-[50%] mx-auto">
            <div className="w-full mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white mt-20 p-4 rounded-lg">
              <p className="font-bold">📌 Pinned</p>
              <p className="mt-2">
                Hey there! Thanks for visiting my website. If you have a moment,
                I’d love to hear your thoughts on my work. Feel free to leave a
                comment and share your ideas. Thanks for stopping by!
              </p>
            </div>
            <div className="mt-8">
              {/* Display user comments */}
              <div className="p-4 rounded-lg border-[1px] border-gray-700">
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-200">Adittya Pratap Singh</p>
                  </div>
                </div>
                <p className="mt-4 text-white">
                  Hello 👋 Welcome to my website. I write about software
                  engineering and open-source :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestbookPage;