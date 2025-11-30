import { Metadata } from "next";
import Image from "next/image";
import HeaderSection from "@/components/header-section";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Siapa Kami",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="Tentang Kami" subTitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image src="/about-image.jpg" alt="tentang gambar" width={650} height={579} />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">Siapa Kami ?</h1>
            <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti natus necessitatibus dignissimos obcaecati hic ipsum reiciendis accusamus quo voluptas impedit!</p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Visi :</h4>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quia, quos veritatis dolorem ratione alias.</p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Misi :</h4>
                  <p className="text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima inventore architecto id quam corrupti vitae laudantium repellendus voluptas dolor rerum.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
