import classes from "./index.module.css";

import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className: classNameFromProps,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const className = [classes.button, classNameFromProps]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        type={type}
        className={className}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
