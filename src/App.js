import Profile from "./components/Profile/Profile";
import user from "./user.json";
import StatisticsList from "./components/Statistics/StatisticsList";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./friends.json";
import statisticalData from "./statistical-data.json";
import transactions from "./transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      ,
      <StatisticsList stats={statisticalData} />,
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />,
    </div>
  );
}
