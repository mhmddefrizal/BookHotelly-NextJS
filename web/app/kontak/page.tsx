import { Metadata } from "next";
import HeaderSection from "@/components/header-section";

export const metadata: Metadata = {
    title:"Contact"
}
const HalamanKontak = () => {
  return (
    <div>
        <HeaderSection title="Kontak Kami" subTitle="Jika ingin info lebih lanjut hubungi kami."/>
    </div>
  )
}

export default HalamanKontak