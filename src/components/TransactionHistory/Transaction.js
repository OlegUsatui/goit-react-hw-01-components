import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";

export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={css.gorizontalLine}>
      <td className={css.item}>{type}</td>
      <td className={css.item}>{amount}</td>
      <td className={css.item}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
