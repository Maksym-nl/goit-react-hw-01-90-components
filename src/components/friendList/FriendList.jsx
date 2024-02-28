import FriendListItem from '../friendListItem/FriendListItem';

export const Friendlist = ({ friends }) => {
  return (
    <ul className="friend-list">
      <li>
        {friends.map(friend => (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        ))}
      </li>
    </ul>
  );
};
export default Friendlist;
