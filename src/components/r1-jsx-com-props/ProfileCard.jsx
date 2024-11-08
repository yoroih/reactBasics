import '../../styles/r1-jsx-com-props/ProfileCard.css';
import PropTypes from 'prop-types';

function ProfileCard ({ image, name = "Winter", occupation = "Singer", description = "Lorem ipsum dolor sit amet consectetur adipisicing elit." }) {
  return (
    <div className="profilecard-container">
      <div className="image-container">
        <img className="card-image" src={`${image}`} alt={`${name} profile photo`}/>
      </div>
      <div className="info-container">
        <h3 className="card-name">{name}</h3>
        <p className="card-occupation">{occupation}</p>
        <p className="card-description">&quot;{description}&quot;</p>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.node,
  name: PropTypes.string,
  occupation: PropTypes.string,
  description: PropTypes.string,
};

export default ProfileCard;