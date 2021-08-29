import PropTypes from "prop-types";
import Friend from "./Friend";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend
          key={id}
          avatar={avatar}
          name={name}
          color={getColor(isOnline)}
        />
      ))}
    </ul>
  );
}

function getColor(boolean) {
  return boolean ? "green" : "red";
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
