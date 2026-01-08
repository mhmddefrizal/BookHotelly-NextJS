"use client"

import { addDays } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";


const Reserveform = () => {
    const StartDate = new Date();
    const EndDate = addDays(StartDate, 1);

    const [startDate, setStartDate] = useState(StartDate);
    const [endDate, setEndDate] = useState(EndDate);
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
                dateFormat={"dd-MM-YYYY"}
                wrapperClassName="w-full"
                className="py-2 px-4 rounded-md border border-gray-300 w-full"/>
                <div aria-live="polite" aria-atomic="true">
                    <p className="text-sm text-red-500 mt-2">Pesan</p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default reserveform