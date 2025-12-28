const BuatForm = () => {
  return (
    <form action="">
      <div className="grid md:grid-cols-12 gap-5">
        <div className="col-span-8 bg-white p-4">
          <div className="mb-4">
            <input type="text" name="name" className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Nama Kamar..." />
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Pesan</span>
            </div>
          </div>
          <div className="mb-4">
            <textarea name="description" rows={8} className="py-2 px-4 rounded-sm border border-gray-400 w-full" placeholder="Description"></textarea>
            <div aria-live="polite" aria-atomic="true">
              <span className="text-sm text-red-500 mt-2">Pesan</span>
            </div>
          </div>
        </div>
        <div className="col-span-4 bg-white p-4"></div>
      </div>
    </form>
  );
};

export default BuatForm;
