import Profile from "./components/Profile/Profile";
import StatisticsList from "./components/Statistics/StatisticsList";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./data/user.json";
import friends from "./data/friends.json";
import statisticalData from "./data/statistical-data.json";
import transactions from "./data/transactions.json";

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <StatisticsList stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
