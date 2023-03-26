/* eslint-disable no-restricted-syntax */
import PropTypes from "prop-types";
import plus from "../assets/Icons/plus-circle.svg";

function CandidateProfilePic({ files, setFiles }) {
  return (
    <div className="float-left w-full md:w-96 md:max-w-full mx-auto mb-5">
      <div className="">
        <form>
          <div className="border-main rounded-lg">
            <label className="block mb-6 relative ">
              <input
                onChange={(e) => setFiles(e.target.files)}
                required
                name="photo"
                type="file"
                className="opacity-0 absolute z-10 w-full h-full cursor-pointer"
              />
              {files.length && (
                <img
                  src={URL.createObjectURL(files[0])}
                  alt=""
                  className="w-20 h-20 rounded-full"
                />
              )}
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer absolute bottom-5 left-4 z-5 align">
                <img src={plus} alt="" className="pointer-events-none" />
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

CandidateProfilePic.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setFiles: PropTypes.func.isRequired,
};

export default CandidateProfilePic;
