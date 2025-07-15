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
export function InputAuth({ ...props }: inputProps) {
    return (
        <input
            className="w-full outline-0 text-white required:border-4 invalid:border-red-800 invalid:border-4 "
            {...props}
        />
    );
}
type divGroupInputProps = {
    children: React.ReactNode;
    title: string;
    messageError?: string;
};
export function DivGroupInput({
    children,
    title,
    messageError,
}: divGroupInputProps) {
    return (
        <div className="w-full">
            <span className=" md:text-xl mb-1 font-medium">{title}</span>
            {children}
            <ErrosMessage message={messageError} />
        </div>
    );
}
type errorProps = {
    message?: string;
};
export function ErrosMessage({ message }: errorProps) {
    return (
        <span className="text-red-500 font-medium text-center">{message}</span>
    );
}
