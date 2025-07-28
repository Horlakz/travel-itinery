"use client";

import classNames from "classnames";

import { useGlobalContext } from "@/providers/global.context";
import { InfoCardProps } from "../../home.interface";

function InfoCard(props: InfoCardProps) {
  const { setModalVisibility, setType } = useGlobalContext();

  return (
    <>
      <div
        className={classNames(
          "px-4 py-2 space-y-2 w-64 rounded",
          props.theme.bg,
          props.theme.text
        )}
      >
        <p className="font-semibold capitalize">{props.title}</p>
        <p className="text-sm pb-4">{props.description}</p>
        <button
          onClick={() => {
            setModalVisibility(true);
            setType(props.title);
          }}
          className={classNames(
            "w-full text-sm rounded p-2 capitalize",
            props.theme.buttonBg,
            props.theme.buttonTextColor
          )}
        >
          Add {props.title}
        </button>
      </div>
    </>
  );
}

export default InfoCard;
