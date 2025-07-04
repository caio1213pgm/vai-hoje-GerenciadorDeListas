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
    Sim: "peer-checked:bg-green-500 peer-checked:border-green-600",
    Não: "peer-checked:bg-red-500 peer-checked:border-red-600",
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
}
export function DivPresenceInput({children, messageError}: DivPresenceInputProps) {
    return(
        <div>
            <div className="flex gap-5">
                {children}
            </div>
            <ErrosMessage message={messageError}/>
        </div>
    )
}
