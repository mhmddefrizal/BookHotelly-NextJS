import DatePicker from "react-datepicker";


const reserveform = () => {
  return (
    <div>
        <form action="">
            <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-800">Kedatangan - Keberangkatan</label>
                <DatePicker
                selected={}
                startDate={}
                endDate={}
                minDate={}
                selectsRange={true}
                dateFormat={"dd-MM-YYYY"}
                wrapperClassName="w-full"
                className="py-2 px-4 rounded-md border border-gray-300 w-full"/>
            </div>
        </form>
    </div>
  )
}

export default reserveform