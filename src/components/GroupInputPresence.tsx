import React, { type ComponentProps } from "react";
import { ErrosMessage } from "./GruopInput";

type RadioProps = ComponentProps<"input">;
export function InputPresence({ ...props }: RadioProps) {
  return <input type="Radio" {...props} className="peer hidden" />;
}
type LabelInputPresenceProps = {
  children: React.ReactNode;
};
export function LabelInputPresence({ children }: LabelInputPresenceProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">{children}</label>
  );
}
type TextRadioProps = {
  text: string;
};
export function TextRadio({ text }: TextRadioProps) {
  const selectedClasses = {
    Sim: "peer-checked:bg-chart-2 peer-checked:border-chart-2",
    Não: "peer-checked:bg-chart-5 peer-checked:border-chart-5",
  };
  return (
    <div
      className={`px-6 py-1.5 rounded border border-gray-300 text-gray-100 transition-all ${
        selectedClasses[text as "Sim" | "Não"]
      }`}
    >
      {text}
    </div>
  );
}
type DivPresenceInputProps = {
    children: React.ReactNode;
    messageError?: string;
    title: string
}
export function DivPresenceInput({children, messageError, title}: DivPresenceInputProps) {
    return(
        <div>
          <h1 className="text-center text-xl">{title}</h1>
            <div className="flex gap-5 justify-center">
                {children}
            </div>
            <ErrosMessage message={messageError}/>
        </div>
    )
}
