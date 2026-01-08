import { Metadata } from "next"
import DetailKamar from "@/components/detail-kamar";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Detail Kamar",
}

const KamarDetailpage
 = async({params
}:{params: Promise<{ kamarId: string }>}
 ) => {
    const kamarId = (await params).kamarId;
  return (
    <div className="mt-16">
        <Suspense fallback={<p>Loading...</p>}>
            <DetailKamar roomId={kamarId} />
        </Suspense>
    </div>
  )
}

export default KamarDetailpage
