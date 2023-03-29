import PropTypes from "prop-types";

function CandidacyInfos({ nbCandidacies }) {
  return (
    <div>
      {nbCandidacies > 0 && (
        <div>
          {nbCandidacies === 1 && <div>{nbCandidacies} candidat a postulé</div>}
          {nbCandidacies > 1 && (
            <div>{nbCandidacies} candidats ont postulé</div>
          )}
        </div>
      )}
      {nbCandidacies === 0 && <div> Cette offre n'a aucune candidature</div>}
    </div>
  );
}

CandidacyInfos.propTypes = { nbCandidacies: PropTypes.number.isRequired };

export default CandidacyInfos;
