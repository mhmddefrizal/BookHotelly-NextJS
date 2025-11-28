import Image from "next/image"
import HeaderSection from "@/components/header-section"

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="Tentang Kami" subTitle="Belum update" />
      <div className="max-w-7xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
            <Image src='/about-image.jpg' alt="tentang kami" width={650} height={579}/>
        </div>
      </div>
    </div>
  )
}

export default AboutPage