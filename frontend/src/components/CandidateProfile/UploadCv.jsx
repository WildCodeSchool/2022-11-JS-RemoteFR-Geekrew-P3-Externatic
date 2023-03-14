function UploadCv() {
  return (
    <div className="mt-6 flex flex-col md:w-2/3">
      <h2 className="font-semibold">Son CV</h2>
      <label htmlFor="file" className="text-s mt-2 text-grey2 font-semibold">
        Télécharger
      </label>
      <input
        className="mt-2 border border-grey3 h-10 rounded block w-full md:w-5/6 text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4 file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-main
      hover:file:bg-grey4"
        type="file"
        id="cv"
      />
    </div>
  );
}

export default UploadCv;
