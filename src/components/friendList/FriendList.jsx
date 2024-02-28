import FriendListItem from '../friendListItem/FriendListItem';

export const Friendlist = ({ friends }) => {
  const { avatar, name, isOnline, id } = friends;
  return (
    <ul className="friend-list">
      <li>
        {friends.map(friend => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        ))}
      </li>
    </ul>
  );
};
export default Friendlist;
