import PropTypes from "prop-types";
import plus from "../assets/Icons/plus-circle.svg";
// import circle from "../assets/images/circle.png"

function CandidateProfilePic({ pictureFile, setPictureFile }) {
  const onChange = (e) => {
    setPictureFile([e.target.files[0]]);
  };

  return (
    <div className="float-left w-full md:w-96 md:max-w-full">
      <form>
        <label className="block mb-6 relative ">
          <input
            onChange={onChange}
            required
            name="photo"
            type="file"
            multiple
            className="opacity-0 absolute z-10 w-full h-full cursor-pointer"
          />
          {pictureFile.length > 0 && (
            <img
              src={URL.createObjectURL(pictureFile[0])}
              alt=""
              className="w-[88px] h-[88px] rounded-full"
            />
          )}
          {pictureFile.length === 0 && (
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

CandidateProfilePic.propTypes = {
  pictureFile: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setPictureFile: PropTypes.func.isRequired,
};

export default CandidateProfilePic;
