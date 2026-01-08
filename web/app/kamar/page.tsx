import { Metadata } from "next"
import { Suspense } from "react";
import HeaderSection from "@/components/header-section"
import Main from "@/components/main"

export const metadata: Metadata = {
    title: "Kamar & Tarif",
    description: "Kelola data kamar dan tarif di aplikasi Anda.",
};

const RoomPage = () => {
    return (
        <div>
            <HeaderSection title="Kamar & Tarif" subTitle="Lorem ipsum dolor sit amet." />
            <div className="mt-10 px-4">
                <Suspense fallback={<p>Loading...</p>}>
                    <Main />
                </Suspense>
            </div>
        </div>
    )
}

export default RoomPage