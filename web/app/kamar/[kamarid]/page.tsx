import { Metadata } from "next"
import DetailKamar from "@/components/detail-kamar";

export const metadata: Metadata = {
    title: "Kamar Detail",
}

const KamarDetailpage
 = async({params
}:{params: Promise<{ kamarId: string }>}
 ) => {
    const kamarId = (await.params).kamarId;
  return (
    <div>KamarDetailpage

    </div>
  )
}

export default KamarDetailpage
