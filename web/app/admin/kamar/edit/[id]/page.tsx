import { notFound } from 'next/navigation';
import EditKamar from '@/components/admin/kamar/edit-kamar';
import { Suspense } from 'react';

const UpdateRoomPage = async ({
    params
}: {
    params: Promise<{ id: string }>
}) => {
    const roomId = (await params).id;
    if (!roomId) return notFound();

    return (
        <div className='max-w-screen-x1 px-4 py-16 mt-10 mx-auto'>
            <Suspense fallback={<p>Loading...</p>}>
                <EditKamar roomId={roomId} />
            </Suspense>
        </div>
    )
}

export default UpdateRoomPage