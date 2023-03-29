import PropTypes from "prop-types";
import plus from "../assets/Icons/plus-circle.svg";

function CompanyProfilePic({ files, setFiles }) {
  return (
    <div className="float-left w-full h-fit md:w-96 md:max-w-full">
      <form>
        <label className="block mb-6 relative ">
          <input
            onChange={(e) => setFiles(e.target.files)}
            required
            name="photo"
            type="file"
            className="opacity-0 absolute z-10 w-full h-full cursor-pointer"
          />
          {files.length > 0 && (
            <img
              src={URL.createObjectURL(files[0])}
              alt=""
              className="w-[88px] h-[88px] rounded-full"
            />
          )}
          {files.length === 0 && (
            <div>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer absolute bottom-5 left-4 z-5 align">
                <img src={plus} alt="" className="pointer-events-none" />
              </div>
              {/* <div className="px-4 py-2 rounded-lg cursor-pointer absolute bottom-5 left-4 z-4 align">
              <img src={circle} alt="circle" className="pointer-events-none" />
            </div> */}
            </div>
          )}
        </label>
      </form>
    </div>
  );
}

CompanyProfilePic.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default CompanyProfilePic;
