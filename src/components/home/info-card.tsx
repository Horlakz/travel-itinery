import classNames from "classnames";

import { InfoCardProps } from "./home.interface";

function InfoCard(props: InfoCardProps) {
  return (
    <div
      className={classNames(
        "px-4 py-2 space-y-2 w-64 rounded",
        props.theme.bg,
        props.theme.text
      )}
    >
      <p className="font-semibold">{props.title}</p>
      <p className="text-sm pb-4">{props.description}</p>
      <button
        className={classNames(
          "w-full text-sm rounded p-2",
          props.theme.buttonBg,
          props.theme.buttonTextColor
        )}
      >
        Add {props.title}
      </button>
    </div>
  );
}

export default InfoCard;
