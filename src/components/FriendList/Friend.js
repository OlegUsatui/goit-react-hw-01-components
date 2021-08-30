import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export default function Friend({ avatar, name, isOnline }) {
  console.log(isOnline);
  return (
    <li className={css.item}>
      <span
        className={css.isOnline}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
