import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="hero image" fill className="object-cover object-center w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize">Booking ruang kamarmu!</h1>
        <p className="text-xl text-gray-300 mb-8">Dapatkan Penawaran Spesial hanyak Untukmu Hari Ini.</p>
      </div>
    </div>
  );
};

export default Hero;
