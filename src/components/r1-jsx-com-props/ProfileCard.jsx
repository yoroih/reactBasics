import PropTypes from "prop-types";

function ProfileCard ({ name, occupation, description }) {
  return (
    <div className="profilecard-container">
      <h3>{name}</h3>
      <p>{occupation}</p>
      <p>{description}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProfileCard;