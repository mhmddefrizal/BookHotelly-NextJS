import Image from "next/image";
import link from "next/link";

function Card() {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image src="/hero.jpg" width={345} height={240} alt="room image" className="w-full h-full
        object-cover rounded-t-sm"/>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-medium">
            <link href="#" className="hover:text-gray-800 transition duration-100" >Kamar Mewah</link>
        </h4>
      </div>
    </div>
  );
}

export default Card;
