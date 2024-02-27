export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt={username} class="avatar" width={200} />
        <p className="name">{username}</p>
        <p className="tag">{`@` + tag}</p>
        <p className="location">{location}</p>
      </div>
      <div>
        <ul className="stats">
          <li>
            <span className="label">
              <b>Followers:</b>
            </span>
            <span className="quantity"> {stats.followers}</span>
          </li>
          <li>
            <span className="label">
              <b>Views:</b>
            </span>
            <span className="quantity"> {stats.views}</span>
          </li>
          <li>
            <span className="label">
              <b>Likes:</b>
            </span>
            <span className="quantity"> {stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
