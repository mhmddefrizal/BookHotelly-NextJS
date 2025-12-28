const BuatForm = () => {
  return (
    <form action="">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" />
          </div>
        </div>
        <div className="col-span-4 bg-white p-4"></div>
      </div>
    </form>
  );
};

export default BuatForm;
