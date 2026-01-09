"use client"

import { addDays } from "date-fns";
import { useState, useActionState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {CreateReserve} from "@/lib/action";
import { RoomDetailProps } from "@/types/room";
import clsx from "clsx";

const Reserveform = ({
    room,
    disabledDate,

}: {
    room: RoomDetailProps,
    disabledDate:
}) => {
    const StartDate = new Date();
    const EndDate = addDays(StartDate, 1);

    const [startDate, setStartDate] = useState(StartDate);
    const [endDate, setEndDate] = useState(EndDate);


    const handleDateChange = (dates: any) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    // gunakan useActionState untuk menghubungkan form dengan action createReserve
    const [state, formAction, isPending] = useActionState(CreateReserve.bind(null, room.id, room.price,startDate, endDate), { messageDate: "", error: { name: "", phone: "" } });

  return (
    <div>
        <form action={formAction}>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Kedatangan - Keberangkatan</label>
                <DatePicker
                selected={startDate}
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                selectsRange={true}
                onChange={handleDateChange}
                dateFormat={"dd-MM-YYYY"}
                wrapperClassName="w-full"
                className="py-2 px-4 rounded-md border border-gray-300 w-full"/>
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">{state?.messageDate}</p>
                </div>
            </div>
             <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Nama Kamu</label>
                <input type="text" name="name" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Nama...."/>
                
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">{state?.error?.name}</p>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Nomor Telepon</label>
                <input type="text" name="Telepon" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="No Telepon...."/>
                
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">{state?.error?.phone}</p>
                </div>
            </div>
            <button type="submit" className={clsx(
                "w-full bg-blue-600 text-white py-3 rounded-sm font-medium hover:bg-blue-700 transition-colors",
                isPending && "opacity-50 cursor-not-allowed"
            )}
            // pasang atribut kontrol untuk menonaktifkan tombol saat pengiriman form sedang berlangsung
            disabled={isPending}
            >{isPending ? "Loading..." : "Memesan"}</button>
        </form>
    </div>
  )
}

export default Reserveform