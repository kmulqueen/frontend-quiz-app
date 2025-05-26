import { type ComponentPropsWithoutRef, forwardRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonProps>(
  function ButtonWithRef({ ...props }, ref) {
    return <button {...props} ref={ref}></button>;
  }
);

export default ButtonWithRef;
