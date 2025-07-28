"use client";

import classNames from "classnames";

import { Modal } from "@/components/ui/modal";
import { useState } from "react";
import { InfoCardProps } from "../../home.interface";
import { createCompnents } from "../plan.constant";
import HotelCreate from "./hotel-create";

function InfoCard(props: InfoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
          onClick={() => setIsOpen(true)}
          className={classNames(
            "w-full text-sm rounded p-2",
            props.theme.buttonBg,
            props.theme.buttonTextColor
          )}
        >
          Add {props.title}
        </button>
      </div>
      <Modal
        visibility={isOpen}
        setVisibility={() => setIsOpen(false)}
        showCloseButton
      >
        {(() => {
          const Component =
            createCompnents[
              props.title.toLowerCase() as keyof typeof createCompnents
            ] ?? HotelCreate;
          return <Component />;
        })()}
      </Modal>
    </>
  );
}

export default InfoCard;
