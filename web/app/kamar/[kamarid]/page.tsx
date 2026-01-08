import { Metadata } from "next"
export const metadata: Metadata = {
    title: "Kamar Detail",
}

const KamarDetailpage
 = async({params
}:{params: Promise<{ kamarid: string }>}
 ) => {
  return (
    <div>KamarDetailpage

    </div>
  )
}

export default KamarDetailpage
