import { ButtonHTMLAttributes } from "react";

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `bg-primarylight hover:bg-primarylighthover text-bglight font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mt-5 transition-all ease-in duration-100 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
