import FriendsListItem from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <>
      <ul className={styles.friendsList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <FriendsListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
      </ul>
    </>
  );
};
FriendsList.defaultProps = {
  friends: [],
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default FriendsList;