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
                selectsRange={true}/>
            </div>
        </form>
    </div>
  )
}

export default reserveform