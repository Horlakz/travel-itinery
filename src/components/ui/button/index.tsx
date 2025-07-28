import { twMerge } from "tailwind-merge";

import { SpinnerIcon } from "@/components/icons/spinner";
import { baseClassName, sizeClasses } from "./button.constant";
import { ButtonProps } from "./button.interface";
import { getVariantClasses } from "./button.utilities";

export function Button<T extends React.ElementType = "button">(
  props: ButtonProps<T>
) {
  const isIcon = props.isLoading ? <SpinnerIcon /> : props.icon;
  const disabled = props.isLoading || props.disabled;

  const { variant = "solid", colorscheme = "primary", size = "md" } = props;

  const className = twMerge(
    baseClassName,
    (props.href || props.to) && "w-fit",
    disabled == false && "active:scale-90",
    sizeClasses[size],
    getVariantClasses(variant, colorscheme),
    props.className
  );

  if (props.as) {
    const Element = props.as as React.ElementType;
    return (
      <Element {...props} className={className}>
        {props.children}
      </Element>
    );
  }

  return (
    <button {...props} disabled={disabled} className={className}>
      {isIcon && props.iconPos === "left" && (
        <span className="mr-2">{isIcon}</span>
      )}
      <span>{props.children ?? ""}</span>
      {isIcon && props.iconPos === "right" && (
        <span className="ml-2">{isIcon}</span>
      )}
    </button>
  );
}

Button.defaultProps = {
  iconPos: "left",
  disabled: false,
  colorScheme: "primary",
};
