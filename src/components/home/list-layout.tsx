import classNames from "classnames";
import Link from "next/link";
import { Fragment } from "react";
import { ListLayoutProps } from "./home.interface";

function ListLayout(props: ListLayoutProps) {
  return (
    <div className={classNames("space-y-4 p-4 my-4", props.bgColor)}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <img src={props.icon} alt={props.title + " icon"} />
          <span
            className={
              props.bgColor === "bg-neutral-300" ? "text-black" : "text-white"
            }
          >
            {props.title}
          </span>
        </div>

        <Link
          href={props.href}
          className={classNames(
            "bg-white text-sm rounded p-2",
            props.btnTextColor ?? "text-black"
          )}
        >
          Add {props.title}
        </Link>
      </div>

      {props.data.map((item, i) => (
        <Fragment key={i}>{props.listItem(item)}</Fragment>
      ))}
    </div>
  );
}

export default ListLayout;
