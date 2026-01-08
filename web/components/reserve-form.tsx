"use client"

import { addDays } from "date-fns";
import { useState, useActionState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {createReserve} from "@/lib/action";

const Reserveform = ({roomId}: {roomId: string}) => {
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
    const [state, formAction, isPending] = useActionState(createReserve.bind(null, roomId, startDate, endDate));

  return (
    <div>
        <form action="">
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
                    <p className="text-sm text-red-500 mt-2">Pesan</p>
                </div>
            </div>
             <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Nama Kamu</label>
                <input type="text" name="name" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="Nama...."/>
                
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">Pesan</p>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Nomor Telepon</label>
                <input type="text" name="Telepon" className="bg-gray-50 p-3 border border-gray-200 rounded-sm w-full font-light" placeholder="No Telepon...."/>
                
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">Pesan</p>
                </div>
            </div>
            <button type="submit" className="px-20 py-3 text-center font-semibold text-shadow-indigo-50 w-full
            bg-orange-600 rounde-sm cursor-pointer hover:bg-orange-400">Menyimpan</button>
        </form>
    </div>
  )
}

export default Reserveform