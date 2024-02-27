import user from 'data/user.json';
import data from '../data/data.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div>
      <Profile
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
