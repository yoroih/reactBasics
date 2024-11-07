import '../../styles/r1-jsx-com-props/ProfileList.css'
import ProfileCard from './ProfileCard';
import infoPeople from '../../data/ProfileCards.json';


function ProfileList() {
  return (
    <div className="profilelist-container">
      <h2>Profile List</h2>
      {infoPeople.map((elem, index) => (
        <ProfileCard 
          key={index}
          name = {elem.name}
          occupation = {elem.occupation}
          description = {elem.description}
        />
      ))}
      <p>Fin de lista</p>
    </div>
  );
};

export default ProfileList;