import type { ComponentProps } from "react";

type divProps = ComponentProps<"div">;

export function DivInput({ children }: divProps) {
  return (
    <div className="flex items-center justify-between border-2 bg-gray-400 focus-within:border-4 border-gray-500 rounded-md p-2 duration-150 w-[300px] md:w-[350px] lg:w-[400px]">
      {children}
    </div>
  );
}
type inputProps = ComponentProps<"input">;
export function Input({ ...props }: inputProps) {
  return <input className="w-full outline-0 text-white" {...props} />;
}
type divGroupInputProps = {
  children: React.ReactNode;
  title: string;
};
export function DivGroupInput({ children, title }: divGroupInputProps) {
  return (
    <div>
      <span className="text-gray-400 md:text-xl mb-1 font-medium">{title}</span>
      <DivInput>{children}</DivInput>
    </div>
  );
}
