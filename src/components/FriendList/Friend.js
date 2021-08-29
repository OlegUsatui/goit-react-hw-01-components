import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export default function Friend({ avatar, name, color }) {
  return (
    <li className={css.item}>
      <span className={css[`status_${color}`]}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
