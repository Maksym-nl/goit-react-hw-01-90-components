import user from 'data/user.json';
import data from '../data/data.json';
import friends from 'data/friends.json';
// import transactions from '../data/transactions.json';
import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import Friendlist from './friendList/FriendList';

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
      <Friendlist friends={friends} />
      {/* <TransactionHistory items={transactions} /> */}
    </div>
  );
};
