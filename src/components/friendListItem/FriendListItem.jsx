import { StatusItem, ListItem } from './friendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <ListItem key={id} className="item">
      <StatusItem status={isOnline}></StatusItem>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};
export default FriendListItem;
