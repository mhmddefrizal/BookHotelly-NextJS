import Image from "next/image";

function Card() {
  return (
    <div className="bg-white shadow-lg rounded-sm transition duration-100 hover:shadow-sm">
      <div className="h-[260px] w-auto rounded-t-sm relative">
        <Image src="/hero.jpg" width={345} height={240} alt="room image" className="w-full h-full
        object-cover rounded-t-sm"/>
      </div>
    </div>
  );
}

export default Card;
