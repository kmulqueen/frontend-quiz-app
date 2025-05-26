import { type ComponentPropsWithoutRef } from "react";

type MainWrapperProps = ComponentPropsWithoutRef<"main">;

export default function MainWrapper(props: MainWrapperProps) {
  return <main className="px-6 py-8" {...props}></main>;
}
