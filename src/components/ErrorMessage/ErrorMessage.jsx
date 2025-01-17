import { FaRegFaceFrownOpen } from "react-icons/fa6";
import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <div>
      <p className={css.error}>
        Something went wrong! Please, reload the page!
        <br />
        <FaRegFaceFrownOpen className={css.errorIcon} />
      </p>
    </div>
  );
}
