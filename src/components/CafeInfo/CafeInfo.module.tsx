import clsx from "clsx";
import css from "./CafeInfo.module.css";


export default function CafeInfo() {
  return (
    <div className={clsx(css.container)}>
  <h1 className={clsx(css.title)}>Sip Happens Café</h1>
  <p className={clsx(css.description)}>
    Please rate our service by selecting one of the options below.
  </p>
</div>
  );
}
