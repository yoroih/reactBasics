import '../../styles/r1-jsx-com-props/ProfileCard.css';

import PropTypes from "prop-types";


function ProfileCard ({ name = "Winter", occupation = "Singer", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit." }) {
  return (
    <div className="profilecard-container">
      <h3>{name}</h3>
      <p>{occupation}</p>
      <p>{description}</p>
    </div>
  );
};

ProfileCard.propTypes = {
  name: PropTypes.string,
  occupation: PropTypes.string,
  description: PropTypes.string,
};

export default ProfileCard;