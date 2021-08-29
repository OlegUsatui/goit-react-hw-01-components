import PropTypes from "prop-types";
import css from "./StatisticsList.module.css";

export default function Statistics({ label, percentage }) {
  return (
    <li className={css.item}>
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
