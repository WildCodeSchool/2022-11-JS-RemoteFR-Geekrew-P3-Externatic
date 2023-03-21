import PropTypes from "prop-types";

function UploadCv({ url }) {
  return (
    <div className="mt-6 flex flex-col md:w-1/2">
      <h2 className="font-semibold">Son CV</h2>
      <a
        className="font-semibold text-main underline text-sm my-3 md:w-3/5"
        href={url}
        download
      >
        Cliquez pour télécharger
      </a>
    </div>
  );
}

UploadCv.propTypes = {
  url: PropTypes.string.isRequired,
};

export default UploadCv;
