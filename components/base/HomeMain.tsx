import Image from "next/image";
import Globe from "./Globe";

const HomeMain = () => {
  return (
    <section className="text-white mx-auto w-[90%] py-12">
      {/* Welcome Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl font-extrabold leading-relaxed mb-4">
            Hi, I&apos;m <span className="text-white">Aditya</span>, a Full Stack Web Developer and an
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              open-source contributor
            </span>
          </h1>
          <p className="text-gray-400">India, Asia · GMT +2</p>
        </div>
        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src="/images/img4.png"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>

      {/* Time Zone & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        
        {/* Contact Info */}
        <div className="p-4 bg-[#171717] rounded-lg shadow-md">
          <h2 className="text-xl font-bold">Let&apos;s start working together!</h2>
          <p className="text-gray-400 mt-10">Contact Details:</p>
          <p>adipras1407@example.com</p>
          <div className="mt-10">
            <h3 className="text-gray-400 mt-2">Socials</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/aditya-pratap-singh-952a8820a/" className="hover:underline">LinkedIn</a></li>
              <li><a href="https://github.com/Aditya-PS-05" className="hover:underline">GitHub</a></li>
              <li><a href="https://x.com/AdityaPrat7441" className="hover:underline">X</a></li>
            </ul>
          </div>
        </div>
        {/* About Me */}
        <div className="p-4 bg-[#171717] rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">About me</h2>
          <p className="font-light"> I&apos;m a passionate developer based in Uttar Pradesh, India, with a deep enthusiasm for learning and pushing the boundaries of technology. I&apos;m always driven by curiosity and a desire to improve. I thrive in dynamic environments that challenge me to expand my skill set and think creatively. I&apos;m actively seeking opportunities to collaborate, grow, and contribute meaningfully to impactful projects that make a difference. </p>
        </div>
        {/* Time Zone */}
        <div className="p-4 bg-[#171717] rounded-lg shadow-md flex flex-col justify-center w-[80%]">
          <h2 className="text-xl font-bold">Location, India</h2>
          <div className="w-full m-auto rounded-lg shadow-md my-10 flex justify-center">
            <Globe size={200} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMain;
