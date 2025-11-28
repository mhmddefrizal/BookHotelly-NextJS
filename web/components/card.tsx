import Image from "next/image";
import Link from "next/link";
import {IoPeopleOutline} from "react-icons/io5"; 

function Card() {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image src="/hero.jpg" width={345} height={240} alt="room image" className="w-full h-full
        object-cover rounded-t-sm"/>
      </div>
      <div className="p-8">
        <h4 className="text-2xl font-medium">
            <Link href="#" className="hover:text-gray-800 transition duration-100" >Kamar Mewah</Link>
        </h4>
        <h4 className="text-2xl mb-7 ">
            <span className="font-semibold text-gray-500 ">Rp. 8500000</span>
            <span className="text-gray-400 text-sm">/malam</span>
        </h4>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Card;
