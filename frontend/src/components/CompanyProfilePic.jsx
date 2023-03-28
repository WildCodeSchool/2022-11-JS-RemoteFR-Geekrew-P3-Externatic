import PropTypes from "prop-types";

function CompanyProfilePic({ files, setFiles }) {
  return (
    <div className="float-left w-full md:w-96 md:max-w-full mx-auto mb-5">
      <div className="">
        <form>
          <div className="float-left relative flex flex-row justify-center h-28 w-28 items-center  rounded-full cursor-pointer">
            {files.length && (
              <img
                src={URL.createObjectURL(files[0])}
                alt=""
                className="w-20 h-20 rounded-full"
              />
            )}
          </div>
          <label className="block mb-6">
            <input
              onChange={(e) => setFiles(e.target.files)}
              required
              name="photo"
              type="file"
              className="
            block
            w-full
            mt-1
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
            />
          </label>
        </form>
      </div>
    </div>
  );
}

CompanyProfilePic.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default CompanyProfilePic;
